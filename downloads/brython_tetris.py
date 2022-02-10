# from https://bmsleight.github.io/brython-blocks/ brython 3.3.5 to 3.9.0
# original source codes: https://github.com/bmsleight/brython-blocks/
# not complete
from browser import document, alert, html
from random import randint
# 用於定時執行特定函式
import browser.timer

# 利用 html 建立一個 CANVAS 標註物件, 與變數 grid 對應
grid = html.CANVAS(width = 0, height = 0, id="grid")
# 提示下一個 block 繪圖區 canvas
next = html.CANVAS(width = 0, height = 0, id="next")
# 暫停按鈕
stop = html.BUTTON("Stop", id="stop")
# detail div 
detail = html.DIV(id="detail")
# total lines span
total = html.SPAN(id="total")
# 將 canvas 標註的 id 設為 "grid" and "next"
#grid.id = "grid"
#next.id = "next"
# 將 document 中 id 為 "brython_div" 的標註 
# 設為與 brython_div 變數對應
brython_div = document["brython_div"]
# 將 canvas 標註放入 brython_div 所在位置
# 頁面中原本就已經放入 <div id="brython_div"></div> 標註
# 排列所需的 canvas 與標註
brython_div <= grid + html.BR()
brython_div <= "Next Block" + html.BR() + next + html.BR()
brython_div <= detail + html.BR()
brython_div <= "Total Lines:" + total + html.BR()
brython_div <= stop +html.BR()

# Globals
boarder_size = 5
w = 10 + boarder_size*2
h = 15 + boarder_size*2
block_size = 20
tick_timer = None
lines = 0

# Clash is when block + block >31
CLASH       = 31

# Empty Blocks
WHITE       = 0
GRAY        = 1

BLOCK_HARD  = 15
# Hard Blocks
BOARDER     = 16
BOARDER_TOP = 17
RED         = 18
BLUE        = 19
ORANGE      = 20
YELLOW      = 21
MAGENTA     = 22
CYAN        = 23
GREEN       = 24
fill_style = ""

# 可以直接用 print() 列出 debug 資料, 暫時蓋掉此 function
'''
def debug_to_browser(text):
    debug = document["debug"]
    debug.text = debug.text + str(text)
'''
# 移除已經完成橫向排列的 blocks, 並更新 total span 內容
def update_lines_complete(removed):
    global lines
    lines = lines + removed
    document["total"].text = lines

# 根據 n 的顏色值, 在 canvas_name 畫布中的 (x,y) 繪出 block
def paint_block(canvas_name, x, y, n):
    global fill_style
    if n == WHITE:
        fill_style = "White"
    elif n == GRAY:
        fill_style = "Gray"
    elif n == RED:
        fill_style = "Red"
    elif n == BLUE:
        fill_style = "Blue"
    elif n == ORANGE:
        fill_style = "Orange"
    elif n == YELLOW:
        fill_style = "Yellow"
    elif n == MAGENTA:
        fill_style = "Magenta"
    elif n == CYAN:
        fill_style = "Cyan"
    elif n == GREEN:
        fill_style = "Green"
    elif n == BOARDER:
        fill_style = "Black"
    elif n == BOARDER_TOP:
        fill_style = "Pink"
    else:
        fill_style = "Pink"
    if fill_style != "":
        ctx=document[canvas_name].getContext("2d")
        ctx.beginPath()
        # Canvas 0,0 it top,left  not  bottom, left
        # So we get the height and subtract our value
        ctx.rect(x*block_size, document[canvas_name].height-y*block_size, block_size, block_size)
        ctx.fillStyle = fill_style 
        ctx.fill()

class PlayingGrid():
    def __init__(self):
        # This looks the wrong way around but it create an x,y array
        self.grid = [[GRAY for x in range(w)] for y in range(h)]
        self.set_boarder()
    def set_boarder(self):
        for x in range(0, w):
            for y in range(0, boarder_size):
                self.grid[y][x] = BOARDER
        for x in range(0, boarder_size):
            for y in range(0, h):
                self.grid[y][x] = BOARDER
        for x in range(w-boarder_size, w):
            for y in range(0, h):
                self.grid[y][x] = BOARDER
    def remove_complete_lines(self, by):
        removed = 0
        for row in self.grid[by:by+4]:
            if not WHITE in row and \
               not GRAY in row and  \
               not all(x == row[0] for x in row):
                self.grid.remove(row)
                removed = removed + 1
        if removed:
            for r in range(0, removed):
                # Need a real new row - not the same one added
                new_row = [GRAY for x in range(w)]
                self.grid.append(new_row)
            update_lines_complete(removed)
            self.set_boarder()
        return removed
    def draw_grid(self):
        for x in range(0,w):
            for y in range(0,h):
                paint_block("grid", x, y, self.grid[y][x])

class Block():
    def __init__(self):
        self.style = 0
        self.total_styles = 7
        self.rotation = 0
        # Select a sytle by random, no rotation
        self.style = randint(0,self.total_styles-1)
        # Prep grid for rotating blocks
        self.grid = [[0 for x in range(4)] for y in range(4)]
        self.sytle_grid()
        self.x = w/2 - 2
        self.y = h - boarder_size
    def sytle_grid(self):
        # Rotation is counter-intuitive
        # if rotate "true", its skips left to right
        #    So we precalculate the rotations so make them better
        #I
        if self.style == 0 and \
          (self.rotation == 0 or self.rotation == 2):
            self.grid = [[   0,   0,   0,   0], 
                         [   0,   0,   0,   0], 
                         [ RED, RED, RED, RED], 
                         [   0,   0,   0,   0]]
        if self.style == 0 and \
          (self.rotation == 1 or self.rotation == 3):
            self.grid = [[   0, RED,   0,   0], 
                         [   0, RED,   0,   0], 
                         [   0, RED,   0,   0], 
                         [   0, RED,   0,   0]]
        # O
        if self.style == 1:
            self.grid = [[ 0,    0,    0,  0], 
                         [ 0, BLUE, BLUE,  0], 
                         [ 0, BLUE, BLUE,  0], 
                         [ 0,    0,    0,  0]]
        #S
        if self.style == 2 and \
          (self.rotation == 0 or self.rotation == 2):
            self.grid = [[ 0,      0,      0,      0], 
                         [ 0,      0, ORANGE, ORANGE], 
                         [ 0, ORANGE, ORANGE,      0], 
                         [ 0,      0,      0,      0]]
        if self.style == 2 and \
          (self.rotation == 1 or self.rotation == 3):
            self.grid = [[ 0,      0,      0,     0], 
                         [ 0, ORANGE,      0,     0], 
                         [ 0, ORANGE, ORANGE,     0], 
                         [ 0,      0, ORANGE,     0]]
        #Z
        if self.style == 3 and \
          (self.rotation == 0 or self.rotation == 2):
            self.grid = [[ 0,      0,      0,      0], 
                         [ 0,      0,      0,      0], 
                         [ 0, YELLOW, YELLOW,      0], 
                         [ 0,      0, YELLOW, YELLOW]]
        if self.style == 3 and \
          (self.rotation == 1 or self.rotation == 3):
            self.grid = [[ 0,      0,      0,  0], 
                         [ 0,      0, YELLOW,  0], 
                         [ 0, YELLOW, YELLOW,  0], 
                         [ 0, YELLOW,      0,  0]]
        if self.style == 4 and self.rotation == 0:
            self.grid = [[      0,       0,       0,  0], 
                         [      0, MAGENTA,       0,  0], 
                         [MAGENTA, MAGENTA, MAGENTA,  0], 
                         [      0,       0,       0,  0]]
        if self.style == 4 and self.rotation == 1:
            self.grid = [[      0,       0,       0,  0], 
                         [      0, MAGENTA,       0,  0], 
                         [MAGENTA, MAGENTA,       0,  0], 
                         [      0, MAGENTA,       0,  0]]
        if self.style == 4 and self.rotation == 2:
            self.grid = [[      0,       0,       0,  0], 
                         [      0,       0,       0,  0], 
                         [MAGENTA, MAGENTA, MAGENTA,  0], 
                         [      0, MAGENTA,       0,  0]]
        if self.style == 4 and self.rotation == 3:
            self.grid = [[      0,       0,       0,  0], 
                         [      0, MAGENTA,       0,  0], 
                         [      0, MAGENTA, MAGENTA,  0], 
                         [      0, MAGENTA,       0,  0]]
        # L
        if self.style == 5 and self.rotation == 0:
            self.grid = [[   0,    0,    0,  0], 
                         [   0,    0, CYAN,  0], 
                         [CYAN, CYAN, CYAN,  0], 
                         [   0,    0,    0,  0]]
        if self.style == 5 and self.rotation == 1:
            self.grid = [[   0,    0,    0,  0], 
                         [CYAN, CYAN,    0,  0], 
                         [   0, CYAN,    0,  0], 
                         [   0, CYAN,    0,  0]]
        if self.style == 5 and self.rotation == 2:
            self.grid = [[   0,    0,    0,  0], 
                         [   0,    0,    0,  0], 
                         [CYAN, CYAN, CYAN,  0], 
                         [CYAN,    0,    0,  0]]
        if self.style == 5 and self.rotation == 3:
            self.grid = [[   0,    0,    0,  0], 
                         [   0, CYAN,    0,  0], 
                         [   0, CYAN,    0,  0], 
                         [   0, CYAN, CYAN,  0]]
        if self.style == 6 and self.rotation == 0:
            self.grid = [[    0,     0,     0,  0], 
                         [GREEN,     0,     0,  0], 
                         [GREEN, GREEN, GREEN,  0], 
                         [    0,     0,     0,  0]]
        if self.style == 6 and self.rotation == 1:
            self.grid = [[    0,     0,     0,  0], 
                         [    0, GREEN,     0,  0], 
                         [    0, GREEN,     0,  0], 
                         [GREEN, GREEN,     0,  0]]
        if self.style == 6 and self.rotation == 2:
            self.grid = [[    0,     0,     0,  0], 
                         [    0,     0,     0,  0], 
                         [GREEN, GREEN, GREEN,  0], 
                         [    0,     0, GREEN,  0]]
        if self.style == 6 and self.rotation == 3:
            self.grid = [[    0,     0,     0,  0], 
                         [    0, GREEN, GREEN,  0], 
                         [    0, GREEN,     0,  0], 
                         [    0, GREEN,     0,  0]]
    def rotate_anticlock(self):
        self.rotation = self.rotation -1
        if self.rotation == -1:
            self.rotation = 3
        self.sytle_grid()
    def rotate_clock(self):
        self.rotation = self.rotation +1
        if self.rotation == 4:
            self.rotation = 0
        self.sytle_grid()
    def paint(self, canvas_name):
        for x in range(0,4):
            for y in range(0,4):
                paint_block(canvas_name, x, y, self.grid[y][x])

# Replace with function ?
def paint_block_on_grid():
    print("paint_block_on_grid")
    for x in range(-1,5):
        for y in range(-1,5):
            if ((x == -1 or x == 4) \
               or (y == -1 or y == 4)) \
               or (current_block.grid[y][x]<=BLOCK_HARD):
                n = play_grid.grid[int(current_block.y + y)][int(current_block.x + x)]
            else:
                n = current_block.grid[y][x]
            paint_block("grid", int(x+current_block.x), int(y+current_block.y), n)

def clash_blocks():
    print("clash_blocks")
    clash = False
    for x in range(0,4):
        for y in range(0,4):
            b = current_block.grid[y][x] + play_grid.grid[int(y+current_block.y)][int(x+current_block.x)]
            if b>CLASH:
                clash = True
    return clash

def freeze_current_block():
    print("freeze_current_block")
    for x in range(0,4):
        for y in range(0,4):
            if current_block.grid[y][x] > BLOCK_HARD:
                play_grid.grid[int(y+current_block.y)][int(x+current_block.x)] = current_block.grid[y][x]

def test_new_position(movement):
    if movement == "left":
        current_block.x = current_block.x -1
    elif movement == "right":
        current_block.x = current_block.x +1
    elif movement == "down":
        current_block.y = current_block.y -1
    elif movement == "rotate_c":
        current_block.rotate_clock()
    else:
        pass
    if clash_blocks():
        if movement == "left":
            current_block.x = current_block.x +1
            return False
        if movement == "right":
            current_block.x = current_block.x -1
            return False
        if movement == "down":
            current_block.y = current_block.y +1
            return False
        if movement == "rotate_c":
            current_block.rotate_anticlock()
            return False
    else:
        paint_block_on_grid()
        return True

def key_code(ev):
    # Debug
    #trace = document["traceKeyCode"]
    #trace.text = f'event {ev.type}, keyCode : {ev.keyCode}'
    ev.stopPropagation()
    # Key codes for Up, Down, Left, Right, wasd
    if ev.keyCode == 37 or ev.keyCode == 65:
        test_new_position("left")
    if ev.keyCode == 39 or ev.keyCode == 68:
        test_new_position("right")
    if ev.keyCode == 40 or ev.keyCode == 83:
        test_new_position("down")
    if ev.keyCode == 38 or ev.keyCode == 87:
        test_new_position("rotate_c")

def stop_timer(ev):
    browser.timer.clear_interval(tick_timer)

def start_timer(ev):
    tick_timer = browser.timer.set_interval(tick, 500)

def tick():
    global current_block, next_block, play_grid
    if not test_new_position("down"):
        freeze_current_block()
        play_grid.remove_complete_lines(current_block.y)
        if not play_grid.remove_complete_lines(current_block.y) and \
           not current_block.y < (h - boarder_size):
           browser.timer.clear_interval(tick_timer)
           alert("Game Over")
        current_block = next_block
        next_block = Block()
        next_block.paint("next") 
        play_grid.draw_grid()

def init():
    global tick_timer
    element = document["grid"]
    element.width = w*block_size
    element.height = h*block_size
    element = document["next"]
    element.width = block_size*6
    element.height = block_size*4
    if not document["grid"].getContext:
      alert('An error occured creating a Canvas 2D context. '
          'This may be because you are using an old browser')
    play_grid.draw_grid()
    update_lines_complete(0)
    next_block.paint("next")    
    tick_timer = browser.timer.set_interval(tick, 500)
    document["stop"].bind('click',stop_timer)
    document.onkeydown = key_code


play_grid = PlayingGrid()
play_grid.draw_grid()
current_block = Block()
next_block = Block()
init()

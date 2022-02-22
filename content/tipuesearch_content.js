var tipuesearch = {"pages": [{'title': 'About', 'text': '機械設計工程系大一與精密機械工程科五專一網際內容管理課程. \n 課程網頁:  https://mde.tw/wcm2022 \n 課程倉儲:  https://github.com/mdecourse/wcm2022 \n 課程規劃與作業:  https://github.com/mdecourse/wcm2022/discussions \n 課程討論區:  https://gitter.im/mdecourse/wcm2022 \n 教學影片  (for local area network only) \n 請注意!! 經驗很重要, 上上一代的電腦輔助設計室電腦硬體 (BIOS 2009/3/20), 在 Windows 10 更新後無法正常重新開機. \n Downloads: 下載  compile_copsim_wcm2022.7z  (下載 513 MB, 解開壓縮後 2.3GB, under wcm2022 At mde) - 包含 Python 3.9.5, Portablegit, Scite, ShareX, Wink, GitEtensions 等工具. \n 下載  PUTTY_0.74.7z  (下載 940 KB, 解開壓縮後 4 MB) \n 下載  PUTTY_0.76.7z  (下載 1 MB, 解開壓縮後 4.36 MB) \n 請注意!! 版本很重要, 使用 PUTTY 0.74 建立的 keys, 無法在 0.76 版中使用. \n 下載  robodk_rokisim.7z  (下載 434 MB, 解開壓縮後\xa0 1.2 GB) \n 下載  msys2_and_cmake.7z  (下載 3.7 GB, 解開壓縮後\xa0 13.3 GB) \n 下載  coppeliasim_4.2_and_4.1.7z  (下載 566 MB, 解開壓縮後 1.5 GB ) \n 下載  Rust_1.58.1_portable.7z  (下載 218 MB, 解開壓縮後 1.8 GB) \n 下載  Miktex_portable.7z  (下載 286 MB, 解開壓縮後 1 GB) \n \n 課程簡介: \n vision-engineering-education.pdf \n vision-2030-creating-the-future-of-mechanical-engineering-education.pdf \n THE FUTURE OF MECHANICAL ENGINEERING 2028 \n A report of the Global Summit on the Future of Mechanical Engineering.pdf \n shaping_future_of_mech_engr.pdf \n THE FUTURE OF ENGINEERING IN SCHOOL.pdf \n THE STATE OF MECHANICAL ENGINEERING TODAY AND BEYOND.pdf \n Redesigning the Office One Virtual Workspace At a Time.pdf \n 回到 1997 年,  Google  成立的前一年, 看看  Mastering the Internet  (1) 這本電子書, 了解與網際網路相關的各項術語與相關內容. \n 至 2008 年,  Git  被創建後三年, HTML 已經推出 HTML5, 2011 年出版的  HTML5 Solutions: Essential Techniques for HTML5 Developers  (2), 介紹許多全球資訊網 (World Wide Web) 相關的內容. \n 與 TCP/IP 有關的資料可以參考 2014 出版的  Guide to OSI and TCP/IP Models  (3). \n Windows 10 參考書:  Windows 10 troubleshooting  (4) and  The Windows 10 Productivity Handbook  (5). \n 電腦輔助設計室  IPv6 網路設定 \n SSH , git submodule add URL dir, git clone recurse-submodules URL, git remote add abbr URL, cms.bat and acp.bat \n https://wcm.cycu.org  (BIOS 版本: Acer R01-A4, 2009.03/:10ff::12/pj2022) \n Ubuntu 參考書:\xa0 Beginning Ubuntu for Windows and Mac Users  (6). \n Pro Git 參考書:  https://git-scm.com/book/zh-tw/v2  (7) \n 網際內容管理 (Web-based Content Management) 課程就是在全球資訊網的環境中, 介紹與機械工程相關的內容管理系統. 其中包括  CMSiMDE  與  Fossil SCM  server. \n 由於電腦輔助設計室中有 11 台電腦中的第三磁區是沒有防寫卡保護的 Windows 10 操作系統, 網際內容管理課程會在這些電腦中安裝 Windows 10 與 Ubuntu 操作系統, 並介紹如何配置  CMSiMDE  與  Fossil SCM  server. \n 與  CMSiMDE  有關的說明請參考  https://mde.tw/cmstemplate . \n 與  Fossil SCM  server 有關的說明請參考  https://mde.tw/pj5073 . \n 網際課程作業將請各學員在 Github, Gitlab 與 Bitbucket 上建立  CMSiMDE  倉儲, 並以 Github Pages 的網頁展示內容. \n 課程作業簡報請嘗試利用  https://github.com/KmolYuan/reveal-yaml-rs  建立. \n PDF 課程作業則請嘗試利用  https://github.com/KmolYuan/latex-paper  製作. \n 課程目標: 了解如何利用網際 (Web (Internet)-based) 技術在多人異地環境下, 執行協同自動控制與設計所需的電腦軟硬體架構及知識. \n 範例: \n 利用商用 CAD 建立網際設計自動化接案系統: \n https://www.driveworkslive.com/ \n https://github.com/DriveWorks \n web_based_customized Design.pdf \n 利用開源 CAD 建立 3D 模型, 執行輔助設計及轉檔: \n https://github.com/coletek/pyMDA \n https://github.com/KmolYuan/Pyslvs-UI \n 將絕版紙本書轉為網際多媒體版: \n Introduction To The Mechanics Of A Continuous Medium \n 建模與模擬 (Modeling and Simulation): \n 現代產品幾乎都是植基於數位工程 (Digital Engineering) 下的產物, 意即都是先經過建模 (Modeling) 並透過模擬 (Simulaion) 確認其模型功能符合需求後, 才逐一實體化 (Realization). \n 建立模型的過程是希望利用數位方法來表達物體的真實情境, 當數位模型導入各種狀態變數 (State Variables), 在特定時間內的表現即為模擬 (Simulation), 若此模型的模擬結果越接近真實, 則此一模型即可稱為真實世界的  digital twin . \n 數位模型建立過程可以透過網路無遠弗屆傳遞, 可以同步或非同步協同 (Synchronous or Asynchronous Collaboration) , 也可以虛實整合 (cyber-physical integration). \n 數位模型的模擬即透過運算呈現結果, 其目標在令其貼近所代表的真實情境. 由於真實世界的部分情境可用數學模型簡化後加以呈現, 意即數位模型希望貼近真實世界, 產品設計者必須運用已知或創新方法建立適用的數位運算模型 (Digital Computation Model). \n 電腦輔助設計 (Computer Aided Design) 的目的在利用電腦呈現建立模型過程 (Model Creation Process) 的全貌 (Whole Picture). \n 協同產品設計 (Collaborative Product Design) 即採多人協同模式執行電腦輔助設計. \n 網際內容管理則是在電腦輔助協同過程中, 透過瀏覽器介面讓參與人員可以更有效率執行設計. \n 頁面總結: \n 網際內容管理課程將配合上述 7 本電子書中的資料實際讓學員在 Windows 與 Ubuntu 環境中建立適合機械工程師使用的網際內容管理系統. \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Github', 'text': 'Github 是一套提供 全球資訊網服務介面 的 分散式版次管理系統 . \n 全球資訊網服務介面: 可使用瀏覽器登入系統後維護內容 \n 分散式版次控制(管理)系統: distributed version control system \n 控制為手段, 管理為目的. \n Git: Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. \n', 'tags': '', 'url': 'Github.html'}, {'title': 'WCM', 'text': '一般的  WCM  指的是 Web Content Management, 其中的 Web 特指 Web pages 也就是全球資訊網 (World Wide Web) 網站 (Website) 上的內容. 此類的 WCM 可以稱為 網頁內容管理 . \n 而 Web-based Content Management 則指 基於全球資訊網相關技術的內容管理 , 其中的內容除了全球資訊網外, 還整合包含來自其他應用 Internet (TCP/IP) 架構的伺服器內容 (例如:  CoppeliaSim ,  Robodk  與  Webots  伺服器, 或自建的機電資軟硬體虛實整合伺服器套件), 透過 Web-based 的架構整合在一個全球資訊網站中. 在此將 Web (and Internet) based Content Management 稱為 網際內容管理 . \n', 'tags': '', 'url': 'WCM.html'}, {'title': 'Brython', 'text': 'ROC 國旗規格   PROC 國旗規格   USA 國旗規格 \n Gist Brython scripts \n 解題練習 \n Cango \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'ggame', 'text': 'ggame  執行需要 downloads/brython_modules.js 與 \n <div class="col-md-0" height="1" id="graphics-column" width="1"></div> \n \xa0上一頁面已經將  ggame  從 brython 模組轉為 javascript ( note ) 模組( 方法 ), 名稱為  brython_modules.js  放在 downloads 目錄中. \n', 'tags': '', 'url': 'ggame.html'}, {'title': 'Heroku', 'text': '教務主機:  https://qry.nfu.edu.tw/  (提供教務資料服務) \n Heroku:  https://www.heroku.com/  (提供執行網際 Python 服務) \n 可以利用 Brython 直接從教務主機擷取資料嗎? \n https://github.com/mdecourse/nfulist \n https://nfulist.herokuapp.com/?semester=1101&courseno=0766&column=True \n 假如需要透過 Python 模組或 C/C++ 動態連結程式庫執行 Brython, 可以透過 Brython + Heroku 完成嗎? \n 參考資料: \n Heroku 實作  \n http://mde.tw/lab/content/Heroku.html \n http://mde.tw/cp2020/content/Heroku.html \n http://mde.tw/wcm2021/content/Heroku.html \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'Pandoc', 'text': 'LaTeX and PDF \n 下載  Miktex_portable.7z  (下載 286 MB, 解開壓縮後 1 GB) \n 下列指令可以在可攜系統中, 利用 pandoc 與宋體字型將 content/About.html 轉為 About.pdf \n pandoc About.html --pdf-engine=xelatex -o c:\\tmp\\About.pdf -V mainfont="SimSun" \n 由於 content/About.html 包含網頁中的表單與 footer 內容, 若能在 config/content.htm 分頁後, 按照各頁面的標題 (head) 與順序 (level), 將 html 轉為 pdf 並利用 sitemap 製作 Table of Content, 應該可以順利轉為 PDF 電子書格式. \n 或者將上述 html 轉為 Markdown 後, 可再讓使用者編輯後, 透過 MikTeX 轉為 PDF 電子書格式. \n 參考: \n https://github.com/chiamingyen/sphinxBook \n', 'tags': '', 'url': 'Pandoc.html'}, {'title': 'Blender', 'text': 'Blender  是一套 Python friendly 的 3D 建模套件. \n https://upbge.org  為包含  Blender Game Engine  的 fork 版本. \n Download Blender3.0.7z  (下載 157 MB, 解開壓縮後 700 MB) \n Download UPBGE-0.3.7z  (下載 222 MB, 解開壓縮後 800 MB) \n https://vile72.files.wordpress.com/2014/10/blender_noob_to_pro.pdf \n https://www.cdschools.org/cms/lib04/PA09000075/Centricity/Domain/81/BlenderBasics_4thEdition2011.pdf \n 在校園網路可直接下載下列電子書: \n Modeling and Animation Using Blender \n Beginning Blender \n Foundation Blender Compositing \n Creating Game Environments in Blender 3D \n Core Blender Development \n The Blender Python API \n \n https://www.youtube.com/watch?v=cdgJaMGx6XM \n \n \n \n \n \n \n', 'tags': '', 'url': 'Blender.html'}, {'title': 'Programming', 'text': '電腦程式的基本元素: \n 輸入 (inputs) \n 輸出 (outputs) \n 算數 (arithmatics) \n 條件式與迴圈 (conditionals and looping) \n 變數與資料結構 (variables and data structure) \n 利用上述基本元素的安排流程進行解題則稱為 Algorithms (演算法) \n 避障在機電系統中的應用 \n Two-stage Shortest Path Algorithm for Solving Optimal Obstacle Avoidance Problem.pdf \n Computational Geometry in Python From Theory to Application.pdf  ( site ) \n Computational Geometry.pdf \n Algorithms.pdf \n algorithms and data structures.pdf \n Lectures on Discrete Geometry  (可在校園網路中下載) \n Computational Geometry  (可在校園網路中下載) \n \n 現在無論學習哪一種程式語言都避不開 Javascript, 即使可以在全球資訊網前端以  Brython  替代 Javascript, 但是許多情況仍然需要對 Javascript 有些了解. 針對已經對 Brython 與 Python 有些了解, 也學了一些 C 或 C++ 的學員, 接下來針對 Programming 這項主題, 可以繼續深入學習 C, Python 與  Flask , 然後透過  Fossil SCM  與  Flask  的整合應用 (經由  fossilapp  與  fossiloauth ), 配合  Fossil SCM 原始碼  (採 ANSI C),  SQLite  與  TCL  了解如何安裝配置  Fossil SCM  server 及其 延伸應用 . \n 計算機程式的教與學 : \n 學習程式 \n why-computer-programming-or-coding-is-so-important-for-students-in-today-s-era ? \n why learn to code ? \n https://time.com/2881453/programming-in-schools/ \n https://digitalskillsglobal.com/blog/10-reasons-why-coding-skills-are-vital-for-organisations-worldwide \n \n (program or be programmed) \n \n 利用  Brython 程式範例 可以讓計算機程式課程的學習者, 直接利用瀏覽器與  Github Gist  練習程式編寫. \n 其中  Brython 程式語法 可以與 Javascript 程式庫結合應用 (例如:  Cango ,  PixiJS ,  KonvaJS ), 且能透過  AJAX  與 Flask 伺服器端的 Python 或 C/C++ dll  結合應用 . \n Brython 程式範例 的延伸教學: \n 五個紅點方塊 : \n 1.  五個紅點方塊 以隨機方式產生時, 會隨機標上 1~5 的代號, 綠色方塊必須依照順序, 分別採最短距離"吃掉" 標號 1~5 的紅色方塊. \n 2. 承接上一題, 當綠色方塊分別按照順序"吃掉"各紅色方塊過程, 必須避開非目標編號的其他紅色方塊. \n 3. 承接上一題, 在畫面中列出綠色方塊每走一步即增量行走步數的 counter, 以及計算"吃掉"紅色方塊總數. \n 4. 承接上一題, 在畫面中以隨機方式產生五個藍色方塊, 並將所產生過的所有藍色方塊當作障礙的情況下, 執行上一個題目要求過程五個回合. \n 延伸討論: \n 如何利用控制 五個紅點方塊 的程式, 轉而控制  CoppeliaSim  機電模擬場景中的掃地機 ( Robotic Vacuum Cleaner ). \n 1. Brython 控制程式以  AJAX  將控制訊號傳至 Server 端後, 以  Python Remote API  或  Bluezero-based Remote API  控制機電場景中的掃地機. \n 2. 將 Brython 控制方法轉為 CPython, 以  Python Remote API  或  Bluezero-based Remote API  控制機電場景中的掃地機. \n 如何將  Cango_three_gears  程式延伸, 利用  NX1980 portable  (for @gm users only) 建立 3D 正齒輪, 並轉入 CoppeliaSim 建立傳動模擬場景. \n 1. 在  Cango_three_gears  程式中分別加入三個正齒輪的齒數表單, 可以讓使用者輸入各齒輪的齒數送出後, 在畫布中產生齒輪傳動模擬. \n 2. 將  Cango_three_gears  程式與  NX Python API 程式 結合, 讓使用者透過網際表單訂製並取得各種格式的正齒輪零件檔案. \n 3. 將  Cango_three_gears  程式與 正齒輪齒面寬設計 流程 ( 原始碼 ) 結合, 讓使用者透過網際介面執行正齒輪傳動設計, 並與上一題整合, 完成設計後可將正齒輪傳動零件匯入 Coppeliasim 執行場景模擬. \n \n CoppeliaSim: \n CoppeliaSim Edu may ONLY be used by educational entities composed by following people and institutions: \n students, teachers and professors schools and universities \n Educational entities do NOT include companies, research institutions, non-profit organisations, foundations, etc. \n An educational entity may use CoppeliaSim Edu under following conditions: \n usage should be non-commercial \n cd2022 downloads are provided by cd2022 At mde \n CoppeliaSim Edu 4.1.0 Portable  (official and self-compiled versions) \n CoppeliaSim Edu 4.2.0 Portable  (official version) \n', 'tags': '', 'url': 'Programming.html'}, {'title': 'Project2', 'text': '讓  cmsimde  動態網站系統具備多人異地同步編輯的功能, 可以將目前的 TinyMCE4 編輯器改為  ckeditor5 , 並且在區網或廣域網路時啟動  ckeditor5  的 realtime 同步編輯功能 \n Flask and ckeditor4:  https://github.com/greyli/flask-ckeditor  (其他參考: 1 ,  2 ) \n Flask and ckeditor5:  https://github.com/boyuan12/note-web \n ckeditor5 guides:  https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html \n', 'tags': '', 'url': 'Project2.html'}, {'title': 'Project3', 'text': '在網際環境中, 讓多人能在同一個網址下, 執行同步互動 (例如: 兩人分別在不同電腦瀏覽器上, 執行 井字棋 , 或多人貪食蛇), 則需要透過  OT  或  CRDT  進行 網際同步協同 . \n (Fig2 from  Analysis of Operational Transformation Algorithms ) \n \n Conflict-Free Replicated Data Types \n \n \n \n https://github.com/mdecourse/conclave \n \n https://digitalfreepen.com/2017/10/06/simple-real-time-collaborative-text-editor.html \n', 'tags': '', 'url': 'Project3.html'}, {'title': 'Project4', 'text': '參考: \n http://mde.tw/brython-blocks/  ( https://github.com/mdecourse/brython-blocks ) \n https://github.com/chiamingyen/tetris \n https://github.com/techwithtim/Tetris-Game \n https://levelup.gitconnected.com/writing-tetris-in-python-2a16bddb5318 \n https://github.com/ondras/custom-tetris \n https://github.com/TetrisAI/Tetris-AI-Javascript \n 在  Brython 頁面 中, 寫一個俄羅斯方塊遊戲. \n Stage1:  Brython Tetris  (right arrow 向右移動, left arrow 向左移動, r 鍵旋轉, d 鍵直接降到底部, esc 重新開始) \n Stage2: 請在  Brython Tetris  加入計分功能與 Game Over 警示. \n Stage3: 請參考  https://mde.tw/Tetris-AI-Javascript/  ( 原始碼 ), 在  Brython Tetris  中加入 AI 功能. \n Stage4: 能夠透過 server 上的 CPython 參考\xa0 https://github.com/mdecourse/tetris-ai  中的深度強化學習, 然後以 AJAX 操控  Brython Tetris  上的俄羅斯方塊嗎? \n \n', 'tags': '', 'url': 'Project4.html'}, {'title': 'Project5', 'text': '能不能在  https://mde.tw/wcm2022/content/Brython.html  的程式編輯器中, 讓使用者將 Python 程式透過  Heroku  選擇將程式存在近端與選定的  Gist  上. \n 並且配合與上述網際程式編輯環境搭配的 GUI 程式套件, 以  PyGObject  開發. \n \n Install PyGObject on Windows (要在 IPv4 網路連線下執行): \n \n Run Y:\\msys64_20210419\\mingw64.exe \n Execute pacman -Suy \n Execute pacman -S mingw-w64-x86_64-gtk3 mingw-w64-x86_64-python3 mingw-w64-x86_64-python3-gobject \n 安裝結束後, 複製一份 y:\\wscite502 名稱定為 y:\\wscite502_msys2, 然後修改 python.properties 將 pythonw 指向 msys2 目錄中所安裝的 Python. \n 假如要使用  glade : pacman -S mingw-w64-x86_64-glade \n \n python.properties 修改 line 152-157: \n if PLAT_WIN\n\tpython.command=Y:\\msys64_20210419\\mingw64\\bin\\pythonw\nif PLAT_GTK\n\tpython.command=python3\nif PLAT_MAC\n\tpython.command=python \n 測試執行 gtk_ex1.py \n import gi\n\ngi.require_version("Gtk", "3.0")\nfrom gi.repository import Gtk\n\nwin = Gtk.Window()\nwin.connect("destroy", Gtk.main_quit)\nwin.show_all()\nGtk.main() \n button_hello.py \n import gi\n\ngi.require_version("Gtk", "3.0")\nfrom gi.repository import Gtk\n\nclass MyWindow(Gtk.Window):\n    def __init__(self):\n        super().__init__(title="Hello World")\n\n        self.button = Gtk.Button(label="Click Here")\n        self.button.connect("clicked", self.on_button_clicked)\n        self.add(self.button)\n    def on_button_clicked(self, widget):\n        print("Hello World!")\n \nwin = MyWindow()\nwin.connect("destroy", Gtk.main_quit)\nwin.show_all()\nGtk.main() \n pacman -S mingw-w64-x86_64-python3-yaml \n pacman -S mingw-w64-x86_64-python3-matplotlib \n pacman -S mingw-w64-x86_64-python3-pandas \n pacman -S mingw-w64-x86_64-python3-scipy \n pacman -S mingw-w64-x86_64-python3-numpy \n pacman -S mingw-w64-x86_64-cython \n pip3 install scikit-sparse (error) \n pacman -S mingw-w64-x86_64-suitesparse \n from sksparse.cholmod import cholesky ModuleNotFoundError: No module named \'sksparse\' \n https://github.com/mdecourse/sobotrimulator \n 參考: \n PyGObject Tutorial \n https://en.wikipedia.org/wiki/PyGTK \n Foundations of PyGTK Development  (電子書) \n https://pygobject.readthedocs.io/en/latest/ \n https://github.com/mdecourse/sobot-rimulator  ( sobot-rimulator.7z ) \n https://python-gtk-3-tutorial.readthedocs.io/en/latest/ \n snake in GTK.7z  ( source code ) \n https://github.com/pychess/pychess \n https://github.com/facebookresearch/pyrobot \n https://glade.gnome.org/ \n https://gtk-rs.org/ \xa0 ( https://gtk-rs.org/gtk4-rs/stable/latest/book/ ) \n https://github.com/gaphor/gaphor \n https://github.com/opendr-eu/opendr \n https://github.com/opendr-eu/gym-airsim \n', 'tags': '', 'url': 'Project5.html'}, {'title': 'Tetris', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'Tetris.html'}, {'title': 'Rust', 'text': 'https://mde.tw/cp2021/content/Rust.html \n 從 可攜系統 下載 1.53.0 後, 以 rustup update 更新. \n 更新後以 rustc --version 查詢目前的版本. \n 下載  Rust_1.58.1_portable.7z  (218 MB, 解開壓縮後 1.8 GB) \n 可配合 \n https://fasterthanli.me/articles/a-half-hour-to-learn-rust \n Beginning Rust \n Practical Rust Projects \n Practical Machine Learning with Rust \n Practical Rust Web Projects \n 等電子書學習. \n main.rs \n fn main() {\n    for i in 1..11 {\n        print!("第 {} 次說 {}!\\n", i, "Hello, world");\n    }\n} \n rs.bat \n @echo off\ncls\nrustc %* --color always 2>&1 | \n 利用 rs main.rs 可以編譯出 main.exe \n If it is compiled and run as before, it prints: "Hello, world!" \n Notice that the newly added line contains eight syntax items, aka “tokens”. Let’s examine them: \n \n print: It is the name of a macro defined in the Rust standard library. \n !: It specifies that the preceding name indicates a macro. Without such a symbol, print would instead indicate a function. There is no such function in the Rust standard library, and so you would get a compilation error. A macro is a thing similar to a function - it’s some Rust code to which a name is associated. By using this name, you ask to insert such code in this point. \n (: It starts the list of arguments of the macro. \n ": it starts the literal string. \n Hello, world!: It is the content of the literal string. \n ": It ends the literal string. \n ): It ends the list of the arguments of the macro. \n ;: It ends the statement. \n \n Python call Rust generated dll: \n 參考: \n https://bheisler.github.io/post/calling-rust-in-python/ \n https://github.com/mdecourse/raytracer \n 也可以透過 PyO3:  http://saidvandeklundert.net/learn/2021-11-18-calling-rust-from-python-using-pyo3/ \n https://github.com/PyO3/pyo3 \n 透過 C : \n 利用 cargo new rust_python 建立 rust_python 目錄及專案檔案內容. \n rust_python 目錄檔案: \n .git \n src 目錄 \n .gitignore \n Cargo.toml \n Cargo.toml \n [package]\nname = "rust_python"\nversion = "0.1.0"\nedition = "2021"\n\n[lib]\nname = "square"\ncrate-type = ["dylib"]\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies] \n src\\lib.rs \n #[no_mangle]\npub extern "C" fn square(x: i32) -> i32 {\n    x*x\n} \n 編譯 square.dll \n 進入 rust_python 目錄後, 執行 cargo build \n call_rust.py \n import cffi\n\nffi = cffi.FFI()\ns = \'int square(int);\'\nffi.cdef(s)\nC = ffi.dlopen("./rust_python/target/debug/square.dll")\n\nprint(C.square(9)) \n 執行 call_rust.py 後得到 81. \n', 'tags': '', 'url': 'Rust.html'}, {'title': 'cmsrmde', 'text': '利用 \n https://docs.rs/soup/latest/soup/  類似 Python 的 beautifulsoup. \n Rust 的  split . \n 可以試著對  https://github.com/mdecourse/cmsimde  分頁. \n https://github.com/xi-editor/xi-editor  可作為文字檔案編輯器. \n SciTE 可以利用  https://fossies.org/linux/gscite/rust.properties  納入對於 Rust 的支持. \n Flask 的部分可以改用 Web Framework:  https://github.com/actix/actix-web \n', 'tags': '', 'url': 'cmsrmde.html'}, {'title': 'Network', 'text': '綜合第一工程館八樓電腦輔助設計室 Windows 10 網路設定:  https://github.com/mdecourse/wcm2022/discussions/2  (使用純 IPv6 網路設定說明) \n From  IPv4 vs IPv6 : \n Understanding IPv6  電子書 \n Practical IPv6 for Windows Administrator  電子書 \n What is IPv6? \n IPv6 is the next generation Internet Protocol (IP) address standard intended to supplement and eventually replace IPv4, the protocol many Internet services still use today. Every computer, mobile phone, home automation component, IoT sensor and any other device connected to the Internet needs a numerical IP address to communicate between other devices. The original IP address scheme, called IPv4, is running out of addresses due to its widespread usage from the proliferation of so many connected devices. \n What is IPv4? \n IPv4 stands for Internet Protocol version 4. It is the underlying technology that makes it possible for us to connect our devices to the web. Whenever a device accesses the Internet, it is assigned a unique, numerical IP address such as 99.48.227.227. To send data from one computer to another through the web, a data packet must be transferred across the network containing the IP addresses of both devices. \n Why Support IPv6? What are the benefits of IPv6? \n IPv6 (Internet Protocol version 6) is the sixth revision to the Internet Protocol and the successor to IPv4. It functions similarly to IPv4 in that it provides the unique IP addresses necessary for Internet-enabled devices to communicate. However, it does have one significant difference: it utilizes a 128-bit IP address. \n Key benefits to IPv6 include: \n \n No more NAT ( Network Address Translation ) - 不再需要網路位址轉換 (因為有非常充足的網路位址數量) \n Auto-configuration - 可自動配置 \n No more private address collisions - 內部網路位址不再會產生衝突 \n Better multicast routing - 更好的多播路由 \n Simpler header format - 更簡單的標頭格式 \n Simplified, more efficient routing - 簡化且更具效率的路由 \n True quality of service (QoS), also called "flow labeling" - 真實的服務品質 (更能保障點對點的網路連通機率) \n Built-in authentication and privacy support - 內建身分驗證與隱私支援 \n Flexible options and extensions - 彈性選項與延伸 \n Easier administration (no more DHCP) - 更容易管理 (無需  DHCP ) \n \n IPv4 uses a 32-bit address for its Internet addresses. That means it can provide support for 2^32 IP addresses in total around 4.29 billion. That may seem like a lot, but all 4.29 billion IP addresses have now been assigned, leading to the address shortage issues we face today. (IPv4 uses 32-bit identifier so that there are 4.3 billion identifiers numerically, but address allocation based on classes allows only 0.5 or 1 billion address space). \n There are 2^128 or 340 trillion (兆=百萬平方=10^12), trillion, trillion IPv6 addresses, which is more than 100 times the number of atoms on the surface of the Earth. This will be more than sufficient to support trillions of Internet devices for the forseeable future. \n The differences between DHCP and DHCPv6 are that DHCPv6 uses Unique Identifiers, while DHCP uses MAC addresses to identify the client. DHCP messages are transmitted over IPv4 packets and DHCPv6 is transmitted over IPv6 packets. DHCPv6 uses Router Advertisement (RA) and IPv6 multicast messages and DHCP uses broadcast IPv4 messages on the LAN. \n Autoconfiguration \n The autoconfiguration is the most fascinating point in adopting IPv6. IPv6 enabled device is able to configure itself dynamically when it plugs in. IPv6 interface is given with several identifiers in accordance with scope or number of receivers, such as link-local address, global address, multicast address, anycast address, and so on. When an IPv6 device boots, it automatically configures its link-local address with several multicast addresses and gets or builds its global IP address. \n Providing Quality of Service (QoS) \n To provide quality of service in data transmissions, the flow label is defined in IPv6. Flow labels are pre-defined labels to classify data packets to settle quality requests from communicating peers. Type of Service (ToS) field in IPv4 Header format is defined for the similar purpose. However, most IPv4 routers do not support this field. Thus, Integrated Services (Int-Serv) and Differentiated Services (Diff-Serv) are devised to support QoS in IP networks. For end-to-end QoS support, all the routers on the path from the sender to the receiver must support QoS mechanism. However, in IPv4, these schemes meet difficulty in widely deployed. All the IPv6 routers must support IPv6 QoS mechanisms. Diff-Serv is one of the methods which are currently under consideration for the flow label. \n Integrated security \n For the network security in IPv4, IPsec is devised. It is widely used for the Virtual Private Network (VPN). However, its support is optional in IPv4. IPsec is mandatory in IPv6. \n Enhanced mobility \n Route optimization is possible in the Mobile IPv6. Authentication mechanisms for the mobile node are provided in route optimization process. \n \n', 'tags': '', 'url': 'Network.html'}, {'title': 'Internet', 'text': "Inter-Networks \n https://en.wikipedia.org/wiki/Internet \n 回到 1997 年,  Google  成立的前一年, 看看  Mastering the Internet  (1) 這本電子書, 了解與網際網路相關的各項術語與相關內容. \n TCP/IP 被設計用來串聯全球各種網路系統的協定 \n 全球資訊網 (World Wide Web) 是網際網路 (Internet) 架構下的一項重要應用, 讓使用者可以透過瀏覽器連結各種全球資訊網伺服器, 透過超文件擷取資料或透過表單進行互動. \n 何謂 Internet? \n The Internet, itself, is basically the global interconnection of networks and independently connected computers, whereas the WWW is a collection of computers which store digital information and, using standard transmission method ( HTTP ), transmit it over the Internet. \n 何謂  Local Area Network  (區域網路)? \n A local area network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus or office building. By contrast, a wide area network (WAN) not only covers a larger geographic distance, but also generally involves leased telecommunication circuits. \n 何謂 TCP/IP ( Transmission Control Protocol / Internet Protocol )?  Internet Protocol Suite  (網際網路協議套組). \n The Internet protocol suite, commonly known as TCP/IP, is the set of communications protocols used in the Internet and similar computer networks. The current foundational protocols in the suite are the Transmission Control Protocol (TCP) and the Internet Protocol (IP). \n TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP, which is part of the Transport Layer of the TCP/IP suite. SSL/TLS often runs on top of TCP. \n TCP is connection-oriented, and a connection between client and server is established before data can be sent. The server must be listening (passive open) for connection requests from clients before a connection is established. Three-way handshake (active open), retransmission, and error detection adds to reliability but lengthens latency. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service that prioritizes time over reliability. TCP employs network congestion avoidance. However, there are vulnerabilities to TCP, including denial of service, connection hijacking, TCP veto, and reset attack. \n The Internet Protocol (IP) is the network layer communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. Its routing function enables internetworking, and essentially establishes the Internet. IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers. For this purpose, IP defines packet structures that encapsulate the data to be delivered. It also defines addressing methods that are used to label the datagram with source and destination information. \n 何謂  HTML  (Hypertext Markup Language)? \n The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets ( CSS ) and scripting languages such as JavaScript. \n 何謂  Javascript ? \n JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the  Document Object Model  (DOM). \n", 'tags': '', 'url': 'Internet.html'}, {'title': 'WWW', 'text': 'World Wide Web \n https://en.wikipedia.org/wiki/World_Wide_Web \n', 'tags': '', 'url': 'WWW.html'}, {'title': 'HTML', 'text': 'HyperText Markup Language \n https://en.wikipedia.org/wiki/HTML \n 2008 年,  Git  被創建後三年, HTML 已經推出 HTML5, 2011 年出版的  HTML5 Solutions: Essential Techniques for HTML5 Developers  (2), 介紹許多全球資訊網 (World Wide Web) 相關的內容. \n', 'tags': '', 'url': 'HTML.html'}, {'title': 'TCPIP', 'text': 'Transmission Control Protocol \n Internet Protocol \n https://en.wikipedia.org/wiki/Internet_protocol_suite \n 1981 - 推出  IPv4 \n 1995 - 推出  IPv6 \n 1998.12 -\xa0 IPv6  became a Draft Standard for the  IETF .  rfc2462 \n 2017 - IPv6 正式成為 IP 標準.  rfc8200 \n 電腦輔助設計室網路設定: \n 純 IPv6 環境下, 避開非X套件的蠕蟲攻擊之 設定 . \n Introduction to Python Network Automation  (含 Python 簡介) \n', 'tags': '', 'url': 'TCPIP.html'}, {'title': 'Windows', 'text': '電腦結構與組成 \n History of Computer Systems From Logic Circuit to Quantum Circuit Bus and Interconnection I/O and Network Interface Central Processing Unit Parallel Processing Communication, TCP/IP, and Internet Cryptography and Architecture Security \n Windows 10 \n Windows 10 參考書:  Windows 10 troubleshooting  (4) and  The Windows 10 Productivity Handbook  (5). \n Create User: \n cmd execuated as administrator \n net user USER_NAME PASSWORD /add (新建帳號) \n net localgroup administrators USER_ACCOUNT /add (將帳號設為管理者) \n net user USER_ACCOUNT /del (刪除帳號) \n Task and Event \n https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer \n BIOS and UEFI \n', 'tags': '', 'url': 'Windows.html'}, {'title': 'Ubuntu', 'text': 'Ubuntu 參考書:\xa0 Beginning Ubuntu for Windows and Mac Users  (6). \n Ubuntu on Windows \n Pro Windows Subsystem for Linux (WSL) \n', 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'Git', 'text': 'Pro Git 參考書:  https://git-scm.com/book/zh-tw/v2  (7) \n 為什麼要使用 Git? \n Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. \n Why git ?  why_git.pdf \n 為什麼要使用  Github ? \n What is Github ? \n GitHub is a cloud-based hosting service that lets you manage Git repositories. If you have open-source projects that use Git, then GitHub is designed to help you better manage them. \n GitHub is a website for developers and programmers to collaboratively work on code. The primary benefit of GitHub is its version control system, which allows for seamless collaboration without compromising the integrity of the original project. The projects on GitHub are examples of open-source software. \n', 'tags': '', 'url': 'Git.html'}, {'title': 'Project1', 'text': '使用者利用 template 建立倉儲與網站後, 雙方的倉儲經多次改版後, 如何從原始 template 合併各版本資料的專案值得進行. \n How to  pull changes from a template repository . \n', 'tags': '', 'url': 'Project1.html'}, {'title': 'Fossil', 'text': 'Fossil SCM \n https://www.fossil-scm.org \n', 'tags': '', 'url': 'Fossil.html'}, {'title': 'Collaboration', 'text': "Oxford Learner's Dictionary : \n the act of working with another person or group of people to create or produce something \n 與另一人或一組人共同創造或產出某種作品的行為 (協同的行為) \n a piece of work produced by two or more people or groups working together \n 由兩個或兩個以上的人或群組共同創造的作品 (協同的作品) \n Collaboration 特性: \n 人: 兩人以上 \n 事: 共同創造 \n 時: 一定時間內或沒有特定時間限制 \n 地: 特定地點或沒有特定地點限制 \n 物: 某種作品 \n Web or Internet based Content Management \n Web-based 主要對象是人 - 由參與協同的成員透過瀏覽器進行協同互動. \n Internet-based 主要對象是物 - 由參與協同的物件透過網路連接進行協同互動. \n Content 內容 - 主要是數位內容. \n Management 管理 - 為有效運用資源達成目標所採行的作為稱為管理. \n 同步協同 - Synchronous collaboration \n 非同步協同 - Asynchronous collaboration \n 多人協同下的 Model-based 產品開發: \n \n From Document-based to Model-based product design: \n \n \n \n https://github.com/gaphor/gaphor \n https://gaphor.org/download.html \n \n https://pygobject.readthedocs.io/en/latest/index.html \n", 'tags': '', 'url': 'Collaboration.html'}, {'title': 'Assignment', 'text': '作業一: \n 已經修過計算機程式的同學, 請以網站及 PDF 檔案格式整理出一份標題為"計算機程式簡介"的資料內容. \n 已經修過計算機概論的同學, 請以網站及 PDF 檔案格式整理出一份標題為"計算機概論"的資料內容. \n 不希望整理上述兩項主題的同學, 請自選主題, 以網站及 PDF 檔案格式整理出一份標題為"自選主題"的資料內容. \n 討論一: \n 電腦軟硬體、網路與人工智能技術持續不斷進步下, 爾後的社會與工作環境將會朝哪一個方向發展? \n 自駕車即將出現的啟示是甚麼? \n 未來所謂的智能製造工廠大約是何種樣貌, 需要甚麼樣的人才? \n 產品生命週期不斷縮短下, 對技術及職業教育會造成何種影響? \n 這一篇文章 在講甚麼? \n 台灣是個各種物產非常豐富的國家嗎?所製造開發的產品輸往哪裡? \n 英文與電腦教育對台灣重要嗎? \n 為何要採用網站整理資料內容? \n 為何要採用 PDF 整理資料內容? \n 有沒有比利用 Github Pages 整理網站資料更有效率的方法? \n 有沒有比利用 cmsimde 動態網頁建立網站資料更有效率的方法? \n cmsimde 有甚麼功能? Github 倉儲有甚麼限制? \n 為什麼整理資料內容, 需要關注改版前後的差異? \n 改版通常有兩個目的: 修正錯誤以及增加新功能. \n', 'tags': '', 'url': 'Assignment.html'}]};
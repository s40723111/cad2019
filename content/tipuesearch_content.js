var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '\n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Solvespace編譯', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯影片: \n \n 對 About 新增學號 \n \n', 'tags': '', 'url': 'Solvespace編譯.html'}, {'title': 'Solvespace 操作', 'text': 'tutorial_1_simple_plate \n \n Solvespace_tutorial_10_Fidget Spinner \n \n Solvespace_tutorial_5_a more Complex Model \n \n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': '雙輪車控制模擬', 'text': 'Python remote API 雙輪車控制模擬 \n 目前為近端操控，未來的目標是希望在遠端裝置上執行 \n \n', 'tags': '', 'url': '雙輪車控制模擬.html'}, {'title': '繪圖認證範例', 'text': 'http://mde.tw/cad2019/content/CAD2CAE.html 挑選進行繪圖驗證 \n \n', 'tags': '', 'url': '繪圖認證範例.html'}, {'title': 'NX12翻譯', 'text': '第 2 章 - 入門 \n 首先開始 NX 12 會話。 本章將提供使用所需的基礎知識 \n 任何 CAD / CAM 軟體包。 您將學習開始，理解和使用 \n 用於建模，製圖等的 NX 12 軟體包。它包含五個小節： a ）打開 NX 12 \n 會話， b ）打印，保存和關閉零件文件， c ）熟悉 NX 12 用戶 \n 界面 d ）使用圖層和 e ）了解重要的命令和對話框。 \n 2.1 啟動 NX 12 會話並打開文件 \n 2.1.1 開始 NX 12 會話 \n 在 Windows 桌面屏幕上，單擊開始→程序列表→ Siemens NX 12 → NX 12 \n \n NX 12 主螢幕將打開。 這是 NX 12 軟體的閘道器。  NX 12 空白 \n 屏幕看起來如下圖所示。 屏幕上將顯示一些提示，關於 \n 當前版本的特殊功能。 閘道器還具有標準工具欄，它將 \n 允許您創建一個新文件或打開一個現有文件。 在“閘道器”屏幕的左側，有 \n 是一個稱為“資源欄”的工具欄，它具有與不同模塊相關的菜單，並且能夠 \n 定義和更改軟體的角色，查看軟體使用的歷史記錄等。 這會 \n 將在本章稍後詳細解釋。 \n \n 2.1.2 打開一個新文件 \n 首先，我們學習如何在 NX 12 中打開新零件文件。要創建新文件，請執行以下三個操作選項。 \n 單擊螢幕頂端的“新建”按鈕 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 New （新建）。 \n 或按 <Ctrl> + N \n 這將打開一個新會話，詢問要創建的新文件的類型，名稱和位置。 \n NX 12 中有多種文件類型，可從位於以下位置的“模板”對話框中選擇 \n 窗口的中心。 所選文件的屬性顯示在“預覽”下 \n 右邊。 由於我們要在建模環境中工作並創建新零件，因此僅 \n 指定工作環境的單位（英寸或毫米）以及名稱和位置 \n 文件。 默認單位是毫米。 \n 輸入文件的適當名稱和位置，然後點擊“確定”。 \n \n 2.1.3 打開零件文件 \n 有幾種打開現有文件的方法。 \n 點擊螢幕頂端的打開或打開最近的零件按鈕要么 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 Open （打開）。 \n 或按 <Ctrl> + O 將顯示“打開零件文件”對話框。 您可以在右側查看文件預覽 \n 窗口。 您可以通過取消單擊“預覽”按鈕前面的框來禁用“預覽”點擊取消退出窗口 \n \n 2.2列印，保存和關閉文件 \n 2.2.1列 印 NX 12 圖像要從當前顯示器打印圖像，點擊文件→打印\xa0 \xa0 \n 下圖顯示了“打印”對話框。 這裡， \n 您可以選擇要使用的打印機或指定編號 \n 打印份數，紙張尺寸等。 \n 您還可以為所有三個選擇比例尺寸。 \n 您也可以選擇 \n 通過單擊來打印，即線框實體模型 \n 輸出下拉菜單，如右圖所示 \n 單擊取消退出窗口 \n 2.2.2 保存零件文件 \n 必須經常保存工作。 如果 \n 由於某些原因， NX 12 會關閉，而零件沒有 \n 儲存後，所有工作都會丟失。 要儲存零件文件，點擊文件→儲存 \n 有五個選項可儲存文件： \n 儲存：此選項將使用 \n 與創建零件文件時給定的名稱相同。 \n 僅保存工作零件：此選項將僅保存螢幕上的活動部分。 \n 另存為：此選項允許您使用其他名稱和 / 或類型將零件保存在螢幕上。 \n 默認類型是 .prt 。 但是，您可以將文件另存為 IGES （ .igs ）， STEP 203 （ .stp ）， STEP 214 （ .step ）， AutoCAD DXF （ .dxf ）， AutoCAD DWG （ .dwg ）， CATIA 模型（ .model ）和 CATIA V5 （ .catpart ）。 \n 全部保存：此選項將保存所有打開的零件文件及其現有名稱。 \n 保存書籤：此選項會將螢幕截圖和當前模型的上下文保存在螢幕上 \n 作為 .JPEG 文件和書籤。 \n \n 2.2.3 關閉零件文件 \n 您可以選擇關閉零件在螢幕上可看見點擊文件→關閉 \n 如果您關閉文件，該文件將從以下位置清除 \n 工作記憶和任何更改不保存將丟失。 因此，請記住 \n 選擇“保存並關閉”，“另存並關閉”， \n 保存所有並關閉或保存所有並退出。 在在前三個選項的情況下， \n 已選擇，否則所有零件都將關閉，但 NX 12 會話繼續運行。 \n \n 2.2.4 退出 NX 12 會話 \n 點擊文件→退出 \n \n 如果您打開了文件並在未保存的情況下進行了更改，則消息將詢問您是否 \n 真的想退出。選擇否，保存文件，然後退出 \n . NX 12 接口 \n 通過使用不同的圖標， NX 12 的用戶界面變得非常簡單。大部分的 \n 可以通過在屏幕上導航滑鼠並單擊圖標來執行命令。 \n 鍵盤輸入主要限於輸入值和命名文件。 \n 2.3.1 滑鼠功能 \n 2.3.1.1 滑鼠左鍵（ MB1 ） \n 滑鼠左鍵（在 NX 中稱為鼠標鍵 1 （ MB1 ））用於選擇圖標，菜單， \n 和圖形屏幕上的其他實體。 在任何功能上雙擊 MB1 都會自動 \n 打開“編輯對話框”。 單擊對像上的 MB1 ，使用戶可以快速訪問 \n 如下所示的幾個選項。 這些選項將在下一章中討論。 \n \n 2.3.1.2 滑鼠中鍵（ MB2 ） \n 滑鼠中鍵（ MB2 ）或滾動按鈕用於通過按下來旋轉對象， \n 按住並拖動。 模型也可以繞單個軸旋轉。 繞軸旋轉 \n 垂直於屏幕，將滑鼠指針放在圖形屏幕的右邊緣附近，然後 \n 旋轉。 同樣，對於垂直軸和垂直於屏幕的軸，單擊底部 \n 屏幕的上邊緣和上邊緣分別旋轉。 如果您同時按住 MB2 \n 位置幾秒鐘，它將固定旋轉點（出現橙色圓圈符號） \n 您可以在對象周圍拖動以查看。 \n 如果是滾動按鈕，則可以通過滾動對象來放大和縮小。 單擊 MB2 將 \n 如果打開了任何彈出窗口或對話框，還可以執行“確定”命令 \n \n 2.3.1.3 鼠標右鍵（ MB3 ） \n MB3 或滑鼠右鍵用於訪問用戶界面彈出窗口菜單。 您可以訪問後續彈出的選項取決於選擇模式和應用。 的下圖顯示在草圖中應用。單擊 MB3 時選擇功能將提供選項與該功能有關（對象 / 動作菜單）。 \n \n 單擊 MB3 並按住按鈕將在功能周圍顯示一組圖標。這些圖標具有可應用於功能的可能命令 \n \n 2.3.1.4 按鈕組合 \n 放大 / 縮小： \n 同時按住 MB1 和 MB2 並拖動 \n 按住鍵盤上的 <Ctrl> 按鈕，然後按住並拖動 MB2 \n \n 同時按住 MB2 和 MB3 並拖動 \n 要按住鍵盤上的 <Shift> 按鈕並按住 MB2 \n \n 菜單快捷方式： \n ➢按住 <Ctrl> + <Shift> 和 MB1 ， MB2 和 MB3 可以看到功能的快捷方式， \n 直接草圖組和同步建模組 \n 2.3.2 NX 12 網關 \n 下圖顯示了打開文件時 NX 12 窗口的典型佈局。 這是 NX 12 的閘道器可以選擇要處理的任何模塊，例如建模，必須注意這些工具欄可能不完全在同一位置 \n 如下圖所示。 工具欄可以放置在屏幕上的任何位置或位置。查找相同的圖標集。 \n \n 2.3.2.1 功能區欄 \n 功能區界面使用戶能夠輕鬆訪問不同的命令，而無縮小圖形窗口區域。命令組織在不同選項卡下的功能區欄中和組，以便於識別和訪問。 \n 例如，在上圖所示的功能區欄中，我們具有“開始”，“曲線”等選項。在裡面 \n 主頁選項卡中，我們具有直接草圖，特徵，同步建模和曲面組。 並且在每個 \n 組中，我們有一組功能強大的命令。 \n 2.3.2.2 快速訪問工具欄 \n 快速訪問工具欄具有最常用的按鈕（保存，復原，重做，剪切，複製，貼上和 \n 最近的命令）以加快建模過程。 您可以輕鬆地將這些按鈕自定義為如下圖所示 \n \n 2.3.2.3 命令查找器 \n 如果您不知道在哪裡可以找到命令，請使用“命令查找器”。 假設我們忘記了 \n 樣式掃描的位置。 \n 在命令查找器中輸入掃描將游標懸停在樣式掃描上 \n NX 將顯示命令路徑：菜單→插入→掃描→樣式化掃描 \n 或是在命令查找器中輸入掃描在“命令查找器”窗口中單擊樣式化掃描 \n \n 2.3.2.4 上邊界 \n 頂部邊框中最重要的按鈕是菜單按鈕。 大部分功能菜單中提供了該軟件的版本。 選擇欄顯示選擇選項。 這些選項包括用於選擇特徵的“過濾器”，“零部件 / 裝配體”和“捕捉點”。 “視圖”選項中的常用按鈕也顯示在“頂部邊框”中。 \n 2.3.2.5 資源欄 \n 資源欄使用很少的用戶界面就可以在一處顯示多個頁面的圖標空間。  NX 12 將所有導航器窗口（裝配體，約束和零件）放置在資源欄中，以及重用庫， HD3D 工具，網頁瀏覽器，歷史記錄面板， Process Studio ，製造嚮導，角色和系統場景。 兩個最重要的寡婦是解釋如下 \n 零件導航器 \n 單擊零件瀏覽器圖標，第三個資源欄頂部的圖標 \n \n 零件導航器提供可視化表示要素中的父子關係以樹型格式在單獨的窗口中工作。它顯示了在此期間使用的所有原語，實體造型。 它允許您執行各種編輯這些功能上的操作。 例如，您可以使用零件導航器來抑製或取消抑制功能或更改其參數或位置尺寸。 刪除綠色的勾號將“取消”功能。 該軟體會給警告如果父子關係被打破取消任何特定功能。 \n 零件瀏覽器可用於所有 NX 應用程序而不僅僅是建模。 但是，您只能執行功能編輯操作當您在“建模”模塊中時。 在零件瀏覽器中編輯特徵將自動更新模型。 特徵編輯將在後面討論。 \n 歷史 \n 單擊歷史記錄圖標，資源欄頂部的第七個圖標歷史選項板提供對最近打開的文件或其他選項板條目的快速訪問。 有可能用於重新下載最近處理過的零件或重複添加一小組調色板項目的模型。歷史選項板會記住上一次使用的選項板選項以及會話的狀態當它關閉時。  NX 存儲已加載到會話中的選板並將其還原到 \n 下屆會議。 移動零件時，系統不會清除歷史記錄選板。要重用零件，請將其從歷史記錄中拖放調色板到圖形窗口。 要重新加載零件，單擊已保存的會話書籤。 \n 2.3.2.6 提示線 \n 提示行顯示提示消息，指示接下來需要採取的行動。 在  -  的右邊提示行，狀態行位於顯示有關當前選項的消息或最近完成的功能。進度表顯示在提示行中 \n 當系統執行耗時的操作，例如下載大型裝配體。 的儀表顯示的操作百分比完成了。 操作完成後，系統顯示下一個適當的提示。 \n \n 2.3.3 幾何選擇 \n 您可以過濾選擇方法，這有助於在緊密的簇中輕鬆選擇幾何。 在此外，您可以執行任何功能 NX 12 智能提供的操作選項取決於所選實體。 項目的選擇可以基於實體的程度，例如選擇幾何實體，特徵和零部件。 選擇方法可以選擇 \n 選擇選擇工具欄中的圖標之一。 \n 2.3.3.1 特徵選擇 \n 點任何圖標，可以選擇零件文件中的特徵。 它不會選擇基本實體，例如邊緣面等。選定的特徵也可以應用於一部分或整個根據要求組裝。 \n \n 除此之外，可以進一步縮小特徵的過濾範圍在下拉菜單中選擇所需選項之一，如數字。 例如，選擇“曲線”將僅高亮顯示屏幕。 默認值為“無選擇過濾器”。 \n \n 2.3.3.2 常規對象選擇 \n 將鼠標光標導航到實體附近，直到用突出顯示它為止洋紅色，然後單擊滑鼠左鍵以選擇任何幾何實體，功能或組件。 \n \n 如果要選擇隱藏在顯示的幾何圖形後面的實體，將滑鼠光標放在屏幕上該區域附近，以便光標球佔據了投影在屏幕上的隱藏幾何的一部分屏幕。幾秒鐘後，球形光標變為加號如圖所示。單擊鼠標左鍵（ MB1 ）以獲取選擇確認對話框，如下圖如下。這個 QuickPick 菜單由實體列表組成捕獲在光標的球內的實體按以下升序排列實體的程度。例如，邊和頂點指定為較低給出實心面的數字更高的數字。通過移動光標顯示的數字， NX 12 將用洋紅色突出顯示屏幕上的相應實體。 \n \xa0 \n 2.3.4 用戶首選項 \n 在菜單按鈕（位於主窗口左上角）中選擇首選項以查找各種可用選項用戶首選項用於定義以下內容的顯示參數：新對象，名稱，佈局和視圖。 您可以設置圖層，創建對象的顏色，字體和寬度。 您也可以設計佈局和視圖，控制對象和視圖的顯示名稱和邊框，更改選擇球的大小，指定選擇矩形方法，設置鏈接公差和方法，以及設計和激活網格。 改變你使用“首選項”菜單進行覆蓋 \n 客戶默認使用相同功能 \n \n 2.3.4.1 用戶界面 \n 選擇首選項→用戶界面以找到對話框中的選項用戶界面選項可自定義 NX 的工作方式以及與您設置的規范進行交互。 您可以控制主窗口的位置，大小和可見性狀態，圖形顯示和信息窗口。 您可以設置系統用於的小數位數（精度）信息中顯示的輸入文本字段和數據窗口。 您還可以為文件指定完整或小型對話框選擇。 您還可以設置宏選項並啟用撤消操作的確認對話框。 \n \n 佈局選項卡允許您選擇用戶界面環境 \n “觸摸”選項卡使您可以使用觸摸屏 \n 通過“選項”選項卡，您可以設置精度級別（在“信息”中窗口） \n 工具中的日誌選項卡允許您使用多種編程語言 \n 工具中的“巨集”選項卡允許您設置顯示動畫時的暫停 \n \n \n 2.3.4.2 可視化 \n ➢選擇首選項→可視化以找到對話框中的選項 \n \n 該對話框控制會影響顯示的屬性圖形窗口。一些屬性與零件或零件的特定視圖的設置這些屬性保存在零件文件中。 對於其中許多屬性，當創建新零件或視圖時，該設置初始化為客戶默認文件。 其他屬性與會話和適用於會話中的所有部分。一些設置這些屬性在每個會話中保存在註冊表。 對於某些會話屬性，設置可以為初始化為客戶默認值默認文件的一個環境變量。 \n ➢選擇“首選項”→“調色板”以查找對話框中的選項 \n ➢點擊首選項→在背景獲取另一個彈出對話框。 \n \n 你可以改變您想要的背景色背景色是指圖形窗口的背景。  NX 支持所有顯示模式的漸變背景。 您可以選擇陰影或線框的背景顏色顯示。 背景可以是純色或漸變色。所有背景顏色的有效選項是 0 到 255 。 \n 您可以更改並觀察顏色和物體的半透明 \n ➢單擊首選項→對象 \n \n 這將彈出一個對話框窗口“對象首選項”。您也可以將此設置應用於以下對象的單個實體。 例如，您可以單擊任何特定的實體的表面並應用“顯示”設置。 \n 2.3.5 應用 \n 可以使用“文件”選項打開應用程序位於主窗口的左上角或功能區欄上方的“應用程序”選項卡。 您可以選擇要運行的應用程序類型。對於例如，您可以選擇“建模”，“製圖”組裝，如圖所示。 打開您的計算機時啟動的默認應用程序文件或開始新文件的是 Modeling 。 接下來，我們將介紹其中一些應用程序章節。 \n \n 2.4 層 \n 圖層用於將對象存儲在文件中，並像容器一樣工作以將對象收集到文件中。有條理和一致的方式。 與簡單的視覺工具（例如顯示和隱藏）不同，圖層提供一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1 圖層控制 \n 使用 NX 12 ，您可以使用“圖層”控制對像是可見還是可選。 一層是 NX 12 中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。 NX 12 那裏有 256 個可用層，其中之一始終是工作層。  256 個圖層中的任何一個都可以被分配給四種狀態分類之一 \n \n 工作 \n 可選擇的 \n 僅可見 \n 不可見 \n \n 工作層是在其上創建對象的層，並且始終可見並且可以選擇，而它仍然是工作層。啟動新零件文件時，第 1 層是默認的工作層。當工作層更改為另一種類型的層時，先前的工作層將自動變為“可選”，並且可以然後被分配為“僅可見”或“不可見”狀態 \n 可以在一層上的對像數量不受限制。 您可以自由選擇要創建的圖層 \n 對象及其所在層的狀態。 \n 要將狀態分配給一個或多個圖層， \n ➢選擇查看→圖層設置 \n \n 但是，應該注意的是，在關於文件之間層將有利於保持一致性。 \n 2.4.2 分層命令 \n 我們將按照簡單的步驟來練習“層”中的命令。 首先，我們將創建兩個對象 \n （固體）按如下方法處理。實體模型的詳細信息將在下一部分討論章節。 我們在此處繪製的實體僅在本章中用於實踐。 \n ➢選擇文件→新建 \n 命名文件並選擇要在其中保存文件的文件夾。確保在下拉菜單中選擇單位為毫米。 選擇文件類型作為模型 \n ➢選擇菜單→插入→設計特徵→圓錐 \n \n \n ➢在類型下選擇直徑和高度 \n ➢點擊確定 \n ➢ 右鍵單擊屏幕，然後選擇“右側視圖” 三座標 \n ➢右鍵單擊屏幕，然後選擇“渲染”。樣式→陰影 \n 您將能夠看到類似於圖片的實心圓錐在右邊。 \n 讓我們練習一些圖層命令。 \n ➢選擇查看→移動到圖層，系統將要求您選擇一個對象 \n ➢將光標移到圓錐上並單擊，使其突出顯示 \n ➢點擊確定 \n \n 在窗口頂部的“目標層”或“類別”空間中，鍵入 25 並單擊“確定”。 \n 圓錐現在已經到達第 25 層。 它不再是在第 1 層中看到。 \n ➢要查看圓錐體，請單擊查看→圖層設置 \n \n ➢您可以看到第 25 層有對象，而默認的工作層 1 沒有對象。 \n 錐體將再次出現在屏幕上。 保存文件，因為我們 \n 將在本教程的後面部分中使用它。 \n \n 2.5 協調系統 \n NX 中有不同的坐標系。 三軸符號用於標識坐標系。 \n 2.5.1 絕對坐標系 \n 絕對坐標係是從所有對像都被引用。 這是一個固定的坐標系， NX 12 建模空間中每個對象的位置和方向是與這個系統有關。 絕對坐標系（或絕對 CSYS ）還提供了通用的參考框架零件文件。 一個零件文件中 X = 1 ， Y = 1 和 Z = 1 的絕對位置是其他零件文件中的相同位置。 \n \n 圖形窗口左下角的 View Triad 僅是視覺對象代表絕對坐標系方向的指示器模型。 \n \n 2.5.2 工作坐標系 \n 工作坐標系（ WCS ）是您要用於構造時要使用的確定特徵的方向和角度。  WCS 的軸表示為 XC ， YC 和 ZC 。（“  C ”代表“當前”）。 它可能有多個坐標零件文件中的系統，但其中只有一個可以是工作坐標系。 \n 2.5.3 移動 WCS \n 在這裡，您將學習如何翻轉和旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS \n \n 2.5.3.1 轉換 WCS \n 此過程將移動 WCS 原點到您指定的任何位置，但 WCS 的方向（軸的方向）將保持不變。 \n ➢選擇菜單→格式→ WCS →原點 \n \n 顯示“構造器”對話框。 你可以從頂部的下拉菜單中指定一個點對話框或在 XC ， YC ，和 ZC 字段。大部分工作將與工作有關坐標系而不是絕對坐標系統。 默認為 WCS 。 \n 2.5.3.2 旋轉 WCS \n 您還可以圍繞其軸線之一旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS →旋轉 \n 該對話框顯示了六種旋轉 WCS 的方法。這些旋轉程序遵循正確的旋轉規則。 您還可以指定 WCS 被旋轉。 \n 您可以保存要使用的 WCS 的當前位置和方向作為永久坐標系。 \n ➢選擇菜單→格式→ WCS →保存 \n 2.6 工具欄 \n 工具欄包含圖標，可作為許多功能的快捷方式。右圖正常顯示了工具欄的主要項目顯示。但是，您可以找到更多不同圖標功能命令，基於所選模塊以及模塊是如何定制的。 \n \n 右鍵單擊現有工具欄上的任何位置，將提供其他工具欄的列表。 您可以通過選擇添加任何工具欄。 \n 通常，默認設置對於大多數操作應該足夠了，但是在某些操作期間，可能需要其他工具欄。 如果要添加與命令和工具欄有關的按鈕 \n ➢單擊任何工具欄上的下拉箭頭，然後選擇“自定義” \n \n 這將彈出“自定義”對話框窗口，其中包含“命令”選項卡下所有與每個工具欄有關的工具欄和命令。 要添加命令 \n ➢選擇一個類別並將命令從“命令”列表中拖動到所需的位置 \n \n 您可以通過以下方式自定義 NX 12 界面的設置單擊資源欄上的“角色”選項卡。角色選項卡具有工具欄菜單的不同設置顯示在 NX 12 界面上。 它可以讓你自定義您希望在工具欄中顯示的工具欄接口。 \n \n', 'tags': '', 'url': 'NX12翻譯.html'}, {'title': 'NX12繪製自走車', 'text': '\n', 'tags': '', 'url': 'NX12繪製自走車.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '\n \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': "建構乾淨的模型教程 Building a clean model tutorial \n This tutorial will guide you step-by-step into building a clean simulation model, of a robot, or any other item. This is a very important topic, maybe the most important aspect, in order to have a nice looking, fast displaying, fast simulating and stable simulation model. \n 本教程將指導您逐步建構機器人或任何其他項目的清晰仿真模型。為了具有美觀，快速顯示，快速仿真和穩定的仿真模型，這是一個非常重要的主題，也許是最重要的方面。 \n To illustrate the model building process, we will be building following manipulator: \n 為了說明模型的建構過程，我將建構以下的機械手臂 : \n \n [機械手模型] \n 建立可見的形狀Building the visible shapes \n When building a new model, first, we handle only the visual aspect of it: the dynamic aspect (its undelying even more simplified/optimized model), joints, sensors, etc. will be handled at a later stage. \n 在構建新模型時，首先，我們僅處理它的視覺方面：動態方面（其簡化，優化模型的不合理之處），關節，傳感器等將在以後階段進行處理。 \n We could now directly create primitive shapes in CoppeliaSim with [Menu bar --> Add --> Primitive shape --> ...]. When doing this, we have the option to create pure shapes, or regular shapes. Pure shape will be optimized for dynamic interaction, and also directly be dynamically enabled (i.e. fall, collide, but this can be disabled at a later stage). Primitive shapes will be simple meshes, which might not contain enough details or geometric accuracy for our application. Our other option in that case would be to import a mesh from an external application. \n 現在，我們可以使用 [ 菜單欄 -> 添加 -> 基本形狀 -> ...] 在 CoppeliaSim 中直接創建基本形狀。這樣做時，我們可以選擇創建純形狀或常規形狀。純形狀將針對動態交互進行優化，也可以直接動態啟用（例如，跌落，碰撞，但可以在以後禁用）。基本形狀將是簡單的網格，對於我們的應用程序，可能沒有足夠的細節或幾何精度。在這種情況下，我們的另一個選擇是從外部應用程序導入網格。 \n When importing CAD data from an external application, the most important is to make sure that the CAD model is not too heavy, i.e. doesn't contain too many triangles. This requirement is important since a heavy model will be slow in display, and also slow down various calculation modules that might be used at a later stage (e.g.\xa0minimum distance calculation, or dynamics). Following example is typically a no-go (even if, as we will see later, there are means to simplify the data within CoppeliaSim): \n 從外部應用程序導入 CAD 數據時，最重要的是確保 CAD 模型不會太複雜，即不包含太多三角形。這項要求很重要，因為重型模型的顯示速度會很慢，並且還會減慢以後可能使用的各種計算模塊（例如最小距離計算或動力學）。以下示例通常是不可行的（即使我們會在後面看到，即使有方法可以簡化 CoppeliaSim 中的數據）： \n \n [ 複雜的 CAD 數據（實體和線框）] \n Above CAD data is very heavy: it contains many triangles (more than 47'000), which would be ok if we would just use a single instance of it in an empty scene. But most of the time you will want to simulate several instances of a same robot, attach various types of grippers, and maybe have those robots interact with other robots, devices, or the environment. In that case, a simulation scene can quickly become too slow. Generally, we recommend to model a robot with no more than a total of 20'000 triangles, but most of the time 5'000-10'000 triangles would just do fine as well. Remember: less is better, in almost every aspect. \n 上面的 CAD 數據非常大：它包含許多三角形（超過 47'000 個），如果我們只在空的場景中使用單個三角形的實例，這是可以的。但是大多數時候，您將需要模擬同一機器人的多個實例，連接各種類型的夾爪，並可能使這些機器人與其他機器人，設備或環境進行交互。在這種情況下，模擬場景可能很快變得太慢。通常，我們建議對不超過 2 萬個三角形的機器人進行建模，但是在大多數情況下， 5 000 至 10 000 個三角形也可以。記住：在幾乎所有方面，少即是好。 \n What makes above model so heavy? First, models that contain holes and small details will require much more triangular faces for a correct representation. So, if possible, try to remove all the holes, screws, the inside of objects, etc. from your original model data. If you have the original model data represented as parametric surfaces/objects, then it is most of the time a simple matter of selecting the items and deleting them (e.g. in Solidworks). The second important step is to export the original data with a limited precision: most CAD applications let you specify the level of details of exported meshes. It might also be important to export the objects in several steps, when the drawing consists of large and small objects; this is to avoid having large objects too precisely defined (too many triangles) and small objects too roughly defined (too few triangles): simply export large objects first (by adjusting the desired precision settings), then small objects (by adjusting up precision settings). \n 是什麼使上述模型如此大？首先，包含孔和小細節的模型將需要更多的三角形面才能正確表示。因此，如果可以，請嘗試從原始模型數據中刪除所有的孔，螺釘，物體的內部等。如果您將原始模型數據表示為參數化曲面 / 對象，則通常在大多數情況下只需選擇並刪除它們即可（例如在 Solidworks 中）。第二個重要步驟是以有限的精度導出原始數據：大多數 CAD 應用程序都允許您指定導出的網格的細節級別。當工程圖由大小對象組成時，分幾步導出對象可能也很重要。這是為了避免大對象定義太精確（三角形太多）和小對象定義太粗（三角形太少）：首先簡單地導出大對象（通過調整所需的精度設置），然後導出小對象（通過調整精度設置） ）。 \n CoppeliaSim supports currently following CAD data formats: OBJ, STL, DXF, 3DS (Windows only), and Collada. URDF is also supported, but not mentionned here since it is not a pure mesh-based file format. \n CoppeliaSim當前支持以下 CAD 數據格式： OBJ ， STL ， DXF ， 3DS （僅 Windows ）和 Collada 。還支持 URDF ，但此處未提及，因為它不是基於純網格的文件格式。 \n Now suppose that we have applied all possible simplifications as described in previous section. We might still end-up with a too heavy mesh after import: \n 現在，假設我們已按照上一節中所述應用了所有可能的簡化。導入後，我們可能最終仍然會留下一個過大的網格： \n \xa0 \n [導入的CAD數據] \n You can notice that the whole robot was imported as a single mesh. We will see later how to divide it appropriately. Notice also the wrong orientation of the imported mesh: best is to keep the orientation as it is, until the whole model was built, since, if at a later stage we want to import other items that are related to that same robot, they will automatically have the correct position/orientation relative to the original mesh. \n 您會注意到整個機器人是作為單個網格導入的。稍後我們將看到如何對其進行適當劃分。還要注意導入網格的方向錯誤：最好保持其方向不變，直到構建整個模型為止，因為如果在以後的階段中我們要導入與同一機器人相關的其他項目，它們將自動具有相對於原始網格的正確位置 / 方向。 \n At this stage, we have several functions at our disposal, to simplify the mesh: \n 在此階段，我們可以使用多種功能來簡化網格： \n ˙ Automatic mesh division: \xa0allows to generate a new shape for all elements that are not linked together via a common edge. This does not always work for the selected mesh, but is always worth a try, since working on mesh elements gives us more control than if we had to work on all elements at the same time. The function can be accessed with [Menu bar --> Edit --> Grouping/Merging --> Divide selected shapes]. Sometimes, a mesh will be divided more than expected. In that case, simply merge elements that logically belong together (i.e. that will have the same visual attributes and that are part of the same link) back into one single shape ([Menu bar --> Edit -> Grouping/Merging --> Merge selected shapes]). \n ˙ 自動網格劃分 ：允許為未通過公共邊鏈接在一起的所有元素生成新形狀。這並不總是適用於選定的網格，但是總是值得一試的，因為與必須同時處理所有元素相比，處理網格元素可以為我們提供更多的控制權。可以通過 [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 分割所選形狀 ] 訪問該功能。有時，網格劃分會超出預期。在這種情況下，只需將邏輯上屬於一起的元素（即，具有相同的視覺屬性並且屬於同一鏈接的一部分）合併回一個單一形狀（ [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 合併選定的形狀 ] ）。 \n ˙ Extract the convex hull : \xa0allows to simplify the mesh by transforming it into a convex hull. The function can be accessed with [Menu bar --> Edit --> Morph selection into convex shapes]. \n ˙ 提取凸殼 ：通過將其轉換為凸殼來簡化網格。可以通過 [ 菜單欄 -> 編輯 -> 將選擇變形為凸形 ] 來查看該功能。 \n ˙ Decimate the mesh : \xa0allows to reduce the number of triangles contained in the mesh. The function can be accessed with [Menu bar --> Edit --> Decimate selected shape...]. \n ˙抽取網格 ：減少網格中包含的三角形數量。可以通過 [ 菜單欄 -> 編輯 -> 縮小所選形狀 ...] 查看該功能。 \n ˙ Remove the inside of the mesh : \xa0allows to simplify the mesh by removing its inside. This function is based on\xa0 vision sensors \xa0and might give more or less satisfying results depending on the selected settings. The function can be accessed with [Menu bar --> Edit --> Extract inside of selected shape]. \n ˙ 刪除網格的內部 ：允許通過刪除其內部來簡化網格。此功能基於視覺傳感器，根據所選設置可能會或多或少地令人滿意。可以通過 [ 菜單欄 -> 編輯 -> 提取選定形狀的內部 ] 查看該功能。 \n There is no predefined order in which above functions can/should be applied (except for the first item in the list, which should always be tried first), it heavily depends on the geometry of the mesh we are trying to simplify. Following image illustrates above functions applied to the imported mesh (let's suppose the first item in the list didn't work for us): \n 沒有可以應用上述功能的預定義順序（列表中的第一項除外，應始終首先嘗試該項），它在很大程度上取決於我們要簡化的網格的幾何形狀。下圖說明了應用於導入的網格的上述功能（假設列表中的第一項對我們不起作用）： \n \n [凸殼，抽取網格並在內部提取 ] \n Notice how the convex hull doesn't help us at this stage. We decide to use the mesh decimation function first, and run the function twice in order to divide the number of triangles by a total of 50. Once that is done, we extract the inside of the simplified shape and discard it. We end-up with a mesh containing a total of 2'660 triangles (the original imported mesh contained more than 136'000 triangles!). The number of triangles/vertices a shape contains can be seen in the shape geometry dialog. 2'660 triangles are extremely few triangles for a whole robot model, and the visual appearance might suffer a little bit from it. \n 請注意，凸殼在現階段對我們沒有幫助。我們決定首先使用網格抽取功能，然後運行兩次該功能，以將三角形的數量總共除以 50 。完成後，我們提取簡化形狀的內部並將其丟棄。我們最終得到的網格總共包含 2'660 個三角形（原始導入的網格包含了 136'000 個三角形！）。形狀包含的三角形 / 頂點的數量可以在形狀幾何對話框中看到。對於整個機器人模型， 2'660 三角形是極少的三角形，因此視覺外觀可能會因此受到影響。 \n At this stage we can start to divide the robot into separate links (remember, we currently have only a single shape for the whole robot). You can do this in two different ways: \n 在這一階段，我們可以開始將機器人劃分為單獨的鏈接（請記住，我們目前整個機器人只有一個形狀）。您可以通過兩種不同的方式執行此操作： \n ˙ Automatic mesh division: \xa0this function, which was already described in previous section, will inspect the shape and generate a new shape for all elements that are not linked together via a common edge. This does not always work, but is always worth a try. The function can be accessed with [Menu bar --> Edit --> Grouping/merging --> Divide selected shapes]. \n ˙ 自動網格劃分 ：此功能已在上一節中進行了描述，它將檢查形狀並為未通過公共邊鏈接在一起的所有元素生成新形狀。這並不總是有效，但總是值得嘗試的。可以通過 [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 分割所選形狀 ] 查看該功能。 \n ˙ Manual mesh division:  via the the triangle edit mode, you can manually select the triangles than logically belong together, then click Extract shape. This will generate a new shape in the scene. Delete the selected triangles after that operation. \n ˙ 手動網格劃分 ：通過三角形編輯模式，您可以手動選擇邏輯上不屬於邏輯的三角形，然後單擊“提取形狀”。這將在場景中生成新形狀。完成該操作後，刪除選定的三角形。 \n In the case of our mesh, method 1 worked fine: \n 對於我們的網格，方法 1 可以正常工作： \n \n [網格劃分 ] \n Now, we could further refine/simplify individual shapes. Sometimes also, a shape might look better if its convex hull is used instead. Othertimes, you will have to use several of above's described techniques iteratively, in order to obtain the desired result. Take for instance following mesh: \n 現在，我們可以進一步細化 / 簡化單個形狀。有時，如果改用凸包，形狀可能會看起來更好。有時，您將不得不反複使用上述幾種技術，以獲得所需的結果。以以下網格為例： \n \n [外部網格 ] \n \xa0", 'tags': '', 'url': 'W17.html'}]};
var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '\n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Solvespace編譯', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯影片: \n \n 對 About 新增學號 \n \n', 'tags': '', 'url': 'Solvespace編譯.html'}, {'title': 'Solvespace 操作', 'text': 'tutorial_1_simple_plate \n \n Solvespace_tutorial_10_Fidget Spinner \n \n Solvespace_tutorial_5_a more Complex Model \n \n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': '雙輪車控制模擬', 'text': 'Python remote API 雙輪車控制模擬 \n 目前為近端操控，未來的目標是希望在遠端裝置上執行 \n \n', 'tags': '', 'url': '雙輪車控制模擬.html'}, {'title': '繪圖認證範例', 'text': 'http://mde.tw/cad2019/content/CAD2CAE.html 挑選進行繪圖驗證 \n \n', 'tags': '', 'url': '繪圖認證範例.html'}, {'title': 'NX12翻譯', 'text': '第 2 章 - 入門 \n 首先開始 NX 12 會話。 本章將提供使用所需的基礎知識 \n 任何 CAD / CAM 軟體包。 您將學習開始，理解和使用 \n 用於建模，製圖等的 NX 12 軟體包。它包含五個小節： a ）打開 NX 12 \n 會話， b ）打印，保存和關閉零件文件， c ）熟悉 NX 12 用戶 \n 界面 d ）使用圖層和 e ）了解重要的命令和對話框。 \n 2.1 啟動 NX 12 會話並打開文件 \n 2.1.1 開始 NX 12 會話 \n 在 Windows 桌面屏幕上，單擊開始→程序列表→ Siemens NX 12 → NX 12 \n \n NX 12 主螢幕將打開。 這是 NX 12 軟體的閘道器。  NX 12 空白 \n 屏幕看起來如下圖所示。 屏幕上將顯示一些提示，關於 \n 當前版本的特殊功能。 閘道器還具有標準工具欄，它將 \n 允許您創建一個新文件或打開一個現有文件。 在“閘道器”屏幕的左側，有 \n 是一個稱為“資源欄”的工具欄，它具有與不同模塊相關的菜單，並且能夠 \n 定義和更改軟體的角色，查看軟體使用的歷史記錄等。 這會 \n 將在本章稍後詳細解釋。 \n \n 2.1.2 打開一個新文件 \n 首先，我們學習如何在 NX 12 中打開新零件文件。要創建新文件，請執行以下三個操作選項。 \n 單擊螢幕頂端的“新建”按鈕 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 New （新建）。 \n 或按 <Ctrl> + N \n 這將打開一個新會話，詢問要創建的新文件的類型，名稱和位置。 \n NX 12 中有多種文件類型，可從位於以下位置的“模板”對話框中選擇 \n 窗口的中心。 所選文件的屬性顯示在“預覽”下 \n 右邊。 由於我們要在建模環境中工作並創建新零件，因此僅 \n 指定工作環境的單位（英寸或毫米）以及名稱和位置 \n 文件。 默認單位是毫米。 \n 輸入文件的適當名稱和位置，然後點擊“確定”。 \n \n 2.1.3 打開零件文件 \n 有幾種打開現有文件的方法。 \n 點擊螢幕頂端的打開或打開最近的零件按鈕要么 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 Open （打開）。 \n 或按 <Ctrl> + O 將顯示“打開零件文件”對話框。 您可以在右側查看文件預覽 \n 窗口。 您可以通過取消單擊“預覽”按鈕前面的框來禁用“預覽”點擊取消退出窗口 \n \n 2.2列印，保存和關閉文件 \n 2.2.1列 印 NX 12 圖像要從當前顯示器打印圖像，點擊文件→打印\xa0 \xa0 \n 下圖顯示了“打印”對話框。 這裡， \n 您可以選擇要使用的打印機或指定編號 \n 打印份數，紙張尺寸等。 \n 您還可以為所有三個選擇比例尺寸。 \n 您也可以選擇 \n 通過單擊來打印，即線框實體模型 \n 輸出下拉菜單，如右圖所示 \n 單擊取消退出窗口 \n 2.2.2 保存零件文件 \n 必須經常保存工作。 如果 \n 由於某些原因， NX 12 會關閉，而零件沒有 \n 儲存後，所有工作都會丟失。 要儲存零件文件，點擊文件→儲存 \n 有五個選項可儲存文件： \n 儲存：此選項將使用 \n 與創建零件文件時給定的名稱相同。 \n 僅保存工作零件：此選項將僅保存螢幕上的活動部分。 \n 另存為：此選項允許您使用其他名稱和 / 或類型將零件保存在螢幕上。 \n 默認類型是 .prt 。 但是，您可以將文件另存為 IGES （ .igs ）， STEP 203 （ .stp ）， STEP 214 （ .step ）， AutoCAD DXF （ .dxf ）， AutoCAD DWG （ .dwg ）， CATIA 模型（ .model ）和 CATIA V5 （ .catpart ）。 \n 全部保存：此選項將保存所有打開的零件文件及其現有名稱。 \n 保存書籤：此選項會將螢幕截圖和當前模型的上下文保存在螢幕上 \n 作為 .JPEG 文件和書籤。 \n \n 2.2.3 關閉零件文件 \n 您可以選擇關閉零件在螢幕上可看見點擊文件→關閉 \n 如果您關閉文件，該文件將從以下位置清除 \n 工作記憶和任何更改不保存將丟失。 因此，請記住 \n 選擇“保存並關閉”，“另存並關閉”， \n 保存所有並關閉或保存所有並退出。 在在前三個選項的情況下， \n 已選擇，否則所有零件都將關閉，但 NX 12 會話繼續運行。 \n \n 2.2.4 退出 NX 12 會話 \n 點擊文件→退出 \n \n 如果您打開了文件並在未保存的情況下進行了更改，則消息將詢問您是否 \n 真的想退出。選擇否，保存文件，然後退出 \n . NX 12 接口 \n 通過使用不同的圖標， NX 12 的用戶界面變得非常簡單。大部分的 \n 可以通過在屏幕上導航滑鼠並單擊圖標來執行命令。 \n 鍵盤輸入主要限於輸入值和命名文件。 \n 2.3.1 滑鼠功能 \n 2.3.1.1 滑鼠左鍵（ MB1 ） \n 滑鼠左鍵（在 NX 中稱為鼠標鍵 1 （ MB1 ））用於選擇圖標，菜單， \n 和圖形屏幕上的其他實體。 在任何功能上雙擊 MB1 都會自動 \n 打開“編輯對話框”。 單擊對像上的 MB1 ，使用戶可以快速訪問 \n 如下所示的幾個選項。 這些選項將在下一章中討論。 \n \n 2.3.1.2 滑鼠中鍵（ MB2 ） \n 滑鼠中鍵（ MB2 ）或滾動按鈕用於通過按下來旋轉對象， \n 按住並拖動。 模型也可以繞單個軸旋轉。 繞軸旋轉 \n 垂直於屏幕，將滑鼠指針放在圖形屏幕的右邊緣附近，然後 \n 旋轉。 同樣，對於垂直軸和垂直於屏幕的軸，單擊底部 \n 屏幕的上邊緣和上邊緣分別旋轉。 如果您同時按住 MB2 \n 位置幾秒鐘，它將固定旋轉點（出現橙色圓圈符號） \n 您可以在對象周圍拖動以查看。 \n 如果是滾動按鈕，則可以通過滾動對象來放大和縮小。 單擊 MB2 將 \n 如果打開了任何彈出窗口或對話框，還可以執行“確定”命令 \n \n 2.3.1.3 鼠標右鍵（ MB3 ） \n MB3 或滑鼠右鍵用於訪問用戶界面彈出窗口菜單。 您可以訪問後續彈出的選項取決於選擇模式和應用。 的下圖顯示在草圖中應用。單擊 MB3 時選擇功能將提供選項與該功能有關（對象 / 動作菜單）。 \n \n 單擊 MB3 並按住按鈕將在功能周圍顯示一組圖標。這些圖標具有可應用於功能的可能命令 \n \n 2.3.1.4 按鈕組合 \n 放大 / 縮小： \n 同時按住 MB1 和 MB2 並拖動 \n 按住鍵盤上的 <Ctrl> 按鈕，然後按住並拖動 MB2 \n \n 同時按住 MB2 和 MB3 並拖動 \n 要按住鍵盤上的 <Shift> 按鈕並按住 MB2 \n \n 菜單快捷方式： \n ➢按住 <Ctrl> + <Shift> 和 MB1 ， MB2 和 MB3 可以看到功能的快捷方式， \n 直接草圖組和同步建模組 \n 2.3.2 NX 12 網關 \n 下圖顯示了打開文件時 NX 12 窗口的典型佈局。 這是 NX 12 的閘道器可以選擇要處理的任何模塊，例如建模，必須注意這些工具欄可能不完全在同一位置 \n 如下圖所示。 工具欄可以放置在屏幕上的任何位置或位置。查找相同的圖標集。 \n \n 2.3.2.1 功能區欄 \n 功能區界面使用戶能夠輕鬆訪問不同的命令，而無縮小圖形窗口區域。命令組織在不同選項卡下的功能區欄中和組，以便於識別和訪問。 \n 例如，在上圖所示的功能區欄中，我們具有“開始”，“曲線”等選項。在裡面 \n 主頁選項卡中，我們具有直接草圖，特徵，同步建模和曲面組。 並且在每個 \n 組中，我們有一組功能強大的命令。 \n 2.3.2.2 快速訪問工具欄 \n 快速訪問工具欄具有最常用的按鈕（保存，復原，重做，剪切，複製，貼上和 \n 最近的命令）以加快建模過程。 您可以輕鬆地將這些按鈕自定義為如下圖所示 \n \n 2.3.2.3 命令查找器 \n 如果您不知道在哪裡可以找到命令，請使用“命令查找器”。 假設我們忘記了 \n 樣式掃描的位置。 \n 在命令查找器中輸入掃描將游標懸停在樣式掃描上 \n NX 將顯示命令路徑：菜單→插入→掃描→樣式化掃描 \n 或是在命令查找器中輸入掃描在“命令查找器”窗口中單擊樣式化掃描 \n \n 2.3.2.4 上邊界 \n 頂部邊框中最重要的按鈕是菜單按鈕。 大部分功能菜單中提供了該軟件的版本。 選擇欄顯示選擇選項。 這些選項包括用於選擇特徵的“過濾器”，“零部件 / 裝配體”和“捕捉點”。 “視圖”選項中的常用按鈕也顯示在“頂部邊框”中。 \n 2.3.2.5 資源欄 \n 資源欄使用很少的用戶界面就可以在一處顯示多個頁面的圖標空間。  NX 12 將所有導航器窗口（裝配體，約束和零件）放置在資源欄中，以及重用庫， HD3D 工具，網頁瀏覽器，歷史記錄面板， Process Studio ，製造嚮導，角色和系統場景。 兩個最重要的寡婦是解釋如下 \n 零件導航器 \n 單擊零件瀏覽器圖標，第三個資源欄頂部的圖標 \n \n 零件導航器提供可視化表示要素中的父子關係以樹型格式在單獨的窗口中工作。它顯示了在此期間使用的所有原語，實體造型。 它允許您執行各種編輯這些功能上的操作。 例如，您可以使用零件導航器來抑製或取消抑制功能或更改其參數或位置尺寸。 刪除綠色的勾號將“取消”功能。 該軟體會給警告如果父子關係被打破取消任何特定功能。 \n 零件瀏覽器可用於所有 NX 應用程序而不僅僅是建模。 但是，您只能執行功能編輯操作當您在“建模”模塊中時。 在零件瀏覽器中編輯特徵將自動更新模型。 特徵編輯將在後面討論。 \n 歷史 \n 單擊歷史記錄圖標，資源欄頂部的第七個圖標歷史選項板提供對最近打開的文件或其他選項板條目的快速訪問。 有可能用於重新下載最近處理過的零件或重複添加一小組調色板項目的模型。歷史選項板會記住上一次使用的選項板選項以及會話的狀態當它關閉時。  NX 存儲已加載到會話中的選板並將其還原到 \n 下屆會議。 移動零件時，系統不會清除歷史記錄選板。要重用零件，請將其從歷史記錄中拖放調色板到圖形窗口。 要重新加載零件，單擊已保存的會話書籤。 \n 2.3.2.6 提示線 \n 提示行顯示提示消息，指示接下來需要採取的行動。 在  -  的右邊提示行，狀態行位於顯示有關當前選項的消息或最近完成的功能。進度表顯示在提示行中 \n 當系統執行耗時的操作，例如下載大型裝配體。 的儀表顯示的操作百分比完成了。 操作完成後，系統顯示下一個適當的提示。 \n \n 2.3.3 幾何選擇 \n 您可以過濾選擇方法，這有助於在緊密的簇中輕鬆選擇幾何。 在此外，您可以執行任何功能 NX 12 智能提供的操作選項取決於所選實體。 項目的選擇可以基於實體的程度，例如選擇幾何實體，特徵和零部件。 選擇方法可以選擇 \n 選擇選擇工具欄中的圖標之一。 \n 2.3.3.1 特徵選擇 \n 點任何圖標，可以選擇零件文件中的特徵。 它不會選擇基本實體，例如邊緣面等。選定的特徵也可以應用於一部分或整個根據要求組裝。 \n \n 除此之外，可以進一步縮小特徵的過濾範圍在下拉菜單中選擇所需選項之一，如數字。 例如，選擇“曲線”將僅高亮顯示屏幕。 默認值為“無選擇過濾器”。 \n \n 2.3.3.2 常規對象選擇 \n 將鼠標光標導航到實體附近，直到用突出顯示它為止洋紅色，然後單擊滑鼠左鍵以選擇任何幾何實體，功能或組件。 \n \n 如果要選擇隱藏在顯示的幾何圖形後面的實體，將滑鼠光標放在屏幕上該區域附近，以便光標球佔據了投影在屏幕上的隱藏幾何的一部分屏幕。幾秒鐘後，球形光標變為加號如圖所示。單擊鼠標左鍵（ MB1 ）以獲取選擇確認對話框，如下圖如下。這個 QuickPick 菜單由實體列表組成捕獲在光標的球內的實體按以下升序排列實體的程度。例如，邊和頂點指定為較低給出實心面的數字更高的數字。通過移動光標顯示的數字， NX 12 將用洋紅色突出顯示屏幕上的相應實體。 \n \xa0 \n 2.3.4 用戶首選項 \n 在菜單按鈕（位於主窗口左上角）中選擇首選項以查找各種可用選項用戶首選項用於定義以下內容的顯示參數：新對象，名稱，佈局和視圖。 您可以設置圖層，創建對象的顏色，字體和寬度。 您也可以設計佈局和視圖，控制對象和視圖的顯示名稱和邊框，更改選擇球的大小，指定選擇矩形方法，設置鏈接公差和方法，以及設計和激活網格。 改變你使用“首選項”菜單進行覆蓋 \n 客戶默認使用相同功能 \n \n 2.3.4.1 用戶界面 \n 選擇首選項→用戶界面以找到對話框中的選項用戶界面選項可自定義 NX 的工作方式以及與您設置的規范進行交互。 您可以控制主窗口的位置，大小和可見性狀態，圖形顯示和信息窗口。 您可以設置系統用於的小數位數（精度）信息中顯示的輸入文本字段和數據窗口。 您還可以為文件指定完整或小型對話框選擇。 您還可以設置宏選項並啟用撤消操作的確認對話框。 \n \n 佈局選項卡允許您選擇用戶界面環境 \n “觸摸”選項卡使您可以使用觸摸屏 \n 通過“選項”選項卡，您可以設置精度級別（在“信息”中窗口） \n 工具中的日誌選項卡允許您使用多種編程語言 \n 工具中的“巨集”選項卡允許您設置顯示動畫時的暫停 \n \n \n 2.3.4.2 可視化 \n ➢選擇首選項→可視化以找到對話框中的選項 \n \n 該對話框控制會影響顯示的屬性圖形窗口。一些屬性與零件或零件的特定視圖的設置這些屬性保存在零件文件中。 對於其中許多屬性，當創建新零件或視圖時，該設置初始化為客戶默認文件。 其他屬性與會話和適用於會話中的所有部分。一些設置這些屬性在每個會話中保存在註冊表。 對於某些會話屬性，設置可以為初始化為客戶默認值默認文件的一個環境變量。 \n ➢選擇“首選項”→“調色板”以查找對話框中的選項 \n ➢點擊首選項→在背景獲取另一個彈出對話框。 \n \n 你可以改變您想要的背景色背景色是指圖形窗口的背景。  NX 支持所有顯示模式的漸變背景。 您可以選擇陰影或線框的背景顏色顯示。 背景可以是純色或漸變色。所有背景顏色的有效選項是 0 到 255 。 \n 您可以更改並觀察顏色和物體的半透明 \n ➢單擊首選項→對象 \n \n 這將彈出一個對話框窗口“對象首選項”。您也可以將此設置應用於以下對象的單個實體。 例如，您可以單擊任何特定的實體的表面並應用“顯示”設置。 \n 2.3.5 應用 \n 可以使用“文件”選項打開應用程序位於主窗口的左上角或功能區欄上方的“應用程序”選項卡。 您可以選擇要運行的應用程序類型。對於例如，您可以選擇“建模”，“製圖”組裝，如圖所示。 打開您的計算機時啟動的默認應用程序文件或開始新文件的是 Modeling 。 接下來，我們將介紹其中一些應用程序章節。 \n \n 2.4 層 \n 圖層用於將對象存儲在文件中，並像容器一樣工作以將對象收集到文件中。有條理和一致的方式。 與簡單的視覺工具（例如顯示和隱藏）不同，圖層提供一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1 圖層控制 \n 使用 NX 12 ，您可以使用“圖層”控制對像是可見還是可選。 一層是 NX 12 中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。 NX 12 那裏有 256 個可用層，其中之一始終是工作層。  256 個圖層中的任何一個都可以被分配給四種狀態分類之一 \n \n 工作 \n 可選擇的 \n 僅可見 \n 不可見 \n \n 工作層是在其上創建對象的層，並且始終可見並且可以選擇，而它仍然是工作層。啟動新零件文件時，第 1 層是默認的工作層。當工作層更改為另一種類型的層時，先前的工作層將自動變為“可選”，並且可以然後被分配為“僅可見”或“不可見”狀態 \n 可以在一層上的對像數量不受限制。 您可以自由選擇要創建的圖層 \n 對象及其所在層的狀態。 \n 要將狀態分配給一個或多個圖層， \n ➢選擇查看→圖層設置 \n \n 但是，應該注意的是，在關於文件之間層將有利於保持一致性。 \n 2.4.2 分層命令 \n 我們將按照簡單的步驟來練習“層”中的命令。 首先，我們將創建兩個對象 \n （固體）按如下方法處理。實體模型的詳細信息將在下一部分討論章節。 我們在此處繪製的實體僅在本章中用於實踐。 \n ➢選擇文件→新建 \n 命名文件並選擇要在其中保存文件的文件夾。確保在下拉菜單中選擇單位為毫米。 選擇文件類型作為模型 \n ➢選擇菜單→插入→設計特徵→圓錐 \n \n \n ➢在類型下選擇直徑和高度 \n ➢點擊確定 \n ➢ 右鍵單擊屏幕，然後選擇“右側視圖” 三座標 \n ➢右鍵單擊屏幕，然後選擇“渲染”。樣式→陰影 \n 您將能夠看到類似於圖片的實心圓錐在右邊。 \n 讓我們練習一些圖層命令。 \n ➢選擇查看→移動到圖層，系統將要求您選擇一個對象 \n ➢將光標移到圓錐上並單擊，使其突出顯示 \n ➢點擊確定 \n \n 在窗口頂部的“目標層”或“類別”空間中，鍵入 25 並單擊“確定”。 \n 圓錐現在已經到達第 25 層。 它不再是在第 1 層中看到。 \n ➢要查看圓錐體，請單擊查看→圖層設置 \n \n ➢您可以看到第 25 層有對象，而默認的工作層 1 沒有對象。 \n 錐體將再次出現在屏幕上。 保存文件，因為我們 \n 將在本教程的後面部分中使用它。 \n \n 2.5 協調系統 \n NX 中有不同的坐標系。 三軸符號用於標識坐標系。 \n 2.5.1 絕對坐標系 \n 絕對坐標係是從所有對像都被引用。 這是一個固定的坐標系， NX 12 建模空間中每個對象的位置和方向是與這個系統有關。 絕對坐標系（或絕對 CSYS ）還提供了通用的參考框架零件文件。 一個零件文件中 X = 1 ， Y = 1 和 Z = 1 的絕對位置是其他零件文件中的相同位置。 \n \n 圖形窗口左下角的 View Triad 僅是視覺對象代表絕對坐標系方向的指示器模型。 \n \n 2.5.2 工作坐標系 \n 工作坐標系（ WCS ）是您要用於構造時要使用的確定特徵的方向和角度。  WCS 的軸表示為 XC ， YC 和 ZC 。（“  C ”代表“當前”）。 它可能有多個坐標零件文件中的系統，但其中只有一個可以是工作坐標系。 \n 2.5.3 移動 WCS \n 在這裡，您將學習如何翻轉和旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS \n \n 2.5.3.1 轉換 WCS \n 此過程將移動 WCS 原點到您指定的任何位置，但 WCS 的方向（軸的方向）將保持不變。 \n ➢選擇菜單→格式→ WCS →原點 \n \n 顯示“構造器”對話框。 你可以從頂部的下拉菜單中指定一個點對話框或在 XC ， YC ，和 ZC 字段。大部分工作將與工作有關坐標系而不是絕對坐標系統。 默認為 WCS 。 \n 2.5.3.2 旋轉 WCS \n 您還可以圍繞其軸線之一旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS →旋轉 \n 該對話框顯示了六種旋轉 WCS 的方法。這些旋轉程序遵循正確的旋轉規則。 您還可以指定 WCS 被旋轉。 \n 您可以保存要使用的 WCS 的當前位置和方向作為永久坐標系。 \n ➢選擇菜單→格式→ WCS →保存 \n 2.6 工具欄 \n 工具欄包含圖標，可作為許多功能的快捷方式。右圖正常顯示了工具欄的主要項目顯示。但是，您可以找到更多不同圖標功能命令，基於所選模塊以及模塊是如何定制的。 \n \n 右鍵單擊現有工具欄上的任何位置，將提供其他工具欄的列表。 您可以通過選擇添加任何工具欄。 \n 通常，默認設置對於大多數操作應該足夠了，但是在某些操作期間，可能需要其他工具欄。 如果要添加與命令和工具欄有關的按鈕 \n ➢單擊任何工具欄上的下拉箭頭，然後選擇“自定義” \n \n 這將彈出“自定義”對話框窗口，其中包含“命令”選項卡下所有與每個工具欄有關的工具欄和命令。 要添加命令 \n ➢選擇一個類別並將命令從“命令”列表中拖動到所需的位置 \n \n 您可以通過以下方式自定義 NX 12 界面的設置單擊資源欄上的“角色”選項卡。角色選項卡具有工具欄菜單的不同設置顯示在 NX 12 界面上。 它可以讓你自定義您希望在工具欄中顯示的工具欄接口。 \n \n', 'tags': '', 'url': 'NX12翻譯.html'}, {'title': 'NX12繪製自走車', 'text': '', 'tags': '', 'url': 'NX12繪製自走車.html'}]};
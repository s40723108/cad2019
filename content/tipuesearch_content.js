var tipuesearch = {"pages": [{'title': 'About', 'text': '', 'tags': '', 'url': 'About.html'}, {'title': 'week2', 'text': '', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'w12', 'text': 'https://www.youtube.com/watch?v=BJSuLT826j0 \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': '影片', 'text': '', 'tags': '', 'url': '影片.html'}, {'title': 'Solvespace 編譯', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n \n \n Solvespace \xa0繪圖 \n \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': 'V-rep', 'text': '\n', 'tags': '', 'url': 'V-rep.html'}, {'title': '啟用 CMSiMDE 中的網誌系統', 'text': '\n', 'tags': '', 'url': '啟用 CMSiMDE 中的網誌系統.html'}, {'title': 'w15', 'text': '\n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '\n \n', 'tags': '', 'url': 'w16.html'}, {'title': 'w17', 'text': '\n', 'tags': '', 'url': 'w17.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數 \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'nx12翻譯', 'text': '', 'tags': '', 'url': 'nx12翻譯.html'}, {'title': '第七章', 'text': '第7章-自由曲面建模 \n \xa0\xa0\xa0 在本章中，您將學習如何在NX 12中創建自由曲面。至此，您已經擁有了學習了使用“表單特徵”或“草圖繪製”創建模型的不同方法。自由曲面建模涉及為美觀或功能目的以曲面形式創建模型， \n \n 7.1概述 \n \xa0\xa0\xa0 在NX 12中，“自由格式功能”選項位於 Menu → Insert → Surface/Mesh Surface/Sweep/Flange Surface 和 Menu → Edit → Surface 更高級操作。您可以通過多種方式從現有的方式創建自由格式功能您擁有的特徵（例如點，邊，曲線等）。 \n 7.1.1從點創建自由特徵 \n \xa0\xa0\xa0 如果您正在構造或預先存在的數據僅包含點，則您可以嘗試使用以下三個選項之一從給定點構建曲面\xa0\xa0\xa0 \n \xa0 \xa0 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n ➢從 Menu 點擊 Insert → Surface\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n Four Point Surface: \xa0 ：如果您有四個角點。 \n Through Points: 如果這些點形成一個矩形陣列。 \n From Poles: \xa0 如果定義的點形成一個矩形數組，該矩形數組與通過它們的線相切。 \n \n 7.1.2通過節字符串創建自由形式的特徵 \n \xa0\xa0\xa0 如果構造幾何包含連接的字符串對象（曲線和邊緣），可以使用以下之一創建自由曲面的兩個選項 \n \xa0\xa0\xa0 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n ➢從 Menu 點擊 Insert → Mesh Surface \n Ruled:   如果您有兩個大致平行的字符串。 \n Through Curves:   如果三個或三個以上的字符串大致相同平行。 \n 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n \n Through Curve Mesh: 如果至少四節使用弦在每個方向上都存在至少兩個弦（平行和垂直）。 \n Swept:   如果至少兩個截面弦大致垂直，則使用 \n ( 從 Menu 選擇 Insert →Sweep ) 7.1.3從面孔創建自由特徵 如果構造幾何包含圖紙或面，則可以使用以下兩個選項之一來構造自由曲面。 Offset Surface:  如果您要偏移面，請使用此選項。 ( 從  Menu  點擊  Insert →Offset/Scale ) \n Extension:   如果您有臉部和邊緣，邊緣曲線或臉部曲線，請使用此選項。（點擊 Insert →Flange Surface →Extension ) 7.2自由形式的功能建模 讓我們來進行一些自由結構建模的練習，其中包括結構化點，點雲，曲線和面孔。 結構化點是一組點的已定義行和列。點雲具有一組形成雲的分散點。 7.2.1用點建模 ➢打開文件 freeform_thrupoints.prt ➢右鍵單擊 Toolbars 並確保 Surface Toolbar 被檢查 您將看到七行點 ➢選擇 Insert →Surface →Through Points \n or ➢單擊圖標 Through Points \n ( 在工具欄中對話框如右圖所示彈出 ) ➢對於 Patch Type 選擇 Multiple ➢對於 Closed Along 選擇 Neither ➢對於 Row Degree  and  Column Degree, ➢請點擊 OK 下一個對話框將如下圖所示。 ➢點擊 Chain from All ➢選擇頂部起點和底部終點最左行的點，如下圖所示 點的第一行將突出顯示 。 ➢重複相同的過程以選擇點的前四行。之後，將彈出一個窗口，詢問是否所有點指定，或者如果您想指定另一行。 ➢選擇 Specify Another Row 直到所有行都指定的 ➢指定所有行後，選擇 All Points Specified ➢點擊 Cancel 在 Through Points 窗口 您將看到如下所示的表面。 7.2.2 用點雲建模. ➢打開名為 freeform_cloud.prt 點雲將如下所示。 ➢選擇 Insert → Surface → Fit Surface ➢單擊 Surface Toolbar 工具欄上的此圖標 Fit Surface 將出現以下對話框。 ➢單擊點雲，選擇屏幕上的所有點。 ➢在 Fit Direction 下拉菜單中，選擇 Best Fit 。這匹配點雲坐標系統與原始系統 ➢將 U 和 V 度的默認值更改為 3 ➢點擊 OK 最終表面將如下所示。 7.2.3 使用曲線建模. ➢打開名為 freeform_thrucurves_parameter.prt 的文件 曲線如下圖所示。 ➢選擇 Insert → Mesh Surface → Through Curves ➢選擇第一個 section string ，如下所示。確保選擇左側的某個位置弧線。 方向矢量顯示在字符串的末尾。 ➢單擊鼠標中鍵 MB2 或點擊 Add New Set ➢單擊與第一個相似的下一條曲線，然後單擊鼠標中鍵 MB2 你可以看到一個表面如圖所示，在兩條曲線之間生成 ➢重複相同的步驟以選擇其餘的字符串。 記得點擊 MB2 (or Add New Set)   選擇每條曲線後。 ➢對於 Alignment 選擇 Parameter ➢對於   Patch Type 選擇  Single \xa0  ➢對於   Construction 選擇 Simple 選擇“簡單”選項後，系統會嘗試構建最簡單的表面，使貼劑的數量最少。 ➢點擊 OK 7.2.4使用曲線和麵建模 ➢打開名為 freeform_thrucurves_faces.prt 的文件 曲線和面將顯示為對 ➢選擇   Insert →Mesh Surface →Through Curves ➢選擇頂面的 邊1。 ➢選擇 edge-2， 然後單擊 MB2 ➢在對話框中的 Alignment 部分，取消選中 Preserve Shape 校驗框 \n 您將在屏幕上顯示以下形狀。 \n 確保所有箭頭都指向同一方向（如果不是，請雙擊任一箭頭即可翻轉其方向）。 ➢在 Alignment 對話框選擇 Parameter ➢在 Continuity 對話框 for First Section 選擇 G2 (Curvature)  選項，然後選擇頂面的兩個斑塊 ➢點擊 APPLY ➢現在選擇edge-3，然後單擊 MB2 ➢選擇下平面的三個邊緣 ➢將選項更改為 G2 (Curvature)  在裡面 Continuity 對話框 First Section ➢選擇剛創建的表面，然後單擊 MB2 ➢對於 Continuity 的 Last Section,  選擇 G2 (Curvature)  然後選擇底部三個補丁作為參考 最終的自由曲面應如下所示。 ➢點擊 OK 退出 7.3練習 7.3.1曲線練習 上圖顯示了使用點作為“控制點”或“直通點”創建的三個曲線。下表列出了每條曲線的對應點和建模類型 \xa0 \n （a）在Curve-1和Curve-2之間創建直紋曲面。 \n （b）沿+ Y方向拉伸Curve-3以創建參考曲面。然後創建在Curve-2和Curve-3之間的曲面，該曲面應具有G1（切線）連續性到剛擠出的參考曲面。 \n 提示：您可以將這些點從文本文件導入NX。首先，將點坐標保存到文本文件。 \n 然後，使用“ NX文件”->“導入”->“文件中的點”將其導入。 \n 7.3.2表面練習 \n \n 給定2個點集，這些點集存儲在“ Fit curve.pts”和“ Fit surface.pts”文件中 \n （可在文件夾）。 \n （ a ）將這兩組點導入 NX 。 （上圖顯示了預期的結果） （b）根據“ Fit curve.pts”文件中的點創建樣條曲線。您可以使用 Fit Curve 要創建它，請調整 Degree  和  Segments 以獲得更好的擬合。 （c）根據“ Fit surface.pts”文件中的點創建自由曲面。您可以使用Fit Surface要創建它，請調整Degree 和 Patche以獲得更好的擬合度。 \n （d）使用樣條曲線作為邊界沿Z方向修剪自由曲面。的預期結果就像計算機鼠標的上表面。 7.3.3設計計算機鼠標 對與以下所示類似的計算機鼠標進行建模（可隨意搜索更多圖片，如下所示）參考資料），或者您可以提出一個新設計，然後對其建模。 作為提示，創建一些在不同基準平面上的邊界曲線，並使用它們創建自由曲面。 7.3.4設計運動水壺 \n 設計運動水壺，並使用 NX （曲線和曲面）中的自由形狀功能對其建模。 \n \n 。 \n', 'tags': '', 'url': '第七章.html'}, {'title': '第八章', 'text': '第 8 章－有限元分析 \n 有限元分析（ FEA ）是有限元方法（ FEM ）的實際應用預測結構或流體對應用因素（例如力，壓力，熱量和振動。通常，該過程從創建幾何模型開始。然後將模型細分（網格化）為連接的簡單幾何形狀的小塊（元素）在特定的節點上。材料特性和邊界條件分別應用於元件。最終，諸如 NX 12 之類的軟件解決了該 FEA 問題並輸出了結果，可視化。它有助於工程師在使用之前更好地了解產品性能。它是經過製造和測試的。 \n FEA的一些應用包括結構分析，熱分析，流體流動動力學，和電磁兼容性。其中， FEA 最常用於結構和實體力學應用程序來計算機械性能（例如應力和位移）。這些通常對硬件的性能至關重要，可用於預測故障。在在本章中，我們將處理實體零件的結構應力和應變分析。 \n 8.1概述 \n 8.1.1元素形狀和節點 \n 可以根據維數和元素的類型將元素分為不同類型。元素中的節點數。以下是一些用於離散化 \n 一維元素 \n \n 二維元素 \n 三角形： \n \n 四邊形： \n \n 三維元素 \n 四面體（具有4個三角形面的實體）： \n \n 六面體（具有 6 個四邊形面的實體）： \n \n 節點類型 \n 外部節點 \n 1角節點 \n 2側節點 \n 內部節點 \n 通常，隨著有限元的大小變小， FEA 可以有更精確的解決方案，但是計算時間也會變長。 \n 8.1.2解決步驟 \n 開始仿真： 您可以從以下之一選擇求解器： NX Nastran ， NX Nastran 聲學， NX Nastran 振動聲學， NX Nastran 設計， Samcef ， NX 熱 / 流量， Simcenter 電子系統冷卻， Simcenter 空間系統熱學， NX Multiphysics ， Simcenter Acoustics BEM ， MSC Nastran ， Ansys ， Abaqus 和 LS-DYNA 。另外，您可以選擇要執行的分析類型。在本教程中，僅結構分析將是覆蓋了 NX Nastran 設計。 \n 選擇材料屬性： 這使您可以更改將要分配給模型。例如，如果我們使用鋼製造葉輪，則可以輸入材料特性，例如密度，泊鬆比等。也可以保存這些材料特性可以在圖書館中使用以備將來使用，也可以從材料庫中檢索。 \n 施加載荷： 此選項使您可以施加不同類型的載荷，例如力或固體上的壓力以及方向和大小。 \n 應用邊界條件： 簡單來說，邊界條件限制了度元素的自由。一些元件可以旋轉固定，而某些則可以限制來自平移運動。 \n 網格物體網格劃分： 用於將模型離散化為有限元。通常，我們選擇 \n 元素的四面體形狀近似。您仍然可以選擇 2D 和 1D 元素 \n 根據情況和要求，從下拉菜單中選擇這些選項。 \n 解決方案和結果： 這是根據選定的問題求解所有控制方程的命令 \n 解算器以及以上所有選項。這樣就可以解決問題並給出分析結果。 \n \n \n \n \n \n \n 8.1.3仿真導航器 \n Simulation Navigator提供了激活功能現有解決方案，創建新解決方案，並使用創建的解決方案通過創建和修改運動對象來構建機制。 \n 要顯示 Simulation Navigator ， \n ➢點擊 Simulation Navigator 標籤中 Resource bar 如圖所示 \n \n 它顯示了為模型創建的仿真的列表。每一個模擬，它顯示載荷，邊界條件，類型的列表網格，結果，生成的報告等。 \n 8.2模擬創建 \n ➢複製並粘貼文件 Impeller_impeller.prt 進入新文件夾以避免更改組裝而成 \n ➢點擊 New → Simulations 如果零件尚未在 NX 窗口中打開 \n \n ➢打開這個新復制的文件\xa0 \n ➢如果零件已經在 NX 中打開，則從頂部功能區欄中，單擊 Application → Design \n \n ➢點擊 File → All Applications → Simulation → Design Simulation \n \n 首次在 Design Simulation 模塊中打開任何文件時，它將自動彈出“新建” FEM 和模擬對話框可創建模擬。 \n ➢在彈出對話框中，單擊“確定”以創建新的仿真。 \n 然後在下一個彈出的“解決方案”窗口中，可以選擇“求解器”和“分析類型”。默認的求解器類型為 NX Nastran 設計，分析類型為結構。 \n ➢選擇 OK 創建一個新的 Solution 稱為解決方案 1 ，它將顯示在 Simulation Navigator 。在這裡，我們將其他項保留為默認值。 \n \n 現在，模擬導航器將如下圖所示。 \n \n 8.3材料性能 \n 下一步是將材料屬性分配給此模擬的實體模型。因為庫中沒有任何數據可檢索標準材料，我們將創建一個。讓我們假設我們將使用鋼製造葉輪。 \n \n ➢點擊 Assign Materials 從上方顯示的功能區欄中 \n 彈出分配材料窗口。您可以選擇從庫中選擇預定義的材料，或者創建一種新材料。 \n ➢選擇 Impeller 對於 Select Body \n ➢點擊 Create 圖標以創建新材料 \n 輸入名稱和值，如下圖所示。注意單位。 \n （請注意， 30e6 代表 30×10^6 ） \n ➢選擇 OK 退出 Isotropic Material 窗口 \n \n 現在，我們已將材料分配給葉輪模型。 \n \n 8.4網格化 \n 網格選項將模型離散化為小模型元素。 \n ➢點擊 3D Tetrahedral 圖標 ctetra \n 將會彈出一個窗口，詢問類型和元素的大小。 \n ➢首先，單擊 impeller model 在屏幕上 Select Bodies \n 然後，有兩種類型的四面體NX 12中可用的元素。一個是4節點，另一個是10節點。 \n ➢選擇 Type 成為 TETRA(10) \n ➢輸入 Element Size 如 \xa0 1.0 inch \n ➢點擊 OK \n \n 您可以找到帶有小四面體的模型元素。看起來如圖所示下面。 \n \n 注意：在對實體進行網格劃分時，需要權衡考慮。如果您選擇較小的具有更大節點的元素，您將比大元素獲得更高的分析精度。 \n 但是，使用較小的元素求解模型所需的時間將比使用較小的元素所需的時間長得多。較大的元素。因此，根據研究的準確性要求以及根據最終產品來選擇組件，為元素選擇適當的參數，然後節點。 \n \n 8.5負載 \n 實體模型上施加的載荷應輸入到系統中。對於葉輪，假設主力作用在渦輪葉片的凹表面上。該負載可以近似在所有五個表面上施加常壓。由於我們不關心負載，讓我們將值設為 100 lbf/in^2 英寸以誇大葉片的變形。 \n ➢點擊 Load Type 然後選擇 Pressure \n ➢單擊五個凹面刀片如下圖所示 \n ➢輸入以下值 Pressure 為 100 和保持單位為 lbf / in ^ 2 （磅 / 平方英寸） \n \n \n 8.6邊界條件 \n 如您在組裝中看到的，葉輪與軸一起圍繞圓錐體的軸線旋轉。前幾章。它不是固定的，但我們關注的是葉片相對於葉輪的核心。圓錐形芯子相對固定，葉片變形是進行相應的分析。 \n ➢點擊 Constraint Type \n ➢選擇 Fixed Constraint \n \n 這種約束將將所選實體限制為六個自由度來自平移和旋轉。您可以通過點擊工具欄上的“約束類型”下拉菜單。 \n ➢單擊葉輪的錐形表面，如下圖所示 \n ➢點擊OK \n \n 8.7結果與模擬 \n 8.7.1解決模擬 \n 有限元模型現在可以進行求解和分析了。最好先檢查一下在完成模型求解之前先完成模型。檢查模型 \n ➢點擊 Menu → Analysis → Finite Element Mode Check → Model Setup 點擊 \n Model \xa0 Setup 中的圖標 Checks and Information 在功能區欄中分組如右圖所示， \n 這將彈出一個窗口。 \n ➢選擇 OK \n \n 這將顯示檢查操作的結果。您將在單獨的地方看到任何錯誤和警告窗口。萬一您收到錯誤或警告，請返回完成前面的步驟並完成所需的操作東西。如果您沒有收到錯誤或警告，那麼您就是準備解決 FEA 問題。 \n \n ➢點擊 Solve \n 這將打開“求解”窗口。 \n ➢單擊 OK 而不進行任何更改 \n \n 解決這項工作可能需要一段時間。等到出現“分析作業監視器”窗口，顯示要完成的工作。當求解器正在執行時計算， Analysis Job Monitor 將顯示為進行中 \n ➢點擊 Cancel 當 Analysis Job Monitor 的時候窗口顯示 Completed \n \n 8.7.2 FEA結果 \n ➢從 Simulation Navigator 雙擊 Structural 下 Results \n ➢您將被定向到 Post Processing Navigator \n 後處理導航器顯示您剛剛解決的所有解決方案。如果您點擊“ +”登錄在解決方案的前面，您將看到對模型執行的不同分析。 \n \n ➢雙擊 Displacement-Nodal \n 屏幕現在如下所示。您可以輕鬆地解釋顏色編碼的結果。橘紅色顯示最大變形區域，藍色區域顯示最大變形區域。最小變形區。您可以觀察到，由於圓錐形核心是固定的，因此會遇到零變形。分析還表明，尖端出現的最大變形刀片的數量約為1.9×10^-3英寸。 \n \n 在後處理導航器上，您可以通過雙擊每個來繼續更改結果選項如下所示。您可以單擊其他無效標記以查看各種結果。一些其他結果如下所示。 \n \n 8.7.3仿真和動畫 \n \n ➢點擊 Animate \n ➢在 Animation 窗口，更改數量幀數為 10 ，然後單擊 Play 按鈕查看變形動畫 \n 現在，您可以看到有關葉輪運行方式的動畫在將載荷施加到葉片時變形。 \n ➢要在結果顯示中進行任何設置更改，點擊 Edit Post View \n ➢檢查 Show undeformed mode l 然後點擊 OK \n \n 現在，按“播放”按鈕以查看動畫。這將顯示變形的動畫原始形狀為灰色，如下圖所示 \n \n ➢點擊 Stop 按鈕停止動畫 \n ➢點擊 \xa0 Return to Home 返回到 FEA 模型 \n 有兩種方法可以提高 FEA 結果的準確性： \n •減少元素的大小 \n •增加插值多項式的階數（即，使用二次甚至偶數代替線性多項式） \n 讓我們嘗試使用不同的設置創建模擬 \n ➢右鍵單擊 Solution 1 在裡面 Simulation Navigator \n ➢選擇 Clone 複製第一個模擬 \n ➢一次 Copy of Solution 1 被建造，重命名為 Solution 2 \n ➢從 Simulation Navigator, under 3D Meshes 右鍵單擊 3D Mesh \n （ 1 ）然後單擊 Edit \n ➢在彈出對話框中，更改 Type 至 TETRA4 \n ➢點擊 OK \n ➢點擊 Solve 圖標來解決模擬 \n ➢點擊 OK \n \n 分析作業監視器應顯示狀態解決方案 2 的完成。 \n ➢點擊 Cancel \n ➢在 Simulation Navigato r 連按兩下上 Results for Solution 2 \n 下圖顯示了分析。您可以觀察最大值的變化。保存所有模擬並關閉文件。 \n \n 8.8練習 \n 8.8.1喬木壓桿 \n 開啟檔案 ‘Arborpress_L-bar.prt’ \xa0 ”，並根據材料進行類似的結構分析作為鋼。對於網格，元素的大小和類型應為“ \xa0 10 ”和“ \xa0 Tetra （ 10 ）”。對於負載如上圖所示，在頂面上施加 500 級的法向壓力下面。 \n 對於邊界條件，固定三個平面（前高亮面，與如下圖第二個圖所示。 \n \n 8.8.2搖臂 \n 在本練習中，您將檢查單元類型和網格大小對有限結果的影響元素分析。打開您在第4章中建模的搖臂。分配以下材料性質：楊氏模量= 3.0×10 ^ 7psi，泊鬆比= 0.29，質量密度= 7.35×10 ^ -4金屬塊/ in3。固定沉孔和沈孔（即固定圓柱面）如下圖所示，並在面部垂直施加600 psi的壓力負載顯示。對於以下四種情況，分別獲得撓度輪廓和馮·米塞斯應力輪廓。 \n \n a) \xa0 Tetra 4 元素，元素大小 -0.2 \n b) \xa0 Tetra 4 元素，元素大小 - 05 \n c) \xa0 Tetra 10 元素，元素大小 -0.2 \n d) \xa0 Tetra 10 元素，元素大小 - 05 \n \n \n \xa0 \n', 'tags': '', 'url': '第八章.html'}, {'title': 'w17翻譯', 'text': "\n Model definition 型號定義 \n \n \n Now we are ready to define our model. We start by building the model herarchy: we attach the last dynamic robot link ( robot_link_dyn6 ) to its corresponding joint ( robot_joint6 ) by selecting \xa0 robot_link_dyn6 , then control-selecting \xa0 robot_joint6 , then [Menu bar --> Edit --> Make last selected object parent]. We could also have done this step by simply dragging object \xa0 robot_link_dyn6 \xa0 onto \xa0 robot_link6 \xa0 in the \xa0 scene hierarchy . We go on by now attaching \xa0 robot_joint6 \xa0 to \xa0 robot_link_dyn5 , and so on, until arrived at the base of the robot. We now have following scene hierarchy: \n 現在我們準備定義模型了。我們從建立模型層次結構開始：我們先選擇最後一個動態機器人鏈接（robot_link_dyn6）與其對應的關節（robot_joint6），然後選擇[robot_link_dyn6]，然後控制選擇[robot_joint6]，然後選擇[菜單欄->編輯->創建最後一個選定對象父母]。我們也可以通過簡單地將對象robot_link_dyn6拖到場景層次結構中的robot_link6上來完成此步驟。我們現在繼續將robot_joint6附加到robot_link_dyn5上，依此類推，直到到達機器人的底部為止。現在，我們具有以下場景層次結構： \n \n It is nice and more logical to have a simple name for the model base, since the model base will also represent the model itself. So we rename \xa0 robot \xa0 to \xa0 robot_visibleBase , and \xa0 robot_dyn \xa0 to \xa0 robot . Now we select the base of the hierarchy tree (i.e. object \xa0 robot ) and in the \xa0 object common properties \xa0 we enable \xa0 Object is model base . We also enable \xa0 Object/model can transfer or accept DNA . A model bounding box appeared, encompassing the whole robot. The bounding box however appears to be too large: this is because the bounding box also encompasses the invisible items, such as the joints. We now exclude the joints from the model bounding box by enabling the \xa0 Don't show as inside model selection \xa0 item for all joints. We could do the same procedure for all invisible items in our model. This is also a useful option in order to also exclude large sensors or other items from the model bounding box. We now have following situation: \n 為模型庫起一個簡單的名字是很好而且更合乎邏輯的，因為模型庫也將代表模型本身。因此，我們將robot重命名為robot_visibleBase，並將robot_dyn重命名為robot。現在我們選擇層次結構樹的基礎（即對像機械手），並在對象公共屬性中啟用``對像是模型基礎''。我們還使對象/模型可以轉移或接受DNA。出現了一個模型包圍盒，包圍了整個機器人。但是，邊界框似乎太大：這是因為邊界框還包含不可見的項，例如關節。現在，通過對所有關節啟用“不顯示為內部模型”選擇項，將關節從模型邊界框中排除。我們可以對模型中的所有不可見項執行相同的過程。這也是一個有用的選項，可以將大型傳感器或其他項目也排除在模型邊界框之外。我們現在有以下情況： \n \n \n We now protect our model from accidental modification. We select all visible objects in the robot, then enable \xa0 Select base of model instead : if we now click a visible link in the scene, the base of the robot will be selected instead. This allows us to manipulate the model as if it was a single object. We can still select visible objects in the robot via control-shift-clicking in the scene, or by selecting the object in the scene hierarchy. We now put the robot into a correct default position/orientation. First, we save current scene as a reference (e.g. if at a later stage we need to import CAD data that have the same orientation at the curent robot). Then we select the model and \xa0 modify its position/orientation \xa0 appropriately. It is considered good practice to position the model (i.e. its base object) at X=0 and Y=0. \n 現在，我們保護模型免受意外修改。我們選擇機器人中的所有可見對象，然後啟用“選擇模型的基礎”：如果現在單擊場景中的可見鏈接，則會改為選擇機器人的基礎。這使我們可以像對待單個對像一樣操作模型。我們仍然可以通過按住Shift鍵並單擊場景或在場景層次中選擇對象來選擇機器人中的可見對象。現在，我們將機器人置於正確的默認位置/方向。首先，我們將當前場景保存為參考（例如，如果稍後需要在當前機器人上導入方向相同的CAD數據）。然後，我們選擇模型並適當修改其位置/方向。將模型（即其基礎對象）定位在X = 0和Y = 0處被認為是一種好習慣。 \n \n We now run the simulation: the robot will collapse, since the joints are not controlled by default. \xa0 When we added the joints in the previous stage , we created joints in force/torque mode, but their motor or controller was disabled (by default). We can now adjust our joints to our requirements. In our case, we want a simple PID controller for each one of them. In the joint dynamic properties, we click \xa0 Motor enabled \xa0 and adjust the \xa0 maximum torque . We then click \xa0 Control loop enabled \xa0 and select \xa0 Position control (PID) . We now run the simulation again: the robot should hold its position. Try to switch the current physics engine to see if the behaviour is consistent across all supported physics engines. You can do this via the appropriate \xa0 toolbar button , or in the \xa0 general dynamics properties . \n 現在我們運行模擬：由於默認情況下關節不受控制，因此機器人將崩潰。在上一階段添加關節時，我們以力/扭矩模式創建了關節，但其電動機或控制器已禁用（默認情況下）。現在，我們可以根據需要調整關節。在我們的案例中，我們希望為每個控制器都提供一個簡單的PID控制器。在關節動態屬性中，單擊“啟用電機”並調整最大扭矩。然後，單擊啟用控制環，然後選擇位置控制（PID）。現在，我們再次運行仿真：機器人應保持其位置。嘗試切換當前的物理引擎，以查看行為在所有受支持的物理引擎之間是否一致。您可以通過相應的工具欄按鈕或在常規動力學屬性中執行此操作。 \n During simulation, we now verify the scene dynamic content via the \xa0 Dynamic content visualization & verification toolbar button . Now, only items that are taken into account by the physics engine will be display, and the display is \xa0 color-coded . It is \xa0 very important \xa0 to always do this, and specially when your dynamic model doesn't behave as expected, in order to quickly debug the model. Similarly, always look at the scene hierarchy during simulation: dynamically enabled objects should display a ball-bounding icon on the right-hand side of their name. \n 在仿真過程中，我們現在通過“動態內容可視化和驗證”工具欄按鈕來驗證場景動態內容。現在，將僅顯示物理引擎考慮的項目，並且該顯示使用顏色編碼。始終執行此操作非常重要，尤其是在動態模型無法按預期運行時，為了快速調試模型，尤其如此。同樣，在仿真過程中請始終查看場景層次：動態啟用的對象應在其名稱的右側顯示一個球形圖標。 \n \n \n Finally, we need to prepare the robot so that we can easily attach a gripper to it, or easily attach the robot to a mobile platform (for instance). Two dynamically enabled shapes can be rigidly attached to each other in two different ways: \n 最後，我們需要準備機器人，以便我們可以輕鬆地將抓取器連接到它，或輕鬆地將機器人連接到移動平台（例如）。可以通過兩種不同的方式將兩個動態啟用的形狀嚴格地彼此附加： \n \n by grouping them : select the shapes, then [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes]. \n 通過對它們進行分組：選擇形狀，然後選擇[菜單欄->編輯->分組/合併->對選定形狀進行分組]。 \n by attaching them via a force/torque sensor : a \xa0 force torque sensor \xa0 can also act as a rigid link between two separate dynamically enabled shapes. \n 通過通過力/扭矩傳感器進行連接：力扭矩傳感器還可以充當兩個單獨的動態啟用形狀之間的剛性鏈接。 \n \n In our case, only option 2 is of interest. We create a force/torque sensor with [Menu bar --> Add --> Force sensor], then move it to the tip of the robot, then attach it to object \xa0 robot_link_dyn6 . We change its size and visual appearance appropriately (a red force/torque sensor is often perceived as an optional attachment point, check the various robot models available). We also change its name to \xa0 robot_attachment : \n 在我們的情況下，只有選項2是有意義的。我們使用[菜單欄->添加->力傳感器]創建一個力/扭矩傳感器，然後將其移動到機器人的尖端，然後將其附加到對象robot_link_dyn6。我們會適當地更改其尺寸和外觀（紅色力/扭矩傳感器通常被視為可選的連接點，請檢查可用的各種機器人型號）。我們還將其名稱更改為robot_attachment： \n \n Now we drag a gripper model into the scene, keep it selected, then control-click the attachment force sensor, then click the \xa0 Assembling/disassembling toolbar button . The gripper goes into place: \n 現在，我們將抓手模型拖到場景中，使其保持選中狀態，然後按住Control鍵單擊並單擊附著力傳感器，然後單擊“裝配/拆卸”工具欄按鈕。夾持器到位： \n \n The gripper knew how to attach itself because it was appropriately configured during its model definition. We now also need to properly configure the robot model, so that it will know how to attach itself to a mobile base for instance. We select the robot model, then click \xa0 Assembling \xa0 in the \xa0 object common properties . Set an empty string for \xa0 'Parent' match values , then click \xa0 Set matrix . This will memorize the current base object's local transformation matrix, and use it to position/orient itself relative to the mobile robot's attachment point. To verify that we did things right, we drag the model \xa0 Models/robots/mobile/KUKA Omnirob.ttm \xa0 into the scene. Then we select our robot model, then control-click one of the attachment points on the mobile platform, then click the \xa0 Assembling/disassembling toolbar button . Our robot should correctly place itself on top of the mobile robot: \n 抓具知道如何附加自身，因為它在模型定義期間進行了適當的配置。現在，我們還需要正確配置機器人模型，以便它將知道如何將自己附加到移動基座上。我們選擇機器人模型，然後在對象公共屬性中單擊“組裝”。為“父項”匹配值設置一個空字符串，然後單擊“設置矩陣”。這將記住當前基礎對象的局部轉換矩陣，並使用它相對於移動機器人的附著點定位/定向。為了驗證我們做的正確，我們將模型Models / robots / mobile / KUKA Omnirob.ttm拖到場景中。然後，我們選擇機器人模型，然後在移動平台上按住Control鍵並單擊其中一個附接點，然後單擊“組裝/拆卸”工具欄按鈕。我們的機器人應該正確地將自己放置在移動機器人的頂部： \n \n Now we could add additional items to our robot, such as sensors for instance. At some point we might also want to attach \xa0 embedded scripts \xa0 to our model, in order to control its behaviour or configure it for various purposes. In that case, make sure to understand \xa0 how object handles are accessed from embedded scripts . We can also control/access/interface our model from a \xa0 plugin , from a \xa0 remote API \xa0 client, from a \xa0 ROS \xa0 node, from a \xa0 BlueZero \xa0 node, or from an \xa0 add-on . \n 現在，我們可以向機器人添加其他項目，例如傳感器。在某些時候，我們可能還希望將嵌入式腳本附加到我們的模型中，以便控制其行為或出於各種目的對其進行配置。在這種情況下，請確保了解如何從嵌入式腳本訪問對象句柄。我們還可以通過插件，遠程API客戶端，ROS節點，BlueZero節點或附加組件來控制/訪問/接口模型。 \n Now we make sure we have reverted the changes done during robot and gripper attachment, we collapse the hierarchy tree of our robot model, select the base of our model, then save it with [Menu bar --> File --> Save model as...]. If we saved it in the \xa0 model \xa0 folder, then the model will be available in the \xa0 model brower . \n 現在，確保已恢復在機械手和抓爪安裝過程中所做的更改，我們折疊了機械手模型的層次樹，選擇了模型的基礎，然後使用[菜單欄->文件->將模型另存為...]。如果我們將其保存在模型文件夾中，則模型將在模型瀏覽器中可用。 \n", 'tags': '', 'url': 'w17翻譯.html'}, {'title': 'FFmpeg', 'text': '字幕 \n ffmpeg -i input.mp4 -vf subtitles=input.srt output.mp4 \n 聲音 \n ffmpeg -i origin.mp4 -c copy -an new.mp4 \n 浮水印 \n ffmpeg -i input.mp4 -i kmol_102x30_color.png -filter_complex "overlay=5:950" output.mp4 \n', 'tags': '', 'url': 'FFmpeg.html'}, {'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}]};
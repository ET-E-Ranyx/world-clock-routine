# World Clock & Daily Routine (世界時鐘與日常管家)

一個優雅、直覺且兼具實用性的跨時區時鐘與日常工作管理桌面應用程式。採用現代卡片式介面設計，支援美國西岸與台灣雙時區對照、跨時區鬧鐘、每日例行習慣追蹤與隨手待辦事項管理。

---

## 主要功能特點

### 1. 雙時區即時時鐘 (Dual Timezone Clock)
- **美國西岸時間 (Pacific Time)** 與 **台灣時間 (Taiwan Time)** 雙時鐘對照。
- 精確每秒自動更新，支援當地日光節約時間 (夏令/冬令時間) 自動轉換。
- 清楚標示時區名稱、目前星期與日期。

### 2. 跨時區智慧鬧鐘 (Timezone Alarms)
- 支援以 **美國西岸時間** 或 **台灣時間** 設定觸發時間。
- 自訂鬧鐘標籤與重複提醒。
- 內建溫和音效（Web Audio API 蜂鳴聲）與視窗彈出提醒。

### 3. 每日固定例行公事 (Daily Routine Management)
- 追蹤每日習慣與固定工作事項（如晨會、看盤、運動等）。
- **每天自動重置** 完成狀態，不需手動清理。
- 即時計算完成百分比與視覺化進度條。
- 支援「管理例行事項」自訂模板（隨時新增、修改或刪除）。

### 4. 隨手待辦清單 (Quick To-Do List)
- 快速捕捉臨時待辦事項與備忘錄。
- 勾選完成時具備平滑消除動畫，自動計算剩餘筆數。
- 支援個別刪除與鍵盤 Enter 快速送出。

### 5. 現代化視覺與深色模式
- 溫馨柔和的色彩搭配與圓角卡片風格。
- 支援 **深色模式 (Dark Mode)** / **淺色模式** 一鍵切換。
- 資料全部自動儲存於本機 `LocalStorage`，重啟後資料不遺失。

---

## 技術架構

- **前端核心**：HTML5, Vanilla CSS3 (Flexbox/Grid, CSS Variables, Animations), Modern JavaScript (ES6+)
- **字體支援**：Google Fonts (Fredoka & Noto Sans TC)
- **桌面框架**：[Electron](https://www.electronjs.org/)
- **打包工具**：[electron-builder](https://www.electron.build/)

---

## 快速開始

### 1. 安裝依賴套件

請先確保您的電腦已安裝 [Node.js](https://nodejs.org/) (建議 LTS 版本)。

```bash
# 複製專案
git clone https://github.com/ET-E-Ranyx/world-clock-routine.git

# 進入專案目錄
cd world-clock-routine

# 安裝依賴套件
npm install
```

### 2. 本地開發運行

在 Electron 桌面視窗中啟動應用：

```bash
npm start
```

> **提示**：您也可以直接使用瀏覽器開啟 `index.html` 進行預覽。

---

## 打包成 Windows 執行檔 (.exe)

本專案已設定好 `electron-builder`，可直接打包為 Windows 免安裝可攜式（Portable）版本：

```bash
npm run build
```

打包完成後，產出的 `.exe` 執行檔會存放在 `dist/` 資料夾中。

---

## 📁 專案結構

```plaintext
├── index.html        # 應用程式主要使用者介面與前端邏輯
├── main.js           # Electron 主程序視窗配置
├── package.json      # 專案資訊、依賴套件與打包設定
├── make-icon.js      # 應用程式 Icon 生成工具腳本
├── icon.ico          # Windows 應用程式圖示 (ICO)
├── icon.png          # 應用程式圖示 (PNG)
├── .gitignore        # Git 忽略檔案設定
└── README.md         # 專案說明文件
```

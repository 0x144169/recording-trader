# Recording Trader Desktop

一个功能完整的交易记录桌面应用，支持图片存储、数据分析、复盘模式、学习园、回测、晒单分享图、导出学习 Zip 与完整备份。  
**本仓库仅提供产品介绍与安装包下载**

## 关于

- **界面与初版参考**：基于 Cai_dudu《RT 仪表盘记录.html》
- **桌面版与优化**：jerry（数据持久化、复盘模式、多平台支持及持续体验优化）

## 界面预览

| 仪表盘 | 订单总览 | 复盘模式 |
|--------|----------|----------|
| ![仪表盘](docs/screenshots/dashboard.png) | ![订单总览](docs/screenshots/journal.png) | ![复盘模式](docs/screenshots/review-mode.png) |
| 学习园 | 设置 | 新订单 |
| ![学习园](docs/screenshots/learning.png) | ![设置](docs/screenshots/settings.png) | ![新订单](docs/screenshots/new-order.png) |
| 导出学习 Zip | 图片预览 | 日报告 |
| ![导出学习 Zip](docs/screenshots/export-learning.png) | ![图片预览](docs/screenshots/image-preview.png) | ![日报告](docs/screenshots/daily-report.png) |
| 晒单（卡片入口） | 晒单选项弹窗 | 晒单分享图 |
| ![晒单入口](docs/screenshots/share-card-entry.png) | ![晒单弹窗](docs/screenshots/share-card-modal.png) | ![晒单结果](docs/screenshots/share-card-result.png) |
| 做单警示与背景（防 FOMO） | 每日笔数/回撤限制 | 日历打脸提醒 |
| ![做单警示](docs/screenshots/settings.png) | ![每日限制](docs/screenshots/settings.png) | ![打脸提醒](docs/screenshots/dashboard.png) |
| 语音录入（本地 Whisper） | 语音模型设置 | |
| ![语音录入](docs/screenshots/voice-input.png) | ![语音模型](docs/screenshots/voice-settings.png) | |
| 知识库 (BETA) | 语音与 AI（启用开关 + 获取模型列表） | 盘口时区（亚/欧/美冬夏令时） |
| ![知识库](docs/screenshots/knowledge.png) | ![语音与AI](docs/screenshots/ai-settings.png) | ![盘口时区](docs/screenshots/settings.png) |
| 当日总结 / 单笔分析（可带做单限制） | 回测单笔 AI 分析（关键位·入场·CISD·清扫·市价挂单·开平仓） | |
| ![当日总结](docs/screenshots/daily-report.png) | ![回测AI分析](docs/screenshots/backtest-ai.png) | |

## 下载与安装

### 下载

👉 **[点击这里下载最新版本](https://github.com/0x144169/recording-trader/releases)**  

在 Releases 页面选择与您系统对应的 zip（Windows x64 / Windows ARM64 / macOS Intel / macOS Apple Silicon），下载后解压即可使用，无需安装。

### macOS 用户：如提示「无法验证开发者」无法打开

在 macOS 上首次打开从网上下载的 App 时，可能会提示「无法验证开发者」或「已损坏」。按下面步骤用终端解除限制即可（只需做一次）：

1. **打开「终端」**  
   - 按 `Command + 空格` 打开 Spotlight，输入 **终端** 或 **Terminal**，回车；  
   - 或：打开 **访达** → 左侧点 **应用程序** → 进入 **实用工具** → 双击 **终端**。

2. **在终端里输入下面这行命令（先不要回车）：**  
   ```bash
   sudo xattr -rd com.apple.quarantine 
   ```  
   注意：`com.apple.quarantine` 后面有一个**空格**，先保留，不要删。

3. **把本应用的「应用本身」拖进终端窗口**  
   - 找到你解压后的 **Recording Trader.app**；  
   - 用鼠标**拖拽这个 .app 图标**到终端窗口里，松手后终端会自动补全路径。

4. **回车执行**  
   - 按 **回车**，若提示输入密码，输入你 Mac 的**登录密码**（输入时不会显示字符，输完直接回车即可）。

5. **再双击打开 .app**  
   - 此时再双击 **Recording Trader.app** 即可正常打开。

## 本地智能总结（可选）

应用支持使用本机 [Ollama](https://ollama.com/) 做「本周智能总结」「回测智能总结」和「单笔 AI 分析」，数据仅在本地处理、不上传。

1. **安装 Ollama**  
   前往 [ollama.com](https://ollama.com/) 下载并安装，安装后保持 Ollama 运行（托盘或终端里可看到）。  
   **Windows 用户**：可指定安装目录。在命令行执行安装程序时加上参数，例如：`OllamaSetup.exe /DIR="d:\some\location"`（将 `d:\some\location` 改为你想要的路径）。

2. **在 RT 中配置**  
   打开 **设置 → ⑦ 语音与 AI**，先勾选 **「启用 AI 分析」**，再填写 **API 地址**（如 `http://127.0.0.1:11434`）与 **模型**（必填）。可点击 **「获取列表」** 从本机 Ollama 拉取已安装的模型名并下拉选择。若要用截图或 K 线图分析，请选用支持 image 的模型，可到 [ollama.com/library](https://ollama.com/library) 查看。填写完成后点击「检测连接」，提示连接成功即配置完成。

3. **拉取模型**  
   在终端执行 `ollama pull <你填写的模型名>`，确保本机已有所填模型后再使用智能总结功能。

## 数据存储位置

所有交易记录、截图、数据自动保存在本地：

- **Windows**：`C:\Users\{你的用户名}\AppData\Roaming\recording-trader\`
- **macOS**：`~/Library/Application Support/recording-trader/`

目录内包含交易数据 JSON、策略与品种配置、以及 `images/` 截图文件夹，便于备份或迁移。

## 核心功能

- 📊 **交易记录** - 记录方向、结果、金额、盈亏比
- 📸 **截图管理** - 每笔交易最多 10 张做单截图 + 每日最多 10 张全景截图
- 📈 **数据分析** - 胜率、平均盈亏、最大回撤、盈亏比统计
- 📅 **日历与日报告** - 交易日历、当日笔记/对比图/星级评分
- 🏷️ **标签系统** - 交易标签、收藏标签快速添加
- 📋 **复盘模式** - 日期/结果筛选、心理短板标签（贪婪/恐惧/后悔/侥幸）、进度条与分组列表
- 📐 **回测** - 回测文件夹与记录、开仓/止盈/止损自动算盈亏与 R:R、资金曲线、排序分页、图片预览
- 📋 **订单总览** - 支持「小列表」（默认）与「大卡片」视图切换，单子多时更流畅；更新日志页可检查版本更新
- 📤 **导出学习 Zip** - 导出订单+复盘+图片（可脱敏、筛选），供他人导入学习园
- 🖼️ **晒单** - 选一张做单图生成宽幅分享图（可隐藏金额等）；图片预览支持滚轮缩放、拖动平移，方便查看 K 线细节
- 💾 **完整备份与恢复** - 导出全部策略为 Zip（含独立查看器），支持从备份恢复
- 🛡️ **做单警示与限制** - 警示标语与背景图防 FOMO；每日笔数/回撤限制与日历打脸提醒
- 🎤 **语音录入** - 本地 Whisper 语音识别，无需联网；口述做单思路自动填入备注，可解析品种/方向/金额
- 📚 **知识库 (BETA)** - 本周/当日/回测智能总结与单笔 AI 分析可「保留到知识库」；左侧菜单进入知识库，按类型与时间浏览、搜索、查看详情、复制或删除
- 🤖 **本地 AI 分析** - 设置中「启用 AI 分析」开关；开启后可配置 Ollama API 与模型，支持「获取模型列表」从本机 Ollama 拉取模型名；当日总结与单笔分析（实盘）可结合「每日笔数上限」「单笔/当日亏损上限」给建议；回测单笔分析带入关键位、入场、CISD、清扫、市价/挂单、开平仓时间等
- 🕐 **盘口时间** - 回测按开仓时间归属亚/欧/美盘与开盘时段，盘口边界按产品设定（冬令时/夏令时由美东 DST 自动切换），设置页可查看当前盘口时间

## 使用示例

### 添加交易
1. 点击 **"+ 新订单"**
2. 选择 **方向**（做多/做空）和 **结果**（盈利/亏损）
3. 输入 **金额** 和 **盈亏比** (R:R)
4. **上传截图**（支持 Ctrl+V 粘贴或点击加号）
5. 添加 **标签** 和 **备注**，**保存**

### 每日回顾
1. 从日历上点击对应日期
2. 查看当日交易，上传 **当日全景截图**（最多 10 张）
3. 给自己 **打分**（1–5 星），系统自动计算当日统计

### 复盘
1. 进入 **订单总览** → 点击 **进入复盘模式**
2. 用 **日期 / 结果 / 未写复盘** 筛选，在右侧写复盘笔记、执行评分、打 **心理短板**（贪婪/恐惧/后悔/侥幸）
3. 点 **保存复盘**

### 导出与备份
- **导出学习 Zip**：仪表盘 **📤 导出学习 Zip**，可选脱敏与筛选，得到 Zip 供他人导入学习园。
- **完整备份**：**设置** → 数据与备份 → **导出数据**，得到含全部策略与查看器的 Zip，可「从备份恢复」。

## 常见问题

**Q: 数据存在哪里？**  
A: 见上方「数据存储位置」，所有数据在本地，不上传云端。

**Q: 如何备份？**  
A: 复制整个 `recording-trader` 目录即可；或使用设置中的「导出数据」得到 Zip。

**Q: 换电脑怎么办？**  
A: 将 `recording-trader` 目录拷贝到新电脑对应路径，或在新电脑上使用「从备份恢复」导入导出的 Zip。

## 隐私与安全

- 所有数据存储在本地，不上传任何云服务
- 支持完整备份与「导出学习 Zip」分享，数据均在您掌控
- 本软件为闭源产品，仅提供编译版下载；安装包由 GitHub Actions 构建并发布至本仓库 Releases

---

**下载最新版：** [Releases](https://github.com/0x144169/recording-trader/releases)  
**Credits:** © 基于 Cai_dudu《RT 仪表盘记录.html》 · jerry 桌面版与优化

# PromptGo · 提示词助手

把常用提示词存在本机。在浏览器或桌面应用的输入框里，按一个快捷键就能搜索并粘贴，无需在应用之间来回复制。

本仓库发布的是 **PromptMate Community** 非官方修改版。安装后，在开始菜单和系统托盘中可找到 **PromptMate**。

## 下载与安装

当前发布包适用于 **Windows x64**，版本为 **`v0.1.4-fork.1`**（预发布）。也可以浏览 [GitHub Releases](https://github.com/lllxxxxxlll/PromptGo/releases) 查看各版本。

| 下载 | 怎么用 |
| --- | --- |
| [Windows 安装包（推荐）](https://github.com/lllxxxxxlll/PromptGo/releases/download/v0.1.4-fork.1/PromptMate_0.1.4-fork.1_x64-setup.exe) | 下载后运行 `-setup.exe`，按提示安装，再从开始菜单打开 PromptMate。 |
| [Windows 免安装版（ZIP）](https://github.com/lllxxxxxlll/PromptGo/releases/download/v0.1.4-fork.1/PromptMate-Community-windows-x64.zip) | 解压整个 ZIP，再双击其中的 `promptmate.exe`。 |

下载后可用 [SHA256SUMS.txt](https://github.com/lllxxxxxlll/PromptGo/releases/download/v0.1.4-fork.1/SHA256SUMS.txt) 核对文件。程序当前未做代码签名，Windows 可能显示未知发布者。

## 快速上手

1. **打开管理窗口。** 启动后，在 Windows 任务栏右下角找到 PromptMate 图标，右键选择「打开管理窗口」。图标也可能在系统托盘的 `^` 展开菜单里。
2. **保存一条提示词。** 进入「提示词」，点击「新建」，填上标题和正文。可以选择分类、加标签，点击「保存」完成。
3. **在其他应用里使用。** 先把光标放进目标输入框，按默认快捷键 `Alt+Q` 呼出面板。输入标题、关键词或拼音首字母，按 `Enter` 或单击目标提示词，就会尝试把内容填回原输入框。
4. **按需要自定义。** 如果 `Alt+Q` 被输入法或其他应用占用，打开管理窗口 →「设置」，修改「呼出快捷面板」。只想复制内容时，选中提示词后按 `Shift+Enter`。

### 带变量的提示词

在正文中写入 `{{变量名|说明}}`，调用时可以填写本次使用的值。例如，保存下面这条提示词后，每次调用只需要输入不同的主题。

```text
请围绕「{{主题|输入你正在研究的问题}}」给出三个值得追问的问题。
```

## 常用功能

- **整理提示词**：按分类筛选，按标题、内容、标签或拼音首字母搜索，将常用条目置顶，也可以给单条提示词绑定快捷键。
- **快速捕获**：选中文字后按默认快捷键 `Alt+S`，把选中的内容存为提示词。
- **剪贴板历史**：可记录文本和图片，也可以在设置里关闭记录、调整粘贴后是否恢复原剪贴板。
- **导入、导出与同步**：支持 JSON 备份、Markdown/TXT 导入导出。需要多设备使用时，可在「云同步」页配置 WebDAV 或 GitHub Gist。

## 快捷键

| 按键 | 作用 |
| --- | --- |
| `Alt+Q` | 呼出或隐藏快捷面板，可在设置中修改 |
| `Alt+S` | 捕获当前选中的文字，可在设置中修改 |
| `↑` / `↓` | 在快捷面板中选择条目 |
| `→` | 展开或收起当前条目的预览 |
| `Enter` / 单击 | 把提示词粘贴到原输入框 |
| `Shift+Enter` | 只复制内容 |
| `Tab` | 在提示词和剪贴板历史间切换 |
| `Esc` | 关闭快捷面板 |
| `Ctrl+K` / `Ctrl+S` | 在管理窗口聚焦搜索 / 保存提示词 |

## 数据和备份

Windows 默认将数据保存在 `%APPDATA%\com.promptmate.app\`。在管理窗口的「设置」页点「打开目录」，可查看当前实际使用的位置。更换电脑、重装或切换版本前，可先从管理窗口的「数据」页导出 JSON 备份。若已设置 `PROMPTMATE_DATA_DIR`，应用会读取该变量指定的目录。

关闭管理窗口后，程序仍在托盘运行。要彻底关闭或切换版本，请从托盘菜单选择「退出」。

## 许可

项目采用 [MIT 许可](LICENSE)。Inter 字体采用 [SIL 开放字体许可证](licenses/Inter-OFL.txt)。

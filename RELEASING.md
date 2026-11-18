# 发布 PromptMate Community

在 GitHub 新建一个空仓库。项目已有 README、LICENSE 和 .gitignore，新仓库跳过这些初始化选项。

在本地项目目录执行以下命令。把示例地址换成新仓库的实际地址。

```powershell
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPO.git
git push -u origin main
git push origin v0.1.4-fork.1
```

GitHub Actions 会测试并构建 Windows x64 安装包和独立程序 ZIP，再创建预发布草稿。到仓库的 Releases 检查附件并试用安装包，然后公开草稿。GitHub 提供了[推送现有代码](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)和[管理发行](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)的说明。

每次发版同步更新 `package.json`、`src-tauri/Cargo.toml`、`src-tauri/Cargo.lock` 的应用版本、`src-tauri/tauri.conf.json`、变更日志和发行说明，然后提交并打上匹配版本的标签。保留仓库根目录和发行包中的完整 `LICENSE`。

## 本地构建

需要 Windows x64、Node.js 24、pnpm 11.25.0、Rust MSVC 工具链、Visual Studio C++ 桌面生成工具和 Windows SDK。

```powershell
pnpm install --frozen-lockfile
pnpm test
cargo test --locked --manifest-path src-tauri/Cargo.toml
pnpm test:e2e
pnpm tauri build --config src-tauri/tauri.windows.conf.json
```

浏览器界面测试使用 Microsoft Edge。安装包默认生成在 `src-tauri/target/release/bundle/nsis/`，独立程序在 `src-tauri/target/release/promptmate.exe`。手动上传独立程序时，请将它与 `LICENSE` 和 `licenses/` 一起打包。

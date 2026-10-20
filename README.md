# 咩洛：未忘之证 / LastWitness: Mero — 玩家反馈

公开镜像：https://victor-art-gif.github.io/mero-player-feedback/
原站：https://mero-player-feedback.lightgem1024.chatgpt.site/

支持简体中文、繁體中文、English、日本語、한국어。表单、FAQ、隐私说明、成功/错误提示、私密查询和处理状态均已翻译；语言选择会在本机保存。玩家提交内容和团队回复保留原文。

字体使用游戏中的 Inika / ZCOOL KuaiLe / LXGW WenKai TC / Zen Maru Gothic / Poor Story，并在本地托管及附带字体许可。头像与原画为游戏原始素材。

## 托管与数据

GitHub Pages 承载静态页面。反馈与回复使用现有 Sites 后端和数据库；原站与镜像的数据统一存储。本仓库不含反馈记录、联系信息、数据库、密钥或管理后端。管理入口继续使用原站的团队认证。

后端仅允许原站及 `https://victor-art-gif.github.io` 来源的反馈请求。私密查询密钥保留在 URL fragment 中，通过请求头提交；不会放入查询参数。限频和后台权限检查保留。

GitHub Pages 和原站接口在中国大陆的连通性尚未实测，镜像不能保证大陆稳定访问。

## 开发与部署

Node.js 24：`npm ci` → `npm run build`。`npm run preview` 用于本地检查。

目标路径为 `/mero-player-feedback/`；`track/` 有独立静态入口，支持直接访问和刷新。使用 GitHub Actions 的 `Deploy feedback site to GitHub Pages` 工作流手动部署。

## 已验证

TypeScript、五语字段完整性、浏览器五语切换、静态路由及资源检查通过。正式 API 已通过 GitHub 来源预检、真实提交与私密读回、错误密钥拒绝和未登录后台拒绝检查。正式数据库保留一条明确标记为“系统验证”的测试反馈。

GitHub Pages 部署记录：https://github.com/VICTOR-art-gif/mero-player-feedback/actions/runs/39443170334

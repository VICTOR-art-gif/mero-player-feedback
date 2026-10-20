# 咩洛：未忘之证 / LastWitness: Mero — 玩家反馈

GitHub Pages 静态镜像源码，支持简体中文、繁體中文、English、日本語、한국어，保留游戏对应语言字体、原画、反馈表单与私密查询。语言选择会本地保存；反馈内容和开发者回复保持原文。

## 当前状态

静态构建已通过；尚未启用 Pages。现有反馈 API 需要先允许 `https://victor-art-gif.github.io` 的跨域请求，随后才能手动运行部署工作流。部署前不能把此镜像作为已可用的反馈入口发给玩家。

GitHub Pages 只承载静态资源，反馈仍由既有后端和数据库私密保存。本仓库不含反馈记录、联系信息、数据库、密钥或管理后端。GitHub Pages 在中国大陆的连通性尚未验证；这个镜像不能保证大陆玩家稳定提交。

## 开发

Node.js 24 / `npm ci` / `npm run build` / `npm run preview`

目标路径：`/mero-player-feedback/`。`track/` 有独立静态入口，刷新时不会依赖服务器端路由。管理入口仍转向原站，保持原认证。

部署前置条件：后端添加严格限定来源的 POST/GET/OPTIONS 支持，保持垃圾提交限制与私密查询密钥校验。后端准备就绪后启用 Pages（GitHub Actions 来源）并手动运行 `pages.yml`，完成真实提交、查询、回复及大陆网络验证。

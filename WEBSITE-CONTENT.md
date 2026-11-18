# 官网内容维护

官网保留原站与 GitHub Pages 地址，避免 Steam 和游戏内链接失效。

- 原站：`app/site-content.ts`，静态镜像：`src/site-content.ts`，两份内容同步维护。
- `siteContent` 包含简中、繁中、英文、日文、韩文。`news` 数组按新到旧添加真实公告，包含 date/tag/title/body。不要把未完成的功能当作已发布更新。
- `scenes` 是当前三幅实机图的展示文案，并非正式区域名称。新增地图章节时加入已确认的区域名称、介绍与配图；图片位于 `public/world/`。
- `socialLinks.xiaohongshu` 需填写团队确认的账号主页链接；空值时展示即将补充，不链接至无关账号。
- `/feedback/` 保留反馈表单；`/track/` 保留私密查询；`/#feedback` 兼容旧反馈锚点。
- 原反馈 API、数据表、鉴权和 CORS 设置保持原样，不迁移或覆盖数据库。

## 发布

原站通过官方 Sites 流程构建 Worker 并部署。镜像运行 `npm ci`、`npm run build`、TypeScript 检查；推送 main 后手动运行 `pages.yml` 工作流。`feedback/` 和 `track/` 均生成独立 HTML 入口以支持刷新直达。

## 图片来源

原画及头像沿用旧站游戏素材；world 中三张图片取自游戏当前公开 Steam 商店（App 5054300）的实机截图。保留原图内容。

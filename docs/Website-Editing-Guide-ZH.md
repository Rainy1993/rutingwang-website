# Ruting Wang Website Editing Guide

这份 guide 用来帮助你以后自己修改网站文字、链接、课程、研究项目和页面模块。

## 项目位置

网站代码在：

```text
/Users/ruting/Documents/Github/rutingwang-website
```

最常修改的文件：

```text
src/pages/index.astro          Home page
src/pages/research.astro       Research page
src/pages/publications.astro   Publications page
src/pages/teaching.astro       Teaching page
src/pages/service.astro        Service page
src/pages/contact.astro        Contact page

src/data/site.ts               全站基本信息，例如名字、邮箱、首页 summary
src/data/research.ts           Research themes 和 funded projects
src/data/publications.ts       Publications / working papers 数据
src/data/talks.json            Talks 数据
src/styles/global.css          全站公共样式
```

## 常见修改位置

### 首页顶部简介

修改这个文件：

```text
src/data/site.ts
```

主要改这里的 `summary:`。

### 首页内容和模块

修改这个文件：

```text
src/pages/index.astro
```

常见区域包括：

```text
Hero / 首页顶部
Research index
About me
Selected work
Academic path
Contact band
```

### Teaching 页面课程

修改这个文件：

```text
src/pages/teaching.astro
```

主要有两个数组：

```ts
const teaching = [...]
const quantinar = [...]
```

如果要加 Quantinar 课程，复制一行并改标题、描述和链接：

```ts
{ title: 'Course title', description: 'Short description.', href: 'https://...' },
```

如果要给 teaching experience 里的机构加链接，可以使用 `href`：

```ts
{ period: 'August 2025', course: 'Machine Learning in Financial Risk', institution: 'Data without Borders: Building AI Competence across Borders · Romania', href: 'https://www.fabiz.ase.ro/bip-2025/', detail: 'Summer course' },
```

### Research 页面

研究方向和 funded projects 数据在：

```text
src/data/research.ts
```

页面显示方式在：

```text
src/pages/research.astro
```

如果只是修改项目标题、基金名称、年份或编号，优先改 `src/data/research.ts`。

### Publications 页面

论文和 working papers 数据在：

```text
src/data/publications.ts
```

页面分区显示在：

```text
src/pages/publications.astro
```

### Service 页面

Editorial roles 和 refereeing 列表在：

```text
src/pages/service.astro
```

## 删除文字

如果你看到页面上有一句话想删：

1. 在 VS Code 打开整个项目文件夹。
2. 用全局搜索：`Cmd + Shift + F`。
3. 粘贴那句英文的一部分。
4. 找到对应 `.astro` 或 `.ts` 文件。
5. 删除那一行或那一段。

说明文字通常长这样：

```astro
<p class="section-note">...</p>
```

删除说明文字时，通常只删这一整行即可。

如果要删除整个模块，通常删一整段：

```astro
<section ...>
  ...
</section>
```

删除模块时要注意保留前后标签完整，不要只删一半。

## 添加链接

普通文字变成链接，用这个格式：

```astro
<a class="text-link" href="https://example.com" target="_blank" rel="noopener noreferrer">显示文字</a>
```

例子：

```astro
<a class="text-link" href="https://www.digital-finance-msca.com" target="_blank" rel="noopener noreferrer">MSCA Digital Finance</a>
```

如果链接在数组数据里，通常是这样：

```ts
{ title: 'FRM@Crypto', description: 'Financial Risk Meter applications for cryptocurrency markets.', href: 'https://quantinar.com/course/47/frmcrypto?q=FRM%20for%20Cryptos' },
```

## 调整样式

页面自己的样式通常在同一个 `.astro` 文件底部：

```astro
<style>
  ...
</style>
```

全站通用样式在：

```text
src/styles/global.css
```

常用 CSS：

```css
text-align: justify;    /* 两端对齐 */
font-size: 0.9rem;      /* 字体大小 */
margin-top: 1rem;       /* 上方间距 */
display: none;          /* 隐藏 */
max-width: 60ch;        /* 控制文字行宽 */
```

如果想让某段文字和正文一致，通常不要给它额外设置 `font-family` 和 `font-size`，让它继承全局正文样式即可。

## 本地预览

在 Terminal 里进入项目：

```bash
cd /Users/ruting/Documents/Github/rutingwang-website
```

启动本地预览：

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

然后打开 Terminal 显示的本地地址，一般是：

```text
http://localhost:4321/
```

如果端口被占用，可以换一个端口：

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --port 4322
```

## 检查网站能否构建

修改后建议运行：

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

如果看到类似：

```text
Complete!
```

说明没有语法错误。

## 发布到线上

如果用 GitHub Desktop：

1. 打开 repository：`rutingwang-website`。
2. 确认左侧 `Changes` 里有修改文件。
3. 填 Summary，例如 `Update teaching page`。
4. 点击 `Commit to main`。
5. 点击 `Push origin`。
6. 等 Cloudflare / Pages 自动部署完成。

线上地址如果没立刻变化，通常是浏览器或 CDN 缓存。可以试：

```text
https://rutingrainywang.com/teaching/?v=2
```

或浏览器强制刷新：

```text
Cmd + Shift + R
```

## 不建议随便改的文件

除非你知道用途，否则不要随便改：

```text
package.json
package-lock.json
node_modules/
.astro/
astro.config.mjs
wrangler.jsonc
```

## 快速判断该改哪里

```text
首页文字              src/pages/index.astro 或 src/data/site.ts
首页 summary          src/data/site.ts
About me              src/pages/index.astro
Teaching 课程          src/pages/teaching.astro
Research funded 项目   src/data/research.ts
Research 页面结构       src/pages/research.astro
Publications 数据      src/data/publications.ts
Publications 页面结构   src/pages/publications.astro
Service 内容           src/pages/service.astro
全站样式               src/styles/global.css
```

最稳妥的方法：先全局搜索页面上那句文字，再修改搜索到的文件。

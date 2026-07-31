# 王茹婷个人学术网站

## GitHub、Cloudflare 和内容更新傻瓜式说明

由 **JS Insights** 制作
版本 1.0 · 2026 年 7 月 21 日

网站预览：<https://rutingwang-website.pages.dev/>
目前的私人 GitHub 仓库：<https://github.com/Jiajing-Sun/rutingwang-website>

---

## 1. 先记住这一句话

不需要学编程，只需要知道：

> 在 GitHub 改一个文件 → 点 **Commit changes** 保存 → 等 Cloudflare 自动发布 → 刷新网站查看。

- **GitHub** 是放网站文件的文件柜。
- **Cloudflare** 是把文件发布到网上的工具。
- **网站地址** 是访客最终看到的结果。

### 五条安全规则

1. 每次只改一件小事情。
2. 每次保存后等 1–3 分钟，再检查网站。
3. 只改本说明列出的文件。
4. 不要把密码、验证码、API key 或私人资料写进 GitHub。
5. Cloudflare 变红时先停止，不要乱试；截图发给 JS Insights。

---

## 2. 开始前准备三个东西

- [ ] 茹婷自己的 GitHub 账号。
- [ ] 茹婷自己的 Cloudflare 账号。
- [ ] JS Insights 提供的网站 ZIP 备份包。

两个账号尽量使用离开学校后仍会长期保留的邮箱。

---

## 3. 把网站放到茹婷自己的 GitHub

有两个办法。**推荐方法 A**，最省事。

### 方法 A：直接转移现有仓库（推荐）

#### 茹婷先做

1. 登录 <https://github.com/>。
2. 点右上角头像，复制自己的准确 GitHub 用户名。
3. 把用户名发给佳婧。
4. 收到 GitHub 转移邮件后，在 24 小时内点邮件接受。

#### 佳婧操作

1. 打开 <https://github.com/Jiajing-Sun/rutingwang-website>。
2. 点 **Settings**。
3. 在 **General** 页面一直滑到最下面。
4. 在红色 **Danger Zone** 中找到 **Transfer repository**。
5. 填入茹婷准确的 GitHub 用户名。
6. 按提示输入仓库名 `rutingwang-website`。
7. 确认转移。

茹婷接受后，佳婧通常会自动成为 collaborator，仍可帮助维护。

### 方法 B：从 ZIP 建立一份新的私人仓库

1. 从 <https://desktop.github.com/> 下载并安装 **GitHub Desktop**。
2. 用茹婷自己的 GitHub 账号登录。
3. 解压 `ruting-wang-website-js-insights-handover-2026-07-21.zip`。
4. GitHub Desktop 菜单选择 **File → Add Local Repository…**。
5. 点 **Choose…**，选择刚解压的网站文件夹。
6. 如果提示“这不是 repository”，点 **create a repository**。
7. 名称使用 `rutingwang-website`，分支使用 `main`。
8. 左下角 **Summary** 填 `Initial website handover`。
9. 点 **Commit to main**。
10. 点顶部 **Publish repository**。
11. 保持 **Keep this code private** 选中。
12. 再点 **Publish Repository**。

不要只把 ZIP 本身作为一个文件上传。Cloudflare 需要看到 ZIP 解压后的所有文件夹。

---

## 4. 用 Cloudflare Pages 发布网站

1. 茹婷登录 <https://dash.cloudflare.com/>。
2. 左侧打开 **Workers & Pages**。
3. 点 **Create application**。
4. 选择 **Pages** 标签。
5. 点 **Import an existing Git repository**。
6. 选择 **GitHub** 并授权。
7. GitHub 询问权限时，选 **Only select repositories**，只勾选 `rutingwang-website`。
8. 回到 Cloudflare，选择 `rutingwang-website`，点 **Begin setup**。

下面这些内容必须照抄：

| Cloudflare 输入框 | 填写内容 |
|---|---|
| Project name | `ruting-wang-academic`，或其他可用名称 |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build directory | `dist` |

如果页面显示 **Environment variables**，添加：

| Variable name | Value |
|---|---|
| `NODE_VERSION` | `20` |
| `BASE_PATH` | `/` |
| `SITE_URL` | Cloudflare 最终网址，例如 `https://ruting-wang-academic.pages.dev` |

9. 点 **Save and Deploy**。
10. 等待页面显示绿色 **Success**。
11. 点 **Visit site**，逐一打开 Home、Research、Publications、Talks、Teaching、Service 和 Contact。

以后每次在 GitHub 的 `main` 分支保存修改，Cloudflare 都会自动重新发布。

### 第一次部署失败怎么办

只检查这三项：

```text
Production branch: main
Build command: npm run build
Build directory: dist
```

如果三项正确，不要继续乱改。把红色错误完整截图发给 JS Insights。

---

## 5. 以后连接个人域名

没有个人域名时，先使用免费的 `pages.dev` 地址完全没问题。

有域名以后：

1. Cloudflare → **Workers & Pages**。
2. 打开茹婷的网站项目。
3. 点 **Custom domains**。
4. 点 **Set up a domain**。
5. 输入域名，例如 `rutingwang.com`。
6. 按 Cloudflare 显示的 DNS 指示操作。
7. 等状态变成 Active。
8. 把项目中的 `SITE_URL` 改成最终域名，例如 `https://rutingwang.com`。
9. 重新部署最新版本。

根域名可能需要把 nameservers 转到 Cloudflare；`www` 子域名可能需要添加 CNAME。以 Cloudflare 当时显示的指示为准。

---

## 6. 平时修改网站的固定操作

1. 浏览器打开茹婷自己的 GitHub repository。
2. 按本说明找到要修改的文件。
3. 点文件右上角的**铅笔图标**。
4. 只改需要改的文字。
5. 点 **Commit changes…**。
6. 填一句说明，例如 `Add October seminar`。
7. 选择 **Commit directly to the main branch**。
8. 点绿色 **Commit changes**。
9. 打开 Cloudflare → 项目 → **Deployments**。
10. 等待绿色 **Success**，然后刷新网站。

如果仍显示旧内容，等一分钟再刷新一次，不要连续重复提交。

---

## 7. 添加 Talks（最常用）

只需要修改：

```text
src/data/talks.json
```

### 添加第一条 Talk

1. GitHub 中打开 `src`。
2. 打开 `data`。
3. 打开 `talks.json`。
4. 点铅笔图标。
5. 找到：

```json
"items": [],
```

6. 只把这一行换成：

```json
"items": [
  {
    "date": "2026-10-15",
    "title": "The title of the talk",
    "event": "Finance Seminar Series",
    "venue": "University name, City",
    "kind": "Invited seminar",
    "href": ""
  }
],
```

7. 把示例文字换成真实资料。
8. 没有公开链接时，保留 `"href": ""`。
9. 点 **Commit changes…**，说明填 `Add first talk`。

Cloudflare 完成后，这条 Talk 会同时出现在 **Talks** 页面和 **Research** 页面底部。

### 每个字段填什么

| 字段 | 填写内容 | 示例 |
|---|---|---|
| `date` | 年-月-日 | `2026-10-15` |
| `title` | 演讲的准确标题 | `Measuring Carbon Risk Dynamics` |
| `event` | 会议、seminar 或 workshop 名称 | `Finance Seminar Series` |
| `venue` | 学校和城市，或 `Online` | `University of X, London` |
| `kind` | 演讲类型 | `Invited talk` |
| `href` | 公开活动链接；没有就留空 | `https://...` 或 `""` |

### 添加第二条 Talk

复制第一段从 `{` 到 `}` 的全部内容，粘贴在下面。两段之间必须有一个逗号：

```json
"items": [
  {
    "date": "2026-10-15",
    "title": "First talk title",
    "event": "First event",
    "venue": "First venue",
    "kind": "Invited seminar",
    "href": ""
  },
  {
    "date": "2026-09-03",
    "title": "Second talk title",
    "event": "Second event",
    "venue": "Second venue",
    "kind": "Conference presentation",
    "href": "https://example.com/event"
  }
],
```

最新的 Talk 放最上面。

### 修改或删除 Talk

- 修改：只改引号里面的文字。
- 删除：删除该条完整的 `{ ... }`。
- 剩下两条时，两段之间保留一个逗号。
- 全部删除后，恢复成 `"items": [],`。

### JSON 最容易出错的四件事

1. 使用直的英文双引号：`"text"`。
2. 不要删除字段名后面的冒号。
3. 两条 Talk 之间有逗号，最后一条后面没有逗号。
4. 不要改文件底部的 `template`，那是备用示例。

如果不放心，直接把下面六行发给 JS Insights：

```text
日期：
Talk 标题：
活动名称：
地点：
Talk 类型：
公开链接（如有）：
```

---

## 8. 添加 publication

文件是：

```text
src/data/publications.ts
```

正式发表的内容放在 `publications`；under review 和 working papers 放在 `workingPapers`。

新增 journal article 时复制一个相似的现有区块，再换成准确资料：

```ts
{
  year: 2027,
  title: 'Exact article title',
  authors: 'Wang, R., & Coauthor, A.',
  venue: 'Journal Name',
  detail: '12(3), 100–120',
  doi: '10.1234/example.2027.001',
  featured: false,
  category: 'journal',
},
```

注意：

- `doi` 只填 DOI，不要加 `https://doi.org/`。
- 作者顺序、期刊、卷期页码必须和正式记录一致。
- 只有确实想放到 selected publications 时才用 `featured: true`。
- Journal article 保持 `category: 'journal'`。
- 每条最后的 `},` 不要漏掉逗号。

Publication 很容易写错。资料不确定时，把 DOI 或 publisher link 发给 JS Insights，不要猜。

---

## 9. 其他内容在哪个文件

| 要修改的内容 | 文件 |
|---|---|
| 姓名、职位、学校、邮箱和 profile links | `src/data/site.ts` |
| Research areas 和 grants | `src/data/research.ts` |
| Publications 和 working papers | `src/data/publications.ts` |
| Talks | `src/data/talks.json` |
| Teaching 和 Quantinar courses | `src/pages/teaching.astro` |
| Editorial service 和 refereeing | `src/pages/service.astro` |
| 照片 | `public/images/ruting-wang-portrait.webp` |
| Short CV PDF | `public/docs/ruting-wang-short-cv.pdf` |
| Full CV PDF | `public/docs/ruting-wang-full-cv.pdf` |

### 更新 CV

文件名必须保持不变：

```text
ruting-wang-short-cv.pdf
ruting-wang-full-cv.pdf
```

网站还提供 LaTeX source。最安全的方法是把新资料发给 JS Insights，一次同步 short PDF、full PDF 和两份 LaTeX。

不要把家庭地址、私人电话、签名或 referee details 放进公开网站文件夹。

### 更新照片

照片必须继续使用：

```text
public/images/ruting-wang-portrait.webp
```

建议让 JS Insights 处理裁剪和 WebP 转换，避免手机和电脑上的构图出问题。

---

## 10. 茹婷不要直接修改的文件

```text
src/components/
src/layouts/
src/styles/
astro.config.mjs
package.json
package-lock.json
.github/
```

这些文件控制设计、字体、手机布局、SEO 和部署。需要改时联系 JS Insights 或 web developer。

---

## 11. 怎么判断修改成功

三个地方都对才算完成：

1. GitHub 中可以看到刚才的修改。
2. Cloudflare 显示绿色 **Success**。
3. 刷新网站后能看到新内容。

### Cloudflare 变红

1. 停止继续修改。
2. 截图红色 deployment 和 error text。
3. 记下刚才的 GitHub commit message。
4. 一起发给 JS Insights。

新版本失败时，上一个成功版本通常仍会正常在线。

---

## 12. 账号和资料安全

- GitHub 和 Cloudflare 开启 two-factor authentication。
- GitHub repository 保持 **private**。
- 个人域名注册在茹婷自己名下。
- ZIP 备份包保存在两个安全位置。
- 给 JS Insights collaborator access，不要分享密码。

---

## 13. 官方说明

- GitHub 修改文件：<https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files>
- GitHub Desktop 发布仓库：<https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop>
- GitHub 转移仓库：<https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository>
- Cloudflare Astro 部署：<https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/>
- Cloudflare Git integration：<https://developers.cloudflare.com/pages/configuration/git-integration/>
- Cloudflare custom domains：<https://developers.cloudflare.com/pages/configuration/custom-domains/>

---

## JS Insights 支持

**JS Insights Academic Websites**
<https://jsinsights.co.uk/services/academic-websites/>
<contact@jsinsights.co.uk>

需要修改时，请发送准确文字、相关链接或 DOI，以及要放在哪个页面。不要发送账号密码。

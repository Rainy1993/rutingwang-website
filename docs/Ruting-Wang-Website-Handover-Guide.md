# Dr Ruting Wang academic website

## Foolproof handover, hosting and update guide

Prepared by **JS Insights**
Version 1.0 · 21 July 2026

Website preview: <https://rutingwang-website.pages.dev/>
Current private GitHub repository: <https://github.com/Jiajing-Sun/rutingwang-website>

---

## 1. First understand the three parts

You do not need to learn programming. Remember only this:

1. **GitHub is the filing cabinet.** The website files live there.
2. **Cloudflare is the publisher.** It reads the GitHub files and puts the website online.
3. **The website address is the result.** It will first be a free `pages.dev` address; a personal domain can be connected later.

The normal update process is:

> Edit one file on GitHub → click **Commit changes** → wait for Cloudflare → check the website.

### The golden rules

- Change only one small thing at a time.
- After each change, wait about 1–3 minutes and check the live website.
- Do not edit design files, even if their names look familiar.
- Never put passwords, verification codes, API keys or private personal information in GitHub.
- If Cloudflare shows a red failure, stop editing and send the error screenshot to JS Insights.

---

## 2. What Ruting needs before starting

Prepare these three things:

- [ ] A personal GitHub account belonging to Ruting.
- [ ] A personal Cloudflare account belonging to Ruting.
- [ ] The ZIP delivery package supplied by JS Insights, kept as an offline backup.

Use an email address that Ruting expects to keep after changing university or employer.

---

## 3. Put the website in Ruting's GitHub

There are two methods. **Method A is recommended.** Use Method B only if you want a completely separate copy.

### Method A — transfer the existing private repository (recommended)

This keeps the full change history and is the shortest route.

#### What Ruting does

1. Sign in at <https://github.com/>.
2. Copy the exact GitHub username shown in the top-right account menu.
3. Send that username to Jiajing.
4. Wait for a repository-transfer email from GitHub.
5. Open the email and accept the transfer within 24 hours.

#### What Jiajing does

1. Open <https://github.com/Jiajing-Sun/rutingwang-website>.
2. Click **Settings**.
3. Stay on **General** and scroll to the bottom.
4. Find the red **Danger Zone** area.
5. Beside **Transfer repository**, click **Transfer**.
6. Enter Ruting's exact GitHub username as the new owner.
7. Type `rutingwang-website` when GitHub asks for the repository name.
8. Confirm the transfer.

After Ruting accepts, Jiajing should remain as a collaborator. The ZIP package is the extra backup.

### Method B — create a new private repository from the ZIP

Use this if Jiajing wants to keep the current repository unchanged.

1. Ruting downloads and installs **GitHub Desktop** from <https://desktop.github.com/>.
2. Sign in to GitHub Desktop with Ruting's GitHub account.
3. Unzip `ruting-wang-website-js-insights-handover-2026-07-21.zip`.
4. Open GitHub Desktop.
5. Choose **File → Add Local Repository…**.
6. Click **Choose…** and select the unzipped website folder.
7. If GitHub Desktop says the folder is not a repository, click **create a repository**.
8. Use the name `rutingwang-website` and create it on the `main` branch.
9. In the bottom-left **Summary** box, type `Initial website handover`.
10. Click **Commit to main**.
11. Click **Publish repository** at the top.
12. Keep **Keep this code private** selected.
13. Click **Publish Repository**.

When finished, the browser address should look like:

```text
https://github.com/RUTING-USERNAME/rutingwang-website
```

Do **not** upload the ZIP itself as the only file in GitHub. Cloudflare needs the unzipped files.

---

## 4. Put the website on Cloudflare Pages

These steps create Ruting's own deployment. They do not require the temporary JS Insights Cloudflare project.

1. Ruting signs in at <https://dash.cloudflare.com/>.
2. In the left menu, open **Workers & Pages**.
3. Click **Create application**.
4. Select the **Pages** tab.
5. Click **Import an existing Git repository**.
6. Choose **GitHub** and authorise Cloudflare.
7. If GitHub asks which repositories Cloudflare may access, choose **Only select repositories** and select `rutingwang-website`.
8. Back in Cloudflare, select `rutingwang-website` and click **Begin setup**.

Enter these settings exactly:

| Box on Cloudflare | What to enter |
|---|---|
| Project name | `ruting-wang-academic` or another available name |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build directory | `dist` |

If an **Environment variables** area is shown, add:

| Variable name | Value |
|---|---|
| `NODE_VERSION` | `20` |
| `BASE_PATH` | `/` |
| `SITE_URL` | The final Cloudflare address, for example `https://ruting-wang-academic.pages.dev` |

9. Click **Save and Deploy**.
10. Wait until the deployment shows **Success** in green.
11. Click **Visit site** and check Home, Research, Publications, Talks, Teaching, Service and Contact.

From then on, Cloudflare automatically rebuilds the website whenever a change is committed to the `main` branch on GitHub.

### If the first deployment fails

Check the three boxes most often entered incorrectly:

```text
Production branch: main
Build command: npm run build
Build directory: dist
```

Do not repeatedly change random settings. Take one screenshot of the red error and send it to JS Insights.

---

## 5. Connect a personal domain later

You can leave the website on its `pages.dev` address until a domain is chosen.

When the domain is ready:

1. Open Cloudflare → **Workers & Pages**.
2. Open the Ruting website project.
3. Click **Custom domains**.
4. Click **Set up a domain**.
5. Enter the domain, for example `rutingwang.com` or `www.rutingwang.com`.
6. Follow Cloudflare's DNS instructions and wait for the status to become active.
7. In the project settings, change `SITE_URL` to the final address, for example `https://rutingwang.com`.
8. Redeploy the latest version.

For a root domain such as `rutingwang.com`, Cloudflare may ask for the domain's nameservers to be moved to Cloudflare. For a subdomain such as `www.rutingwang.com`, Cloudflare may ask for a CNAME record. Follow the exact instructions shown for that domain.

---

## 6. The everyday update routine

Use this same routine for almost every small text update.

1. Open Ruting's GitHub repository in a browser.
2. Click through the folders to the file named in this guide.
3. Click the **pencil icon** at the top-right of the file.
4. Change only the text that needs updating.
5. Click **Commit changes…**.
6. In the message box, write a short description, for example `Add October seminar`.
7. Choose **Commit directly to the main branch**.
8. Click the green **Commit changes** button.
9. Open Cloudflare → the website project → **Deployments**.
10. Wait until the new deployment is green.
11. Open the live website and refresh the relevant page.

If the old version is still visible, wait another minute and refresh once more.

---

## 7. Add a Talk — the most important update

The file to edit is:

```text
src/data/talks.json
```

### Add the first Talk

1. In GitHub, open `src`.
2. Open `data`.
3. Open `talks.json`.
4. Click the pencil icon.
5. Find this exact line:

```json
"items": [],
```

6. Replace only that line with this example:

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

7. Replace the example words with the real information.
8. Leave `"href": ""` empty if there is no public event link.
9. Click **Commit changes…** and use the message `Add first talk`.

After Cloudflare finishes, the Talk appears on the **Talks** page and at the bottom of the **Research** page.

### What each Talk field means

| Field | Put this information here | Example |
|---|---|---|
| `date` | Date in year-month-day format | `2026-10-15` |
| `title` | Exact title of the presentation | `Measuring Carbon Risk Dynamics` |
| `event` | Conference, seminar or workshop name | `Finance Seminar Series` |
| `venue` | Institution and city, or `Online` | `University of X, London` |
| `kind` | Type of appearance | `Invited talk` |
| `href` | Public event link; otherwise empty | `https://...` or `""` |

### Add a second Talk

Copy the whole block from `{` to `}` and place the copy underneath. **There must be a comma between the two blocks.**

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

Keep the newest Talk at the top.

### Edit or remove a Talk

- To correct a Talk, change only the words inside its quotation marks.
- To remove one Talk, delete its full `{ ... }` block.
- If two Talks remain next to each other, keep one comma between their blocks.
- If no Talks remain, restore the line to `"items": [],`.

### The four JSON rules that prevent errors

1. Use normal straight double quotation marks: `"text"`.
2. Do not delete the colon after a field name.
3. Put a comma between Talk blocks, but not after the final Talk block.
4. Do not edit the `template` block at the bottom; it is a spare example.

If you are unsure, send JS Insights these six lines instead of editing:

```text
Date:
Talk title:
Event:
Venue:
Type of talk:
Public link, if any:
```

---

## 8. Add a publication

The file is:

```text
src/data/publications.ts
```

Published journal articles go inside `publications`. Working papers and papers under review go inside `workingPapers`.

For a new published article, copy one existing article block and carefully replace its values. A normal example is:

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

Important:

- The DOI field contains only the DOI, not `https://doi.org/`.
- Use the exact author order and journal details from the published record.
- `featured: true` places it in the selected-publications area; use this only intentionally.
- Do not change `category: 'journal'` for a journal article.
- Put a comma after the closing `},` of each item.

Publication citations are easy to get wrong. If any detail is uncertain, send the DOI or publisher link to JS Insights rather than guessing.

---

## 9. Update other website information

Use this map to find the right file:

| What needs changing | File |
|---|---|
| Name, role, affiliations, email and profile links | `src/data/site.ts` |
| Research areas and grants | `src/data/research.ts` |
| Publications and working papers | `src/data/publications.ts` |
| Talks | `src/data/talks.json` |
| Teaching experience and Quantinar courses | `src/pages/teaching.astro` |
| Editorial service and refereeing | `src/pages/service.astro` |
| Portrait | `public/images/ruting-wang-portrait.webp` |
| Short CV PDF | `public/docs/ruting-wang-short-cv.pdf` |
| Full CV PDF | `public/docs/ruting-wang-full-cv.pdf` |

Small wording changes are safe if you replace text inside quotation marks and do not change punctuation around the code.

### Replace the CV PDFs

The filenames must remain exactly:

```text
ruting-wang-short-cv.pdf
ruting-wang-full-cv.pdf
```

The website also offers LaTeX source files. The safest method is to send the updated CV information to JS Insights so the PDF and LaTeX editions stay consistent. Do not upload private home addresses, personal telephone numbers, signatures or referee details to the public website folder.

### Replace the portrait

The portrait must remain a correctly cropped WebP image named:

```text
public/images/ruting-wang-portrait.webp
```

Photo cropping and conversion are best handled by JS Insights so the desktop and mobile composition remain correct.

---

## 10. Files Ruting should not edit

Do not change these unless JS Insights or another web developer is helping:

```text
src/components/
src/layouts/
src/styles/
astro.config.mjs
package.json
package-lock.json
.github/
```

These control layout, typography, mobile behaviour, SEO and deployment. A small accidental change can affect every page.

---

## 11. How to know whether an update worked

### Good result

- GitHub shows the latest change in the file.
- Cloudflare shows a green **Success** deployment.
- The live page shows the new information after refresh.

### Red Cloudflare result

Do this:

1. Stop making more edits.
2. Take a screenshot showing the red deployment and error text.
3. Copy the GitHub commit message you just used.
4. Send both to JS Insights.

The last successful website normally stays online while a failed new version is investigated.

---

## 12. Keep ownership and access tidy

- GitHub and Cloudflare should use Ruting's own long-term email address.
- Turn on two-factor authentication for both accounts.
- Keep the repository **private** unless there is a deliberate reason to publish the source code.
- Keep the ZIP delivery package in two safe places.
- Register any personal domain in Ruting's name, not in a developer's name.
- Give JS Insights collaborator access instead of sharing passwords.

---

## 13. Official help pages

- GitHub — editing files: <https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files>
- GitHub — publishing with GitHub Desktop: <https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop>
- GitHub — transferring a repository: <https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository>
- Cloudflare — deploying Astro to Pages: <https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/>
- Cloudflare — Git integration: <https://developers.cloudflare.com/pages/configuration/git-integration/>
- Cloudflare — custom domains: <https://developers.cloudflare.com/pages/configuration/custom-domains/>

---

## JS Insights support

**JS Insights Academic Websites**
<https://jsinsights.co.uk/services/academic-websites/>
<contact@jsinsights.co.uk>

When asking for an update, send the exact text, the relevant link or DOI, and the page where it should appear. Never send account passwords.

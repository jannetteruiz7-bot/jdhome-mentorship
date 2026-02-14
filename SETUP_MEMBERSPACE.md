# JD Home Mentorship Site Setup (MemberSpace)

This package is ready in `mentorship-site/`.

## Files
- `index.html` → member dashboard (protect this)
- `calculator.html` → protect
- `worksheet-pack.html` → protect
- `playbook.html` → protect

---

## 1) Publish the site to GitHub Pages

```powershell
cd C:\Users\janne\.openclaw\workspace\mentorship-site
git init
git add .
git commit -m "Initial mentorship member site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/jdhome-mentorship.git
git push -u origin main
```

In GitHub:
1. Repo Settings → Pages
2. Source: Deploy from branch
3. Branch: `main` / root
4. Save

Site URL:
`https://<YOUR_USERNAME>.github.io/jdhome-mentorship/`

---

## 2) Connect MemberSpace

1. Create MemberSpace account.
2. Add site domain (use the GitHub Pages URL first, then custom domain later).
3. Copy your MemberSpace install snippet.
4. Paste snippet into each HTML page in `<head>` (replace placeholder in `index.html`; add to calculator/worksheet/playbook too).
5. In MemberSpace, protect these URLs:
   - `/`
   - `/calculator.html`
   - `/worksheet-pack.html`
   - `/playbook.html`

---

## 3) Membership plans

Create plan: **Active Mentorship** (monthly).
Grant access to all protected pages.

Offboarding: remove plan from member (instant access revoke).

---

## 4) Custom domain

When ready, set domain (e.g. members.jdhome.com) in GitHub Pages + DNS.
Then update that domain in MemberSpace.

---

## 5) Support email

Set all contact links to: `info@jdhome.com`
(Already done on dashboard page.)

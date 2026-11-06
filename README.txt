COMPUTER PROFESSIONALS — FOUR SEPARATE PAGES FOR GITHUB PAGES

This is a MULTI-PAGE website. The homepage contains ONLY its introduction and two action buttons. Services, How It Works, and Contact have their own separate HTML files.

IMPORTANT: Upload the CONTENTS OF THIS ZIP, not the ZIP or the containing folder.

Your GitHub Pages publishing directory must contain these files next to each other:
    index.html
    services.html
    how-it-works.html
    contact.html
    styles.css
    script.js

HOW TO REPLACE THE OLD ONE-PAGE WEBSITE
1. In GitHub open the repository for your website.
2. Check Settings > Pages to see the publishing source (usually main branch, / (root)).
3. Open that exact publishing folder, then choose Add file > Upload files.
4. Upload ALL SIX files listed above. REPLACE the OLD index.html; simply uploading services.html and contact.html is not enough.
5. Commit the changes. Do not put the files into a new nested folder unless GitHub Pages is configured to publish that folder.
6. After GitHub finishes the Pages deployment, open these URLs directly:
     https://YOUR-USERNAME.github.io/services.html
     https://YOUR-USERNAME.github.io/how-it-works.html
     https://YOUR-USERNAME.github.io/contact.html
   For project sites use the existing /REPOSITORY/ prefix before the filenames.
7. If you still see the old single-page site, hard refresh (Ctrl+Shift+R) or open in a private browsing window. Confirm the latest Pages deployment completed in GitHub's Actions tab.

NAVIGATION
Each page has Home / Services / How It Works / Contact links that point to separate .html files, NOT to #section anchors. All internal links are relative, so they work for both GitHub Pages user sites and project sites.

CONTACT BUTTONS
- Call Now uses tel:+17402629209
- Send Email uses mailto:j.c63821998@gmail.com
- Facebook Messenger uses https://m.me/61594138724238
- A fallback link opens https://www.facebook.com/profile.php?id=61594138724238

Messenger depends on Facebook accepting messages to the Page; test the button after publishing.

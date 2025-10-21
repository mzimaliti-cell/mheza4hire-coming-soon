MHEZA 4Hire — Coming Soon (Static Site)
======================================

What this is:
-------------
A simple, password-prompted preview page for mheza4hire.co.za you can deploy to Vercel today.
It includes brand color (#C10202), Poppins font, headline, pricing, and Book/Pay CTA.

IMPORTANT:
----------
The password gate in script.js is CLIENT-SIDE ONLY (not real security). It's fine for a private preview.
For real protection, deploy a Next.js build with Vercel Edge Middleware (Basic Auth).

Deploy to Vercel (no code experience needed):
---------------------------------------------
1) Go to https://vercel.com/new and drag-and-drop this folder (mheza4hire-coming-soon).
2) After deploy, you'll receive a preview URL like https://your-project.vercel.app

Attach your domain (later or now):
----------------------------------
In Vercel → Project → Settings → Domains:
  - Add: www.mheza4hire.co.za  (primary)
  - Add: mheza4hire.co.za      (apex)

Then set DNS at domains.co.za:
  - A record (apex/root):  76.76.21.21
  - CNAME (www):           cname.vercel-dns.com  (or the exact value Vercel shows)

Change the password:
--------------------
- Edit script.js → change REQUIRED = "Mheza2025" to any new password.
- Re-deploy in Vercel (drag-and-drop again).

Wire up iKhokha temporarily:
----------------------------
- Replace payLink in script.js with your Pay Link URL from the iKhokha dashboard.
- Publish again.

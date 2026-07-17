# Saloni Ladies Garment — Website

A simple, mobile-friendly catalog website for Saloni Ladies Garment (Mahal & Sakkardara, Nagpur). This is **not an online store** — there's no cart, checkout, or payment. Customers browse products here and then contact the shop directly on WhatsApp or by phone. All actual sales happen in person or over WhatsApp.

---

## 📁 What's in this folder

```
saloni-website/
├── index.html          ← the whole website (one page)
├── css/
│   └── style.css       ← all the styling/colors
├── js/
│   ├── script.js        ← makes the site interactive
│   └── products.json    ← YOUR PRODUCT LIST (edit this to add/remove items)
└── images/
    ├── products/         ← product images (currently generic placeholders)
    └── shop/             ← shop photo showcase images (currently generic placeholders)
```

---

## ✏️ How to Add or Remove a Product

You only ever need to touch **one file**: `js/products.json`

Each product looks like this:

```json
{ "name": "Cotton Daily Kurti", "category": "ladies", "image": "images/products/ladies-kurti.svg", "tag": "new" }
```

### To ADD a product:
1. Put your product photo in the `images/products/` folder (jpg or png works fine).
2. Open `js/products.json` in any text editor (Notepad, VS Code, even GitHub's own web editor).
3. Copy one of the existing lines, paste it, and change the details:
   - `name` — what shows on the site
   - `category` — must be exactly `ladies`, `mens`, or `essentials`
   - `image` — the path to your photo, e.g. `images/products/my-new-photo.jpg`
   - `tag` — optional, use `"new"`, `"popular"`, or `""` (blank) for no tag
4. Make sure every product entry is separated by a comma, and the whole file stays valid JSON (matching `{ }` and `[ ]`).
5. Save, then re-upload/push to GitHub. The website updates automatically.

### To REMOVE a product:
Just delete its `{ ... }` line (and the comma before or after it) from `products.json`.

### To REPLACE a placeholder image with a real photo:
Easiest way — keep the exact same filename. For example, if you have a real photo of the cotton kurti, save it as `ladies-kurti.jpg` and update that one line in `products.json` to point to the new file (or just overwrite the old file with the same name if you keep it as .jpg instead of .svg — just update the `image` path in the JSON to match).

---

## 📞 Updating Contact Numbers

WhatsApp and call numbers are set in **one place**: near the top of `js/script.js`

```js
const WHATSAPP_MAHAL = "918657010407";
const WHATSAPP_SAKKARDARA = "918830376414";
const CALL_MAHAL = "8657010407";
const CALL_SAKKARDARA = "8830376414";
```

Change these if a number ever changes — you don't need to touch anything else.

---

## 📢 Adding Your WhatsApp Channel Link

In `index.html`, search for the "Stay Connected" section and update this line with your actual channel link:

```html
<a href="#" class="btn btn-primary" target="_blank" rel="noopener">📢 Join WhatsApp Channel</a>
```

Replace `href="#"` with your real WhatsApp Channel URL.

---

## ⭐ Adding Real Google Reviews

The Reviews section currently shows a few sample reviews. To keep it simple, these are written directly into `index.html` (search for `id="reviews"`). Update the text and names as you collect more genuine reviews, and make sure the "See All Reviews on Google" button links to your actual Google Business Profile.

---

## 🚀 How to Host This on GitHub Pages (step-by-step)

1. **Create a GitHub account** if you don't have one already: [github.com](https://github.com)

2. **Create a new repository:**
   - Click the **+** icon (top right) → **New repository**
   - Name it something like `saloni-website`
   - Keep it **Public**
   - Click **Create repository**

3. **Upload the files:**
   - On your new repository page, click **"Add file" → "Upload files"**
   - Drag and drop everything from inside this `saloni-website` folder (not the folder itself — its *contents*: `index.html`, `css/`, `js/`, `images/`)
   - Scroll down and click **"Commit changes"**

4. **Turn on GitHub Pages:**
   - Go to your repository's **Settings** tab
   - In the left sidebar, click **Pages**
   - Under "Build and deployment" → "Source", select **Deploy from a branch**
   - Under "Branch", select **main** and folder **/ (root)**, then click **Save**

5. **Wait 1–2 minutes**, then refresh the Pages settings page. You'll see a message like:
   > "Your site is live at `https://yourusername.github.io/saloni-website/`"

6. **That's your website!** Share this link anywhere — WhatsApp, Google Business Profile, carry bags, etc.

### Updating the site later
Any time you want to change something (add a product, fix a phone number):
1. Go to the file on GitHub
2. Click the pencil ✏️ (edit) icon
3. Make your change
4. Click "Commit changes"
5. Wait about a minute — the live site updates automatically

---

## 🗺️ Map Locations

The Mahal branch map link is already set up using your shared Google Maps link. The Sakkardara branch currently uses a general search for "Sakkardara Chowk, Nagpur" — once you have a precise Google Maps share link for the Sakkardara shop (same way you shared the Mahal one), send it over and it can be swapped in for a more accurate pin.

---

## ✅ Everything Covered From Our Discussion

- Single-page, mobile-first, GitHub Pages–ready
- Rolling announcement banner
- Search bar + category filters (Ladies Wear / Men's Wear / Daily Essentials)
- Products loaded from an easy-to-edit `products.json` (no code knowledge needed)
- Floating WhatsApp + Call buttons (thumb-friendly, always visible)
- Photo showcase section (placeholder images, ready for real shop photos)
- Two-location support (Mahal & Sakkardara) with maps, hours, and separate contact numbers
- Size guide, "Ask us" CTA, exchange policy, care tip
- Google Reviews section
- Stay Connected (WhatsApp Channel) section
- FAQ accordion
- Text size toggle (A+/A-) for accessibility
- "Established 1991 · 35 Years in 2026" trust messaging throughout
- Brand colors: rose/maroon primary, teal accent for Men's Wear, mustard accent for Daily Essentials
- No cart, no checkout, no login — by design, since this is a catalog site, not e-commerce

---

## 🔧 Notes / Known Placeholders to Replace

- All product images are generic colored icon placeholders — swap in real photos when ready (see "Adding/Removing Products" above)
- Shop showcase photos (storefront, interior) are also placeholders — replace with real photos in `images/shop/`
- WhatsApp Channel link is not yet set (currently `href="#"`)
- Google Reviews are sample text based on what was shared earlier — update with fresh ones over time
- Sakkardara map currently uses an approximate search link, not an exact pin

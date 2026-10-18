# Fabrics by Sobia — Online Shop

A complete, free-to-run online shop for the **Fabrics by Sobia** women's eastern wear business.

- **Shop (customers):** `index.html` — collection, categories, blog, cart, WhatsApp ordering
- **Dashboard (owner only):** `admin.html` — password login; add/edit/delete products,
  categories, site content and blog posts. Everything appears on the shop instantly.
- **Backend:** Firebase (free Spark plan) — Firestore database, Authentication, Storage.
- **Hosting:** GitHub Pages (free).

**Live URLs** (after the steps below):

- Shop: <https://zarghamhashmi000.github.io/fabrics-by-sobia/>
- Dashboard: <https://zarghamhashmi000.github.io/fabrics-by-sobia/admin.html>

---

## Setup — one time (about 15 minutes)

### 1. Create the Firebase project

1. Go to <https://console.firebase.google.com> and sign in.
2. Click **Add project**, name it `fabrics-by-sobia` (any name works).
3. You can skip Google Analytics. Click **Create project**.

### 2. Add a Web app and copy the config

1. On the project overview page click the **`</>`** (Web) icon.
2. Nickname it `shop`, tick *Firebase Hosting* **off** (we use GitHub Pages), click **Register app**.
3. Copy the `firebaseConfig` values shown.
4. Open **`firebase-config.js`** in this repo and paste your values over each
   `PASTE_YOUR_*` placeholder. Commit and push the file.
   - Until real values are pasted, the shop shows "Coming Soon" empty states — no errors.

### 3. Enable Firestore Database

1. Left menu → **Build → Firestore Database** → **Create database**.
2. Choose **Start in production mode**, pick the closest region, **Enable**.
3. Go to the **Rules** tab, delete what's there, paste the contents of
   **`firestore.rules`** from this repo, click **Publish**.
   - Effect: everyone can *read* the shop; only signed-in owners can *write*.

### 4. Enable Authentication (owner login)

1. Left menu → **Build → Authentication** → **Get started**.
2. **Sign-in method** tab → enable **Email/Password** → **Save**.
3. **Users** tab → **Add user** → enter the owner's email and a strong password → **Add user**.
   - Only share these credentials with the owner. Anyone with them can edit the shop.

### 5. Enable Storage (product photos)

1. Left menu → **Build → Storage** → **Get started** → **Start in production mode**.
2. Go to the **Rules** tab, paste the contents of **`storage.rules`** from this repo, **Publish**.
   - Effect: everyone can *view* images; only signed-in owners can *upload/delete*.

### 6. Log in and add content

1. Open the **dashboard URL** above.
2. Sign in with the email + password from step 4.
3. **Categories** tab → add parent categories first (e.g. `Women`), then
   sub-categories under them (`Lawn`, `Chiffon`, `Kurtis`, `Festive`).
4. **Products** tab → **+ Add Product**: name, PKR price, category, description, photo.
5. **Site Content** tab → hero title, subtitle, announcement bar text, about text,
   WhatsApp number (digits only with country code, e.g. `923365061287`).
6. **Blog** tab → add posts any time.
7. Open the **shop URL** — everything you added is live immediately.

---

## How ordering works

Customers browse the shop, add pieces to the bag, and tap **Order on WhatsApp**.
Their phone opens WhatsApp with the full order (items, quantities, total) already
typed — they just press send. The floating **Chat on WhatsApp** button is for questions.

## Notes

- **Costs:** Firebase Spark plan and GitHub Pages are both free at this scale.
- **Privacy:** the business WhatsApp number lives only inside the order/chat link
  URLs — it is never shown as text on any page. The brand appears only as
  "Fabrics by Sobia".
- **Security:** Firestore/Storage rules allow public reads and authenticated writes
  only. Keep the dashboard credentials private. `admin.html` carries
  `noindex,nofollow` so search engines skip it.
- New pushes to the `main` branch redeploy the site automatically (usually < 1 minute).

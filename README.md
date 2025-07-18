# Bex & Oli Vite Site
Absolutely, Oli. Based on everything you've told me so far, here is a **detailed overview of what you'd like to be done with the `bex-oli-vite` website project**, including your intentions, features, design vision, and technical preferences.

---

## 🐠 **Bex & Oli Website – Full Scope Plan**

### 🧭 **General Vision**

* A **modern, clean, minimal website** showcasing your and Bex’s scuba diving lifestyle and global journey.
* A **portfolio and map-based project**, not a business site.
* Entirely **free-to-use**, **not offering services**, and **no booking/payment functionality**.
* Created from scratch by you using **React + Vite + Tailwind CSS**, hosted on GitHub and optionally deployed (e.g. to Vercel).

---

### 📦 **Technical Stack & Status**

* **React (Vite)** for the frontend
* **Tailwind CSS** for styling
* **React Router** for navigation
* Code versioned on **GitHub**
* Live server running locally via `vite`

---

### 🔗 **Discreet Link to Service Site**

* Somewhere **not too obvious**, you want to include a reference to:

  > [oliverscubadiving.com](https://oliverscubadiving.com)

  * This site **does** offer services (PADI scuba training).
  * It should be subtly mentioned for SEO or interest, without being central to the Bex & Oli project.

---

## 🧱 Site Structure (Pages & Routes)

### ✅ 1. **Home Page** (`/`)

* Brief intro: who Bex & Oli are.
* Eye-catching image or banner.
* Maybe one tagline like *"Exploring the world’s oceans, one dive at a time."*
* Minimalist, centered layout.

---

### ✅ 2. **About Page** (`/about`)

* Full bios of you and Bex.
* Separate sections:

  * "About Oli" (Instructor, underwater photographer, global dive experience)
  * "About Bex" (Marine biologist, coral restoration, snorkeling and reef education)
* Include professional background, values, and goals.

---

### ✅ 3. **Dive Page** (`/dive`)

* Showcase of dive destinations.
* Could list places you’ve worked or dived: GBR, Koh Tao, Oman, etc.
* Potential to add photos/videos (from TG-7 setup) later.
* Optional map embed (or tie into `/map` later).
* Include personal experiences or dive tips.

---

### ✅ 4. **Blog Page** (`/blog`)

* Placeholder blog-style page to post updates.
* Posts can be hard-coded or stored in local JSON for now.
* Each post: title, date, photo, short text.
* Examples:

  * "Diving with Manta Rays in Thailand"
  * "First Coral Nursery in Costa Rica"

---

### ✅ 5. **Map Page** (`/map`)

* This is the big one!
* Interactive world map showing:

  * Places you've dived
  * Places you're going next
  * Places with career opportunities
* Custom **interactive map built with React Leaflet**
* Click anywhere to add a pin with a title and description
* Remove pins or edit their info directly from the popup
* Later: optional filters (Instructor jobs / Conservation / Bex-only roles)

---

## 🧩 Components

### ✅ Navbar

* Simple top navigation
* Logo or text title: "Bex & Oli"
* Links to Home / About / Dive / Blog / Map

### ✅ Footer

* Minimal
* Social links (GitHub, Instagram?)
* Subtle mention of [oliverscubadiving.com](https://oliverscubadiving.com)
* Maybe: “Site by Oli | Built with Vite + Tailwind”

---

## 🎨 Design & Style

### ✅ Overall Style

* Clean, minimalist, smart design
* Rounded edges (buttons, cards)
* Soft shadows
* White background, **turquoise/blue/sea-themed highlights**
* Responsive (mobile + desktop)

### ⚠️ Color Note

* Tailwind colors **not rendering yet** — to be fixed later
* All layout and spacing works; we’ll integrate color once Tailwind’s config is repaired

---

## 🧪 Future Enhancements (Phase 2)

Once the core is complete, optional upgrades:

* 🧭 Dynamic blog post system (Markdown or JSON-based)
* 📍 Enhanced interactive map with filters
* 🎥 Photo gallery using your TG-7 underwater content
* 🌐 Multilingual toggle (English/French)
* 🧰 “Career Toolkit” embed (relevant to your dive plans)

---

## ✅ Completed So Far

* Vite + React project created
* Tailwind + Router set up
* All base pages created
* GitHub repo live
* Live dev server works
* Pages load correctly (layout working)
* Navbar + Footer functioning
* Code structure is clean and modular

---

## 🚧 Remaining To-Do List

### 🔨 Short-Term

* [ ] Fix Tailwind color rendering
* [ ] Add final homepage layout/text
* [ ] Complete About Page bios
* [ ] Add dive site highlights and photos
* [ ] Style Blog + placeholder entries
* [ ] Embed custom Google My Map

### 🌍 Hosting (Optional)

* [ ] Deploy to **Vercel** or **GitHub Pages**
* [ ] Add custom domain (optional)

---

## 💬 Final Notes

* No services offered on this site → it's a **travel & portfolio blog**
* The **only service site is oliverscubadiving.com** (linked discreetly)
* You want to learn and control the full codebase, which this site allows

---

Would you like me to turn this into a downloadable `.md` file or add it to your GitHub `README.md`?

Also, just say the word and we’ll continue building from where we left off (e.g. finishing the **About** or **Dive** page).

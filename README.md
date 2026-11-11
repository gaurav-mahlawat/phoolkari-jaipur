# Phoolkari Jaipur

A responsive handcrafted fashion storefront with a Next.js 14 client and an Express API with persistent local JSON storage.

## Run locally

Requires Node.js 18 or newer. Install dependencies with `npm install`, then run `npm run dev` for the storefront and `npm run dev --workspace server` in a second terminal for the API. Open http://localhost:3000. The API listens on http://localhost:5000, and creates starter products, categories and homepage content in `server/data.json` on first run. MongoDB is not required.

## Features

- Responsive home, collection, product, cart and information pages
- Product filtering, sorting, size selection, related products and quick product search
- Cart drawer and cart page backed by local storage; demo checkout
- Authenticated dashboard for editing products, categories, homepage sections and reviews

Product photography uses replaceable Unsplash image URLs. For production, replace these with licensed product photography and configure a real checkout provider.

## Store dashboard and backend

Run the storefront with `npm run dev` and the JSON-backed API in a second terminal with `npm run dev --workspace server`. The API creates `server/data.json` on first run and persists dashboard changes there.

Open `http://localhost:3000/admin` to sign in. Local starter credentials are `admin` / `Phoolkari@2026`. The API uses bearer-token authentication for all admin create, edit and delete routes. Products, categories, homepage sections and reviews can be managed from the dashboard; homepage sections can be reordered, hidden, edited or removed, and new sections can be added using the supported section types (`hero`, `products`, `imageText`, `video`, `categories`, `values`, `newsletter`, or `promo`). Customer-submitted reviews stay hidden until approved in the Reviews tab.

The dashboard sends item content as JSON, which allows editing the full product and section fields without limiting the admin to a small fixed set of controls. Change `ADMIN_USERNAME`, `ADMIN_PASSWORD` and `ADMIN_TOKEN_SECRET` in `server/.env` before using the dashboard in a shared or deployed environment. `NEXT_PUBLIC_API_URL` can be set in `client/.env.local` when the API is hosted elsewhere.

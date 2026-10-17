# Ceylon Favorites — static website

A static storefront for Ceylon Favorites, a Sri Lankan grocery store in the USA. It's plain HTML, CSS and JavaScript, with no build step.

## Run locally
Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Structure
- `index.html`: home page
- `category.html`: every category (`?c=<slug>`) and search (`?q=`)
- `about.html`, `my-orders.html`, `gift-card.html`, `loyalty.html`, `my-rewards.html`, `customer-support.html`
- `shipping-returns.html`, `shipping-policy.html`, `return-policy.html`
- `movie-food-order.html`: coming-soon page
- `assets/js/data.js`: product catalog (edit this file to change products and prices)
- `assets/js/main.js`: shared header, footer, cart and helpers
- `assets/css/style.css`: styles

## Notes
The cart, orders and loyalty points are stored only in the visitor's browser (localStorage), and checkout is a demo. Taking real payments needs an e-commerce backend.

## Hosting on GitHub Pages
Go to Settings → Pages, choose "Deploy from a branch", select `main` and `/ (root)`.

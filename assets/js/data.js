// Catalog data — product names and prices taken from ceylonfavs.com category pages.
// Product tuple: [name, price, flag?]  flag: "oos" = out of stock, "new" = new arrival, {sale: n} = sale price
window.CF_DATA = {
  store: {
    name: "Ceylon Favorites",
    tagline: "Taste the Best of Sri Lanka — Delivered with Care.",
    phone: "737-397-6112",
    phoneHref: "tel:+17373976112",
    email: "support@ceylonfavs.com",
    facebook: "https://www.facebook.com/share/1CokbSwEtQ/?mibextid=wwXIfr",
    payments: ["Visa", "Mastercard", "Amex", "Discover", "JCB", "UnionPay", "PayPal"]
  },
  categories: [
    { slug: "biscuits-and-snacks", name: "Biscuits & Snacks", icon: "🍪", hue: 32,
      blurb: "Maliban, Munchee and the tea-time classics you grew up with.",
      products: [
        ["Munchee Ginger Biscuits 400g", 4.29], ["Munchee Cheese Button 215g Can", 5.99],
        ["Uswatthe TipiTip Orange", 2.99], ["CBL Samaposha 500g", 4.99],
        ["Maliban Lemon Puff 200g", 2.99], ["Maliban Cream Cracker 190g", 2.99],
        ["Maliban Nice 200g", 2.99], ["Uswatthe TipiTip Green 50g", 2.99, "oos"],
        ["Maliban Custard Cream 200g", 2.99], ["Maliban Cheese Bits 245g Tin", 5.99],
        ["Maliban Lemon Puff 400g", 5.99], ["Maliban Chocolate Cream 500g", 4.99],
        ["CBL Samaposha 200g", 2.99], ["Maliban Milk Short Cake 200g", 2.99],
        ["Maliban Cream Cracker 500g", 5.99], ["Maliban Krisco 215g", 5.99],
        ["Maliban Hawaiian Cookies 200g", 2.99], ["Maliban Marie 400g", 5.99],
        ["Maliban Chocolate Cream 200g", 2.99], ["Maliban Chick Bits 280g", 5.99]
      ] },
    { slug: "rice-and-noodles", name: "Rice & Noodles", icon: "🍚", hue: 45,
      blurb: "Keeri samba, red raw rice, kottu mee and string-hopper noodles.",
      products: [
        ["Prima Kottu Mee Hot & Spicy 5 Pack", 5.29], ["Keeri Samba White 10lb", 19.49],
        ["Red Rice Matta / Nadu 10lb", 19.49], ["Suwadel Rice 4lb", 13.99],
        ["Muthu Samba Rice 10lb", 17.99], ["Red Raw Rice (Single Polish) 10lb", 17.99, "oos"],
        ["Red Raw Rice (Double Polish) 10lb", 18.99], ["White Raw Rice (Kiribath) 4lb", 13.99],
        ["Suduru Samba Rice 10lb", 21.99], ["Wijaya Chinese Noodles 500g", 4.99],
        ["Prima Kottumee Chicken 80g", 1.59], ["Wijaya Noodles 400g", 5.99],
        ["Prima Kottumee Hot & Spicy 80g", 1.59], ["Harischandra Red Rice Noodles 200g", 3.99],
        ["Harischandra Plain Noodles 400g", 3.99], ["Harischandra Special Noodles 400g", 3.99, "oos"],
        ["Prima Kottumee Cheese & Onion 80g", 1.59], ["Harischandra Kurakkan Noodles 400g", 3.99],
        ["Prima Kottumee Masala 80g", 1.59]
      ] },
    { slug: "ceylon-spices", photo: "spices.jpg", credit: "McKay Savage, CC BY 2.0", name: "Ceylon Spices", icon: "🌶️", hue: 8,
      blurb: "Roasted curry powders, true cinnamon and island chilli.",
      products: [
        ["Wijaya Buriyani Masala 250g", 6.49], ["Wijaya Mustard Seed 100g", 2.49],
        ["Wijaya Fenugreek Seed 100g", 2.49], ["Wijaya Coriander Seed 100g", 2.49],
        ["SriLak Cinnamon Sticks 100g", 6.99], ["Wijaya Meat Curry Powder 250g", 4.99],
        ["Wijaya Chilli Pieces 500g", 7.99], ["Wijaya Roasted Chilli Powder 500g", 9.99],
        ["Wijaya Curry Powder 500g", 8.99], ["Wijaya Biriyani Masala 60g", 2.99],
        ["Wijaya Curry Powder 250g", 4.99], ["Wijaya Fish Masala Curry Powder 50g", 1.99],
        ["Wijaya Chilli Powder 1kg", 15.99], ["Wijaya Turmeric Powder 250g", 5.49],
        ["Wijaya Pepper Powder 250g", 6.99], ["Wijaya Chicken Masala Curry Powder 50g", 1.99],
        ["Wijaya Milky Fish Curry Powder 50g", 1.99], ["Wijaya Roasted Curry Powder 250g", 4.99],
        ["Wijaya Chilli Powder 500g", 7.99], ["Wijaya Curry Powder 1kg", 15.99],
        ["Wijaya Chilli Pieces 250g", 4.99], ["Wijaya Roasted Curry Powder 500g", 9.99],
        ["Wijaya Chilli Powder 250g", 4.99]
      ] },
    { slug: "dry-foods", name: "Dry Foods", icon: "🥡", hue: 25,
      blurb: "Soya meat in every flavour, papadam and pantry quick-fixes.",
      products: [
        ["Delmege Supiri Soya 90g Regular", 1.99], ["CBL LankaSoy 90g Devilled Chicken", 1.99],
        ["Lanka Soy Kiri Malu 50g", 1.99], ["Delmege Supiri Soya 90g Cuttle Fish", 1.99],
        ["Wijaya Papadam 70g", 2.49], ["Delmege Supiri Soya 90g Chicken", 1.99],
        ["Delmege Supiri Soya 90g Roasted Chicken", 1.99], ["CBL LankaSoy 90g Chicken", 1.99],
        ["Lanka Soy Miris Malu 50g", 1.99], ["Delmege Supiri Soya 90g Curry", 1.99, "oos"],
        ["Delmege Supiri Soya 50g Mutton", 1.99], ["Delmege Supiri Soya 90g Prawn", 1.99]
      ] },
    { slug: "sl-frozen-foods", name: "SL Frozen Foods", icon: "🧊", hue: 200,
      blurb: "Kimbula buns, fish rolls, pol roti and watalappan — straight from the freezer.",
      products: [
        ["Insulated Shipping Box 12×10×7\"", 9.99], ["Sail Fish (Thalapath) 1lb", 14.49],
        ["Yara Grated Coconut 400g", 6.49], ["Cocktail Pastry Platter", 14.00, "oos"],
        ["Finagle Fish Savory Rolls 480g", 12.49], ["Finagle Fish Cutlets 480g", 12.49],
        ["Finagle Kimbula Bun 480g", 9.49], ["Finagle Cream Buns 300g", 9.99, "oos"],
        ["P&S Chocolate Swiss Rolls 300g", 9.49], ["Finagle Fish Roti 920g", 14.49],
        ["Finagle Vege Roti 920g", 15.49], ["Finagle Roasted Bread 6pcs", 10.49],
        ["Fab Roast Paan 540g", 12.49], ["Fab Fish Puff 500g", 12.49],
        ["Fab Fish Patty 350g", 12.49], ["Fab Watalappan 420g", 10.49],
        ["Fab Assorted Cake 5 Flavours 350g", 12.49], ["Fab Fruit Cake 500g", 15.49],
        ["Fab Ribbon Cake 500g", 18.99, "oos"], ["Fab Cut Kottu Roti 1kg", 9.49],
        ["Fab Pol Roti 6 Pack 420g", 10.49], ["Fab Seeni Sambol Bun 320g", 10.49],
        ["Fab Chocolate Fudge Cake 500g", 19.49]
      ] },
    { slug: "milk-powder-ceylon-tea", photo: "tea-plantation.jpg", credit: "Vyacheslav Argenberg, CC BY 4.0", name: "Milk Powder & Ceylon Tea", icon: "🍵", hue: 140,
      blurb: "Dilmah, Bogawanthalawa, Zesta and the milk powder for a proper cuppa.",
      products: [
        ["Sustagen Vanilla", 25.99], ["Anchor Milk Powder 900g", 17.49],
        ["Maggi Coconut Milk Powder 300g", 8.49], ["Wijaya Green Tea 25 Bags", 4.29],
        ["Wijaya Coffee 100g", 3.29], ["Hendrick Tea 500g", 10.99],
        ["Bogawanthalawa Kahata 400g", 9.99], ["Bogawanthalawa 100 Tea Bags", 8.99],
        ["Hendrick Tea 1kg", 18.99], ["Dilmah Premium Loose Tea 400g", 9.99],
        ["Zesta Loose Tea 390g", 9.99], ["Zesta 100 Tea Bags", 7.99],
        ["Watawala Loose Tea 400g", 7.99], ["Dilmah Premium 100 Tea Bags", 7.99],
        ["Nestomalt 400g Can", 7.99, "oos"]
      ] },
    { slug: "sl-flour-grains", name: "Flour & Grains", icon: "🌾", hue: 38,
      blurb: "Hopper mix, thosai flour and red & white string-hopper flour.",
      products: [
        ["Wijaya Hopper Mixture 400g", 4.49], ["Wijaya Thosei Flour 400g", 4.99],
        ["Wijaya Red Rice Flour 1kg", 5.29], ["Wijaya White Rice Flour 1kg", 5.29],
        ["Wijaya Red String Hopper Flour 5kg", 17.49], ["Wijaya White String Hopper Flour 5kg", 17.49],
        ["Mahaweli White Rice Flour 1kg", 5.49], ["Mahaweli Red Rice Flour 1kg", 5.49],
        ["Harischandra Hopper Flour 400g", 4.99], ["Nethmi String Hopper Flour 1kg", 4.99, "oos"],
        ["MDK Red String Hopper Flour 700g", 4.99, { sale: 3.99, oos: true }], ["MDK Hopper Flour 400g", 4.99]
      ] },
    { slug: "sl-jams-chutneys-pickles", name: "Jams, Chutneys & Pickles", icon: "🫙", hue: 350,
      blurb: "Lunumiris, katta sambol, Malay pickle and MD fruit jams.",
      products: [
        ["MD Amberella Chutney 460g", 6.49], ["MD Mango Chutney 460g", 6.49],
        ["MD Lunumiris 380g", 6.99], ["MD Brinjal Pickle 375g", 6.99],
        ["MD Katta Sambol 380g", 5.99], ["MD Sinhala Pickle 375g", 5.99],
        ["MD Mango Jam 450g", 4.99], ["MD Mixed Fruit Jam 450g", 4.99],
        ["MD Passion Jam 450g", 4.99], ["MD Malay Pickle 375g", 5.99]
      ] },
    { slug: "ceylon-bytes", name: "Ceylon Bytes", icon: "🥨", hue: 20,
      blurb: "Crunchy murukku and split-pea bites for the evening plain tea.",
      products: [
        ["Ceylon Bites Coil Murukku 300g", 7.99], ["Ceylon Bites Split Pea", 6.99],
        ["Ceylon Bites Mixed Murukku 300g", 6.99]
      ] },
    { slug: "ceylon-sweets", name: "Ceylon Sweets", icon: "🍬", hue: 320,
      blurb: "Milk toffee, kalu dodol and coconut rock — Avurudu on a plate.",
      products: [
        ["Mikee Milk Toffee 200g", 5.99], ["Mikee Kalu Dodol 500g", 8.99],
        ["Mikee Coconut Rock 200g", 5.99]
      ] },
    { slug: "sl-fish-items", photo: "stilt-fishing.jpg", credit: "Jakub Hałun, CC BY 4.0", name: "SL Fish Items", icon: "🐟", hue: 190,
      blurb: "Sprats, katta, Maldive fish and every dry fish for your pol sambol.",
      products: [
        ["Malu Malu Headless Sprats 1lb", 11.99, "new"], ["Srilak Muhudu Kukula Dry Fish 200g", 6.99],
        ["Srilak Bombili Dry Fish 200g", 6.99], ["Thalapath Dry Fish 200g", 6.99],
        ["Srilak Seera Thora Dry Fish 200g", 6.99], ["Sail Fish (Thalapath) 1lb — frozen", 14.49],
        ["Srilak Katta Dry Fish 200g", 6.99], ["Srilak Sprats Headless 200g", 4.99],
        ["Srilak Sprats Headless 1kg", 22.99], ["Srilak Keeramin 200g", 5.99],
        ["Srilak Sprats Headless 1lb", 11.99], ["Srilak Kooni Dry Fish 100g", 4.99],
        ["Captain Jack Mackerel 425g", 4.99], ["Jack Mackerel in Brine 425g", 4.99],
        ["MD Maldive Fish Chips 200g Packet", 6.99], ["MD Maldive Fish Chips 400g Bottle", 15.99],
        ["MD Maldive Fish Chips 200g Bottle", 7.99]
      ] },
    { slug: "sl-sauces-pastes", name: "Sauces, Coconut & Pastes", icon: "🥥", hue: 15,
      blurb: "Goraka, coconut vinegar and the chilli pastes that make it taste like home.",
      products: [
        ["Wijaya Goraka Cream 250g", 4.49], ["MD Goraka Paste 350g", 6.99],
        ["MD Goraka Pieces 200g", 3.99], ["MD Coconut Vinegar 750ml", 6.99, "new"],
        ["Zensai Chinese Chilli Paste 200g", 8.99, "new"], ["MD Tomato Sauce", 4.99],
        ["MD Vegetarian Chilli Paste 270g", 6.99], ["MD Chilli Sauce 400g", 4.99]
      ] },
    { slug: "ayurvedic-herbal-products", name: "Ayurvedic & Herbal", icon: "🌿", hue: 110,
      blurb: "Siddhalepa, Samahan, Paspanguwa and herbal teas for everyday wellness.",
      products: [
        ["Beam Gastritis Relief 200ml", 6.99], ["Siddhalepa Balm 50g", 5.99],
        ["Aarogya Ranawara 100g", 3.99], ["Aarogya Kothala Himbutu 100g", 4.29],
        ["Aarogya Weniwelgeta 50g", 4.29], ["Aarogya Iramusu Powder 50g", 4.29],
        ["Siddhalepa Asamodagam 385ml", 4.99, "new"], ["Link Samahan 30 Packets", 12.99],
        ["Link Paspanguwa 25g", 1.99]
      ] },
    { slug: "sl-drinks-cordial", name: "Drinks, Cordial & Desserts", icon: "🥤", hue: 280,
      blurb: "EGB, Necto, Portello, wood apple nectar and faluda.",
      products: [
        ["Wijaya Sago 100g", 2.49], ["Motha Rose Faluda 200g", 4.29],
        ["Motha Watalappan Pudding Mix 110g", 3.29], ["MD Wood Apple Nectar 200ml", 2.99],
        ["Portello 1.5L", 6.99], ["MD Woodapple Cream 650g", 7.49],
        ["Ginger Beer 330ml Can", 2.99], ["Cream Soda 330ml Can", 2.99],
        ["MD Woodapple Nectar 750ml", 7.99], ["Cream Soda 1.5L", 6.99],
        ["Necto 1.5L", 6.99], ["Necto 330ml Can", 2.99],
        ["Ginger Beer (EGB) 1.5L", 6.99], ["Kothmale Chocolate Milk 180ml", 2.49, "oos"],
        ["Kothmale Faluda Milk 180ml", 2.49, "oos"], ["Kothmale Vanilla Milk 180ml", 2.49, "oos"],
        ["MD Mixed Fruit Cordial 750ml", 7.99]
      ] },
    { slug: "religious-items", photo: "perahera.jpg", credit: "Daniel Liabeuf, CC BY-SA 3.0", name: "Religious Items", icon: "🪷", hue: 40,
      blurb: "Offerings and items for poya days and temple visits.",
      products: [["Atapirikara", 49.99]] },
    { slug: "sl-treacle-jaggery", name: "Treacle & Jaggery", icon: "🍯", hue: 28,
      blurb: "Pure kithul treacle and jaggery for curd, kavum and kiribath.",
      products: [
        ["AMK Kithul Treacle 725ml", 12.99], ["Raala Kithul Jaggery Cube 260g", 9.99, "new"],
        ["Raala Kithul Jaggery 250g", 9.99, "new"], ["Raala Kithul Treacle 1000ml", 21.99, "new"]
      ] },
    { slug: "sl-ready-to-eat", photo: "rice-and-curry.jpg", credit: "Lankan Foodie, CC BY-SA 4.0", name: "Ready to Eat", icon: "🍛", hue: 60,
      blurb: "Polos curry, veralu, kohila in brine and fried sprats.",
      products: [
        ["AMK Veralu in Brine 700g", 6.99], ["MD Innala in Brine 560g", 6.99],
        ["AMK Dambala in Brine 500g", 6.99], ["Foreconns Fried Sprats 200g", 9.99],
        ["MD Green Jak Curry (Polos) 560g", 6.99], ["Foreconns Fried Dry Fish 200g", 9.99],
        ["AMK Kohila in Brine 650g", 6.99]
      ] },
    { slug: "sl-baby-items", name: "Baby Items", icon: "🍼", hue: 210,
      blurb: "Gentle Sri Lankan baby care favourites.",
      products: [["Baby Cheramy Cologne 200ml", 7.99]] }
  ]
};


const mockProducts = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    quantity: 1,
    description: "High-fidelity Bluetooth headphones featuring active noise cancellation, a 30-hour battery life, and ultra-soft memory foam earcups.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Minimalist Analog Watch",
    price: 125.00,
    quantity: 1,
    description: "Sleek and timeless design featuring a genuine leather strap, stainless steel casing, and Japanese quartz movement.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Ergonomic Mechanical Keyboard",
    price: 149.50,
    quantity: 1,
    description: "Customizable RGB backlit mechanical keyboard with hot-swappable switches and an ergonomic split layout for comfortable typing.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Smart Fitness Tracker Watch",
    price: 89.99,
    quantity: 1,
    description: "Tracks heart rate, sleep stages, daily steps, and workout metrics with a vibrant touchscreen display and waterproof design.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Vintage Polaroid Camera",
    price: 119.00,
    quantity: 1,
    description: "Capture instant physical photos with classic vintage aesthetic, automatic exposure, and built-in flash.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Modern Ceramic Coffee Mug",
    price: 24.99,
    quantity: 1,
    description: "Hand-crafted ceramic mug with an ergonomic handle and heat-retentive glazed finish, perfect for specialty coffee.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Classic Leather Backpack",
    price: 165.00,
    quantity: 1,
    description: "Durable full-grain leather backpack featuring a padded 15-inch laptop sleeve, multiple organizer pockets, and antique brass hardware.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 32.50,
    quantity: 1,
    description: "Double-wall vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    quantity: 1,
    description: "Rugged, waterproof portable speaker delivering 360-degree sound with deep bass and a 12-hour playtime.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Designer Sunglasses",
    price: 135.00,
    quantity: 1,
    description: "Polarized lenses offering 100% UV protection encased in a lightweight, durable acetate frame.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Eco-Friendly Running Shoes",
    price: 110.00,
    quantity: 1,
    description: "Lightweight and breathable running sneakers crafted from recycled knit materials with high-rebound cushioning.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Scented Soy Wax Candle",
    price: 28.00,
    quantity: 1,
    description: "Hand-poured soy wax candle infused with lavender and vanilla essential oils for a calming home ambiance.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Professional DSLR Camera",
    price: 899.99,
    quantity: 1,
    description: "24.1 MP full-frame sensor camera equipped with 4K video recording, fast autofocus, and an interchangeable lens kit.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Wireless Ergonomic Mouse",
    price: 69.99,
    quantity: 1,
    description: "Sculpted thumb-rest design mouse with hyper-fast scrolling, silent click switches, and multi-device pairing.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Denim Trucker Jacket",
    price: 85.00,
    quantity: 1,
    description: "Classic fit denim jacket made from 100% organic cotton denim with button-closure chest pockets.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Gourmet Whole Bean Coffee",
    price: 18.50,
    quantity: 1,
    description: "Single-origin Arabica coffee beans medium-roasted with tasting notes of dark chocolate and toasted hazelnut.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Non-Slip Yoga Mat",
    price: 45.00,
    quantity: 1,
    description: "Extra-thick eco-friendly TPE yoga mat with alignment lines and a textured grip surface for maximum stability.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Ceramic Plant Pot with Stand",
    price: 38.00,
    quantity: 1,
    description: "Modern minimalist indoor planter crafted from white ceramic and paired with a natural bamboo wooden stand.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    name: "True Wireless Earbuds",
    price: 129.99,
    quantity: 1,
    description: "Compact earbuds featuring active noise cancellation, IPX7 water resistance, and a wireless charging case.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "Hard-Shell Suitcase",
    price: 175.00,
    quantity: 1,
    description: "Lightweight polycarbonate carry-on luggage featuring 360-degree spinner wheels and a TSA-approved combination lock.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyVQb8Jvbw5_uOpXBgqhBXHI9IiMbXbvOMGLT0zE5cg&s=10"
  }
];


export default mockProducts;
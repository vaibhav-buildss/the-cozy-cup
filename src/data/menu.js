const menu = [
  // =====================================================
  // WAKE UP & SIP
  // =====================================================
  {
    id: "coffee-001",
    category: "Coffee",
    name: "Cozy Cappuccino",
    description:
      "Classic cappuccino with creamy foam and a hint of cinnamon.",
    price: 169,
    image: "/images/menu/cozy-cappuccino.jpg",
    tags: ["Morning", "Signature Feel"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "coffee-002",
    category: "Coffee",
    name: "Hazelnut Cloud Latte",
    description:
      "Smooth espresso, steamed milk and hazelnut syrup topped with silky foam.",
    price: 199,
    image: "/images/menu/hazelnut-cloud-latte.jpg",
    tags: ["Hazelnut"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "coffee-003",
    category: "Coffee",
    name: "Caramel Cinnamon Brew",
    description:
      "Cold coffee blended with caramel and cinnamon for a sweet-spiced kick.",
    price: 189,
    image: "/images/menu/caramel-cinnamon-brew.jpg",
    tags: ["Cold Coffee"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "coffee-004",
    category: "Coffee",
    name: "Mocha Melt",
    description:
      "Rich chocolate and espresso blended into a creamy, indulgent coffee.",
    price: 199,
    image: "/images/menu/mocha-melt.jpg",
    tags: ["Chocolate"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "coffee-005",
    category: "Coffee",
    name: "The Cozy Cold Brew",
    description:
      "Slow-brewed coffee served chilled for a smooth, naturally sweet taste.",
    price: 179,
    image: "/images/menu/the-cozy-cold-brew.jpg",
    tags: ["Cold Brew"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },

  // =====================================================
  // COOL DOWN
  // =====================================================
  {
    id: "cooler-001",
    category: "Coolers",
    name: "Berry Breeze",
    description:
      "Strawberry, blueberry and citrus blended into a refreshing cooler.",
    price: 179,
    image: "/images/menu/berry-breeze.jpg",
    tags: ["Refreshing"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "cooler-002",
    category: "Coolers",
    name: "Mango Mint Fizz",
    description:
      "Juicy mango with fresh mint and sparkling soda.",
    price: 169,
    image: "/images/menu/mango-mint-fizz.jpg",
    tags: ["Fizzy"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "cooler-003",
    category: "Coolers",
    name: "Peachy Sunset",
    description:
      "Peach, orange and sparkling citrus layered for a colourful sunset effect.",
    price: 179,
    image: "/images/menu/peachy-sunset.jpg",
    tags: ["Citrus"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "cooler-004",
    category: "Coolers",
    name: "Choco Cookie Shake",
    description:
      "Thick chocolate shake blended with crunchy chocolate cookies.",
    price: 219,
    image: "/images/menu/choco-cookie-shake.jpg",
    tags: ["Shake", "Chocolate"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },

  // =====================================================
  // COZY BITES
  // =====================================================
  {
    id: "bites-001",
    category: "Breakfast & Bites",
    name: "Loaded Cheesy Fries",
    description:
      "Crispy fries covered with melted cheese and signature seasoning.",
    price: 189,
    image: "/images/menu/loaded-cheesy-fries.jpg",
    tags: ["Cheesy"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "bites-002",
    category: "Breakfast & Bites",
    name: "Paneer Peri-Peri Wrap",
    description:
      "Spicy grilled paneer, crunchy vegetables and creamy sauce wrapped in a soft tortilla.",
    price: 199,
    image: "/images/menu/paneer-peri-peri-wrap.jpg",
    tags: ["Spicy"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "bites-003",
    category: "Breakfast & Bites",
    name: "Cheesy Corn Toast",
    description:
      "Golden toast loaded with sweet corn, herbs and melted cheese.",
    price: 169,
    image: "/images/menu/cheesy-corn-toast.jpg",
    tags: ["Quick Bite"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "bites-004",
    category: "Breakfast & Bites",
    name: "Sunrise Breakfast Stack",
    description:
      "Fluffy pancakes, fresh fruit, honey and a creamy yogurt topping.",
    price: 229,
    image: "/images/menu/sunrise-breakfast-stack.jpg",
    tags: ["Breakfast"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },

  // =====================================================
  // GET COZY
  // =====================================================
  {
    id: "main-001",
    category: "Mains",
    name: "Creamy Dream Pasta",
    description:
      "Creamy herb pasta with mushrooms, vegetables and parmesan-style cheese.",
    price: 249,
    image: "/images/menu/creamy-dream-pasta.jpg",
    tags: ["Comfort Food"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "main-002",
    category: "Mains",
    name: "Desi Arrabbiata",
    description:
      "Spicy tomato pasta with Indian herbs and a bold masala twist.",
    price: 239,
    image: "/images/menu/desi-arrabbiata.jpg",
    tags: ["Spicy", "Indian Twist"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "main-003",
    category: "Mains",
    name: "Smoky Chicken Panini",
    description:
      "Grilled chicken, cheese, caramelized onions and smoky sauce in toasted artisan bread.",
    price: 279,
    image: "/images/menu/smoky-chicken-panini.jpg",
    tags: ["Chicken"],
    vegetarian: false,
    bestseller: true,
    available: true,
  },
  {
    id: "main-004",
    category: "Mains",
    name: "Cozy Club Sandwich",
    description:
      "Triple-layer sandwich with chicken, egg, lettuce, tomato and house sauce.",
    price: 259,
    image: "/images/menu/cozy-club-sandwich.jpg",
    tags: ["Chicken", "Egg"],
    vegetarian: false,
    bestseller: false,
    available: true,
  },

  // =====================================================
  // SOMETHING SWEET
  // =====================================================
  {
    id: "dessert-001",
    category: "Desserts",
    name: "Molten Midnight Cake",
    description:
      "Warm chocolate cake that reveals a gooey chocolate centre when cut open.",
    price: 199,
    image: "/images/menu/molten-midnight-cake.jpg",
    tags: ["Chocolate"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "dessert-002",
    category: "Desserts",
    name: "Lotus Biscoff Cheesecake",
    description:
      "Creamy cheesecake with a caramelized biscuit base and Biscoff topping.",
    price: 229,
    image: "/images/menu/lotus-biscoff-cheesecake.jpg",
    tags: ["Biscoff"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "dessert-003",
    category: "Desserts",
    name: "Brownie Sizzle",
    description:
      "Warm fudgy brownie served with vanilla ice cream and chocolate sauce.",
    price: 219,
    image: "/images/menu/brownie-sizzle.jpg",
    tags: ["Warm Dessert"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "dessert-004",
    category: "Desserts",
    name: "Coffee Tiramisu Jar",
    description:
      "Creamy mascarpone-style layers with coffee-soaked sponge and cocoa.",
    price: 199,
    image: "/images/menu/coffee-tiramisu-jar.jpg",
    tags: ["Coffee Dessert"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },

  // =====================================================
  // COZY SIGNATURES
  // =====================================================
  {
    id: "signature-001",
    category: "Signature",
    name: "The Cozy Flight",
    description:
      "Three mini coffees served together: Cappuccino, Mocha and Hazelnut Latte.",
    price: 299,
    image: "/images/menu/the-cozy-flight.jpg",
    tags: ["Signature", "Sharing"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "signature-002",
    category: "Signature",
    name: "Midnight Waffle",
    description:
      "Chocolate waffle topped with vanilla ice cream, chocolate sauce and cookie crumble.",
    price: 249,
    image: "/images/menu/midnight-waffle.jpg",
    tags: ["Signature", "Dessert"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
  {
    id: "signature-003",
    category: "Signature",
    name: "Cloud 9 Shake",
    description:
      "Vanilla-chocolate milkshake topped with whipped cream and chocolate crumble.",
    price: 229,
    image: "/images/menu/cloud-9-shake.jpg",
    tags: ["Signature", "Shake"],
    vegetarian: true,
    bestseller: false,
    available: true,
  },
  {
    id: "signature-004",
    category: "Signature",
    name: "Cozy Sharing Board",
    description:
      "A sharing platter with garlic bread, cheesy fries, mini sandwiches and dips.",
    price: 399,
    image: "/images/menu/cozy-sharing-board.png",
    tags: ["Signature", "Sharing"],
    vegetarian: true,
    bestseller: true,
    available: true,
  },
];

export const menuCategories = [
  "All",
  "Coffee",
  "Coolers",
  "Breakfast & Bites",
  "Mains",
  "Desserts",
  "Signature",
];

export default menu;

const business = {
  name: "THE COZY CUP",
  shortName: "Cozy Cup",
  tagline: "Where Every Sip Feels Like Home.",
  description:
    "A warm, modern café designed to feel like a comfortable escape from the busy world, combining specialty coffee, comfort food and relaxing spaces for conversations, studying and casual meetups.",

  concept:
    "Modern + Cozy + Social + Relaxing",
  atmosphere:
    "Warm, friendly, relaxed, youthful, and slightly premium.",
  targetCustomers:
    "Students, young professionals, families, friends, and casual meetups.",

  contact: {
    phone: "",
    phoneTel: "",
    whatsapp: "",
    email: "",
  },

  location: {
    address: "24, Maple Street, Green Park, New Delhi – 110016, India",
    area: "Green Park, New Delhi",
    mapsUrl: "",
    directionsUrl: "",
  },

  hours: {
    monday: "8:00 AM – 10:30 PM",
    tuesday: "8:00 AM – 10:30 PM",
    wednesday: "8:00 AM – 10:30 PM",
    thursday: "8:00 AM – 10:30 PM",
    friday: "8:00 AM – 10:30 PM",
    saturday: "8:00 AM – 11:30 PM",
    sunday: "9:00 AM – 11:00 PM",
  },

  hoursShort: "Mon–Fri 8 AM–10:30 PM · Sat 8 AM–11:30 PM · Sun 9 AM–11 PM",

  socials: {
    instagram: "",
    facebook: "",
  },

  // This is an imaginary café project, so no Google rating/review count is used.
  google: {
    rating: "",
    reviewCount: 0,
    reviewsUrl: "",
  },

  brand: {
    mainColors: [
      "Coffee Brown",
      "Cream",
      "Sage Green",
      "Dark Charcoal",
      "Soft Golden",
    ],
    visualIdentity:
      "Warm, inviting, modern, youthful, slightly premium.",
    coreFeeling: "A café that feels like a second home.",
  },

  hero: {
    eyebrow: "Specialty Coffee · Comfort Food · Cozy Moments",
    headline: "Where every sip feels like home.",
    description:
      "A warm escape from the busy world — made for good coffee, comfort food, conversations, studying and casual meetups.",
    primaryButton: "Explore the menu",
    secondaryButton: "Visit us",
    image: "/images/hero/hero.jpg",
  },

  about: {
    eyebrow: "Our story",
    title: "A little escape from the busy world.",
    description:
      "THE COZY CUP is a warm, modern café designed to feel like a comfortable escape from the busy world. It brings together specialty coffee, delicious comfort food, cozy interiors and relaxing spaces for conversations, studying and casual meetups.",
    image: "/images/about/about.jpg",
  },

  highlights: [
    {
      number: "01",
      title: "Warm & welcoming",
      description:
        "A relaxed atmosphere designed to feel friendly, comfortable and easy to settle into.",
    },
    {
      number: "02",
      title: "Coffee & comfort",
      description:
        "Specialty coffee and comforting food made for slow mornings, quick breaks and long conversations.",
    },
    {
      number: "03",
      title: "Made to stay",
      description:
        "A youthful, social space for studying, meeting friends, working casually or simply unwinding.",
    },
  ],

  featuredItems: [
    {
      id: "signature-cozy-flight",
      name: "The Cozy Flight",
      description:
        "Three mini coffees served together: Cappuccino, Mocha and Hazelnut Latte.",
      price: 299,
      image: "/images/menu/the-cozy-flight.jpg",
      tag: "Signature",
      category: "Signature",
      vegetarian: true,
      available: true,
    },
    {
      id: "signature-midnight-waffle",
      name: "Midnight Waffle",
      description:
        "Chocolate waffle topped with vanilla ice cream, chocolate sauce and cookie crumble.",
      price: 249,
      image: "/images/menu/midnight-waffle.jpg",
      tag: "Signature",
      category: "Signature",
      vegetarian: true,
      available: true,
    },
    {
      id: "signature-cloud-9-shake",
      name: "Cloud 9 Shake",
      description:
        "Vanilla-chocolate milkshake topped with whipped cream and chocolate crumble.",
      price: 229,
      image: "/images/menu/cloud-9-shake.jpg",
      tag: "Signature",
      category: "Signature",
      vegetarian: true,
      available: true,
    },
  ],

  amenities: [],
};

export default business;

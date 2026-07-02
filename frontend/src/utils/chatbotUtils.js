// Supported Cities

export const cities = [
  "Delhi",
  "Noida",
  "Lucknow",
  "Mumbai",
  "Pune",
  "Hyderabad",
  "Bangalore",
  "Gurgaon",
  "Jaipur",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Indore",
  "Bhopal",
  "Kanpur",
  "Patna",
  "Surat",
  "Nagpur",
  "Agra",
  "Varanasi"
];

// Get Current Time

export const getCurrentTime = () => {
  const now = new Date();

  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
};

// Detect User Intent

export const detectIntent = (message) => {
  const msg = message.toLowerCase().trim();

  const intents = {
    greeting: [
      "hi",
      "hello",
      "hey",
      "hii",
      "helo",
      "namaste",
      "good morning",
      "good afternoon",
      "good evening"
    ],

    about: [
      "about",
      "about quirex",
      "what is quirex",
      "tell me about quirex"
    ],

    property: [
      "property",
      "properties",
      "real estate",
      "listing",
      "listings",
      "available property",
      "available properties",
      "show property",
      "show properties",
      "find property",
      "find properties",
      "search property",
      "search properties"
    ],

    house: [
      "house",
      "houses",
      "home",
      "homes"
    ],

    flat: [
      "flat",
      "flats"
    ],

    apartment: [
      "apartment",
      "apartments"
    ],

    villa: [
      "villa",
      "villas"
    ],

    plot: [
      "plot",
      "plots",
      "land"
    ],

    buy: [
      "buy",
      "purchase",
      "buy property",
      "buy house",
      "buy home"
    ],

    rent: [
      "rent",
      "rental",
      "rent house",
      "rent property",
      "lease"
    ],

    sell: [
      "sell",
      "selling",
      "sell property",
      "list property",
      "post property"
    ],

    contact: [
      "contact",
      "contact us",
      "support",
      "customer care",
      "phone",
      "mobile",
      "email",
      "address"
    ],

    services: [
      "service",
      "services",
      "features",
      "facility",
      "facilities"
    ],

    login: [
      "login",
      "log in",
      "signin",
      "sign in"
    ],

    register: [
      "register",
      "signup",
      "sign up",
      "create account"
    ],

    profile: [
      "profile",
      "my profile",
      "account",
      "dashboard"
    ],

    price: [
      "price",
      "cost",
      "budget",
      "cheap",
      "expensive",
      "under"
    ],

    thanks: [
      "thanks",
      "thank you",
      "thankyou"
    ],

    smalltalk: [
      "ok",
      "okay",
      "okk",
      "k",
      "cool",
      "nice",
      "great",
      "awesome",
      "good"
    ],

    howareyou: [
      "how are you",
      "how r u",
      "how are u",
      "kaise ho"
    ],

    whoareyou: [
      "who are you",
      "your name",
      "who r u"
    ],

    yes: [
      "yes",
      "yeah",
      "yup",
      "sure",
      "of course"
    ],

    no: [
      "no",
      "nope",
      "not now"
    ],

    help: [
      "help",
      "assist",
      "guide",
      "support me"
    ],

    bye: [
      "bye",
      "goodbye",
      "see you",
      "take care"
    ]
  };

  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some(keyword => msg.includes(keyword))) {
      return intent;
    }
  }

  return null;
};

// Extract City from User Message

export const extractCity = (message) => {
  const cities = [
    "Delhi",
    "Noida",
    "Lucknow",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Bangalore",
    "Gurgaon",
    "Jaipur",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Patna",
    "Kanpur",
    "Indore",
    "Bhopal",
    "Surat",
    "Nagpur",
    "Varanasi",
    "Prayagraj"
  ];

  const text = message.toLowerCase();

  for (const city of cities) {
    if (text.includes(city.toLowerCase())) {
      return city;
    }
  }

  return null;
};

// Capitalize First Letter

export const capitalize = (text) => {
  return text
    .split(" ")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
};

// Format Property Result

export const formatProperty = (property) => {
  return `
🏠 ${property.title}

📍 ${property.location}

💰 ₹${property.price}

📐 ${property.area} Sq Ft
`;
};

// Random Suggestions

export const randomSuggestions = () => {
  const suggestions = [
    "Property in Delhi",
    "House in Noida",
    "Flats in Lucknow",
    "Villa in Hyderabad",
    "About Quirex",
    "Contact Support"
  ];

  return suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
};
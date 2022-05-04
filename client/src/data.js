const data = [
  {
    name: "Country Feast",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 129,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/2204_1602668149_CountryFeastmin.jpg",
    description: "Onion, Corn, Tomato, Mushroom & Capsicum",
  },
  {
    name: "Tandoori Paneer",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/7613_1602656948_TandooriPaneermin.jpg",
    description: "Paneer, Capsicum, Onion, Tomato & Red paprika",
  },
  {
    name: "Chicken Italiano",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 319,
        large: 399,
      },
    ],
    category: "nonveg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/1214_1602656795_Chickenitalianomin.jpg",
    description:
      "Chicken Sausage, Chicken Pepperoni, Mushroom, Capsicum & Black Olive",
  },
  {
    name: "Chicken Exotica",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 299,
        large: 349,
      },
    ],
    category: "nonveg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/9199_1602668245_Chickenexoticamin.jpg",
    description:
      "Chicken Pepperoni, Smoked chicken, Green & yellow zucchini & Jalapeno",
  },
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 149,
        large: 199,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/2299_1602656883_Margheritamin.jpg",
    description: "Classic cheese",
  },
  {
    name: "Classic Tomato",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 129,
        medium: 179,
        large: 219,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/2537_1602658262_Classictomatomin.jpg",
    description: "Cheese & Tomato",
  },
  {
    name: "Veggie Feast",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 199,
        medium: 259,
        large: 319,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/5242_1602656979_VeggieFeastmin.jpg",
    description: "Onion, Capsicum, Corn",
  },
  {
    name: "Spiced Chicken Meatballs",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 199,
        medium: 249,
        large: 319,
      },
    ],
    category: "nonveg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/3693_1602656925_Spicedchickenmeatballmin.jpg",
    description: "Meatball, Onion & Capsicum",
  },
  {
    name: "Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "Non veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/8667_1602656817_Chickentikkamin.jpg",
    description: "Chicken Tikka, Tomato & Onion",
  },
  {
    name: "Smoked Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "Non veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/4547_1602656923_Smokedchickenmin.jpg",
    description: "Smoked chicken, Jalapeno & Red capsicum",
  },
  {
    name: "Paneer Soya Supreme",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/7405_1602656905_Paneersoyasuprememin.jpg",
    description: "Paneer, Soya, Red paprika, Capsicum & Onion",
  },
  {
    name: "Farmer's Pick",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/1384_1602656860_Farmerspickmin.jpg",
    description: "Red capsicum, Green capsicum, Mushroom, Baby corn & Onion",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "Non veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/4775_1602656795_ChickenPepperonimin.jpg",
    description: "Chicken Pepperoni",
  },

  {
    name: "Veg Exotic",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/9682_1602656979_VegExoticamin.jpg",
    description:
      "Red capsicum, Baby corn, Green Capsicum, Black olive & Jalapenos",
  },

  {
    name: "Veggie Supreme",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "veg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/161_1602656980_VeggieSupememin.jpg",
    description:
      "Onion, Green capsicum, Mushroom, Red paprika, Black olive & Corn",
  },

  {
    name: "Lebanese Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 149,
        medium: 199,
        large: 249,
      },
    ],
    category: "nonveg",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/1093/1334_1602656861_LebaneseChickenmin.jpg",
    description: "Lebanese chicken, Corn & Capsicum",
  },
];

export default data;
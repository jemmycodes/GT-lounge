import wine from "../assets/wine.svg";
import food from "../assets/food.svg";
import beer from "../assets/beer.svg";
import cognac from "../assets/cognac.svg";
import hamburger from "../assets/hamburger.webp";

export const radioData = [
  { value: "English", id: "english" },
  { value: "Turkish", id: "turkish" },
];

export const menuData = [
  { type: "Food", icon: food },
  { type: "Wine", icon: wine },
  { type: "Cognac", icon: cognac },
  { type: "Beer", icon: beer },
];

export const foodItems = [
  {
    id: "1",
    name: "Pepperoni Pizza",
    description:
      "A classic pizza topped with pepperoni, tomato sauce, and mozzarella cheese.",
    image: hamburger,
    price: "$12.99",
  },
  {
    id: "12",
    name: "Peperroni Pizza",
    description:
      "A classic pizza topped with pepperoni, tomato sauce, and mozzarella cheese.",
    image: hamburger,
    price: "$12.99",
  },
  {
    id: "2",
    name: "Chicken Teriyaki Bowl",
    description:
      "Grilled chicken served over rice with teriyaki sauce, vegetables, and sesame seeds.",
    image: hamburger,
    price: "$10.99",
  },
  {
    id: "3",
    name: "Burger and Fries",
    description:
      "A juicy beef patty topped with cheese, lettuce, tomato, and served with crispy fries.",
    image: hamburger,
    price: "$8.99",
  },
  {
    id: "4",
    name: "Salmon Sashimi",
    description:
      "Fresh slices of raw salmon served with wasabi, soy sauce, and pickled ginger.",
    image: hamburger,
    price: "$16.99",
  },
  {
    id: "5",
    name: "Vegetable Pad Thai",
    description:
      "Rice noodles stir-fried with tofu, vegetables, peanuts, and a sweet and sour sauce.",
    image: hamburger,
    price: "$11.99",
  },
];

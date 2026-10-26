import LeatherBag from "../../../assets/img/leather-bag.jpg.jfif"
import MinimalistWatch from "../../../assets/img/minimalist-watch.jpg.jfif"
import Sunglasses from "../../../assets/img/sunglasses.jpg.jfif"
import LeatherShoes from "../../../assets/img/leather-shoes.jpg.jfif"
import NoirPerfume from "../../../assets/img/noir-perfume.jpg.jfif"

const productsData = [
  {
    id: 1,
    name: "Classic Leather Bag",
    category: "Accessories",
    price: 850,
    image: LeatherBag,
    available: true,
  },
  {
    id: 2,
    name: "Minimalist Watch",
    category: "Watches",
    price: 1200,
    image: MinimalistWatch,
    available: true,
  },
  {
    id: 3,
    name: "Elegant Sunglasses",
    category: "Accessories",
    price: 450,
    image: Sunglasses ,
    available: false,
  },
  {
    id: 4,
    name: "Classic Leather Shoes",
    category: "Footwear",
    price: 950,
    image: LeatherShoes,
    available: true,
  },  
{
  id: 5,
  name: "Noir Essence Perfume",
  category: "Fragrance",
  price: 520,
  image: NoirPerfume,
  available: true,
},

];

export default productsData;
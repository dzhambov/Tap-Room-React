import { v4 } from "uuid";

const masterItemList = [{
  tapName: "Beer",
  id: v4(),
  items: [
    {
      brand: "Heineken",
      flavor: "Pilsner",
      price: "$6",
      quantity: 124,
      id: v4()
    },
    {
      brand: "Sam Adams",
      flavor: "Lager",
      price: "$6",
      quantity: 124,
      id: v4()
    },
    {
      brand: "Lagunitas",
      flavor: "IPA",
      price: "$6",
      quantity: 124,
      id: v4()
    },
  ],
  tapName: "Kombucha",
  id: v4(),
  items: [
    {
      brand: "Brew",
      flavor: "Blueberry Basil",
      price: "$4",
      quantity: 124,
      id: v4()
    },
    {
      brand: "Suja",
      flavor: "Pineapple Passion Fruit",
      price: "$4",
      quantity: 124,
      id: v4()
    },
    {
      brand: "Bao",
      flavor: "Ginger",
      price: "$4",
      quantity: 124,
      id: v4()
    },
  ]
}]

export default masterItemList;
import "./App.css";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import QuantityInput from "./components/QuantityInput";
import CalculateGSTButton from "./components/CalculateButton";
import AddItemButton from "./components/AddItemButton";
import { Item } from "./interfaces/Item";

function App() {
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    if (finalPrice != 0) {
      document.title = `Final Price of ${selectedItem} is Rs ${finalPrice}`;
    } else {
      document.title = "Calculate GST";
    }
  }, [finalPrice]);

  const items: Item[] = [
    {
      name: "book",
      gst: 3,
      price: 100,
    },
    {
      name: "laptop",
      gst: 18,
      price: 200,
    },
    {
      name: "sofa",
      gst: 10,
      price: 150,
    },
  ];

  function calculateGST(): void {
    let gst_price = 0;
    let gst_rate = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i].name === selectedItem) {
        gst_rate = items[i].gst / 100;
        gst_price = items[i].price + items[i].price * gst_rate;
      }
    }

    setFinalPrice(quantity * gst_price);
  }

  return (
    <div className="App">
      <Dropdown
        items={items}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <br></br>
      <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton
        selectedItem={selectedItem}
        quantity={quantity}
        setFinalPrice={setFinalPrice}
      />
      <br />
      <CalculateGSTButton calculateGST={calculateGST} />
      <br />
      Final Price: {finalPrice}
    </div>
  );
}

export default App;

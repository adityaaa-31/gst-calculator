import { useState } from "react";

export default function AddItemButton({
  selectedItem,
  quantity,
  setFinalPrice,
}: {
  selectedItem: string;
  quantity: number;
  setFinalPrice: (price: number) => void;
}) {
  const [itemList, setItemList] = useState<string[]>([]);

  function addItem() {
    setItemList([...itemList, selectedItem]);
  }

  function clearList() {
    setItemList([]);
    setFinalPrice(0);
  }

  return (
    <>
      <div>
        <button className="selectItemButton" onClick={addItem}>
          Add Item
        </button>

        <button className="selectItemButton" onClick={clearList}>
          Clear List
        </button>

        <br />
        <>Selected Item is: {selectedItem}</>
      </div>

      <ul>
        {itemList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

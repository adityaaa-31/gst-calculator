import { useEffect } from "react";
import { Item } from "../interfaces/Item";

export default function Dropdown({
  items,
  selectedItem,
  setSelectedItem,
}: {
  items: Item[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}) {
  // useEffect(()=>{

  // },[selectedItem])
  return (
    <select
      value={selectedItem}
      onChange={(e) => setSelectedItem(e.target.value)}
    >
      {items.map((item, index) => (
        <option key={index}>{item.name}</option>
      ))}
    </select>
  );
}

interface QuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function QuantityInput({
  quantity,
  setQuantity,
}: QuantityProps) {
  function handleOnChange(e: { target: { value: string } }) {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
  }
  return (
    <>
      <br />
      <input
        className="inputField"
        type="number"
        value={quantity}
        onChange={handleOnChange}
        placeholder="Enter it's quantity"
      />
    </>
  );
}

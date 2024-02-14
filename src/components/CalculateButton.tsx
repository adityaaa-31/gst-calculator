interface GTSButtonProps {
  calculateGST: () => void;
}

export default function CalculateGSTButton({ calculateGST }: GTSButtonProps) {
  return (
    <div>
      <button className="Button" onClick={calculateGST}>
        Calculate GST
      </button>
    </div>
  );
}

export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items in your list</em>{" "}
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Your got everything! Ready to go✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
          ${packedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}

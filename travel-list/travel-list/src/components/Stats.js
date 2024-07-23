export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? "Now you are ready to Go ✈️"
          : `  You have packed ${numPacked} out of ${numItems} items🧳 (${percentage}%)
        packed..`}
      </p>
    </footer>
  );
}

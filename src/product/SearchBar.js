function SearchBar({
  filterText,
  inStock,
  onFilterTextChange,
  onInStockChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={inStock} onChange={(e) => onInStockChange(e.target.checked)} />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;

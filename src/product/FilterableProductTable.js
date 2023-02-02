import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ productList }) {
  const [filterText, setFilterText] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStock={inStock}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStock}
      />
      <ProductTable
        filterText={filterText}
        inStock={inStock}
        productList={productList}
      />
    </div>
  );
}

export default FilterableProductTable;

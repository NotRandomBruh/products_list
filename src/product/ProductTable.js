import Product from "./Product";
import "./ProductTable.css";

function ProductTable({productList, filterText, inStock}) {

  const rows = [];
  productList.forEach((product) => {
    if( product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ){
        if ( !(inStock && !product.stocked) )
            rows.push(<Product key={product.name} product={product} />);
    }
  });

  return (
    <table>
      <thead className="product-header">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;

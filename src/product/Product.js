import "./Product.css";

function Product({ product }) {

  const productClasses = "product-row".concat(
    product.stocked ? " product-stock" : " product-missing"
  );

  return (
    <tr className={productClasses}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default Product;

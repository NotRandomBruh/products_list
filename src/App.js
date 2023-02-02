
import './App.css';
import PRODUCTS from './data/data';
import FilterableProductTable from './product/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable productList={PRODUCTS} />
    </div>
  );
}

export default App;

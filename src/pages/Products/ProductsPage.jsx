import Products from './Components/Products';
import { FiSearch } from 'react-icons/fi';
import './ProductsPage.css';

function ProductsPage(props) {
  return (
    <main className="products-page">
      <header className="products-header">
        <p>THE TGHZLUX COLLECTION</p>
        <h1>Our Products</h1>
        <span>
          Discover timeless pieces selected for your style.
        </span>

        <div className="products-search">
          <FiSearch />

          <input
            type="search"
            placeholder="Search products..."
            value={props.searchQuery || ''}
            onChange={(event) =>
              props.setSearchQuery(event.target.value)
            }
            aria-label="Search products"
          />
        </div>
      </header>

      <Products
        onBuy={props.onBuy}
        searchQuery={props.searchQuery || ''}
      />
    </main>
  );
}

export default ProductsPage;

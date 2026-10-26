
import products from '../../../pages/Products/Components/ProductsData';
import ProductCard from './ProductCard';
import './Products.css';

function Products(props) {
  const searchQuery = (props.searchQuery || '').trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="products-section">
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={props.onBuy}
            />
          ))}
        </div>
      ) : (
        <div className="products-not-found">
          <h2>No products found</h2>
          <p>
            Try searching with a different product name.
          </p>
        </div>
      )}
    </section>
  );
}

export default Products;

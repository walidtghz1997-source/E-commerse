import { useState } from 'react';
import './ProductCard.css';

function ProductCard(props) {
  const product = props.product;

  const [isAdded, setIsAdded] = useState(false);
  const [addCount, setAddCount] = useState(0);

  function handleBuy() {
    if (!product.available) {
      alert('This product is currently unavailable.');
      return;
    }

    props.onBuy(product);

    setIsAdded(true);
    setAddCount(addCount + 1);

    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  }

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card-info">
        <p className="product-card-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-card-price">
          {product.price} MAD
        </p>

        <button
          type="button"
          onClick={handleBuy}
          disabled={!product.available}
          className={isAdded ? 'product-added' : ''}
        >
          {!product.available
            ? 'Unavailable'
            : isAdded
              ? 'Added to Cart ✓'
              : 'Buy Now'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
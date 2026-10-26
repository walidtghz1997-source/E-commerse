
import OrderForm from './Components/OrderForm';
import OrderSummary from './Components/OrderSummary';

import './OrderPage.css';

function OrderPage(props) {
  const cart = props.cart || [];

  const cartTotal = cart.reduce(
    (total, product) =>
      total + product.price * (product.quantity || 1),
    0
  );

  return (
    <main className="order-page">
      <header className="order-header">
        <p>YOUR NEXT PURCHASE</p>
        <h1>
          {props.confirmedOrder
            ? 'Order Confirmation'
            : 'Complete Your Order'}
        </h1>

        <span>
          {props.confirmedOrder
            ? 'Your order invoice is ready.'
            : 'Review your selection and enter your details.'}
        </span>
      </header>

      {props.confirmedOrder ? (
        <div className="order-container">
          <OrderSummary
            cart={[]}
            cartTotal={0}
            confirmedOrder={props.confirmedOrder}
          />
        </div>
      ) : (
        <div className="order-container">
          <section className="order-cart">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
              <div className="order-cart-empty">
                <p>
                  Your cart is empty. Add products from our collection.
                </p>
              </div>
            ) : (
              <>
                {cart.map((product) => (
                  <div
                    className="order-cart-item"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="order-cart-details">
                      <h3>{product.name}</h3>

                      <p>
                        Unit Price: {product.price} MAD
                      </p>

                      <div className="cart-quantity-controls">
                        <label htmlFor={`quantity-${product.id}`}>
                          Quantity:
                        </label>

                        <input
                          id={`quantity-${product.id}`}
                          type="number"
                          min="1"
                          value={product.quantity || 1}
                          onChange={(event) => {
                            const quantity = Number(
                              event.target.value
                            );

                            if (quantity >= 1) {
                              props.onQuantityChange(
                                product.id,
                                quantity
                              );
                            }
                          }}
                        />
                      </div>

                      <p>
                        Subtotal:{' '}
                        {product.price * (product.quantity || 1)} MAD
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          props.onRemove(product.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <p className="order-cart-total">
                  Cart Total: {cartTotal} MAD
                </p>
              </>
            )}
          </section>

          <section className="order-content">
            <div className="order-form-wrapper">
              <OrderForm
                cart={cart}
                onConfirmOrder={props.onConfirmOrder}
              />
            </div>

            <div className="order-summary-wrapper">
              <OrderSummary
                cart={cart}
                cartTotal={cartTotal}
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default OrderPage;

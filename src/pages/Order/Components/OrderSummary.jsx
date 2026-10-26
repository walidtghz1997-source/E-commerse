
import './OrderSummary.css';

function OrderSummary(props) {
  const cart = props.cart || [];
  const order = props.confirmedOrder;

  const items = order ? order.items : cart;

  const total = order
    ? order.total
    : items.reduce(
        (sum, product) =>
          sum + product.price * (product.quantity || 1),
        0
      );

  const totalQuantity = items.reduce(
    (sum, product) => sum + (product.quantity || 1),
    0
  );

  return (
    <aside className="order-summary">
      <p className="summary-subtitle">
        {order ? 'OFFICIAL ORDER DETAILS' : 'YOUR SELECTION'}
      </p>

      <h2>
        {order ? 'Order Invoice' : 'Order Summary'}
      </h2>

      {order && (
        <div className="invoice-details">
          <p>
            <strong>Order Number:</strong> {order.orderNumber}
          </p>

          <p>
            <strong>Order Date:</strong> {order.date}
          </p>

          <p>
            <strong>Customer:</strong> {order.customer.name}
          </p>

          <p>
            <strong>Email:</strong> {order.customer.email}
          </p>

          <p>
            <strong>Phone:</strong> {order.customer.phone}
          </p>

          <p>
            <strong>Delivery Address:</strong>{' '}
            {order.customer.address}, {order.customer.city}
          </p>

          {order.customer.notes && (
            <p>
              <strong>Additional Notes:</strong>{' '}
              {order.customer.notes}
            </p>
          )}
        </div>
      )}

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="summary-row">
            <span>Different Products</span>
            <span>{items.length}</span>
          </div>

          <div className="summary-row">
            <span>Total Quantity</span>
            <span>{totalQuantity}</span>
          </div>

          <div className="summary-products">
            {items.map((product) => (
              <div
                className="summary-product"
                key={product.id}
              >
                <div>
                  <p>{product.name}</p>

                  <span>
                    {product.price} MAD × {product.quantity || 1}
                  </span>
                </div>

                <strong>
                  {product.price * (product.quantity || 1)} MAD
                </strong>
              </div>
            ))}
          </div>

          <div className="summary-row summary-total">
            <span>Grand Total</span>
            <strong>{total} MAD</strong>
          </div>

          {order && (
            <p className="invoice-thank-you">
              Thank you for shopping with TGHZLUX.
            </p>
          )}
        </>
      )}
    </aside>
  );
}

export default OrderSummary;

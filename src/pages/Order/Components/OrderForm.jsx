
import { useState } from 'react';
import './OrderForm.css';

function OrderForm(props) {
  const cart = props.cart || [];

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  const cartTotal = cart.reduce(
    (total, product) =>
      total + product.price * (product.quantity || 1),
    0
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty. Please add a product first.');
      return;
    }

    const customer = {
      name: customerName.trim(),
      email: customerEmail.trim(),
      phone: customerPhone.trim(),
      address: customerAddress.trim(),
      city: customerCity.trim(),
      notes: customerNotes.trim(),
    };

    const success = props.onConfirmOrder(customer);

    if (success) {
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setCustomerAddress('');
      setCustomerCity('');
      setCustomerNotes('');
    }
  }

  return (
    <form
      className="order-form"
      onSubmit={handleSubmit}
    >
      <h2>Customer Information</h2>

      <p>
        Enter your details to confirm all products in your cart.
      </p>

      <div className="form-group">
        <label htmlFor="customer-name">Full Name</label>

        <input
          type="text"
          id="customer-name"
          name="name"
          placeholder="Enter your full name"
          value={customerName}
          onChange={(event) =>
            setCustomerName(event.target.value)
          }
          autoComplete="name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-email">Email Address</label>

        <input
          type="email"
          id="customer-email"
          name="email"
          placeholder="Enter your email"
          value={customerEmail}
          onChange={(event) =>
            setCustomerEmail(event.target.value)
          }
          autoComplete="email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-phone">Phone Number</label>

        <input
          type="tel"
          id="customer-phone"
          name="phone"
          placeholder="Enter your phone number"
          value={customerPhone}
          onChange={(event) =>
            setCustomerPhone(event.target.value)
          }
          autoComplete="tel"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-address">Delivery Address</label>

        <input
          type="text"
          id="customer-address"
          name="address"
          placeholder="Street, building, or neighborhood"
          value={customerAddress}
          onChange={(event) =>
            setCustomerAddress(event.target.value)
          }
          autoComplete="street-address"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-city">City</label>

        <input
          type="text"
          id="customer-city"
          name="city"
          placeholder="Enter your city"
          value={customerCity}
          onChange={(event) =>
            setCustomerCity(event.target.value)
          }
          autoComplete="address-level2"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-notes">
          Additional Notes (Optional)
        </label>

        <textarea
          id="customer-notes"
          name="notes"
          placeholder="Any special delivery instructions?"
          value={customerNotes}
          onChange={(event) =>
            setCustomerNotes(event.target.value)
          }
          rows="3"
        />
      </div>

      <div className="order-form-total">
        <span>Order Total</span>
        <strong>{cartTotal} MAD</strong>
      </div>

      <button
        type="submit"
        className="order-submit"
        disabled={cart.length === 0}
      >
        CONFIRM ORDER
      </button>
    </form>
  );
}

export default OrderForm;

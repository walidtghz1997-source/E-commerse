
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home/Home';
import ProductsPage from './pages/Products/ProductsPage';
import OrderPage from './pages/Order/OrderPage';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  function handleBuy(product) {
    if (!product.available) {
      return;
    }

    setConfirmedOrder(null);

    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        { ...product, quantity: 1 },
      ];
    });
  }

  function handleRemove(productId) {
    setCart((previousCart) =>
      previousCart.filter(
        (product) => product.id !== productId
      )
    );
  }

  function handleQuantityChange(productId, quantity) {
    if (quantity < 1) {
      return;
    }

    setCart((previousCart) =>
      previousCart.map((product) =>
        product.id === productId
          ? { ...product, quantity }
          : product
      )
    );
  }

  function handleConfirmOrder(customer) {
    const orderItems = cart.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));

    const total = orderItems.reduce(
      (sum, product) =>
        sum + product.price * product.quantity,
      0
    );

    const order = {
      customer,
      items: orderItems,
      total,
      orderNumber: `TGH-${Date.now()}`,
      date: new Date().toLocaleString(),
    };

    setConfirmedOrder(order);
    setCart([]);

    return true;
  }

  const cartCount = cart.reduce(
    (total, product) =>
      total + (product.quantity || 1),
    0
  );

  const cartTotal = cart.reduce(
    (total, product) =>
      total + product.price * (product.quantity || 1),
    0
  );

  return (
    <BrowserRouter>
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onBuy={handleBuy} />}
        />

        <Route
          path="/products"
          element={
            <ProductsPage
              onBuy={handleBuy}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />

        <Route
          path="/order"
          element={
            <OrderPage
              cart={cart}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
              onConfirmOrder={handleConfirmOrder}
              confirmedOrder={confirmedOrder}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

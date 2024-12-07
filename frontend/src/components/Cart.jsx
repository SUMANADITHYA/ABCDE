import React, { useState, useEffect } from 'react';

function Cart({ token }) {
  const [cart, setCart] = useState([]);

  // Fetch cart data when the component loads
  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('http://localhost:8081/api/cart', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setCart(data.items);
    };

    fetchCart();
  }, [token]);

  const handleCheckout = async () => {
    const response = await fetch('http://localhost:8080/api/cart/checkout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.success) {
      alert('Order placed successfully!');
      setCart([]); // Clear the cart after successful checkout
    } else {
      alert('Failed to place order');
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from 'react';
import { fetchItems, addToCart, fetchCart, checkout, fetchOrders } from '../api';

function ItemList({ token }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetchItems();
      setItems(response.data);
    };
    getItems();
  }, []);

  const handleAddToCart = async (itemId) => {
    try {
      await addToCart(token, itemId);
      alert('Item added to cart!');
    } catch (error) {
      alert('Failed to add item to cart.');
    }
  };

  const handleViewCart = async () => {
    const response = await fetchCart(token);
    alert(JSON.stringify(response.data));
  };

  const handleCheckout = async () => {
    await checkout(token);
    alert('Order placed successfully!');
  };

  const handleViewOrders = async () => {
    const response = await fetchOrders(token);
    alert(JSON.stringify(response.data));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={handleViewCart}>View Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={handleViewOrders}>Order History</button>

      <style>{`
        div {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f8f8;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          font-size: 28px;
          color: #333;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff;
          transition: box-shadow 0.3s ease;
        }

        li:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        button {
          padding: 8px 12px;
          margin-left: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        button:active {
          background-color: #004085;
        }

        button:not(:last-child) {
          margin-right: 10px;
        }

        button[disabled] {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default ItemList;

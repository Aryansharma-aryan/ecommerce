import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(exist);
  }, []); // ✅ only runs on mount

  // ✅ Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src={item.image} style={{width:"200px",height:"200px"}}/>
            <h2>{item.name}</h2>
            <h3>₹ {item.price}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}

      {cart.length !== 0 && (
        <div>
          <h2>Total Price: ₹ {total}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantities] = useState({});

  useEffect(() => {
    fetch("http://localhost:4100/api/getAll")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // ✅ Initialize quantity 1 for each product AFTER products are fetched
        const initialQuantity = {};
        data.forEach(product => {
          initialQuantity[product._id] = 1;
        });
        setQuantities(initialQuantity);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ handle quantity increment/decrement
  const handleChange = (productId, value) => {
    setQuantities(prev => {
      const updated = { ...prev };
      updated[productId] = Math.max(1, (updated[productId] || 1) + value); // never below 1
      return updated;
    });
  };

  // ✅ Add product to cart with selected quantity
  const handleAddToCart = (product) => {
    const selectedQuantity = quantity[product._id] || 1;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const found = existingCart.find(item => item._id === product._id);

    if (found) {
      const updatedCart = existingCart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + selectedQuantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...existingCart, { ...product, quantity: selectedQuantity }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    alert(`${product.name} added to cart with quantity ${selectedQuantity}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 text-primary">Our Products</h2>
      <div className="row g-4">
        {products.map(product => (
          <div key={product._id} className="col-sm-6 col-md-4">
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
                <p className="fw-bold text-success mb-1">₹{product.price}</p>
                <span className="badge bg-primary mb-2">{product.category}</span>

                {/* ✅ Quantity buttons */}
                <div className="mb-2">
                  <button
                    onClick={() => handleChange(product._id, -1)}
                    className="btn btn-danger btn-sm me-2">-</button>

                  <span>{quantity[product._id]}</span>

                  <button
                    onClick={() => handleChange(product._id, 1)}
                    className="btn btn-success btn-sm ms-2">+</button>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


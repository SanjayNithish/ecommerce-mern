import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddItem = () => {
  const navigate = useNavigate();
  const initialProductState = {
    name: "",
    price: 0,
    description: "",
    ratings: 0,
    images: [{ image: "" }],
    category: "",
    seller: "",
    stock: 0,
    numOfReviews: 0,
    reviews: [],
  };

  const [product, setProduct] = useState(initialProductState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/v1/product/new", product);
      console.log(product.data);
      alert("Product created successfully!");
      setProduct(initialProductState);
      navigate("/home");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating the product.");
    }
  };

  return (
    <div>
      <div className="add-item-container">
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Ratings:</label>
            <input
              type="number"
              name="ratings"
              value={product.ratings}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Seller:</label>
            <input
              type="text"
              name="seller"
              value={product.seller}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Number of Reviews:</label>
            <input
              type="number"
              name="numOfReviews"
              value={product.numOfReviews}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="images"
              value={product.images[0].image}
              onChange={(e) =>
                setProduct({
                  ...product,
                  images: [{ image: e.target.value }],
                })
              }
            />
          </div>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

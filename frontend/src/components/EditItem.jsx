import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    ratings: 0,
    images: [],
    category: "",
    seller: "",
    stock: 0,
    numOfReviews: 0,
    reviews: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/product/" + id)
      .then((res) => {
        console.log(res.data.prodct);
        setProduct({
          ...product,
          images: res.data.product.images[0].image,
          name: res.data.product.name,
          price: res.data.product.price,
          description: res.data.product.description,
          ratings: res.data.product.ratings,
          category: res.data.product.category,
          seller: res.data.product.seller,
          stock: res.data.product.stock,
          numOfReviews: res.data.product.numOfReviews,
        });
        console.log(product);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    var data = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      ratings: e.target.ratings.value,
      images: [{ image: e.target.images.value }],
      category: e.target.category.value,
      seller: e.target.seller.value,
      stock: e.target.stock.value,
      numOfReviews: e.target.numOfReviews.value,
    };

    console.log(data);

    await axios
      .put("http://localhost:8080/api/v1/product/" + id, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    var data = product;
    data[e.target.name] = e.target.value;
    console.log(data);
    setProduct({
      ...product,
      data,
    });
  };

  return (
    <div>
      <div className="add-item-container">
        <h2>Edit Product</h2>
        <form onSubmit={updateData}>
          <div>
            <label>Image</label>
            <input
              type="text"
              name="images"
              value={product.images}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Ratings:</label>
            <input
              type="number"
              name="ratings"
              value={product.ratings}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Seller:</label>
            <input
              type="text"
              name="seller"
              value={product.seller}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Number of Reviews:</label>
            <input
              type="number"
              name="numOfReviews"
              value={product.numOfReviews}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;

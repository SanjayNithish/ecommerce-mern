import React, { useEffect, useState } from "react";
import "../App.css";
import "./UserProduct.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function UserProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleAddProduct = (id) => {
    var data = localStorage.getItem("cart");
    if (data === null) {
      data = [];
      data.push(id);
      localStorage.setItem("cart", JSON.stringify(data));
      alert("Added to cart");
    } else {
      var dataArray = JSON.parse(data);
      var flag = 0;
      dataArray.forEach((element) => {
        if (element._id === id._id) {
          alert("Item already added to Cart!");
          flag = 1;
        }
      });
      if (flag === 0) {
        dataArray.push(id);
        console.log(dataArray);
        localStorage.setItem("cart", JSON.stringify(dataArray));
        alert("Added to cart");
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8080/api/v1/product",
    })
      .then((res) => {
        setData(res.data.Products);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="product_container">
        {data.map((product) => (
          <div
            key={product._id}
            className="card"
            onClick={() => handleDetail(product._id)}
          >
            <div className="image">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt={`Product ${product.name} Image`}
                />
              ))}
            </div>

            <div className="card_description">
              <h4>{product.name}</h4>
              <h6>
                <span>Ratings : </span>
                {product.ratings}
              </h6>
              <h6>
                <span>Price : </span>
                {product.price}
              </h6>
              <h6>
                <span>Description : </span>
                {product.description}
              </h6>
            </div>
            <div>
              <button
                className="addToCart_button"
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProduct;

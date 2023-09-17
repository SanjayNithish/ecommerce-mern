import React, { useState } from "react";
import "./UserCart.css";
const UserCart = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")));

  return (
    <div>
      <div className="top">
        <div>
          <h1>Cart</h1>
        </div>
        <div>
          <button
            className="ClearCart_button"
            onClick={() => {
              console.log("Cleared caches");
              localStorage.removeItem("cart");
              localStorage.setItem("cart", JSON.stringify([]));
              setData(JSON.parse(localStorage.getItem("cart")));
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="product_container1">
        {data.map((product) => (
          <div key={product._id} className="card1">
            <div className="image1">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt={`Product ${product.name} Image`}
                />
              ))}
            </div>

            <div className="card_description1">
              <h4>{product.name}</h4>
              <h6 className="price">
                <span>Price : </span>
                {product.price}
              </h6>
            </div>
            <div>
              <button
                className="RemoveCart_button"
                type="button"
                onClick={() => {
                  var newData = data;
                  newData.splice(newData.indexOf(product), 1);
                  localStorage.setItem("cart", JSON.stringify(newData));
                  setData(JSON.parse(localStorage.getItem("cart")));
                }}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCart;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
import "./Detail.css";

function Detail() {
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

  return (
    <div className="DContainer">
      <div className="DetailContainer">
        <div className="Dleft">
          <img src={product.images} alt={product.name} />
        </div>
        <div className="Dright">
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Seller: {product.seller}</p>
          <p>Stock: {product.stock}</p>
          <p>Number of Reviews: {product.numOfReviews}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;

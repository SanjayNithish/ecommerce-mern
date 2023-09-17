import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8080/api/v1/product",
    })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.Products);
        setData(res.data.Products);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  const onDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:8080/api/v1/product/" + id)
      .then((res) => {
        console.log(res);
        axios({
          method: "GET",
          url: "http://localhost:8080/api/v1/product",
        })
          .then((res) => {
            console.log(res.data);
            console.log(res.data.Products);
            setData(res.data.Products);
            setLoading(false);
          })
          .catch((e) => {
            setError(e);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (id) => {
    navigate(`/edititem/`);
  };

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
          <div key={product._id} className="card">
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

            <div className="buttons" id="editB">
              <div>
                <Link className="edit" to={`/edititem/${product._id}`}>
                  Edit
                </Link>
              </div>

              <div>
                <button
                  className="delete"
                  type="button"
                  onClick={() => onDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

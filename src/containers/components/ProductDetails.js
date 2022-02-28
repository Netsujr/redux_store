import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../../redux/actions/productActions";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <h5 className="ui teal tag label">${price}</h5>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

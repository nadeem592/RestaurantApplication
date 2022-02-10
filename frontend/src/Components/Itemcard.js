import React from 'react';
import { useCart } from "react-use-cart"

 const Itemcard = (props) => {
      const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-3 overflow-hidden h-100 shadow">
        <img
          src={require(`./images/item-${props.id}.jpeg`)}
          style={{ width: "100%", height: "200px" }}
          alt={props.title}
          className="card-img-top img-fluid"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">Rs.{props.price}</h5>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Itemcard;
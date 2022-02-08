import React from 'react';
import { useCart } from "react-use-cart"

 const Itemcard = (props) => {
      const { addItem } = useCart();
  return (
    
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
          <div class="card p-3 overflow-hidden h-100 shadow">
              <img src={require(`./images/item-${props.id}.jpeg`)} style={{'width':'100%','height':'200px'}} alt={props.title} class="card-img-top img-fluid"/>
              <div class="card-body text-center">
                <h5 class="card-title">{props.title}</h5>
                <h5 class="card-title">Rs.{props.price}</h5>
                <button class="btn btn-success"
                 onClick={() =>addItem(props.item)} 
                 >Add to Cart</button>
                 <p class="card-text">{props.desc}</p>
                 
              </div>
          </div>
      </div>
      
  );
};
export default Itemcard;
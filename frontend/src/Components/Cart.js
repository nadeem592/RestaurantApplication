import React from 'react';
import {useCart} from "react-use-cart";
import Checkout from "./Checkout";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div>
      <section className="py-4 container" href="123">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems})total Items : ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={require(`./images/item-${item.id}.jpeg`)}
                          style={{ height: "6rem" }}
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>Quantity({item.quantity})</td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          removeItem
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total price: Rs.{cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear cart
            </button>
            <a class="btn btn-primary" href={"/checkout"} role="button">
              Place Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
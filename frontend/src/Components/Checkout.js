import React from "react";
import { useCart } from "react-use-cart";

const Checkout = () => {
  const { items, cartTotal } = useCart();
  return (
    <div>
      <section className="py-4 container" href="123">
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>Quantity({item.quantity})</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total price: Rs.{cartTotal}</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Checkout;

import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Checkout = () => {
  const { items, cartTotal } = useCart();
  // function submitHandler() {
  //   // items.map((item) => {
  //   fetch("http://127.0.0.1:7001/api/history/", {
  //     method: "POST",
  //     body: JSON.stringify(
  //       // username: localStorage.getItem("logged-user"),
  //       // price: 22,
  //       // item_name: "item.title",
  //       // // date: "12/22/2022",
  //       // quantity: "item.quantity",
  //       items
  //     ),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   // });
  // }
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
                {}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total price: Rs.{cartTotal}</h2>
          </div>
          {/* <button onClick={submitHandler}>Save Order</button> */}
        </div>
      </section>
    </div>
  );
};
export default Checkout;

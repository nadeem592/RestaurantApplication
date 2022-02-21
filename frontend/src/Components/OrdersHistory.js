import React from "react";
import { useState, useEffect } from "react";
function OrdersHistory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:7001/api/history/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <>
      <div>
        <h1 style={{ color: "blue" }} align="center">
          Orders History
        </h1>
        {data.map((dataList) => (
          <div>
            {localStorage.getItem("logged-user") === dataList.username ? (
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">
                    <b> {dataList.item_name}</b>
                  </h4>
                  <p class="card-text">Price - Rs.{dataList.price}</p>
                  <p class="card-text">Orderd Date - {dataList.date}</p>
                  <p class="card-text">Quantity - {dataList.quantity}</p>
                </div>
              </div>
            ) : (
              <div>{}</div>
            )}
          </div>
        ))}
        <h1 align="center">
          <a href={"/home"} role="button" className="btn btn-primary">
            Home
          </a>
        </h1>
      </div>
    </>
  );
}

export default OrdersHistory;

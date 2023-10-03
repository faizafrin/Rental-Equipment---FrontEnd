import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { env } from "../config";
import { ClickAwayListener } from "@mui/material";

const OrdersPage = () => {
  const [order, setOrder] = useState([]);
  const [ordertotal, setOrdertotal] = useState([]);
  useEffect(() => {
    getFinalOrder();
  }, []);

  let getFinalOrder = async () => {
    try {
      let response = await axios.get(`${env.api}/finals`);
      let orderArr = response.data;
      let totalAmount = orderArr.map((el) => {
        return el.totalAmount;
      });
      setOrdertotal(totalAmount);
      let final = [];
      orderArr.map((el) => {
        final = el.cartData;
      });
      setOrder(final);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TopBar />
      <Table className="align-middle text-center" striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
            <th>Period</th>
            <th>PricePaid</th>
          </tr>
        </thead>
        <tbody>
          {order.map((el, i) => {
            return (
              <tr key={i} className="align-middle">
                <td>{el.user}</td>
                <td>{el.Name}</td>
                <td>{el.Quantity}</td>
                <td>{`${el.Rental} ${el.Period}`}</td>
                <td>{ordertotal[i]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersPage;
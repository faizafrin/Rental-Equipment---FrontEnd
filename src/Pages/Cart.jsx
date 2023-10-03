import React, { useState, useEffect, useContext } from "react";
import TopBar from "../Components/TopBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { env } from "../config";
import UserContext from "../UserContext";
import CheckoutForm from "../Components/CheckOutForm";

const Cart = () => {
  const { cartData, total, setTotal } = useContext(UserContext);
  const [totalOrder, setTotalOrder] = useState(0);
  useEffect(() => {
    if (cartData && cartData.length > 0) {
      setTotalOrder(
        cartData.map((el) => el.TotalPrice).reduce((acc, item) => acc + item)
      );
    }
  }, [cartData]);

  return (
    <div>
      <TopBar />
      {!cartData || cartData.length === 0 ? (
        <div className="container text-center mt-5">Oops!!No item in the Cart</div>
      ) : (
        <div className="container">
          <Card
            className="col-md-3 m-auto mb-4 text-center overflow-auto "
            style={{ width: "100%" }}
          >
            <Card.Body>
              <Card.Title>
                <h1>Summary</h1>
              </Card.Title>
              <Table className="" striped bordered hover>
                <thead className="align-middle">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Equipment Name</th>
                    <th scope="col">
                      Price <br /> <small>for 1hour</small>
                    </th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Rental Period</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((el, i) => {
                    return (
                      <tr key={i} className="align-middle">
                        <th scope="row">{i + 1}</th>
                        <td>
                          <img
                            style={{ width: 100, height: 100 }}
                            src={el.Image}
                            alt={el.Name}
                          />
                        </td>
                        <td>{el.Name}</td>
                        <td>{`$ ${el.Price}`}</td>
                        <td>{el.Quantity}</td>
                        <td>{`${el.Rental} ${el.Period}`}</td>
                        <td>{`$ ${el.TotalPrice}`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="cart-total">Total : {totalOrder}</div>
              <div className="mt-5 mb-4">
                <h3>Test Case</h3>
              </div>
              <b>Card Number</b> : 4242 4242 4242 4242
              <br />
              <b>MM/YY</b> : 04 / 24
              <br />
              <b>CVV</b> : 242
              <br />
              <b>ZIP</b> : 42424
              <CheckoutForm totalOrder={totalOrder} />
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
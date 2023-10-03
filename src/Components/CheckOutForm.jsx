import {
    Elements,
    CardElement,
    ElementsConsumer,
  } from "@stripe/react-stripe-js";
  import React, { useEffect, useState, useContext } from "react";
  import { Alert, Button, Col, Form, Row } from "react-bootstrap";
  import { useNavigate } from "react-router-dom";
  import { loadStripe } from "@stripe/stripe-js";
  import UserContext from "../UserContext";
  import axios from "axios";
  import { env } from "../config";
  
  const CheckoutForm = ({ totalOrder }) => {
    const { cartData, userName, user } = useContext(UserContext);
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    // eslint-disable-next-line
    const [paying, setPaying] = useState(false);
    const [productId, setProductId] = useState([]);
    const [cartId, setCartId] = useState([]);
  
    const stripePromise = loadStripe(
      "pk_test_51K11LVSEPEmhN4c2o2qQmMK7N07mPHzJMmSy5CpwXb9mgbTRotBNrxl9lnWiY6qkbEVz3PQbIqNKdwhyqMhTGwLw003V1gclUL"
    );
  
    // useEffect(() => {
    //   console.log(cartDatas(cartData));
    // }, []);
  
    async function handlePay(e, elements, stripe) {
      e.preventDefault();
      if (!stripe || !elements) return;
  
      const orderData = {
        cartData,
        address,
        country,
        totalAmount: totalOrder,
      };
  
      const cardElement = elements.getElement(CardElement);
      // eslint-disable-next-line
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
  
      if (error) console.log(error);
      else {
        setAlertMessage("Payment success");
        let user = await axios.post(`${env.api}/final`, orderData);
  
        //   const orderConfirmation = await dispatch(placeOrder(orderData));
        //   if (orderConfirmation) {
        //     dispatch(updateUser(user._id));
        alert("Order Placed Successfully");
        setTimeout(() => {
          navigate(`/`);
        }, 1200);
        //   }
      }
    }
    return (
      <Col className="cart-payment-container">
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <Form
                onSubmit={(e) => handlePay(e, elements, stripe)}
                className="stripe-elements"
              >
                <Row>
                  {alertMessage && <Alert>{alertMessage}</Alert>}
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={window.localStorage.getItem("user")}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value={user.email}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <label htmlFor="card-element">Card</label>
  
                <CardElement className="" />
  
                <Button className="mt-3" type="submit">
                  Proceed to pay
                </Button>
              </Form>
            )}
          </ElementsConsumer>
        </Elements>
      </Col>
    );
  };
  
  export default CheckoutForm;
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>

        <div>
          <h3>Hello, </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              currency={item.currency}
              calorie={item.calories}
              description={item.description}
              availability={item.Availability}
              type={item.Type}
              nexturl={item.nexturl}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

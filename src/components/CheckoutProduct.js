import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  name,
  image,
  price,
  description,
  calorie,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const initialState = basket?.length;

  const [count, setCount] = useState(initialState);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        price: price,
        description: description,
        calorie: calorie,
        image: image,
      },
    });

    setCount((prevCount) => prevCount + 1);
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>SAR</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <div className="panelItem__button">
            <button onClick={removeFromBasket}>-</button>
            <span>{count}</span>
            <button onClick={addToBasket}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

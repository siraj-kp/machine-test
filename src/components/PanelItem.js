import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PanelItem.css";
import { useStateValue } from "./StateProvider";

function PanelItem({ id, name, price, description, calorie, image, addonCat }) {
  const [{ basket }, dispatch] = useStateValue();
  const initialState = 0;
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
    <React.Fragment>
      <div className="panelItem">
        <div className="panelItem__info">
          <h6>{name}</h6>
          <p>SAR {price}</p>
          <p>{description}</p>
          <div className="panelItem__button">
            <button onClick={removeFromBasket}>-</button>
            <span>{count}</span>
            <button onClick={addToBasket}>+</button>
          </div>
          {addonCat.length !== 0 && (
            <Link to="/">
              <div className="panelItem__custom">
                <p>Cutomization available</p>
              </div>
            </Link>
          )}
        </div>
        <p>{calorie} calories</p>
        <img src={image} alt="food" />
      </div>
    </React.Fragment>
  );
}

export default PanelItem;

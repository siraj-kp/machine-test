import React, { useEffect, useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import FoodItems from "./FoodItems";

function RestaurantMenu() {
  const [loadedItems, setLoadedItems] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad`
        );
        setLoadedItems(responseData);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest]);

  return (
    <div>{!isLoading && loadedItems && <FoodItems items={loadedItems} />}</div>
  );
}

export default RestaurantMenu;

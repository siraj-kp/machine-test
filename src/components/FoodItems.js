import React from "react";
import { Link } from "react-router-dom";
import "./FoodItems.css";
import TabItem from "./TabItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PanelItem from "./PanelItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";

function FoodItems(props) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      {props.items.map((item) => (
        <div className="foodItem">
          <div className="foodItem__topbar">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h3>{item.restaurant_name}</h3>
            <Link to="/checkout">
              {" "}
              <h5>
                My Orders <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                <span className="cart-count">{basket?.length}</span>
              </h5>
            </Link>
          </div>

          <div className="tab">
            <Tabs>
              <TabList>
                {item.table_menu_list.map((menu) => (
                  <Tab>
                    <TabItem
                      key={menu.menu_category_id}
                      id={menu.menu_category_id}
                      category={menu.menu_category}
                      image={menu.menu_category_image}
                      nexturl={menu.nexturl}
                      category_dishes={menu.category_dishes}
                    />
                  </Tab>
                ))}
              </TabList>
              {item.table_menu_list.map((menu) => (
                <div>
                  <TabPanel>
                    {menu.category_dishes.map((dishes) => (
                      <PanelItem
                        key={dishes.dish_id}
                        id={dishes.dish_id}
                        name={dishes.dish_name}
                        price={dishes.dish_price}
                        image={dishes.dish_image}
                        currency={dishes.dish_currency}
                        calorie={dishes.dish_calories}
                        description={dishes.dish_description}
                        availability={dishes.dish_Availability}
                        type={dishes.dish_Type}
                        nexturl={dishes.nexturl}
                        addonCat={dishes.addonCat}
                      />
                    ))}
                  </TabPanel>
                </div>
              ))}
            </Tabs>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodItems;

import React from "react";
import { CardSection } from "../../components/globalComponents/cardSection/CardSection";
import { Deal } from "../../components/globalComponents/dealsSection/Deal";
import { Heading } from "../../components/globalComponents/heading/Heading";
import { oilPro } from "../../components/globalComponents/images/Images";
import { Slider } from "../../components/globalComponents/slider/Slider";
import { Products } from "../../components/globalComponents/TypeOfProducts/Products";

const listOne = "Grocery Products";
const listTwo = "Household Products Offers";
const listThree = "Stationery Offers";
let data = {
  img: oilPro,
  name: "Daber homemade ginger",
  price: "₹49.50",
  actual: "Rs 78.66",
};
export const Home = () => {
  return (
    <div>
      <Slider />
      <CardSection />
      <Heading />
      <Deal />
      <Products
        {...data}
        {...{ listType: listOne, color: "rgb(182 182 255)" }}
      />
      <Products
        {...data}
        {...{ listType: listTwo, color: "rgb(160 217 255)" }}
      />
      <Products {...data} {...{ listType: listThree, color: "#fb7e944a" }} />
    </div>
  );
};

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these kicks</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/jordan1.jpg"
              text="Explore the GOATs shoes with the new tecnology create by NIKE / JORDAN"
              label="R$ 1199,99"
              path="/services"
            />

            <CardItem
              src="images/jordan-1-travis.jpg"
              text="Explore the GOATs shoes with the new tecnology create by NIKE / JORDAN"
              label="R$ 4999,99"
              path="/services"
            />

            <CardItem
              src="images/jordan-35.jpg"
              text="Explore the GOATs shoes with the new tecnology create by NIKE / JORDAN"
              label="R$ 1999,99"
              path="/services"
            />

            <CardItem
              src="images/jordan-dior.jpg"
              text="Explore the GOATs shoes with the new tecnology create by NIKE / JORDAN"
              label="R$ 1199,99"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

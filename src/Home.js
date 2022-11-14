import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71pwpFG+X3L._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="149"
            title="Apple iPhone 14 128GB (Blue)"
            price={79900}
            image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
            rating={4}
          />
          <Product
            id="150"
            title="boAt Airdopes 141 True Wireless Earbuds"
            price={1349}
            image="https://m.media-amazon.com/images/I/51HBom8xz7L._SY355_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="151"
            title="Xbox Series S"
            price={31900}
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="152"
            title="Microsoft Xbox Series X/S Wireless Controller + USB-C Cable
            "
            price={68.99}
            image="https://m.media-amazon.com/images/I/71YpRfsmgKL._SX522_.jpg"
            rating={4}
          />
          <Product
            id="153"
            title="Campus Men's Hurricane Running Shoes"
            price={870}
            image="https://m.media-amazon.com/images/I/61+E6-WZBGL._UY625_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="154"
            title="Sony Bravia 139 cm (55 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-55A80K (Black)"
            price={2159.99}
            image="https://m.media-amazon.com/images/I/81sFUK4Sv0L._SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

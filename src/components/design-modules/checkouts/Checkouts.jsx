import React from "react";
import { Carousel } from "react-bootstrap";
import CheckoutImg1 from "./images/1.png";
import CheckoutImg2 from "./images/2.png";
import CheckoutImg3 from "./images/3.png";
import CheckoutImg4 from "./images/4.png";

import "./Checkouts.css";

export default function Checkouts() {

  return (
  <>
    <div className="c-hero">
      <div className="c-hero__box">
        <div className="c-hero__title">
           Checkout Designs
        </div>
        <Carousel className="carousel">
        <Carousel.Item>
          <div className="d-block">
            <img src={CheckoutImg1} alt="checkout 1"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={CheckoutImg2} alt="checkout 2"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={CheckoutImg3} alt="checkout 3"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={CheckoutImg4} alt="checkout 4"></img>
          </div>
          </Carousel.Item>
          </Carousel>
      </div>
    </div>
  </>
)}

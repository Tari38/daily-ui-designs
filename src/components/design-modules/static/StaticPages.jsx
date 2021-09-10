import React from "react";
import { Carousel } from "react-bootstrap";
import StaticImg1 from "./images/Header.png";
import StaticImg2 from "./images/Intro.png";
import StaticImg3 from "./images/Portfolio.png";
import StaticImg4 from "./images/Contact.png";

import "./StaticPages.css";

export default function StaticPages() {

  return (
  <>
    <div className="c-hero">
      <div className="c-hero__box">
        <div className="c-hero__title">
           Static Webpage Designs
        </div>
        <Carousel className="carousel">
        <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg1} alt="static 1"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg2} alt="static 2"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg3} alt="static 3"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg4} alt="static 4"></img>
          </div>
          </Carousel.Item>
          </Carousel>
      </div>
    </div>
  </>
)}

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import StaticImg1 from "./images/Header.png";
import StaticImg2 from "./images/Intro.png";
import StaticImg3 from "./images/Portfolio.png";
import StaticImg4 from "./images/Contact.png";
import StaticImg5 from "./images/1.png";
import StaticImg6 from "./images/2.png";
import StaticImg7 from "./images/3.png";

import "./StaticPages.css";

export default class StaticPages extends Component {
	render() {
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
            <img src={StaticImg1} className="d-block w-100" alt="static 1"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg2} className="d-block w-100" alt="static 2"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg3} className="d-block w-100" alt="static 3"></img>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-block">
            <img src={StaticImg4} className="d-block w-100" alt="static 4"></img>
          </div>
          </Carousel.Item>
					<Carousel.Item>
          <div className="d-block">
            <img src={StaticImg5} className="d-block w-100" alt="static 5"></img>
          </div>
          </Carousel.Item>
					<Carousel.Item>
          <div className="d-block">
            <img src={StaticImg6} className="d-block w-100" alt="static 6"></img>
          </div>
          </Carousel.Item>
					<Carousel.Item>
          <div className="d-block">
            <img src={StaticImg7} className="d-block w-100" alt="static 7"></img>
          </div>
          </Carousel.Item>
          </Carousel>
      </div>
    </div>
  </>
)}}

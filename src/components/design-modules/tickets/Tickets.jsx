import React from "react";
import { Carousel } from "react-bootstrap";
import BoardingPass1 from "../../design-modules/tickets/images/1.png";
import BoardingPass2 from "../../design-modules/tickets/images/2.png";
import BoardingPass3 from "../../design-modules/tickets/images/3.png";

export default function Tickets() {

  return (

    <>
    <div className="c-hero">
      <div className="c-hero__box">
        <div className="c-hero__title">
           Tickets Designs
        </div>
          <Carousel className="carousel">
            <Carousel.Item>
              <img src={BoardingPass1} className="d-block w-100" alt="signup 1"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img src={BoardingPass2} className="d-block w-100" alt="signup 1"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img src={BoardingPass3} className="d-block w-100" alt="signup 1"></img>
            </Carousel.Item>
          </Carousel>

      </div>
    </div>
  </>

    )
  }

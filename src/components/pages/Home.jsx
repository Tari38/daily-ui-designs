import React from "react";
import SignupImg1 from "../design-modules/signups/images/signupImg1.png";
import BoardingPass2 from "../design-modules/tickets/images/2.png";
import CheckoutImg1 from "../design-modules/checkouts/images/1.png";
import { Card } from "reactstrap";

import "./styles/Home.css";

export default function Home() {

  return (
    <>
      <div className="c-hero">
        <div className="c-hero__box">
          <div className="c-hero__title">
            Welcome to my Portfolio
            </div>
          <div className="c-hero__sub">
            <p>Designs are created in Canva, then brought to life through React!</p>
            <p>To view more, go to the <a href="/components/pages/Portfolio">Portfolio</a> page to access a variety of design modules.</p>
            <p>A few examples are previewed below.</p>
          </div>

        </div>

        <div className="card-deck">
          <Card className="card active">
            <img
              src={SignupImg1}
              className="d-block w-100"
              alt="signup img 1"
            />
            <div className="card-info">
              <h5>
                Signup Designs
              </h5>
            </div>
          </Card>



          <Card className="card">
            <img src={BoardingPass2} className="d-block w-100" alt="boarding pass 2" ></img>
            <div className="card-info">
              <h5>
                Ticket Designs
              </h5>
            </div>
          </Card>

          <Card className="card">
            <img src={CheckoutImg1} className="d-block w-100" alt="checkout 1"></img>
              <div className="card-info">
              <h5>
                Checkout Designs
              </h5>
            </div>
          </Card>
        </div>
        </div>
</>
  )
}

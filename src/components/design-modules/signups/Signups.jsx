import React, { Component } from "react";
import { Card, CardDeck, CardImg, CardBody } from "reactstrap";
import Signup1 from "./images/signupImg1.png";
import Signup2 from "./images/signupImg2.png";

import "./Signups.css";

export default class Signups extends Component {
  render() {
  return (
<>
<div className="c-hero">
  <div className="c-hero__box">
    <div className="c-hero__title">
        Signup Designs
      </div>

    <CardDeck className="card-deck">
      <Card className="card">
        <CardBody className="card-info">
          <CardImg src={Signup1} className="d-block w-100" alt="signup 1"></CardImg>
        </CardBody>
      </Card>

      <Card>
      <CardBody className="card-info">
        <CardImg src={Signup2} className="d-block w-100" alt="signup 2"></CardImg>
        </CardBody>
      </Card>

    </CardDeck>
    </div>
    </div>
    </>
);
}
}

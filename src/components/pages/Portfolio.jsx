import React from "react";
import { Card, CardBody, CardDeck, CardImg } from "reactstrap";
import Webpage from "../design-modules/static/images/Header.png";
import Ticket1 from "../design-modules/tickets/images/1.png";
import Checkout1 from "../design-modules/checkouts//images/1.png";
import Signup1 from "../design-modules/signups/images/signupImg1.png";

import "./styles/Portfolio.css";

export default function Portfolio() {

  return (

    <div className="portfolio-main">
        <div className="title-banner">
              <h1 className="title-text">My Design Modules</h1>
            </div>

          <CardDeck className="card-deck">
            <Card className="card">
              <a href="/components/design-modules/static/Webpage"><CardImg src={Webpage}></CardImg>Webpage Designs</a>
            </Card>

            <Card className="card">
              <a href="/components/design-modules/signups/Signups"><CardImg src={Signup1}></CardImg>Signup Designs</a>
            </Card>

            <Card className="card">
              <a href="/components/design-modules/checkouts/Checkouts"><CardImg src={Checkout1}></CardImg>Checkout Designs</a>
            </Card>
          </CardDeck>

          <CardDeck className="card-deck">
            <Card className="card">
              <a href="/components/design-modules/tickets/Tickets"><CardImg src={Ticket1}></CardImg>Ticket Designs</a>
            </Card>
          </CardDeck>

          <CardDeck className="card-deck">

          <Card className="card">
            <CardBody className="card-info">
              <a href="/design-modules/statics/Webpage">Static Website Designs</a>
            </CardBody>
          </Card>

            <Card className="card">
              <CardBody className="card-info">
                <a href="/design-modules/signups/Signups">Signup Designs</a>
              </CardBody>
            </Card>
            <Card className="card">

              <CardBody className="card-info">
                <a href="/design-modules/tickets/Tickets">Ticket Designs</a>
              </CardBody>
            </Card>

            <Card className="card">
              <CardBody className="card-info">
                <a href="/design-modules/checkouts/Checkouts">Checkout Designs</a>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
    )
  }

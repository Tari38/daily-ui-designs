import React from "react";
import { Link} from "react-router-dom";
import { Navbar, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap";

import "./Nav.css";

function Nav() {
  return (
    <>
    <Navbar className="navbar justify-content-between" light expand="md">
      <div className="nav-title"><a href="/">
        Samantha Dorrell | Daily UI Designs</a>
      </div>
        <div className="navlink">
          <Link className="navlink" to="/components/pages/Home">Home</Link>


          <UncontrolledDropdown>
          <Link className="navlink" exact to="/components/pages/Portfolio">Portfolio<DropdownToggle className="toggler" nav caret></DropdownToggle></Link>


              <DropdownMenu right className="dropdown-menu">
                <DropdownItem>
                  <Link className="dropdown-item" to="/components/design-modules/signups/Signups">Signups</Link>
                  </DropdownItem>
                <DropdownItem>
                  <Link className="dropdown-item" to="/components/design-modules/tickets/Tickets">Tickets</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="dropdown-item" to="/components/design-modules/checkouts/Checkouts">Checkouts</Link>
                </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>

      </div>

      <div className="social-links justify-content-between" light expand="md">
          <a className="social-links" href="https://dribbble.com/Tari39">
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            className="social-links"
            href="https://www.facebook.com/sam.dorrell"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/samantha-dorrell-307377188/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
    </Navbar>
    </>
  );
}

export default Nav;

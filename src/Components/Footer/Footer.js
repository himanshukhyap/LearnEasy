import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { BiMap } from "react-icons/bi";
import { HiPhoneOutgoing } from "react-icons/hi";

import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="lfotter">
      <Container className="lfmrginsda">
        <Row className="lfforbottom">
          <Col sm={7} className="lfborderded">
            <Row>
              <Col>
                <div className="lfstyel">
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <div className="lfmargin">
                      <h2 className="lfekit-heading--title elementskit-section-title ">
                        Company
                      </h2>
                    </div>
                    <Nav.Link>
                      <span className="lfekit_page_list_title_title">
                        About
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Pricing
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">Blog</span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Careers
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Contact
                      </span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="lfstyel2">
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <div className="lfmargin">
                      <h2 className="lfekit-heading--title elementskit-section-title ">
                        Platform
                      </h2>
                    </div>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Browse library
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Role IQ
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Skill IQ
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Partner Program
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Authors
                      </span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Col>
              <Col>
                <div className="lfstyel3">
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <div className="lfmargin">
                      <h2 className="lfekit-heading--title elementskit-section-title ">
                        Resources
                      </h2>
                    </div>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Library
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Guides
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">
                        Tutorials
                      </span>
                    </Nav.Link>
                    <Nav.Link href="/home">
                      <span className="lfekit_page_list_title_title">FAQs</span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <div className="lfdssd">
              <div className="lfekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-">
                <h2 className="lfekit-heading--title elementskit-section-title ">
                  Get in touch
                </h2>
              </div>
              <div className="elementskit-infobox text- text-left icon-lef-right-aligin elementor-animation- media  ">
                <div className="elementskit-box-header elementor-animation-">
                  <div className="elementskit-info-box-icon  text-center">
                    <i
                      aria-hidden="true"
                      className="elementkit-infobox-icon fas fa-map-marker-alt"
                    ></i>
                  </div>
                </div>
                <ul className="lfboxx">
                  <li>
                    <div className="box-body">
                      <BiMap color="red" />
                      <p className="lfpsa">
                        500 Treat Ave, Suite 200 <br />
                        San Francisco, CA 94110{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="box-body">
                      <HiPhoneOutgoing color="red" />
                      <p className="lfpsa">1-702-800-2690 (Support) </p>
                    </div>
                  </li>
                  <li>
                    <div className="box-body">
                      <AiOutlineMail color="red" />
                      <p className="lfpsa">support@courselog.com </p>
                    </div>
                  </li>
                </ul>
                <ul className="ekit_social_media">
                  <li className="elementor-repeater-item-e9af37a">
                    <a href="#" className="facebook">
                      <i aria-hidden="true" className="icon icon-facebook">
                        <TiSocialFacebookCircular color="white" size={35} />
                      </i>
                    </a>
                  </li>
                  <li className="elementor-repeater-item-2ddd0c5">
                    <a href="#" className="1">
                      <i aria-hidden="true" className="icon icon-instagram-1">
                        <AiOutlineInstagram color="white" size={35} />
                      </i>
                    </a>
                  </li>
                  <li className="elementor-repeater-item-d346a82">
                    <a href="#" className="linkedin">
                      <i aria-hidden="true" className="icon icon-linkedin">
                        <AiOutlineLinkedin color="white" size={35} />
                      </i>
                    </a>
                  </li>
                  <li className="elementor-repeater-item-ed20098">
                    <a href="#" className="twitter">
                      <i aria-hidden="true" className="icon icon-twitter">
                        <AiFillTwitterCircle color="white" size={35} />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <div className="lfoostyel">
          <Row className="ldfsd">
            <Col sm={4}>
              <div class="courselog-widget-logo">
                <a href="https://demo.themewinter.com/wp/courselog/">
                  <img
                    src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2020/02/logo-white.png"
                    alt="Courselog"
                    className="lazyloadesdasdd"
                    data-ll-status="loaded"
                  />
                </a>
              </div>
            </Col>
            <Col className="footercollast" sm={8}>
              <Row>
                <Col sm={3}>
                  <div className="ssas">
                    <span class="eldskit_page_list_title_title">
                      Privacy Policy
                    </span>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="ssas">
                    <span class="eldskit_page_list_title_title">
                      Terms of service
                    </span>
                  </div>
                </Col>
                <Col sm={6}>
                  <div>
                    <span class="eldskit_page_list_title_title">
                      © 2021 Courselog. All Rights Reserved.
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

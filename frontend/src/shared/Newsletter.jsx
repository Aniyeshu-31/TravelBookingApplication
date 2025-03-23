import React from "react";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>  

              <p>
                Embark on a journey beyond the ordinary! Whether you crave the
                serenity of sun-kissed beaches, the thrill of towering mountain
                peaks, or the charm of historic city streets, every destination
                holds a unique story waiting to be discovered. Indulge in local
                cuisines, immerse yourself in diverse cultures, and create
                unforgettable memories along the way. From hidden gems off the
                beaten path to world-famous landmarks, let your adventures be
                guided by curiosity and a passion for exploration. Pack your
                bags, set your soul free, and let the world surprise you!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Newsletter;

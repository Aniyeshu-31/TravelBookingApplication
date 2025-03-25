import React, { useState,useContext,useEffect} from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import "../styles/about.css";
import { AuthContext } from "../context/AuthContext";

const About = () => {
     useEffect(() => {
       window.scroll(0, 0)
     }, [])
    return (
        <>
          <CommonSection title={"About Us"} />
          <section>
            <Container>
              <Row>
              </Row>
            </Container>
          </section>
          <section className="pt-0">
            
          </section>
          <div className="container" >
            <h1>Our History</h1>
            <p>BookEase is owned and managed by BookEase.In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. 
                BookEase.In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals.
                Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectations.
                Commendable success rate of other portals managed by BookEase is a live paradigm of our excillence.</p>

            <h1>Our Mission</h1>
            <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, 
                that too with ultimate transparency and cost-effectiveness.</p>

            <h1>Our Vision</h1>
            <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
          </div>
        </>
      );
};

export default About;
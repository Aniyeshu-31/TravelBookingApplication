import React, { useState,useContext} from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import "../styles/contact.css";
import { AuthContext } from "../context/AuthContext";

const Contact = () => {

    return (
      <>
        <CommonSection title={'Contact Us'} />
        <section>
          <Container>
            <Row></Row>
          </Container>
        </section>
        <section className="pt-0"></section>
        <div className="container1">
          <h1 id="h1">Send a message to us!</h1>
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Subject"></input>
            <textarea placeholder="Message" rows="4"></textarea>
            <button
              className="btn btn-primary"
              id="btn"
              style={{ margin: 'auto' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </>
    )
};

export default Contact;
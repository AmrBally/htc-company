import React from "react";
import "./ContactUs.css";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import contactImage from "../images/contactus.jpg";
import BeforeFooter from "../components/BeforeFooter";

const ContactUs = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="divImage">
          <img src={contactImage} alt="" />
        </div>
        <div className="divP">
          <p>
            HTC Protective Coatings’ qualified and experienced technical
            consultants provide tailor-made solutions for the protection of
            assets across Australia and New Zealand. Our services are free, so
            call our help and advice team who can help put you in touch with a
            PC specialist if required. AUSTRALIA: 13 23 77 NEW ZEALAND: 0800 800
            424 Call your local Store, or your HTC Protective Coatings Contact,
            to check stock availability or arrange supply.
          </p>
        </div>
      </div>
      <div className="ContactBox">
        <div className="aboutcontent">
          <h2>Submit an enquiry</h2>
          <p>
            Please note that HTC Protective Coatings is an Australian company,
            and distributes our products in Australia, New Zealand, Papua New
            Guinea and Fiji only. We are not associated with the owners of the
            HTC trade marks in other countries, nor do we sell HTC products in
            those countries.
          </p>
        </div>
        <Form>
          <Form.Group className="formGroup" controlId="validationCustom01">
            <Form.Label>First name *</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="formGroup" controlId="validationCustom01">
            <Form.Label>Last name *</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group className="formGroup" controlId="validationCustom01">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control required type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group className="formGroup" controlId="validationCustom01">
            <Form.Label>Project Address *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Project Address"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 formGroup"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Message *</Form.Label>
            <Form.Control
              as="textarea"
              rows="{3}"
              placeholder="Your message..."
            />
          </Form.Group>
        </Form>
        <Button className="btn" variant="primary">
          {" "}
          Submit{" "}
        </Button>
      </div>
      <BeforeFooter />
    </div>
  );
};

export default ContactUs;

import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faEnvelope,
  faShareNodes,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import "./booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({});
  const onBlurHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Navigation />
      <div className="follow-us container">
        <div className="follow-us-box">
          
          <FontAwesomeIcon className="facebook-icon me-1" icon={faFacebookF} />
          <FontAwesomeIcon className="twitter-icon me-1" icon={faTwitter} />
          <FontAwesomeIcon
            className="googlePlus-icon me-1"
            icon={faGooglePlusG}
          />
          <FontAwesomeIcon className="whatsapp-icon me-1" icon={faWhatsapp} />
          <FontAwesomeIcon className="envelope-icon me-1" icon={faEnvelope} />
        </div>
      </div>
      <div className="booking-container container">
        <div className="ticket-booking-container">
          <div className="text-center">
            <h1 className="text-uppercase">
              Ticket booking <span className="text-warning">opens now</span>
            </h1>
            <p>
              Feel the thrill of seeing a global sporting event in one of the
              world's most incredible cities. Headlining the calendar is the
              Dubai World Cup.
            </p>
          </div>
          <form className="mt-4" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">E-mail</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="email"
                placeholder="Type your email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Number</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="number"
                placeholder="Type your number"
                name="number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Date</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="date"
                placeholder="Type your date"
                name="date"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">City</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your City"
                name="city"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Address</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                as="textarea"
                rows={3}
                placeholder="Type your address"
                name="address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0"></Form.Label>
              <Button style={{ background: "#e40046" }} className="fw-bold w-100"  type="submit">
                SUBMIT
              </Button>
            </Form.Group>
          </form>
        </div>
      </div>
      <div className="next-match-container">
        <Container className="p-5">
          <Row>
            <div className="col-md-2 text-center">
              <p>Next Match</p>
              <h1
                style={{ fontSize: "5rem",  }}
                className="fw-bold my-0 text-warning" 
              >
                25
              </h1>
              <p>May 2022 </p>
            </div>
            <div className="col-md-8 next-match-info-sec">
              <h4 className="text-uppercase">
                Western Sydney wanderers vs urawa red diamonds
              </h4>
              <p>
                In efficitur nisi et condimentum mattis. Duis et aliquet purus,
                quis congue elit. Cras volutpat dapibus molestie. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Donec posuere mollis augue, a accumsan libero
                egestas sit amet.Vestibulum posuere erat tortor, porta tempus
                leo condimentum sed.
              </p>
            </div>
            <div className="col-md-2 social-box">
              <p>
                <FontAwesomeIcon icon={faComment} /> Comments
              </p>
              <p>
                <FontAwesomeIcon icon={faTag} /> Tags
              </p>
              <p>
                <FontAwesomeIcon icon={faShareNodes} /> Shares
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Booking;

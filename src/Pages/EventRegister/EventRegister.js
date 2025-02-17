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

const EventRegister = () => {
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
          <span >FOLLOW US:</span>
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
              Register Your <span className="text-warning">Event now!</span>
            </h1>
            <p>
              Feel the thrill of seeing a global sporting event in one of the
              world's most incredible cities. Headlining the calendar is the
              Dubai World Cup.
            </p>
          </div>
          <form className="mt-4" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Event Name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your name"
                name="eventName"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Start Date</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="date"
                placeholder="Type your date"
                name="StartDate"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Sex</Form.Label>
              <Form.Select onChange={onBlurHandler} name="sex" required>
                <option>Select Sex</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Age Limit</Form.Label>
              <Form.Select onChange={onBlurHandler} name="age" required>
                <option>Select Age</option>
                <option>0-10</option>
                <option>10-20</option>
                <option>20-30</option>
                <option>30-40</option>
                <option>40-50</option>
                <option>50-60</option>
              </Form.Select>
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
              <Form.Label style={{ textAlign: "end" }} className="mb-0">
                Event Descriptions
              </Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                as="textarea"
                rows={3}
                placeholder="Type event descriptions"
                name="eventDes"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Club Name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your club name"
                name="ClubName"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label style={{ textAlign: "end" }} className="mb-0">
                Contact E-mail
              </Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="email"
                placeholder="Type your email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label style={{ textAlign: "end" }} className="mb-0">
                Contact Number
              </Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="number"
                placeholder="Type your number"
                name="number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0"></Form.Label>
              <Button className="fw-bold w-100" style={{ background: "#e40046" }} type="submit">
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
                style={{ fontSize: "5rem" }}
                className="text-warning fw-bold my-0"
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

export default EventRegister;

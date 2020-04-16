import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

const Contact = (props) => {
  return (
    <section className="page-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let&apos;s Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Give us a call or send us an email and we
              will get back to you as soon as possible!
            </p>
          </div>
        </Row>
        <Row>
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fas fa-phone fa-3x mb-3 text-muted" />
            <a className="d-block" href="tel:0489150520">
              048-915-0520
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted" />
            <a className="d-block" href="mailto:contact@yourwebsite.com">
              contact@yourwebsite.com
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

Contact.propTypes = {};

export default Contact;

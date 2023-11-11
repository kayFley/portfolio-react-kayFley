import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactIcon from "../assets/img/react-icon.svg";
import nodejsIcon from "../assets/img/nodejs-icon.svg";
import nestjsIcon from "../assets/img/nestjs-icon.svg";
import nextjsIcon from "../assets/img/nextjs-icon.svg";
import reduxIcon from "../assets/img/redux-icon.svg";
import djangoIcon from "../assets/img/django-icon.svg";
import mongodbIcon from "../assets/img/mongodb-icon.svg";
import postgresqlIcon from "../assets/img/postgresql-icon.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={4000}
              >
                <div className="item">
                  <img src={nodejsIcon} alt="nodejs" />
                  <h5>NodeJS Express</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nestjsIcon} alt="nest" />
                  <h5>NestJS</h5>
                </div>
                <div className="item">
                  <img src={nextjsIcon} alt="nextjs" />
                  <h5>nextJS</h5>
                </div>
                <div className="item">
                  <img src={reduxIcon} alt="reduxjs" />
                  <h5>Redux toolkit</h5>
                </div>
                <div className="item">
                  <img src={djangoIcon} alt="django" />
                  <h5>django</h5>
                </div>
                <div className="item">
                  <img src={mongodbIcon} alt="mongodb" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={postgresqlIcon} alt="postgresql" />
                  <h5>PostgreSQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

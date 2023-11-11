import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "Backend Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">kayFley's portfolio</span>
            <h1>
              {`I'm a `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I have knowledge of HTML, CSS, JavaScript, TypeScript, Python, and am
              proficient in various frameworks and libraries.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

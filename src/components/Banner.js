import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
    // This is how we declare a state variable using Hook
    const [loopIndex, setLoopIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 10);
    const showPeriod = 200;
    const deletePeriod = 1000;
    const toRotate = [
        "Software Engineer",
        "Masters Student",
        "Software Developer",
    ];

    // useEffect is kind of a once page constructed the
    // notified effect will be in place...
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    });

    // Like in the spaceInvader project, tick() is invoked
    // every "delta" period using setInterval().
    const tick = () => {
        let i = loopIndex % toRotate.length;
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
            setDelta(deletePeriod);
        } else if (isDeleting && updateText === "") {
            setIsDeleting(false);
            setLoopIndex(loopIndex + 1);
            setDelta(showPeriod);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Personal Website
                                    </span>
                                    <h1>{`Hi I'm Yinghua Zhou,`}</h1>
                                    <h1>
                                        {`A `}
                                        <span className="wrap">{text}</span>
                                    </h1>
                                    <p>
                                        I'm a recent Bachelor of Computer
                                        Science graduate from Monash University,
                                        and a current Master of Information
                                        Technology Student at the University of
                                        Melbourne, Specialising in AI.
                                    </p>
                                    <p>
                                        I have a strong passion in Algorithms
                                        and Data Structures as well as
                                        state-of-the-art technologies!
                                    </p>
                                    <button
                                        onClick={() => console.log("connect")}
                                    >
                                        Contact Me{" "}
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

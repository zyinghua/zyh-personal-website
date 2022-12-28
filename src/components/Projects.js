import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Projects = () => {
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
        <section className="projects" id="projects">
            <div className="project-box">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.<br></br> Lorem Ipsum
                                has been the industry's standard dummy text.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme project-slider"
                            >
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>
                                        Applied Algorithms and Data Structures
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Front-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Back-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Artificial Intelligence (Beginner)</h5>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

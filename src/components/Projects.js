import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/project-img1.png";

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

    const project = {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    };

    return (
        <section className="projects" id="projects">
            <div className="project-box">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme project-slider"
                            >
                                <div className="item">
                                    <ProjectCard key="1" {...project} />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

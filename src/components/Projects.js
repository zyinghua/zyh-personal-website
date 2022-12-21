import { Nav, Container, Tab, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    const projects = [
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg1,
        },
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg2,
        },
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg3,
        },
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg1,
        },
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg2,
        },
        {
            title: "Food Comparison Android App",
            description: "Front-end Android Development of the App",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.<br></br> Lorem Ipsum has been
                            the industry's standard dummy text.
                        </p>
                        <Tab.Container
                            id="project-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-itemrs-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab One
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab Two
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Loren Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Loren Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="baclground-image-right" src={colorSharp2} />
        </section>
    );
};

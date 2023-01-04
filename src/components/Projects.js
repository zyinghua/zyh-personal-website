import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../assets/data";

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="project-box">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <Row>
                                {projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

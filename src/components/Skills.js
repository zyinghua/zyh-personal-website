import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import { skills } from "../assets/data";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__pulse"
                                            : ""
                                    }
                                >
                                    <h2>Skills</h2>
                                    <Tab.Container
                                        id="skills-tabs"
                                        defaultActiveKey="computer-sci"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="front-end">
                                                    Front-end
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="computer-sci">
                                                    Computer Science
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="back-end">
                                                    Back-end
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="skills-content">
                                            <Tab.Pane eventKey="front-end">
                                                <Row>
                                                    {skills.front_end.map(
                                                        (skill, index) => {
                                                            return (
                                                                <SkillCard
                                                                    key={index}
                                                                    {...skill}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="computer-sci">
                                                <Row>
                                                    {skills.comp_sci.map(
                                                        (skill, index) => {
                                                            return (
                                                                <SkillCard
                                                                    key={index}
                                                                    {...skill}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="back-end">
                                                <Row>
                                                    {skills.back_end.map(
                                                        (skill, index) => {
                                                            return (
                                                                <SkillCard
                                                                    key={index}
                                                                    {...skill}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

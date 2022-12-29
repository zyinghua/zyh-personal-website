import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const skills = {
        front_end: [
            {
                skillName: "Android Development",
                skillLevel: "Intermediate",
            },
            {
                skillName: "JavaScript",
                skillLevel: "Basic",
            },
            {
                skillName: "HTML",
                skillLevel: "Basic",
            },
            {
                skillName: "CSS",
                skillLevel: "Basic",
            },
            {
                skillName: "React",
                skillLevel: "Beginner",
            },
        ],
        comp_sci: [
            {
                skillName: "Algorithms",
                skillLevel: "Intermediate",
            },
            {
                skillName: "Data Structures",
                skillLevel: "Intermediate",
            },
            {
                skillName: "OOP",
                skillLevel: "Intermediate",
            },
            {
                skillName: "Parallel Computing",
                skillLevel: "Basic",
            },
            {
                skillName: "Artifical Intelligence",
                skillLevel: "Basic",
            },
            {
                skillName: "Machine Learning",
                skillLevel: "Basic",
            },
            {
                skillName: "Software Project Management",
                skillLevel: "Basic",
            },
            {
                skillName: "Python",
                skillLevel: "Intermediate",
            },
            {
                skillName: "Java",
                skillLevel: "Intermediate",
            },
            {
                skillName: "C",
                skillLevel: "Basic",
            },
        ],
        back_end: [
            {
                skillName: "Databases",
                skillLevel: "Intermediate",
            },
            {
                skillName: "Flask",
                skillLevel: "Basic",
            },
            {
                skillName: "Django",
                skillLevel: "Basic",
            },
        ],
    };

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

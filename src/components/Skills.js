import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
    const skills = {
        front_end: [
            {
                skillName: "Android Development",
                skillLevel: "Intermediate",
                description:
                    "One year experience. Completed a relevant subject with a grade of 95,\
                    Implemented the entire front-end Android App for a project with all the requirements satisfactorily achieved.",
            },
            {
                skillName: "JavaScript",
                skillLevel: "Basic",
                description:
                    "Understand the basic syntax and logic, can write simple programs with.",
            },
            {
                skillName: "HTML",
                skillLevel: "Basic",
                description:
                    "Understand the fundamental concepts and syntax. Had implemented some small programs with.",
            },
            {
                skillName: "CSS",
                skillLevel: "Basic",
                description:
                    "Understand the fundamental concepts and elements. Had implemented some small programs with.",
            },
            {
                skillName: "React",
                skillLevel: "Basic",
                description: "Understand some simple concepts.",
            },
            {
                skillName: "Usability",
                skillLevel: "Basic",
                description:
                    "Learning experience with some iconic concepts of usability/UX.",
            },
        ],
        comp_sci: [
            {
                skillName: "Algorithms",
                skillLevel: "Intermediate",
                description:
                    "One of my favorite topics with years of learning experience, active leetcoder.",
            },
            {
                skillName: "Data Structures",
                skillLevel: "Intermediate",
                description:
                    "One of my favorite topics with years of learning experience, active leetcoder.",
            },
            {
                skillName: "OOP",
                skillLevel: "Intermediate",
                description: "My most experienced programming paradigm.",
            },
            {
                skillName: "Parallel Computing",
                skillLevel: "Basic",
                description:
                    "Understand the fundamental concepts, ready to develop further, \
                    achieved the official highest grade in my cohort of a dedicated subject at Monash Uni.",
            },
            {
                skillName: "Artifical Intelligence",
                skillLevel: "Basic",
                description:
                    "Understand the fundamental concepts of AI, \
                in particular classical planning and reinforcement learning.",
            },
            {
                skillName: "Machine Learning",
                skillLevel: "Basic",
                description:
                    "Understand the basics of Machine Learning,\
                 including ML Algorithms like KNN, Logistic Regression, General Neural Network, K-Means and so on.",
            },
            {
                skillName: "Software Project Management",
                skillLevel: "Basic",
                description:
                    "Understand the concepts of Project Management, especially Waterfall and Agile methodologies with experiences.",
            },
            {
                skillName: "Python",
                skillLevel: "Intermediate",
                description: "3 years discrete experience.",
            },
            {
                skillName: "Java",
                skillLevel: "Intermediate",
                description: "2 years discrete experience.",
            },
            {
                skillName: "C",
                skillLevel: "Basic",
                description:
                    "Understand the syntax and features, had a few program experiences with.",
            },
        ],
        back_end: [
            {
                skillName: "Databases",
                skillLevel: "Intermediate",
                description:
                    "Understand and experienced relational database design and SQL implementation.\
                     Also know some of the non-relational concepts.",
            },
            {
                skillName: "Flask",
                skillLevel: "Intermediate",
                description:
                    "Understand the concepts of Flask with experience, can build applications with.",
            },
            {
                skillName: "Django",
                skillLevel: "Basic",
                description:
                    "Understand the basics of Django, can build simple applications with.",
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

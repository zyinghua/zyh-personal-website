import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";

export const Education = () => {
    const education_data = [
        {
            degree: "Master of Information Technology (With specialisation in AI)",
            institute: "The University of Melbourne",
            start: "2022",
            end: "Present",
        },
        {
            degree: "Bachelor of Computer Science",
            institute: "Monash University",
            start: "2020",
            end: "2022",
        },
    ];

    return (
        <section className="education" id="education">
            <Container>
                <Row className="align-item-center">
                    <Col>
                        <h2>Education</h2>
                        <div className="education-container">
                            <div className="education-content">
                                {education_data.map((instance, index) => {
                                    if (index % 2 == 0) {
                                        return (
                                            <div className="education-data">
                                                <div>
                                                    <h3 className="education-degree">
                                                        {instance.degree}
                                                    </h3>
                                                    <span className="education-institute">
                                                        {instance.institute}
                                                    </span>
                                                    <div className="education-calendar">
                                                        <BiCalendar />
                                                        {instance.start} -{" "}
                                                        {instance.end}
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="education-rounder" />
                                                    <span className="education-line" />
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="education-data">
                                                <div />
                                                <div>
                                                    <span className="education-rounder" />
                                                    <span className="education-line" />
                                                </div>

                                                <div>
                                                    <h3 className="education-degree">
                                                        {instance.degree}
                                                    </h3>
                                                    <span className="education-institute">
                                                        {instance.institute}
                                                    </span>
                                                    <div className="education-calendar">
                                                        <BiCalendar />
                                                        {instance.start} -{" "}
                                                        {instance.end}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

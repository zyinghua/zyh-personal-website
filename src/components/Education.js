import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row className="align-item-center">
                    <Col>
                        <h2>Education</h2>

                        <div className="education-container">
                            <div className="education-content">
                                <div className="education-data">
                                    <div>
                                        <h3 className="education-degree">
                                            Master of Information Technology
                                            (With specialisation in AI)
                                        </h3>
                                        <span className="education-institute">
                                            The University of Melbourne
                                        </span>
                                        <div className="education-calendar">
                                            <BiCalendar />
                                            2022 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="education-rounder" />
                                        <span className="education-line" />
                                    </div>
                                </div>

                                <div className="education-data">
                                    <div />
                                    <div>
                                        <span className="education-rounder" />
                                        <span className="education-line" />
                                    </div>

                                    <div>
                                        <h3 className="education-degree">
                                            Bachelor of Computer Science
                                        </h3>
                                        <span className="education-institute">
                                            Monash University
                                        </span>
                                        <div className="education-calendar">
                                            <BiCalendar />
                                            2020 - 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

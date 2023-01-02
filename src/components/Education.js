import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCalendar, BiX } from "react-icons/bi";

export const Education = () => {
    const education_data = [
        {
            degree: "Master of Information Technology (With specialisation in AI)",
            institute: "The University of Melbourne",
            start: "2022",
            end: "Present",
            wam: "-",
            desc: "1111",
        },
        {
            degree: "Bachelor of Computer Science",
            institute: "Monash University",
            start: "2020",
            end: "2022",
            wam: "84+",
            desc: "Good good study",
        },
    ];

    const [activeModal, setActiveModal] = useState(null);

    return (
        <section className="education" id="education">
            <Container>
                <Row className="align-item-center">
                    <Col>
                        <h2>Education</h2>
                        <div className="education-content">
                            {education_data.map((instance, index) => {
                                if (index % 2 === 0) {
                                    return (
                                        <div className="education-data">
                                            <div
                                                onClick={() =>
                                                    setActiveModal(index)
                                                }
                                            >
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

                                            <div
                                                className={
                                                    activeModal === index
                                                        ? "education-modal education-modal-active"
                                                        : "education-modal"
                                                }
                                            >
                                                <div className="education-modal-content">
                                                    <BiX
                                                        className="education-modal-close"
                                                        onClick={() =>
                                                            setActiveModal(null)
                                                        }
                                                    />
                                                    <h3 className="education-modal-degree">
                                                        {instance.degree}
                                                    </h3>
                                                    <p className="education-modal-institute">
                                                        {instance.institute}
                                                    </p>
                                                    <p>WAM: {instance.wam}</p>
                                                    <p className="education-modal-desc">
                                                        {instance.desc}
                                                    </p>
                                                </div>
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

                                            <div
                                                onClick={() =>
                                                    setActiveModal(index)
                                                }
                                            >
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

                                            <div
                                                className={
                                                    activeModal === index
                                                        ? "education-modal education-modal-active"
                                                        : "education-modal"
                                                }
                                            >
                                                <div className="education-modal-content">
                                                    <BiX
                                                        className="education-modal-close"
                                                        onClick={() => {
                                                            setActiveModal(
                                                                null
                                                            );
                                                        }}
                                                    />
                                                    <h3 className="education-modal-degree">
                                                        {instance.degree}
                                                    </h3>
                                                    <p className="education-modal-institute">
                                                        {instance.institute}
                                                    </p>
                                                    <p>WAM: {instance.wam}</p>
                                                    <p className="education-modal-desc">
                                                        {instance.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

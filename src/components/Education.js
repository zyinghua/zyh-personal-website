import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCalendar, BiX } from "react-icons/bi";
import { education_data } from "../assets/data";

export const Education = () => {
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
                                                className="education-brief"
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
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={instance.uniUrl}
                                                        style={{
                                                            "text-decoration":
                                                                "none",
                                                        }}
                                                    >
                                                        <p className="education-modal-institute">
                                                            {instance.institute}
                                                        </p>
                                                    </a>
                                                    <p className="education-modal-wam">
                                                        WAM: {instance.wam}
                                                    </p>
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
                                                className="education-brief"
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
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={instance.uniUrl}
                                                        style={{
                                                            "text-decoration":
                                                                "none",
                                                        }}
                                                    >
                                                        <p className="education-modal-institute">
                                                            {instance.institute}
                                                        </p>
                                                    </a>
                                                    <p className="education-modal-wam">
                                                        WAM: {instance.wam}
                                                    </p>
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

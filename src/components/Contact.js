import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    };

    const onFormUpdate = (attribute, value) => {
        setFormDetails({
            ...formDetails,
            [attribute]: value,
        });
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [btnText, setBtnText] = useState("Send");
    const [status, setStatus] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setBtnText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                success: true,
                message:
                    "Message sent successfully, thank you for the contact! You may expect a response within a few days.",
            });
        } else {
            setStatus({
                success: false,
                message:
                    "Looks like something went wrong, please try again later.",
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "firstName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "lastName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={24} sm={12} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={24} sm={12} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.subject}
                                        placeholder="Subject"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "subject",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                {status.message && (
                                    <Col>
                                        <p
                                            className={
                                                status.success === true
                                                    ? "success"
                                                    : "danger"
                                            }
                                        >
                                            {status.message}
                                        </p>
                                    </Col>
                                )}
                            </Row>
                            <Row>
                                <button type="submit">
                                    <span>{btnText}</span>
                                </button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

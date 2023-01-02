import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";

export const Contact = () => {
    const fetchWithTimeout = async (target, options = {}) => {
        //Default is 5000 if timeout not defined in options
        const { timeout = 5000 } = options;

        // Used to abort the fetch
        const controller = new AbortController();
        // If {timeout} passed, do first parameter action
        const id = setTimeout(() => {
            controller.abort();

            setIsSending(false);
            setBtnText("Send");
            setFormDetails(formInitialDetails);
            setStatus({
                success: false,
                message:
                    "Server did not respond, please try again later, apologies for the inconvenience.",
            });
        }, timeout);

        //Normal fetch, but signal binded with controller
        const response = await fetch(target, {
            ...options,
            signal: controller.signal,
        });

        //If response received, this line will be reached.
        clearTimeout(id);

        return response;
    };

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
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({});
    const delta = 300;
    const [dotNum, setDotNum] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check invalid empty fields
        if (formDetails.firstName === "") {
            setStatus({
                success: false,
                message: "Please fill in your 'First Name' above.",
            });

            return;
        } else if (formDetails.email === "") {
            setStatus({
                success: false,
                message: "Please fill in your 'Email Address' above.",
            });

            return;
        } else if (formDetails.subject === "") {
            setStatus({
                success: false,
                message: "Please fill in your 'Subject' above.",
            });

            return;
        } else if (formDetails.message === "") {
            setStatus({
                success: false,
                message: "Please fill in your 'Message' above.",
            });

            return;
        }

        // Send a POST request to the 'EmailServer.js' express server
        setIsSending(true);
        let response = await fetchWithTimeout("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setIsSending(false);
        setBtnText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                success: true,
                message:
                    "Message sent successfully, thank you for the contact! You may expect my response within a few days.",
            });
        } else {
            setStatus({
                success: false,
                message:
                    "Looks like something went wrong, please try again later, apologies for the inconvenience.",
            });
        }
    };

    const tick = () => {
        if (isSending) {
            setDotNum((dotNum + 1) % 4);
            setBtnText("Sending" + ".".repeat(dotNum));
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    });

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

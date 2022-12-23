import { useEffect, useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState("");
    const handleSubmission = (e) => {
        e.peventDefault();
        email && email.indexOf("@") > -1 && onValidated({});
    };

    const clearField = () => {
        setEmail("");
    };

    useEffect(() => {
        if (status === "success") clearField();
    }, [status]);

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my Newsletter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && (
                            <Alert variant="danger">{message}</Alert>
                        )}
                        {status === "success" && (
                            <Alert variant="success">{message}</Alert>
                        )}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmission}>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type="email"
                                    placeHolder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import leetcode from "../assets/img/leetcode.svg";
import linkedIn from "../assets/img/linkedin.svg";

export const Footer = () => {
    const linkedinLink = "https://www.linkedin.com/in/yinghua-zhou-7b95b521a/";
    const leetcodeLink = "https://leetcode.com/nbpppp/";
    const githubLink = "https://github.com/zyinghua";

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <span>
                            <a className="site-txt-logo">YINGHUA ZHOU</a>
                        </span>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href={githubLink} className="github-icon">
                                <img
                                    src={github}
                                    alt="Link to Yinghua's Github site"
                                />
                            </a>
                            <a href={leetcodeLink} className="leetcode-icon">
                                <img
                                    src={leetcode}
                                    alt="Link to Yinghua's Leetcode site"
                                />
                            </a>
                            <a href={linkedinLink} className="linkedin-icon">
                                <img
                                    src={linkedIn}
                                    alt="Link to Yinghua's Linkedin"
                                />
                            </a>
                        </div>
                        <p>Copyright 2023. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

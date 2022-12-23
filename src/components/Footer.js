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
                            <a href={githubLink}>
                                <img
                                    src={github}
                                    alt="Link to Yinghua's Github site"
                                    className="black-svg-icon"
                                />
                            </a>
                            <a href={leetcodeLink}>
                                <img
                                    src={leetcode}
                                    alt="Link to Yinghua's Leetcode site"
                                    className="black-svg-icon"
                                />
                            </a>
                            <a href={linkedinLink}>
                                <img
                                    src={linkedIn}
                                    alt="Link to Yinghua's Linkedin"
                                />
                            </a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

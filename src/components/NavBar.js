import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../assets/img/github.svg";
import leetcode from "../assets/img/leetcode.svg";
import linkedIn from "../assets/img/linkedin.svg";
import send from "../assets/img/send.svg";

export const NavBar = () => {
    const linkedinLink = "https://www.linkedin.com/in/yinghua-zhou-7b95b521a/";
    const leetcodeLink = "https://leetcode.com/nbpppp/";
    const githubLink = "https://github.com/zyinghua";

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScoll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScoll);

        // return of useEffect is to remove side effect once
        // the component is removed
        return () => window.removeEventListener("scroll", onScoll);
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <span>
                        <a className="site-txt-logo">YINGHUA ZHOU</a>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="/#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="/#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link className="navbar-link">
                            <Link className="dom-link" to="/blogs">
                                Blogs
                            </Link>
                        </Nav.Link>

                        <Nav.Link className="navbar-link">
                            <Link className="dom-link" to="/photos">
                                Photos
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <span>
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
                    </span>
                    <div className="navbar-text">
                        <a href="#contact">
                            <button className="nav-contact-me-btn">
                                <span>Contact Me</span>
                                <img src={send} />
                            </button>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

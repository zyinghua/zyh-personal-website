import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import github from "../assets/img/github.svg";
import leetcode from "../assets/img/leetcode.svg";
import linkedIn from "../assets/img/linkedin.svg";

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
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
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
                            href="#skills"
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
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#blogs"
                            className={
                                activeLink === "blogs"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("blogs")}
                        >
                            Blogs
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
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
                        <a href="#contact">
                            <button>
                                <span>Contact Me</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

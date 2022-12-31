import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import scannera_cover from "../assets/img/scannera-proj-cover.jpg";
import scannera_vm_url from "../assets/Scannera_Project_Doc.pdf";

export const Projects = () => {
    const projects = [
        {
            title: "Android App - Scannera",
            description:
                "A better way to compare food for retail store customers.\
                 [#Barcode-Scanning, #Android, #Flask, #SQL, #OCR, #Java, #Python, #Hybrid - Agile&Waterfall]",
            imgUrl: scannera_cover,
            viewMoreUrl: scannera_vm_url,
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className="project-box">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <Row>
                                {projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

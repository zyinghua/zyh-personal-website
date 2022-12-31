import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, viewMoreUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a
                        target="_blank"
                        href={viewMoreUrl}
                        style={{
                            "text-decoration": "none",
                        }}
                    >
                        <div className="proj-view-more-txt">
                            View More
                            <ArrowRightCircle size={19} />
                        </div>
                    </a>
                </div>
            </div>
        </Col>
    );
};

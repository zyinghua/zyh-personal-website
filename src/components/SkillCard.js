import { Col } from "react-bootstrap";
import { BiBadgeCheck } from "react-icons/bi";

export const SkillCard = (skills) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="skill-group">
                <div className="skill-data">
                    <BiBadgeCheck className="skill-badge-check-icon" />
                    <div>
                        <h4 className="skill-name">{skills.skillName}</h4>
                        <span className="skill-level">{skills.skillLevel}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

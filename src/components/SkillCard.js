import { React, useState } from "react";
import { Col } from "react-bootstrap";
import { BiBadgeCheck } from "react-icons/bi";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export const SkillCard = (skill) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Col size={12} sm={6} md={4}>
            <div className="skill-group">
                <div
                    className="skill-data"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <BiBadgeCheck className="skill-badge-check-icon" />
                    <div>
                        <h4 className="skill-name">{skill.skillName}</h4>
                        <span className="skill-level">{skill.skillLevel}</span>
                    </div>
                </div>
            </div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                PaperProps={{
                    style: { width: "50%" },
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{skill.description}</Typography>
            </Popover>
        </Col>
    );
};

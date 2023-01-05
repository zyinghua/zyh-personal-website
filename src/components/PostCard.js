import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PostCard = (props) => {
    return (
        <Link className="dom-link" to={`/posts/${props.fileName}`}>
            <Container className="post-card">
                <Row>
                    <Col sm={6} className=" text-sm-start">
                        <h4 className="post-title">{props.title}</h4>
                    </Col>
                    <Col sm={6} className=" text-sm-end">
                        <h4 className="post-date">
                            <span>Posted on: </span>
                            <span style={{ fontStyle: "italic" }}>
                                {props.date}
                            </span>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <p>Keywords: #Linked Lists, #Two pointers, #Leetcode</p>
                </Row>
            </Container>
        </Link>
    );
};

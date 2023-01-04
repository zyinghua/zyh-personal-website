import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PostCard = () => {
    return (
        <Link className="dom-link" to="">
            <Container className="post-card">
                <Row>
                    <Col sm={6} className=" text-sm-start">
                        <h4 className="post-title">
                            Leetcode 402 solution with explanation
                        </h4>
                    </Col>
                    <Col sm={6} className=" text-sm-end">
                        <h4 className="post-date">Posted on: 12 Dec 2021</h4>
                    </Col>
                </Row>
                <Row>
                    <p>Keywords: #Linked Lists, #Two pointers, #Leetcode</p>
                </Row>
            </Container>
        </Link>
    );
};

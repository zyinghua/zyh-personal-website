import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BiArrowBack } from "react-icons/bi";

export const Post = (props) => {
    const [mdFile, setMdFile] = useState("");

    useEffect(() => {
        fetch(require(`../assets/posts/${props.fileName}.md`))
            .then((res) => res.text())
            .then((text) => setMdFile(text));
    });

    return (
        <div className="mark-down-render">
            <Container style={{ maxWidth: "100%" }}>
                <Row>
                    <Col
                        sm={6}
                        className="text-sm-start"
                        style={{
                            marginBottom: "24px",
                        }}
                    >
                        <a
                            href="/posts"
                            style={{
                                fontSize: "24px",
                                textDecoration: "none",
                            }}
                        >
                            <BiArrowBack
                                style={{
                                    marginTop: "-5px",
                                    marginRight: "5px",
                                }}
                            />
                            Back
                        </a>
                    </Col>
                    <Col sm={6} className=" text-sm-end">
                        <h4>Title: {props.title}</h4>
                        <h4>
                            <span>Posted on: </span>
                            <span style={{ fontStyle: "italic" }}>
                                {props.date}
                            </span>
                        </h4>
                    </Col>
                </Row>
            </Container>

            <ReactMarkdown
                children={mdFile}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                language={match[1]}
                                {...props}
                            />
                        ) : (
                            <code
                                className={className}
                                {...props}
                                style={{
                                    color: "rgb(80, 80, 80)",
                                    backgroundColor: "rgb(215, 215, 215)",
                                    borderRadius: "3px",
                                    padding: "4px",
                                }}
                            >
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </div>
    );
};

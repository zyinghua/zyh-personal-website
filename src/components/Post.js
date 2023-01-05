import { React, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const Post = (props) => {
    const [mdFile, setMdFile] = useState("");

    useEffect(() => {
        fetch(require(`../assets/posts/${props.fileName}.md`))
            .then((res) => res.text())
            .then((text) => setMdFile(text));
    });

    return (
        <div className="mark-down-render">
            <h4>Title: {props.title}</h4>
            <h4>
                <span>Posted on:</span>
                <span style={{ fontStyle: "italic" }}>{props.date}</span>
            </h4>
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
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </div>
    );
};

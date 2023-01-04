import { React, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import md from "../assets/posts/leetcode-142-linked-list-cycle-2.md";

export const Post = () => {
    const [mdFile, setMdFile] = useState("");

    useEffect(() => {
        fetch(md)
            .then((res) => res.text())
            .then((text) => setMdFile(text));
    });

    return (
        <div className="mark-down-render">
            <h4>Title</h4>
            <h4>Posted on:</h4>
            <ReactMarkdown children={mdFile} />
        </div>
    );
};

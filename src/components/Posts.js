import React from "react";
import { PostCard } from "./PostCard";
import { posts } from "../assets/data";

export const Posts = () => {
    return (
        <div className="posts" id="posts">
            <h2>Latest Posts 📰</h2>
            <p style={{ fontSize: "24px", color: "red", textAlign: "center" }}>
                Currently experiencing markdown files unable to be found on
                github pages... Coming back soon.
            </p>
            {posts.map((post, index) => {
                return <PostCard key={index} {...post} />;
            })}
        </div>
    );
};

import React from "react";
import { PostCard } from "./PostCard";
import { posts } from "../assets/data";

export const Posts = () => {
    return (
        <div className="posts" id="posts">
            <h2>Latest Posts 📰</h2>
            {posts.map((post, index) => {
                return <PostCard key={index} {...post} />;
            })}
        </div>
    );
};

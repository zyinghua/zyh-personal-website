import React from "react";
import { PostCard } from "./PostCard";

export const Posts = () => {
    return (
        <div className="posts" id="posts">
            <h2>Latest Posts 📰</h2>
            <PostCard />
        </div>
    );
};

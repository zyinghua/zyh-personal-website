import React from "react";
import { Posts } from "./Posts";
import { Post } from "./Post";
import { posts } from "../assets/data";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Routes, Route } from "react-router-dom";

export const PostRoutes = () => {
    return (
        <Routes>
            <Route
                path=""
                element={
                    <div>
                        <NavBar />
                        <Posts />
                        <Footer />
                    </div>
                }
            />
            {posts.map((post) => {
                return (
                    <Route
                        path={`/posts/${post.fileName}`}
                        element={<Post {...post} />}
                    />
                );
            })}
        </Routes>
    );
};

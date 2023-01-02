import React from "react";
import pnf from "../assets/img/404-page-not-found.gif";

export const PageNotFound = () => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <img src={pnf} alt="404-Page-Not-Found.gif" />
            <p>
                The page you are trying to access is not found, please make sure
                your URL is correct.
            </p>
        </div>
    );
};

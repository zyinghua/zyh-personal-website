import React from "react";
import pnf from "../assets/img/404-page-not-found.gif";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div>
            <div className="page-not-found" id="page-not-found">
                <h2>404 Page Not Found</h2>
                <img
                    src={pnf}
                    alt="404-Page-Not-Found.gif"
                    className="page-not-found-img"
                />
                <p>
                    The page you are trying to access is not found, please make
                    sure your URL is correct. <br />
                    To return back to home page, <Link to="/">click here</Link>.
                </p>
            </div>
        </div>
    );
};

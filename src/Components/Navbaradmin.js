import React from "react";
import Gored from "../Assets/Gored.png";
const Navbaradmin = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container ms-5">
                <a className="navbar-brand" href="#">
                    <img
                        src={Gored}
                        className="d-inline-block align-text-top"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbaradmin;

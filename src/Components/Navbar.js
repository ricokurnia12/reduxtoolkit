import React from "react";
import Navbarstyle from "./Navbarstyle.css";
import Gowhite from "../Assets/Gowhite.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container ms-5">
                <a className="navbar-brand" href="#">
                    <img src={Gowhite} width={126} height={40} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

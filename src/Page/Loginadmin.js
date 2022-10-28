import React from "react";
import Gowhite from "../Assets/Gowhite.png";
import Loginadminstyle from "./Loginadminstyle.css";

const Loginadmin = () => {
    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <div className="form-group ">
                <div className="fotogo">
                    <img src={Gowhite} height={40} width={120} />
                </div>
                <h3 className="Masukadmin">Masuk Admin</h3>

                <input
                    type=""
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                />

                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                />

                <div className="text-center">
                    <button type="submit" className="btn">
                        Masuk
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Loginadmin;

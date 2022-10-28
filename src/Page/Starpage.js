import React from "react";
import Starpagestyle from "./Starpagestyle.css";
import Peoplestarpage from "../Assets/Peoplestarpage.png";

const Starpage = () => {
    return (
        <div className="container ms-5 mb-15">
            <div className="hello">
                <p>Halo Kiki,</p>
                <p>Selamat Datang!</p>
                <h3>TES MBTI</h3>
                <button className="buttonmulai">Mulai Tes</button>
                <div className="position-absolute top-50 end-0 translate-middle-y">
                    <div className="container">
                        <img
                            src={Peoplestarpage}
                            className="gambar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starpage;

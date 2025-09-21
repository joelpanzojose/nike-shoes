
import React from "react";
import logo from "../../assets/img/logo.png";
import fundo from "../../assets/img/fundo.png";
import imageRemoveBg from "../../assets/img/image-removebg-preview(3) 1.png";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";
import facebook from "../../assets/img/facebook.png";
import insta from "../../assets/img/insta.png";
import X from "../svgs/mysvgs";

import "./header.css";

function Header() {
    return (
        <header>
            <div className="div-logo">
                <img className="logo" src={logo} alt="Logo Nike" />
            </div>

            <div>
                <h5>Bem vindo ao produto do slider</h5>
            </div>

            <div>
                <nav>
                    <ul>
                        <li><img src={facebook} alt="Facebook" /></li>
                        <li><img src={insta} alt="Instagram" /></li>
                        <li><X /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
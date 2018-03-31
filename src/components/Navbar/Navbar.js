import React from "react";
import "./Navbar.css";

const Navbar = props => (

<div >
    <nav className="navbar navbar-dark bg-gunmetal fixed-top">

            <ul>
                <li className="title clicky">
                Egyptian Memory Game
                </li>

                <li className="title message">
                    {props.message}
                </li>

                <li className="title score">
                    Score: {props.score} | Top Score: {props.topscore}
                </li>
            </ul>
    </nav>
</div>

);

export default Navbar;
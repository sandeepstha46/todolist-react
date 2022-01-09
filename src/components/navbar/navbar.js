import React from 'react';
import "./navbar.css";
import {NavLink} from "react-router-dom";
import {Container} from "@material-ui/core";

function Navbar(props) {
    return (
        <div>
            <Container fixed>
                <ul>
                    <li>
                        <NavLink to={"/todo"}>To do</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/form"}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/todolist"}>List</NavLink>
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default Navbar;
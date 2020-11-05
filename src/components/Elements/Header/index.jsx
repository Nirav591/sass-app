import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./assets/Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "./assets/images/logo.png";


function App() {
    const [active, setActive] = useState(false);
    const fixedText = document.getElementById("myHeader");
    const whenNotFixed = "I am not a fixed header :(";
    const [headerText, setHeaderText] = useState(whenNotFixed);
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add(`${classes.sticky}`);
                if (headerText !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                header.classList.remove(`${classes.sticky}`);
                if (headerText !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    });

    return (
        <div>
            <header id="myHeader">
                <Container>
                    <div className={classes.menuContainer}>
                        <div className={classes.logo}>
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <nav className={active ?  `${classes.nav} ${classes.active}`: `${classes.nav}` }>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => setActive(!active)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/About"
                                        onClick={() => setActive(!active)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        title="About Us"
                                        href="http://altindia.in/"
                                        target="_blank"
                                    >
                                        Alt India
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/Product"
                                        onClick={() => setActive(!active)}
                                    >
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Ourproduct"
                                        onClick={() => setActive(!active)}
                                    >
                                        Ourproduct
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Exhibition"
                                        onClick={() => setActive(!active)}
                                    >
                                        Exhibition
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Contact"
                                        onClick={() => setActive(!active)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div onClick={() => setActive(!active)} className={classes.MenuToggle}>
                            {active ? (
                                <div className={classes.close_icon}>
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.326 15l13.4-13.4c.366-.366.366-.96 0-1.325-.366-.367-.96-.367-1.326 0L15 13.675 1.6.275C1.235-.093.64-.093.275.275c-.367.365-.367.96 0 1.324l13.4 13.4-13.4 13.4c-.367.364-.367.96 0 1.323.182.184.422.275.662.275.24 0 .48-.09.663-.276l13.4-13.4 13.4 13.4c.183.184.423.275.663.275.24 0 .48-.09.662-.276.367-.365.367-.96 0-1.324L16.325 15z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            ) : (
                                <div className={classes.menuIcon}>
                                    <svg
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXa="http://www.w3.org/1999/xa"
                                        x="0px"
                                        y="0px"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 459 459"
                                        style={{
                                            enableBackground: "new 0 0 459 459",
                                        }}
                                        xmlSpace="preserve"
                                    >
                                        <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    );
}

export default App;

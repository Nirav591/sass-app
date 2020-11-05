import React from "react";
import {
    Navbar,
    Brand,
    Toggle,
    Collapse,
    Nav,
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./assets/Home.scss";
import Bgsvg from "./assets/images/bg.svg";
import GetQuote from "./GetQuote";
import HomeImg from "./assets/images/home.png";
import { Link } from "react-router-dom";

function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="home__page__element">
            <Container>
                <div className="home__bg">
                    <img src={HomeImg} className="img-fluid" />
                </div>
                <div className="content__home">
                    <h1>Boost Traffic & Rank with BAHA.</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur</p>
                    <Button onClick={() => setModalShow(true)}>
                        GET A QUOTE
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Home;

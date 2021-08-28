import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import {Avatar} from "@material-ui/core"
import devgologo from "../assets/devgologo.png"
import Search from "../components/Search"
import logogif from "../assets/logogif.gif"


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/">About</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/">Images</Link>
                    <Avatar src={logogif} alt=""/>
                </div>
            </div>


            <div className="home__body">
                <img src={devgologo} alt=""/>
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home

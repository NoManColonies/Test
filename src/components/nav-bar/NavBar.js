import React, { Component } from 'react'
import '../../css/NavBar.css';
import logo from '../../images/DII.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    style = {
        navBody: {
            position: "sticky",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "70px",
            top: "0",
            zIndex: "2"
        },
        anchorPoint: {
            marginRight: "2.5em",
            fontSize: "24px",
            color: "white"
        },
        logo: {
            position: "absolute",
            width: "100px",
            height: "fit-content",
            top: "5px",
            left: "5px"
        }
    };

    render() {
        return (
        <div style={this.style.navBody}>
            <a href="#home" style={this.style.anchorPoint} className="quark__bold">Home</a>
            <a href="#" style={this.style.anchorPoint} className="quark__bold">Intro</a>
            <a href="#" style={this.style.anchorPoint} className="quark__bold">About</a>
            <a href="#" style={this.style.anchorPoint} className="quark__bold">Contact</a>
            <img src={logo} alt="DII" style={this.style.logo}/>
        </div>
        );
    }
}

export default NavBar;
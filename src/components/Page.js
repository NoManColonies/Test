import React, { Component } from 'react'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    style = {
        width: "100vw",
        height: "100vh",
        backgroundColor: this.props.bgColor,
        padding: this.props.padding,
        zIndex: "1",
        position: "relative"
    };

    render() {
        return (
          <section id={this.props.id}>
            <section style={this.style}>{this.props.children}</section>
          </section>
        );
    }
}

export default Page;
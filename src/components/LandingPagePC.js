import React, { Component} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/LandingPagePC.css';
import hods from '../images/hods.jpg';
import Window from './Window';
import Projector from './Projector';
import NavBar from './nav-bar/NavBar';
import Page from './Page';

class LandingPagePC extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        gsap.registerPlugin(ScrollTrigger);
        
    }
    
    componentDidMount() {
        const tl = new gsap.timeline({
          scrollTrigger: {
            trigger: "#Logo_1_",
            start: "top 46.2%",
            end: "top 100px",
            scrub: true,
            pin: "#home",
            markers: true,
          }
        });
        
        tl.to('#Logo_1_', {
            x: -100,
            y: 50,
            duration: 5,
            ease: "back.out(1.7)"
        }, 0)
        .to('#Logo_1_', {
            y: -350,
            duration: 3
        }, 3);

    }

    callToAction = () => {
      
    };

    render() {
        return (
          <React.Fragment>
            <NavBar />
            <Page bgColor={"transparent"} padding={"5vw"} id="home">
              <div className="container">
                <div className="primCol">
                  <h1 className="header">Welcome to CAMT DII!</h1>
                  <p className="param">
                    Incididunt cillum eu ut in Lorem dolore magna voluptate.
                    Consequat commodo eiusmod fugiat ullamco amet elit veniam
                    reprehenderit enim aute anim aliqua magna mollit. Enim
                    exercitation anim anim pariatur consectetur laboris aliquip
                    ad adipisicing et in id.
                  </p>
                  <button className="trigger" onClick={this.callToAction(this)}>Take a tour</button>
                </div>
                <div className="secCol">
                  <Window />
                </div>
              </div>
            </Page>
            <Page bgColor={"#313131"}>
              <div className="container">
                <div className="projection">
                  <img src={hods} alt="hods" className="projected" />
                  <Projector />
                </div>
                <div className="about__us">
                  <h1 className="about header">About CAMT DII</h1>
                  <p className="param">
                    Incididunt cillum eu ut in Lorem dolore magna voluptate.
                    Consequat commodo eiusmod fugiat ullamco amet elit veniam
                    reprehenderit enim aute anim aliqua magna mollit. Enim
                    exercitation anim anim pariatur consectetur laboris aliquip
                    ad adipisicing et in id.
                  </p>
                  <p className="param">
                    Incididunt cillum eu ut in Lorem dolore magna voluptate.
                    Consequat commodo eiusmod fugiat ullamco amet elit veniam
                    reprehenderit enim aute anim aliqua magna mollit. Enim
                    exercitation anim anim pariatur consectetur laboris aliquip
                    ad adipisicing et in id.
                  </p>
                </div>
              </div>
            </Page>
          </React.Fragment>
        );
    }
}

export default LandingPagePC;
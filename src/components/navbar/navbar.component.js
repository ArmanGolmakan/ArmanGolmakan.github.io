import React, { Component } from 'react';
import './navbar.style.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { scroller } from "react-scroll";


class MyNavbar extends Component {

    state = {
        bg: 'transparent'
    };

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "dark" });
        } else {
            this.setState({ bg: "transparent" });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        return (
            <div>
                <Navbar bg={this.state.bg} fixed="top" expand="md" className="animate-navbar nav-theme justify-content-between">
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                                <Nav.Link id="arman-nav" href="#home"
                                    onSelect={() => scroller.scrollTo('paral', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Arman Golmakan</Nav.Link>
                                <Nav.Link href="#about"
                                    onSelect={() => scroller.scrollTo('about', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>About</Nav.Link>
                                <Nav.Link href="#skills"
                                    onSelect={() => scroller.scrollTo('skills', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Skills</Nav.Link>
                                <Nav.Link href="#experience"
                                    onSelect={() => scroller.scrollTo('experience', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Experience</Nav.Link>
                                    <Nav.Link href="#projects"
                                    onSelect={() => scroller.scrollTo('projects', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Projects</Nav.Link>
                                    <Nav.Link href="#contact"
                                    onSelect={() => scroller.scrollTo('contact', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }

}

// const MyNavbar = () => {
//     return (
//         <div>
//             <Navbar scrolling dark fixed="top" expand="md" className="animate-navbar nav-theme justify-content-between">
//                 <div>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto ">
//                             <Nav.Link id="arman-nav" href="#home"
//                             onSelect={() => scroller.scrollTo('paral', {
//                                 smooth: true,
//                                 offset: -50,
//                                 duration: 500, 
//                             })}>Arman Golmakan</Nav.Link>
//                             <Nav.Link href="#about"
//                             onSelect={() => scroller.scrollTo('about', {
//                                 smooth: true,
//                                 offset: -50,
//                                 duration: 500, 
//                             })}>About</Nav.Link>
//                             <Nav.Link href="#skills"
//                             onSelect={() => scroller.scrollTo('skills', {
//                                 smooth: true,
//                                 offset: -50,
//                                 duration: 500, 
//                             })}>Skills</Nav.Link>
//                             <Nav.Link href="#experience">Experience</Nav.Link>
//                             <Nav.Link href="#projects">Projects</Nav.Link>
//                             <Nav.Link href="#contact">Contact</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </div>
//             </Navbar>
//         </div>
//     );
// }



export default MyNavbar;
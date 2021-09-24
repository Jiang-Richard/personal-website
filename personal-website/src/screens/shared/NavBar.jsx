import React from "react";
import ButtonRedirect from "./ButtonRedirect";
import { useAuth } from '../../Auth';
// import ProfileDropdown from './ProfileDropdown';
import Logo from '../../images/Logo.jpeg';
import { Navbar, Nav } from 'react-bootstrap/'
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const { currentUser } = useAuth();
    // https://react-bootstrap.github.io/components/navbar/
    return (
        <Navbar bg="main" expand="lg" variant="light">
            <Navbar.Brand href="/">
                <img alt="" src={Logo} width="150" height="40" className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="nav-bar-item" to="/">Home</Link>
                    <Link className="nav-bar-item" to="/work-experience">Work Experience</Link>
                    <Link className="nav-bar-item" to="/contact">Contact Me</Link>
                    {currentUser ? <Link className="nav-bar-item" to="/resume">Resume</Link> : null}
                    {currentUser ? <h1>Welcome!</h1> : <ButtonRedirect style={{ marginTop: '3px' }} variant="outlined" color="primary" route="/login" content="Login" />}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
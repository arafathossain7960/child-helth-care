import React from 'react';
import './Header.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {userLoginOut, user}=useAuth();
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="header-bg sticky-top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="donation">Donation</Nav.Link>
                <Nav.Link as={Link} to="camp">Camp Schedule</Nav.Link>
                <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

            
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav">

             
                {user?.email ?
                     <button className="logOut-btn" onClick={userLoginOut}>Log out</button>
                     :  <Nav className="text-left"><Nav.Link as={Link} to="login">Login</Nav.Link></Nav>

                }
                {
                    user.email && <span>{user.email}</span> 
                    
                }
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        </>
    );
};

export default Header;
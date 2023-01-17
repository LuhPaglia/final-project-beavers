import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledNav } from '../styles.js';
import { useState, useEffect } from "react";


const NavbarCompo = () => {
  const [userType, setUserType] = useState();

  useEffect(()=>{
    setUserType(sessionStorage.getItem("userType"));
  })

  return (
    <StyledNav>
      <Navbar bg="success" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{display: (sessionStorage.getItem("userLogged") === null) ? 'block' : 'none'}}>Login</Nav.Link>
            <Nav.Link as={Link} to="/logout" style={{display: (sessionStorage.getItem("userLogged") != null) ? 'block' : 'none'}}>Logout</Nav.Link>
            <Nav.Link as={Link} to="/admin" style={{display: userType === "admin" ? 'block' : 'none'}}>Admin Page</Nav.Link>
            <Nav.Link as={Link} to="/teacher" style={{display: userType === "admin" ? 'block' : 'none'}}>Teacher Management</Nav.Link>
            <Nav.Link as={Link} to="/students" style={{display: (userType === "admin" || userType === "teacher") ? 'block' : 'none'}}>Student Management</Nav.Link>
            <Nav.Link as={Link} to="/grade" style={{display: (userType === "admin" || userType === "teacher") ? 'block' : 'none'}}>Grade Management</Nav.Link>
            <Nav.Link as={Link} to="/studentProfile" style={{display: userType === "student" ? 'block' : 'none'}}>Student Profile</Nav.Link>
            {/* <Nav.Link as={Link} to={`/students/${student.id}`}>Student Profile</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </StyledNav>
  );
}

export default NavbarCompo;
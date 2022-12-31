import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCompo = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
            <Nav.Link as={Link} to="/teacher">Teacher</Nav.Link>
            <Nav.Link as={Link} to="/grade">Grade</Nav.Link>
            <Nav.Link as={Link} to="/students/:id">Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarCompo;
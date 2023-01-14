import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { FaAdn, FaChalkboardTeacher, FaGlassCheers, FaGraduationCap, FaMagic, FaMastodon, FaSchool, FaStudiovinari, FaUser } from 'react-icons/fa';
import { StyledLogin } from '../styles.js';

const Login = () => {

  const [shPas,setShPas] = useState("password");

  const shBtn = (e) => {
    console.log(e);
    if(e.target.innerText == "Show"){
        e.target.innerText = "Hide";
        setShPas("text");
    }else{
      e.target.innerText = "Show";
      setShPas("password");
  }
}

return (
  <StyledLogin>
    <Container>
      <h1 className="mt-5 mb-4">Login</h1>

      <Form>
        <fieldset>  
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Check
                type="radio"
                label={<><FaAdn color='green'/> Admin </>}
                name="role"
                id="admin"
              />
              <Form.Check 
                type="radio"
                label={<><FaChalkboardTeacher color='green'/> Teacher</>}
                name="role"
                id="teacher"
              />
              <Form.Check 
                type="radio"
                label={<><FaGlassCheers color='green'/> Student </>}
                name="role"
                id="student"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control placeholder="Email"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control type={shPas} placeholder="Password"/>
              <div>
                <Button variant="link" onClick={shBtn}>Show</Button>
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Button variant="success">
                Login
              </Button>
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
    </Container>
  </StyledLogin>
)
}

export default Login;

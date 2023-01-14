import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { FaAdn, FaChalkboardTeacher, FaGlassCheers, FaGraduationCap, FaMagic, FaMastodon, FaSchool, FaStudiovinari, FaUser } from 'react-icons/fa';
import { styles } from '../styles.js';

const Login = () => {

  const [shPas,setShPas] = useState("password");
  const [color,setColor] = useState(styles.green);
  const [bgColor,setBgColor] = useState(styles.bgEnd);

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
  <div style={styles.StyledLogin}>
    <Container>
      <h1 className="mt-5 mb-4" style={styles.color}>Login</h1>

      <Form>
        <fieldset style={styles.fieldset}>  
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Check
                type="radio"
                label={<><FaAdn style={styles.color} /> Admin </>}
                name="role"
                id="admin"
              />
              <Form.Check 
                type="radio"
                label={<><FaChalkboardTeacher style={styles.color} /> Teacher</>}
                name="role"
                id="teacher"
              />
              <Form.Check 
                type="radio"
                label={<><FaGlassCheers style={styles.color} /> Student </>}
                name="role"
                id="student"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control type={shPas} placeholder="Email" onFocus={styles.bgCh} onBlur={styles.bgCh} style={styles.font}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control type={shPas} placeholder="Password" onFocus={styles.bgCh} onBlur={styles.bgCh} style={styles.font}/>
              <div>
                <Button variant="link" onClick={shBtn} style={styles.color}>Show</Button>
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Button variant="success" onMouseOver={()=>setBgColor(styles.bgHover)} onMouseOut={()=>setBgColor(styles.bgEnd)} onClick={()=>setColor(styles.white)} style={bgColor}>
                Login
              </Button>
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
    </Container>
  </div>
)
}

export default Login;

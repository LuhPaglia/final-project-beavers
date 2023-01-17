import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { FaAdn, FaChalkboardTeacher, FaGlassCheers, FaGraduationCap, FaMagic, FaMastodon, FaSchool, FaStudiovinari, FaUser } from 'react-icons/fa';
import { StyledLogin } from '../styles.js';
import axiosSrv from '../Services/axiosSrv.js';
import cryptoJs from "crypto-js";
import { Link } from 'react-router-dom';


const Login = () => {

  const [shPas,setShPas] = useState("password");

  const enc = (data,key) =>{
    const encData = cryptoJs.AES.encrypt(data,key).toString();
    return encData;
  };
  const dec = (encData,key) =>{
      const decData = cryptoJs.AES.decrypt(encData,key);
      return decData.toString(cryptoJs.enc.Utf8);
  };

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
  const doLogin = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    const formData = new FormData(e.target);
    axiosSrv.post("login/login.php",formData)
    .then(res=>{
      console.log(res);
      if(res.data !== "User not found"){
        sessionStorage.setItem("userLogged", enc(res.data.toString(), "w3L0v3pHp"));
        sessionStorage.setItem("userType", formData.get("role"));
        switch(formData.get("role")){
          case "admin":
            window.location.href = 'admin';
            break;
          case "teacher":
            window.location.href = 'teacher';
            break;
          case "student":
            window.location.href = 'studentProfile';
            break;
          default:
            window.location.href = '';
        }
      }else{
        console.log(res.data);
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  }

return (
  <StyledLogin>
    <Container>
      <h1 className="mt-5 mb-4">LOGIN</h1>

      <Form onSubmit={doLogin}>
        <fieldset>  
          <Form.Group as={Row} className="mb-3">
            <Col sm={12} className="radiowrap">
              <Form.Check
                type="radio"
                label={<><FaAdn color='green'/> Admin </>}
                name="role"
                id="admin"
                value="admin"
              />
              <Form.Check 
                type="radio"
                label={<><FaChalkboardTeacher color='green'/> Teacher</>}
                name="role"
                id="teacher"
                value="teacher"
              />
              <Form.Check 
                type="radio"
                label={<><FaGlassCheers color='green'/> Student </>}
                name="role"
                id="student"
                value="student"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control  placeholder="Email" name="email"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12} className="passwrap">
              <Form.Control type={shPas} placeholder="Password" name="pass"/><Button variant="link" onClick={shBtn}>Show</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
      <p>Not a member? <Link to="#">Join Us!</Link></p>
    </Container>
  </StyledLogin>
)
}

export default Login;

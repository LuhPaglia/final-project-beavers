import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { StyledLogin } from '../styles';
import { FaAdn, FaChalkboardTeacher, FaGlassCheers, FaGraduationCap, FaMagic, FaMastodon, FaSchool, FaStudiovinari, FaUser } from 'react-icons/fa';

const Login = () => {

  const bgCh = (e) =>{
    switch(e.type){
        case "focus":
            e.target.style.boxShadow="0 0 0 3px #198722";
            e.target.style.border="none";
        break;
        case "blur":
          e.target.style.boxShadow="none";
          e.target.style.border="1px solid #ced4da";
        break;
    }
}
  // const radioCh =(e) => {
  //     if(e.type == 'change'){
  //         e.target.style.backgroundColor="#198722";
  //         e.target.style.boxShadow="none";
  //         e.target.style.border="none";
  //       }else{
  //         e.target.style.backgroundColor="none";
  //         e.target.style.boxShadow="#000000";
  //         e.target.style.border="none";
  //       }
  // }

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
const green = {color:'#198722'}
const white = {color:'#198722', fontWeight:'700'}
const [color,setColor] = useState(green);

const bgHover = {
  width: '100%',
fontFamily:'Sans-serif',
fontSize: '16px',
background: 'transparent',
border: '1px solid #198722',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
borderRadius: '4px',
color:'#198722'
}
const bgEnd = {width: '100%',
fontFamily:'Sans-serif',
fontSize: '16px',
background: 'linear-gradient(to right, #198722, #5DE168)',
border: 'none',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
borderRadius: '4px'}
const [bgColor,setBgColor] = useState(bgEnd);

  return (
    <StyledLogin style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
      <Container>
        <h1 className="mt-5 mb-4" style={{color:'#198772'}}>Login</h1>

       
        <Form>
          <fieldset style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>  
            <Form.Group as={Row} className="mb-3">
              <Col sm={12}>
                <Form.Check
                  type="radio"
                  label={<><FaAdn style={{ marginRight: '8px', color:'#198722'}} /> Admin </>}
                  name="role"
                  id="admin"
                  // onChange={radioCh}
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333'}}
                />
                <Form.Check 
                  type="radio"
                  label={<><FaChalkboardTeacher style={{ marginRight: '8px', color:'#198722'}} /> Teacher</>}
                  name="role"
                  id="teacher"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333'}}
                />
                <Form.Check
                  type="radio"
                  label={<><FaUser style={{ marginRight: '8px',color:'#198722' }} /> Student</>}
                  name="role"
                  id="student"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', rowGap:'2px'}}>
            <Col sm={3}>
              <Form.Control type="email" placeholder="E-mail" onFocus={bgCh} onBlur={bgCh} style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333'}} />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', rowGap:'2px'}} >
            <Col sm={3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'end'}}>
              <Form.Control type={shPas}  placeholder="Password" onFocus={bgCh} onBlur={bgCh} style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333'}} />
              <Button
              variant="success"
              type="button"
              onClick={shBtn}
              style={{
                width: '20%',
                fontFamily: 'Sans-serif',
                fontSize: '12px',
                color:'#198722',
                boxShadow:'none',
                background:'none',
                border:'0px',
              }}
            >
              Show
            </Button>
            </Col>
          </Form.Group> 

          <Form.Group as={Row} className="mb-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', rowGap:'2px'}}>
          <Col sm={3}>
            <Button
              variant="success"
              type="submit"
              onMouseEnter = {() => setBgColor(bgHover)} onMouseLeave = {() => setBgColor(bgEnd)}
              style={bgColor}
              // {
              //   width: '100%',
              //   fontFamily: 'Sans-serif',
              //   fontSize: '16px',
              //   background: {bgColor},
              //   border: 'none',
              //   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              //   borderRadius: '4px'
              
            >
              Log in
            </Button>
            </Col>
          </Form.Group>

<p style={{ color: '#848484', fontFamily: 'Sans-serif', fontSize: '16px'}}>Not our member?&nbsp;
<a href="./register.php" onMouseEnter = {() => setColor(white)} onMouseLeave = {() => setColor(green)}
style={color}>Join now</a>
 </p>
</Form>
</Container>
</StyledLogin>
);
};

export default Login;

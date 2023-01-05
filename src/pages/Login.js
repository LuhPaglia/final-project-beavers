import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StyledLogin } from '../styles';
import { FaAdn, FaChalkboardTeacher, FaGlassCheers, FaGraduationCap, FaMagic, FaMastodon, FaSchool, FaStudiovinari, FaUser } from 'react-icons/fa';

const Login = () => {
  return (
    <StyledLogin style={{paddingLeft: '15vh', paddingTop: '5vh'}}>
      <Container style={{ paddingTop: '20px', paddingBottom: '20px', width: '50%' }}>
        <h1 style={{ fontFamily: 'Inter', fontSize: '28px', color: '#333', paddingRight:'23vh' }}>Login page</h1>

       
        <Form style={{paddingRight: '0', borderRadius: '4px', padding: '3vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2} style={{ fontFamily: 'Sans-serif', fontSize: '18px', color: '#333' }}>
                Select Role
              </Form.Label>
              <Col sm={3}>
                <Form.Check
                  type="radio"
                  label={<><FaAdn style={{ marginRight: '8px'}} /> Admin </>}
                  name="role"
                  id="admin"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }}
                />
                <Form.Check
                  type="radio"
                  label={<><FaChalkboardTeacher style={{ marginRight: '8px' }} /> Teacher</>}
                  name="role"
                  id="teacher"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }}
                />
                <Form.Check
                  type="radio"
                  label={<><FaUser style={{ marginRight: '8px' }} /> Student</>}
                  name="role"
                  id="student"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            
            <Col sm={9}>
              
              <Form.Control type="email" placeholder="E-mail" style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            
            <Col sm={9}>
              
              <Form.Control type="password" placeholder="Password" style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
          <Col sm={9} md={9} lg={9}>
            <Button
              variant="success"
              type="submit"
              style={{
                width: '100%',
                fontFamily: 'Sans-serif',
                fontSize: '16px',
                background: 'linear-gradient(to right, #0077c9, #00b4db)',
                border: 'none',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '4px',
                ':hover': {
                  cursor: 'pointer',
                  background: 'green',
                  color: 'white'
                }
              }}
            >
              Log in
            </Button>

            </Col>
          </Form.Group>

<p style={{ color: '#848484', fontFamily: 'Sans-serif', fontSize: '16px', paddingRight:'15vh'}}>Not our member?&nbsp;
<a href="./register.php" style={{ color: '#0077c9', fontFamily: 'Sans-serif', fontSize: '16px' }}>Join now</a>
 </p>
</Form>
</Container>
</StyledLogin>
);
};

export default Login;

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StyledLogin } from '../styles';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  return (
    <StyledLogin>
      <Container style={{ paddingTop: '20px', paddingBottom: '20px', width: '50%' }}>
        <h1 style={{ fontFamily: 'Inter', fontSize: '32px', color: '#333' }}>Login page</h1>

       
        <Form style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '4px'}}>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2} style={{ fontFamily: 'Sans-serif', fontSize: '18px', color: '#333' }}>
                Select Role
              </Form.Label>
              <Col sm={3}>
                <Form.Check
                  type="radio"
                  label={<><FaUser style={{ marginRight: '8px' }} /> Admin</>}
                  name="role"
                  id="admin"
                  style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }}
                />
                <Form.Check
                  type="radio"
                  label={<><FaUser style={{ marginRight: '8px' }} /> Teacher</>}
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
            <Form.Label column sm={2} style={{ fontFamily: 'Sans-serif', fontSize: '18px', color: '#333' }}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2} style={{ fontFamily: 'Sans-serif', fontSize: '18px', color: '#333' }}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" style={{ fontFamily: 'Sans-serif', fontSize: '16px', color: '#333' }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
            <Button
              variant="success"
              type="submit"
              style={{
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

<p style={{ color: '#848484', fontFamily: 'Sans-serif', fontSize: '16px' }}>Not our member?
<a href="./register.php" style={{ color: '#0077c9', fontFamily: 'Sans-serif', fontSize: '16px' }}>Register</a>
</p>
</Form>
</Container>
</StyledLogin>
);
};

export default Login;

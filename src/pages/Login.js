import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StyledLogin } from '../styles';

const Login = () => {
  return (
    <StyledLogin>
    <Container>
      <h1>Login page</h1>

    <Form>
    <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          Select Role
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Admin"
              name="role"
              id="admin"
            />
            <Form.Check
              type="radio"
              label="Teacher"
              name="role"
              id="teacher"
            />
            <Form.Check
              type="radio"
              label="Student"
              name="role"
              id="student"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Log in</Button>
        </Col>
      </Form.Group>

      <p>Not our member?
          <a href="./register.php">Register</a>
      </p>


    </Form>
    </Container>
    </StyledLogin>
  );
};

export default Login;

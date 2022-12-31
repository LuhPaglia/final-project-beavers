import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Teacher = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const teacherTh = [
    "teacher_id",
    "user_name",
    "password",
    "email",
    "course_id",
    "salary",
    "address",
    "birthday",
    "edit",
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Teacher Management</h1>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={teacherTh} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Teacher;


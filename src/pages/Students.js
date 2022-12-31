import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Students = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const studentTh = [
    "student_id",
    "email",
    "fullname",
    "course_id",
    "course_name",
    "teacher_id",
    "address",
    "birthday",
    "edit",
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Student Management</h1>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={studentTh} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Students;

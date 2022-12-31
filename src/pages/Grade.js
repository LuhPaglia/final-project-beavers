import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Grade = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gradeTh = [
    "grade_id",
    "classwork_name",
    "student_id",
    "Grade_id",
    "course_id",
    "mark",
    "date",
    "feedback",
    "edit",
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Grade Management</h1>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={gradeTh} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Grade;



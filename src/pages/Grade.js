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

  const gradeTr = [
    [
      10001,
      "CourseWork#3",
      101,
      11,
      1001,
      12,
      "2022/12/19",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur perspiciatis est quam nostrum repellat magni dignissimos inventore impedit officiis. Minus vero laudantium incidunt quisquam cumque accusantium! Quasi, quis expedita? Nobis.",
    ],
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Grade Management</h1>
          </Col>
          <Col>
            <Button variant="success" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={gradeTh} tr={gradeTr} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Grade;

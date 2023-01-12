import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Button } from "react-bootstrap";

const Grade = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const grade = "grade";
  
  const gradeTh = [
    "Grade ID",
    "Classwork Name",
    "Student ID",
    "Teacher ID",
    "Course ID",
    "Mark",
    "Date",
    "Feedback",
    "Edit",
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
          <Dashboard role={grade} th={gradeTh} tr={gradeTr} />
        </Row>
      </Container>
      {show && <ModalCompo role={grade} show={show} onClose={handleClose} />}
    </>
  );
};

export default Grade;

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
    "email",
    "course_id",
    "salary",
    "address",
    "birthday",
    "edit",
  ];

  const teacherTr = [
    [1, 'hconeybeer0', 'vgreatbach0@yahoo.co.jp', 1, 3349, null, '1965-9-26'],
    [2, 'pklimczak1', 'bdrover1@ox.ac.uk', 2, 1530, '05 Caliangt Street', '1965-9-26'],
    [3, 'rseamer2', 'gmarrow2@issuu.com', 3, null, 2374, '1965-9-26'],
    [4, 'ifealty3', 'csurmon3@princeton.edu', 4, null, '6617 Victoria Trail', '1965-9-26']
  ]

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Teacher Management</h1>
          </Col>
          <Col>
            <Button variant="success" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={teacherTh} tr={teacherTr} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Teacher;


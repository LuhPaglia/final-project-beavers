import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Button } from "react-bootstrap";

const Students = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const student = "student";

  const studentTh = [
    "Student ID",
    "Email",
    "Username",
    "Course ID",
    "Course Name",
    "Teacher ID",
    "Address",
    "Birthday",
    "Edit",
  ];

  const studentTr = [
    [1, 'jtire0@cbsnews.com', 'Joy Tire', 3, 1, 1, '5288 Kennedy Way', '5/23/2022'],
    [2, 'frotham1@forbes.com', 'Forrest Rotham', 3, 2, 2, '148 Sunfield Trail', '9/27/2022'],
    [3, 'rmclarnon2@wufoo.com', 'Ruperta McLarnon', 3, 3, 3, '338 Comanche Park', '7/27/2022'],
    [4, 'dcrennan3@soup.io', 'Dominga Crennan', 3, 4, 4, '87549 Spaight Drive', '12/29/2021']
  ]

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Student Management</h1>
          </Col>
          <Col>
            <Button variant="success" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard role={student} th={studentTh} tr={studentTr} />
        </Row>
      </Container>
      {show && <ModalCompo role={student} show={show} onClose={handleClose} />}
    </>
  );
};

export default Students;

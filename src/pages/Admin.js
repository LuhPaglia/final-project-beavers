import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const admin = "admin";

  const adminTh = [
    "admin_id",
    "user_name",
    "email",
    "profile_url",
    "birthday",
    "address",
  ];

  const courseTh = ["course_id", "course_name", "description"];

  const adminTr = [
    [
      1,
      "Lucas Paglia",
      "test@test.com",
      "no",
      "2022-12-09",
      "6151 telfor",
    ],
    [
      2,
      "adminTest",
      "adminTest@mail.com",
      "no",
      "2022-12-21",
      "82 Qwe Asdxc",
    ],
  ];

  const courseTr = [
    [1, "Fundamentals of Front End Web Development and HTML", null],
    [2, "Fundamentals of CSS, Preprocessors, Frameworks", null],
    [3, "JavaScript for Web Developers 1", null],
    [4, "JavaScript for Web Developers 2", null],
    [5, "Introduction to Back-End Web Development: PHP", null],
    [6, "Introduction to Content Management Systems with WordPress", null],
    [7, "courseTest", "courseTestcourseTest"],
  ];
  return (
    <>
      <Container>
        <Row className="gx-5">
          <Col>
            <Row>
              <Col>
                <h1>ADMIN</h1>
              </Col>
              <Col>
                <Button variant="success" onClick={handleShow}>
                  Add Admin
                </Button>
              </Col>
            </Row>
            <Row>
              <Dashboard role={admin} th={adminTh} tr={adminTr} />
            </Row>
          </Col>

          <Col>
            <Row>
              <Col>
                <h1>COURSES</h1>
              </Col>
              <Col>
                <Button variant="success" onClick={handleShow}>
                  Add Course
                </Button>
              </Col>
            </Row>
            <Row>
              <Dashboard role={admin} th={courseTh} tr={courseTr} />
            </Row>
          </Col>
        </Row>
      </Container>
      {show && <ModalCompo role={admin} show={show} onClose={handleClose} />}
    </>
  );
};

export default Admin;

import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Button } from "react-bootstrap";

const Admin = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  const handleCloseAdmin = () => setShowAdmin(false);
  const handleShowAdmin = () => setShowAdmin(true);

  const handleCloseCoourse = () => setShowCourse(false);
  const handleShowCoourse = () => setShowCourse(true);

  const admin = "admin";
  const course = "course";

  const adminTh = [
    "Admin ID",
    "Username",
    "Email",
    "Profile URL",
    "Birthday",
    "Address",
  ];

  const courseTh = ["Course ID", "Course Name", "Description"];

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
    [2, "Fundamentals of CSS, Preprocessors, Frameworks, & Version Control Systems", null],
    [3, "JavaScript for Web Developers 1", null],
    [4, "JavaScript for Web Developers 2", null],
    [5, "Introduction to Back-End Web Development: PHP", null],
    [6, "Introduction to Content Management Systems with WordPress", null],
    [7, "courseTest", "courseTestcourseTest"],
  ];

  const style = {
    display : 'flex',
    flexDirection:'column',
    rowGap: '5vh'
  }

  return (
    <div className='page'>
      <Container>
        <Row>
          <Col  style={style}>
          <Row>
            <Col>
            <Row>
              <Col>
                <h1>ADMIN</h1>
              </Col>
              <Col>
                <Button variant="success" onClick={handleShowAdmin}>
                  Add Admin
                </Button>
              </Col>
            </Row>

            <Row>
              <Dashboard role={admin} th={adminTh} tr={adminTr} />
          </Row>
          </Col>
        </Row>

          <Row>
            <Col>
            <Row>
              <Col>
                <h1>COURSES</h1>
              </Col>
              <Col>
                <Button variant="success" onClick={handleShowCoourse}>
                  Add Course
                </Button>
              </Col>
            </Row>

            <Row>
              <Dashboard role={course} th={courseTh} tr={courseTr} />
            </Row>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
      {showAdmin && <ModalCompo role={admin} show={showAdmin} onClose={handleCloseAdmin} />}
      {showCourse && <ModalCompo role={course} show={showCourse} onClose={handleCloseCoourse} />}
    </div>
  );
};

export default Admin;

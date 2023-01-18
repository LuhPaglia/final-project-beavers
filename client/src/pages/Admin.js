import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";
import {StyledAdmin} from "../styles";
import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button} from "react-bootstrap";

const Admin = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  const [dataAdmin,setDataAdmin] = useState();
  const [fieldsAdmin,setFieldsAdmin] = useState();
  const [dataCourse,setDataCourse] = useState();
  const [fieldsCourse,setFieldsCourse] = useState();


  const handleCloseAdmin = () => setShowAdmin(false);
  const handleShowAdmin = () => setShowAdmin(true);

  const handleCloseCoourse = () => setShowCourse(false);
  const handleShowCoourse = () => setShowCourse(true);

  const admin = "admin";
  const course = "course";

  const deleteAdmin = 'admin/adminDelete.php';
  const deleteCourse = 'admin/courseDelete.php';


  const adminTh = [
    "Admin ID",
    "Username",
    "Email",
    "Birthday",
    "Address",
    "Edit",
    "Delete"
  ];

  const courseTh = ["Course ID", "Course Name", "Description","Edit","Delete"];

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

  const loadAdmins = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('admin/adminSelect.php')
    .then(res=>{
      res.data.forEach(obj => {
        dataTr.push(Object.values(obj));
      });
      fieldName =Object.keys(res.data[0]);

      setDataAdmin(dataTr);
      setFieldsAdmin(fieldName);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const loadCourses = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('admin/courseSelect.php')
    .then(res=>{
      res.data.forEach(obj => {
        dataTr.push(Object.values(obj));
      });
      fieldName =Object.keys(res.data[0]);

      setDataCourse(dataTr);
      setFieldsCourse(fieldName);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    loadAdmins();
    loadCourses();
  },[]);

  return (
    <div className='page'>
      <StyledAdmin>
      <Container>
        <Row>
          <Col  style={style}>
          <Row>
            <Col>
            <Row className='adrow'>
              <Col>
                <h1>ADMIN</h1>
              </Col>
              <Col className='seccol'>
                <Button variant="success" onClick={handleShowAdmin}>
                  Add Admin
                </Button>
              </Col>
            </Row>  

            <Row>
            <Dashboard data={dataAdmin} fields={fieldsAdmin} role={admin} th={adminTh} load={loadAdmins} deletePage={deleteAdmin} />
          </Row>
          </Col>
        </Row>

          <Row>
            <Col>
            <Row  className='adrow'>
              <Col>
                <h1>COURSES</h1>
              </Col>
              <Col className='seccol'>
                <Button variant="success" onClick={handleShowCoourse}>
                  Add Course
                </Button>
              </Col>
            </Row>

            <Row>
              <Dashboard data={dataCourse} fields={fieldsCourse} role={course} th={courseTh} load={loadCourses} deletePage={deleteCourse} />
            </Row>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
      </StyledAdmin>
      {showAdmin && <ModalCompo role={admin} show={showAdmin} onClose={handleCloseAdmin} />}
      {showCourse && <ModalCompo role={course} show={showCourse} onClose={handleCloseCoourse} />}
    </div>
  );
};

export default Admin;

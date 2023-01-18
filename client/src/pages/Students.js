import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button } from "react-bootstrap";

const Students = () => {
  const [show, setShow] = useState(false);

  const [data,setData] = useState();
  const [fields,setFields] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const student = "student";

  const deletePage = 'student/studentDelete.php';

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
    "Delete"
  ];

  const load = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('student/studentSelect.php')
    .then(res=>{
      console.log(res.data, "load"); // LOG

      res.data.forEach(obj => {
        dataTr.push(Object.values(obj))
      });
      fieldName =Object.keys(res.data[0]);

      setData(dataTr);
      setFields(fieldName);
      console.log(fieldName); // LOG

    })
    .catch(err=>{
      console.log(err); // LOG
    })
  }

  useEffect(()=>{
    load();
    console.log("Student useEffect"); // LOG
  },[]);
  
  return (
    <div className='page'>
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
          <Dashboard data={data} fields={fields} role={student} th={studentTh} load={load} deletePage={deletePage} />
        </Row>
      </Container>
      {show && <ModalCompo role={student} show={show} onClose={handleClose} load={load}/>}
    </div>
  );
};

export default Students;

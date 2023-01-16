import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";
import {StyledTeacher} from "../styles";
import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

const Teacher = () => {
  const [show, setShow] = useState(false);

  const [data,setData] = useState();
  const [fields,setFields] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const teacher = "teacher";

  const deletePage = 'teacher/teacherDelete.php';

  const teacherTh = [
    "Teacher ID",
    "Username",
    "Email",
    "Course ID",
    "Salary",
    "Address",
    "Birthday",
    "Edit",
    "Delete"
  ];

  const load = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('teacher/teacherSelect.php')
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
    console.log("Teacher useEffect"); // LOG
  },[]);
  
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
          <Dashboard data={data} fields={fields} role={teacher} th={teacherTh} load={load} deletePage={deletePage} />
        </Row>
      </Container>
      {show && <ModalCompo role={teacher} show={show} onClose={handleClose} load={load} />}
    </>
  );
};

export default Teacher;
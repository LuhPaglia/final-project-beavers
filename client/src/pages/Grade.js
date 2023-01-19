import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button } from "react-bootstrap";

const Grade = () => {
  const [show, setShow] = useState(false);

  const [data,setData] = useState();
  const [fields,setFields] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const grade = "grade";

  const deletePage = 'grade/gradeDelete.php';
  
  const gradeTh = [
    "Grade ID",
    "Classwork Name",
    "Evaluation",
    "Student ID",
    "Teacher ID",
    "Course ID",
    "Mark",
    "Mark Max",
    "Mark Date",
    "Feedback",
    "Edit",
    "Delete",
  ];

  const load = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('grade/gradeSelect.php')
    .then(res=>{
      console.log(res.data, "load"); // LOG

      if (res.data.length==0) {
        setData(null);
      } else {
        res.data.forEach(obj => {
          dataTr.push(Object.values(obj))
        });
        fieldName =Object.keys(res.data[0]);

        setData(dataTr);
        setFields(fieldName);
        console.log(fieldName); // LOG
      }
    })
    .catch(err=>{
      console.log(err); // LOG
    })
  }

  useEffect(()=>{
    load();
    console.log("Grade useEffect"); // LOG
  },[]);

  return (
    <div className='page'>
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
          <Dashboard data={data} fields={fields} role={grade} th={gradeTh} load={load} deletePage={deletePage} />
        </Row>
      </Container>
      {show && <ModalCompo role={grade} show={show} onClose={handleClose} load={load}/>}
    </div>
  );
};

export default Grade;

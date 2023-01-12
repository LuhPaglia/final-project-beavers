import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";
import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button } from "react-bootstrap";

const Teacher = () => {
  const [show, setShow] = useState(false);

  const [data,setData] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const teacher = "teacher";

  const teacherTh = [
    "Teacher ID",
    "Username",
    "Email",
    "Course ID",
    "Salary",
    "Address",
    "Birthday",
    "Edit",
  ];


  const load = () => {
    let teacherTr = [];

    axiosSrv.get('teacherSelect.php')
    .then(res=>{
      console.log(res.data); // LOG

      res.data.forEach(obj => {
        teacherTr.push(Object.values(obj))
      });
      setData(teacherTr)
    })
    .catch(err=>{
      console.log(err); // LOG
    })
  }

  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Teacher Management</h1>
          </Col>
          <Col>

          {/* how to hook when add/edit object?? */}
          <button onClick={load}>load</button> 

            <Button variant="success" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard data={data} role={teacher} th={teacherTh} />
        </Row>
      </Container>
      {show && <ModalCompo role={teacher} show={show} onClose={handleClose} />}
    </>
  );
};

export default Teacher;


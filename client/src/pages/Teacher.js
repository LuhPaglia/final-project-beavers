import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";
import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Button } from "react-bootstrap";

const Teacher = () => {
  const [show, setShow] = useState(false);

  const [data,setData] = useState();
  const [fields,setFields] = useState();


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

  let firstLoad = true;

  const load = () => {
    let dataTr = [];
    let fieldName = [];

    axiosSrv.get('teacherSelect.php')
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
    if(firstLoad) {
      load();
      firstLoad = false;
      console.log("Teacher useEffect"); // LOG
    }
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
          <Dashboard data={data} setData={setData} fields={fields} role={teacher} th={teacherTh} />
        </Row>
      </Container>
      {show && <ModalCompo role={teacher} show={show} onClose={handleClose} load={load} />}
    </>
  );
};

export default Teacher;

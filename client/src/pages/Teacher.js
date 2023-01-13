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

  const teacherTr = [
    [1, 'hconeybeer0', 'vgreatbach0@yahoo.co.jp', 1, 3349, null, '1965-9-26'],
    [2, 'pklimczak1', 'bdrover1@ox.ac.uk', 2, 1530, '05 Caliangt Street', '1965-9-26'],
    [3, 'rseamer2', 'gmarrow2@issuu.com', 3, null, 2374, '1965-9-26'],
    [4, 'ifealty3', 'csurmon3@princeton.edu', 4, null, '6617 Victoria Trail', '1965-9-26']
  ]

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
          <Dashboard data={data} setData={setData} fields={fields} role={teacher} th={teacherTh} tr={teacherTr}/>
        </Row>
      </Container>
      {show && <ModalCompo role={teacher} show={show} onClose={handleClose} load={load} />}
    </>
  );
};

export default Teacher;

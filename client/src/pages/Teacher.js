import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Button } from "react-bootstrap";

const Teacher = () => {
  const [show, setShow] = useState(false);

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
  ];

  // const [select, setSelect] = useState(null);

  // async function fetchUserData(id) {
  //   const response = await fetch("/" + id);
  //   setSelect(await response.json());
  // }

  

  // const [select, setSelect] = useState

  function selectFromDatabase() {
    fetch('http://localhost/final-project-beavers/server/teacherSelect.php').then(response => {
        console.log(response);
        return response.json();
      }).then(result => {
        // Work with JSON data here
        console.log(result);

        // setSelect({
        //     employee_r:result
        // }); 

        // setSelect({
        //   result.map((row) => Object.values(row))
        // });

      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Teacher Management</h1>

            <Button variant="success" onClick={selectFromDatabase}>
              select
            </Button>

          </Col>
          <Col>
            <Button variant="success" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard role={teacher} th={teacherTh} tr={teacherTr} />
        </Row>
      </Container>
      {show && <ModalCompo role={teacher} show={show} onClose={handleClose} />}
    </>
  );
};

export default Teacher;


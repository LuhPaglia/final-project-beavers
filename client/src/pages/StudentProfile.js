import { useState, useEffect } from "react";
import cryptoJs from "crypto-js";
import axiosSrv from "../Services/axiosSrv";

import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";

import StudentCompo from "../components/StudentCompo";
import Classworks from "../components/Classworks";
import { StyledStudentProfile } from "../styles";

const Student = () => {
  const [studentID, setStudentID] = useState(0);
  const [select, setSelect] = useState([]);
  const [grade, setGrade] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("userLogged") != null) {
      setStudentID(dec(sessionStorage.getItem("userLogged"), "w3L0v3pHp"));
    }
  }, []);

  useEffect(() => {
    if (studentID != null) {
      const formData = new FormData();
      formData.append("student_id", studentID);

      axiosSrv
        .post("studentProfile/studentGrade.php", formData)
        .then((res) => {
          console.log(res.data, "get grade data"); //LOG
          setGrade(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axiosSrv
        .post("studentProfile/studentSelect.php", formData)
        .then((res) => {
          console.log(res.data);
          setSelect(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [studentID]);

  const dec = (encData, key) => {
    const decData = cryptoJs.AES.decrypt(encData, key);
    return decData.toString(cryptoJs.enc.Utf8);
  };

  return (
    <div className="page">
      <StyledStudentProfile>
        <Container>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <StudentCompo select={select} />
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Classworks grade={grade} stdName={select}/>

                {/* <Tab.Content eve>
                  <Tab.Pane>
                    <Classworks grade={grade} />
                  </Tab.Pane>
                </Tab.Content> */}
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </StyledStudentProfile>
    </div>
  );
};

export default Student;

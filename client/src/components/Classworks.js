import { useState, useEffect } from "react";

import { Container, Row, Col, Image, Accordion } from "react-bootstrap";
import { StyledClassworks } from "../styles";

// feednack: accrdion
// mock data를 배열로 만들어서, map으로 돌리기 => 나중에 백엔드에서 data오면 받기 쉽게 미리 준비
// gradeAdd -> gradeEdit
const Classworks = ({ grade, stdName }) => {
  const [total, setTotal] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    stdName.map((value) => {
      setUserName(value.user_name);
    });
    let coursework = 0;
    let courseworkMax = 0;

    let finalproject = 0;
    let finalprojectMax = 0;

    let midcourse = 0;
    let midcourseMax = 0;

    let participation = 0;
    let participationMax = 0;

    let finalexam = 0;
    let finalexamMax = 0;

    grade.forEach(({ evaluation, mark, mark_max })=>{
      if(evaluation === "CourseWork") {
        coursework += parseFloat(mark);
        courseworkMax += parseFloat(mark_max);
      }
      if(evaluation === "Final Project") {
        finalproject += parseFloat(mark);
        finalprojectMax += parseFloat(mark_max);
      }
      if(evaluation === "Mid-Course Exam"){
        midcourse += parseFloat(mark);
        midcourseMax += parseFloat(mark_max);
      }
      if(evaluation === "Participation"){
        participation += parseFloat(mark);
        participationMax += parseFloat(mark_max);
      }
      if(evaluation === "Final Exam"){
        finalexam += parseFloat(mark);
        finalexamMax += parseFloat(mark_max);
      }
    })
    let calTotal = (coursework/courseworkMax) * 0.2 + finalproject/finalprojectMax * 0.3 + midcourse/midcourseMax * 0.15 + finalexam/finalexamMax * 0.25 + participation/participationMax * 0.1;
    calTotal = calTotal * 100
    setTotal(calTotal);
  })
  return (
    <StyledClassworks>
      <Container>
        <Row
          style={{
            borderBottom: "1px solid rgb(25, 135, 84)",
            padding: "0 1rem 1.5rem 1rem",
          }}
        >
          <Col
            style={{ display: "flex", columnGap: "3vh", alignItems: "center" }}
          >
            <Image
              roundedCircle
              width={75}
              height={75}
              alt="75x75"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4xEFLmOjnZJNr7d1MiylWhT3E7m_Z-hBXYGIYdlVaWzcmQBcCY1cQFPtkMyHKMX9PNw&usqp=CAU"
            />
            <h2>{userName}</h2>
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <h2 className="totalGrade">{total.toFixed(2)}%</h2>
          </Col>
        </Row>
        <Row>
              <Accordion defaultActiveKey="0">
              {grade.map(
                  ({ classwork, mark_date, evaluation, mark, mark_max, feedback }, index) => (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <tr>
                          <td>{classwork}</td>
                          <td>{mark_date}</td>
                          <td>{evaluation}</td>
                          <td>{mark}/{mark_max}</td>
                        </tr>
                      </Accordion.Header>
                      <Accordion.Body>Comment: {feedback}</Accordion.Body>
                    </Accordion.Item>
                  )
                )}
              </Accordion>
        </Row>
      </Container>
    </StyledClassworks>
  );
};

export default Classworks;

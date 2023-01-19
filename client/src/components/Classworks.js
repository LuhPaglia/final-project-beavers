import { useState, useEffect } from "react";

import { Container, Row, Col, Image, Accordion } from "react-bootstrap";
import { StyledClassworks } from "../styles";

// feednack: accrdion
// mock data를 배열로 만들어서, map으로 돌리기 => 나중에 백엔드에서 data오면 받기 쉽게 미리 준비
// gradeAdd -> gradeEdit
const Classworks = ({ grade }) => {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
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
      if(evaluation == "CourseWork") {
        coursework += parseFloat(mark);
        courseworkMax += parseFloat(mark_max);
      }
      if(evaluation == "Final Project") {
        finalproject += parseFloat(mark);
        finalprojectMax += parseFloat(mark_max);
      }
      if(evaluation == "Mid-Course Exam"){
        midcourse += parseFloat(mark);
        midcourseMax += parseFloat(mark_max);
      }
      if(evaluation == "Participation"){
        participation += parseFloat(mark);
        participationMax += parseFloat(mark_max);
      }
      if(evaluation == "Final Exam"){
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
            <h2>Apple Ogata</h2>
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

const data = [
  {
    grade_id: 1,
    classwork: "Participation",
    evaluation: "Participation",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 100,
    mark_max: 100,
    mark_date: "기한 없음",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 2,
    classwork: "FINAL EXAM",
    evaluation: "Final Exam",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 94,
    mark_max: 100,
    mark_date: "2022. 12. 22. 오후 7:00",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 3,
    classwork: "Final Project Submission",
    evaluation: "Final Project",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 80,
    mark_max: 80,
    mark_date: "2022. 12. 25. 오후 11:59",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 4,
    classwork: "CourseWork#3",
    evaluation: "CourseWork",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 100,
    mark_max: 100,
    mark_date: "2022. 12. 19. 오후 11:59",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 5,
    classwork: "Midcourse Exam",
    evaluation: "Mid-Course Exam",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 87,
    mark_max: 100,
    mark_date: "기한 없음",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 6,
    classwork: "CourseWork#2",
    evaluation: "CourseWork",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 90,
    mark_max: 100,
    mark_date: "2022. 12. 12. 오후 4:00",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 7,
    classwork: "CourseWork#1",
    evaluation: "CourseWork",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 100,
    mark_max: 100,
    mark_date: "2022. 12. 5. 오후 4:00",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
  {
    grade_id: 8,
    classwork: "Final Project Proposal",
    evaluation: "Final Project",
    student_id: 2,
    teacher_id: 3,
    course_id: 4,
    mark: 19,
    mark_max: 20,
    mark_date: "2022. 12. 8. 오후 4:00",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 1,
  },
];

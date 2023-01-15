import { Container, Row, Col, Image, Table } from "react-bootstrap";

import { StyledClassworks } from "../styles";

const Classworks = () => {
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
            <h2 className="totalGrade">12.34%</h2>
          </Col>
        </Row>
        <Row>
          <Table hover>
            <tbody>
              <tr>
                <td>Participation</td>
                <td>기한 없음</td>
                <td>Participation</td>
                <td>100/100</td>
              </tr>
              <tr>
                <td>FINAL EXAM</td>
                <td>2022. 12. 22. 오후 7:00</td>
                <td>Final Exam</td>
                <td>94/100</td>
              </tr>
              <tr>
                <td>Final Project Submission</td>
                <td>2022. 12. 25. 오후 11:59</td>
                <td>Final Project</td>
                <td>80/80</td>
              </tr>
              <tr>
                <td>CourseWork#3</td>
                <td>2022. 12. 19. 오후 11:59</td>
                <td>CourseWork</td>
                <td>100/100</td>
              </tr>
              <tr>
                <td>Midcourse Exam</td>
                <td>기한 없음</td>
                <td>Mid-Course Exam</td>
                <td>87/100</td>
              </tr>
              <tr>
                <td>CourseWork#2</td>
                <td>2022. 12. 12. 오후 4:00</td>
                <td>CourseWork</td>
                <td>90/100</td>
              </tr>
              <tr>
                <td>CourseWork#1</td>
                <td>2022. 12. 5. 오후 4:00</td>
                <td>CourseWork</td>
                <td>100/100</td>
              </tr>
              <tr>
                <td>Final Project Proposal</td>
                <td>2022. 12. 8. 오후 4:00</td>
                <td>Final Project</td>
                <td>19/20</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </StyledClassworks>
  );
};

export default Classworks;

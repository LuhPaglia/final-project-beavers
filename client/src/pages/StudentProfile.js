import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";

import Classworks from "../components/Classworks";

import { StyledStudentProfile } from "../styles";

const Student = () => {
  return (
    <div className="page">
      <StyledStudentProfile>
        <Container>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Fundamentals of Front End Web Development and HTML
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Fundamentals of CSS, Preprocessors, Frameworks, & Version
                    Control Systems
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    JavaScript for Web Developers 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    JavaScript for Web Developers 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link5">
                    Introduction to Back-End Web Development: PHP
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link6">
                    Introduction to Content Management Systems with WordPress
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Classworks />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">Not enrolled yet</Tab.Pane>
                  <Tab.Pane eventKey="#link3">Not enrolled yet</Tab.Pane>
                  <Tab.Pane eventKey="#link4">Not enrolled yet</Tab.Pane>
                  <Tab.Pane eventKey="#link5">Not enrolled yet</Tab.Pane>
                  <Tab.Pane eventKey="#link6">Not enrolled yet</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </StyledStudentProfile>
    </div>
  );
};

export default Student;

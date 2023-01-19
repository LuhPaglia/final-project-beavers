import { useState, useEffect } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";

const StudentCompo = ({ select }) => {
  return (
    <>
      {select.map((value) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={value.profile_url} />
          <Card.Body>
            <Card.Title>{value.user_name}</Card.Title>
            <Card.Text>
              {value.address}
              <br />
              {value.birthday}
              <br />
              {value.course_id}
              <br />
              {value.email}
              <br />
              {value.student_id}
              <br />
              {value.teacher_id}
              <br />
              {value.user_name}
              <br />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default StudentCompo;

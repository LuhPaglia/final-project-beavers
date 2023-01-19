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
              <p><b>Student ID: </b>{value.student_id}</p>
              <p><b>Course ID: </b>{value.course_id}</p>
              <p><b>Teacher ID: </b>{value.teacher_id}</p>
              <p><b>E-mail: </b>{value.email}</p>
              <p><b>Birthday: </b>{value.birthday}</p>
              <p><b>Address: </b>{value.address}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default StudentCompo;

import { useEffect, useState } from "react";
import axiosSrv from "../Services/axiosSrv";

import { Button, Form, FloatingLabel, Modal } from "react-bootstrap";

const ModalCompo = ({ edit, role, show, onClose, load, prev=null}) => {

  const resultLoad = (pageName, data) => {
    axiosSrv.post(pageName,data)
    .then(res=>{
      console.log(res.data);
      if (res.data=="0"||res.data=="-1") {
        alert("Fail to update dashboard")
      }
      load(); // LOG - data insert
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Blocking default action which occurs page moving when the form is submitted.

    const formData = new FormData(e.target);

    if (!edit) {
      // ADD user
      switch (role) {
        case "admin":
          resultLoad("admin/adminUserAdd.php",formData);
        break;
        case "course":
          resultLoad("admin/courseAdd.php",formData);
        break;
        case "teacher":
          resultLoad("teacher/teacherAdd.php",formData);
        break;
        case "student":
          resultLoad("student/studentAdd.php",formData);
        break;
        case "grade":
          resultLoad("grade/gradeAdd.php",formData);
          break;

        default:
          return null;
      }
      onClose(); // after add, close modal automatically
    } else {

      // Edit user / pass teacher id info
      formData.append('id', prev[Object.keys(prev)[0]])

      switch (role) {
        case "admin":
          resultLoad("admin/adminUserEdit.php",formData);
        break;
        case "course":
          resultLoad("admin/courseEdit.php",formData);
        break;
        case "teacher":
          resultLoad("teacher/teacherEdit.php",formData);
        break;
        case "student":
          resultLoad("student/studentEdit.php",formData);
        break;
        case "grade":
          resultLoad("grade/gradeEdit.php",formData);
          break;

        default:
          return null;
      }
      onClose(); // after edit, close modal automatically
    }

  };

  const course = [
    [1, "Fundamentals of Front End Web Development and HTML", null],
    [
      2,
      "Fundamentals of CSS, Preprocessors, Frameworks, & Version Control Systems",
      null,
    ],
    [3, "JavaScript for Web Developers 1", null],
    [4, "JavaScript for Web Developers 2", null],
    [5, "Introduction to Back-End Web Development: PHP", null],
    [6, "Introduction to Content Management Systems with WordPress", null],
  ];

  const evaluation = [
    [1, "Participation"],
    [2, "CourseWork"],
    [3, "Mid-Course Exam"],
    [4, "Final Project"],
    [5, "Final Exam"],
  ];

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {edit ? "Edit " : "Add "}
            {role == "admin" && "Admin"}
            {role == "course" && "Course"}
            {role == "teacher" && "Teacher"}
            {role == "student" && "Student"}
            {role == "grade" && "Grade"}
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
        <Modal.Body>    
            {role != "course" && role != "grade" && (
              <FloatingLabel
                controlId="Email address"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  defaultValue ={prev?.email}
                />
              </FloatingLabel>
            )}

            {role != "course" && role != "grade" && (
              <FloatingLabel
                controlId="Username"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  name="user_name"
                  type="text"
                  placeholder="Username"
                  defaultValue ={prev?.user_name}
                />
              </FloatingLabel>
            )}

            {!edit && role != "course" && role != "grade" && (
              <FloatingLabel controlId="Password" label="Password">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="on"
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel
                controlId="Classwork Name"
                label="Classwork Name"
                className="mb-3"
              >
                <Form.Control
                  name="classwork"
                  type="text"
                  placeholder="Classwork Name"
                  defaultValue ={prev?.classwork}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Evaluation" label="Evaluation">
                <Form.Select
                  name="evaluation"
                  aria-label="Floating label select example"
                >
                  <option value="">Select Evaluation</option>
                  {evaluation.map((evaluation) => (
                    <option
                      key={evaluation[0]}
                      value={evaluation[1]}
                      defaultValue={prev?.evaluation}
                    >
                      {evaluation[1]}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            )}


            {role == "grade" && (
              <FloatingLabel
                controlId="Student ID"
                label="Student ID"
                className="mb-3"
              >
                <Form.Control
                  name="student_id"
                  type="number"
                  placeholder="Student ID"
                  defaultValue ={prev?.student_id}
                />
              </FloatingLabel>
            )}

          {!edit && role == "student" && (
            <FloatingLabel
            controlId="profile_pic"
            label="profile_pic"
            className="mb-3"
            >
            <Form.Control
              name="profile_pic"
              type="file"
              placeholder="Select profile"
            />
            </FloatingLabel>
            )}

            {(role == "teacher" || role == "student" || role == "grade") && (
              <FloatingLabel controlId="Select Course Name" label="Course Name">
                <Form.Select
                  name="course_id"
                  aria-label="Floating label select example"
                >
                  <option value="">Select Course Name</option>
                  {course.map((course) => (
                    <option key={course[0]} value={course[0]}
                    defaultValue ={prev?.course_id}>
                      {course[1]}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            )}

            {(role == "student" || role == "grade") && (
              <FloatingLabel
                controlId="Teacher ID"
                label="Teacher ID"
                className="mb-3"
              >
                <Form.Control
                  name="teacher_id"
                  type="number"
                  placeholder="Teacher ID"
                  defaultValue ={prev?.teacher_id}
                />
              </FloatingLabel>
            )}

            {role == "teacher" && (
              <FloatingLabel controlId="Salary" label="Salary" className="mb-3">
                <Form.Control
                  name="salary"
                  type="number"
                  placeholder="Salary"
                  defaultValue ={prev?.salary}
                />
              </FloatingLabel>
            )}

            {role != "course" && role != "grade" && (
              <FloatingLabel
                controlId="Address"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="Address"
                  defaultValue ={prev?.address}
                />
              </FloatingLabel>
            )}

            {role != "course" && role != "grade" && (
              <FloatingLabel
                controlId="Birthday"
                label="Birthday"
                className="mb-3"
              >
                <Form.Control
                  name="birthday"
                  type="date"
                  placeholder="Birthday"
                  defaultValue ={prev?.birthday}
                />
              </FloatingLabel>
            )}

            {role == "course" && (
              <FloatingLabel
                controlId="Course Name"
                label="Course Name"
                className="mb-3"
              >
                <Form.Control
                  name="course_name"
                  type="text"
                  placeholder="Course Name"
                  defaultValue ={prev?.course_name}
                />
              </FloatingLabel>
            )}

            {role == "course" && (
              <FloatingLabel controlId="Description" label="Description">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  style={{ height: "100px" }}
                  defaultValue ={prev?.description}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Mark" label="Mark" className="mb-3">
                <Form.Control
                  name="mark"
                  type="number"
                  placeholder="Mark"
                  defaultValue ={prev?.mark}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Mark Max" label="Mark Max" className="mb-3">
                <Form.Control
                  name="mark_max"
                  type="number"
                  placeholder="mark_max"
                  defaultValue={prev?.mark_max}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Mark Date" label="Mark Date" className="mb-3">
                <Form.Control
                  name="mark_date"
                  type="date"
                  placeholder="mark_date"
                  defaultValue={prev?.mark_date}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Feedback" label="Feedback">
                <Form.Control
                  as="textarea"
                  name="feedback"
                  placeholder="Feedback"
                  style={{ height: "100px" }}
                  defaultValue ={prev?.feedback}
                />
              </FloatingLabel>
            )}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCompo;
import { useEffect, useState } from "react";
import axiosSrv from "../Services/axiosSrv";

import { Button, Form, FloatingLabel, Modal } from "react-bootstrap";

const ModalCompo = ({ edit, role, show, onClose, load, prev=null}) => {

  const insertLoad = (pageName, data) => {
    axiosSrv.post(pageName,data)
    .then(res=>{
      console.log(res.data);
      load(); // LOG - data insert
    })
    .catch((error) => {
      console.log(error.response);
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Blocking default action which occurs page moving when the form is submitted.

    const formData = new FormData(e.target);

    // Validate username
    if (formData.get('user_name').length < 4)
      return alert("Username must be at least 4 characters long.");

    if (!edit) {
      // ADD user
      switch (role) {
        case "admin":
          insertLoad("adminUserAdd.php",formData);
        break;
        case "course":
          insertLoad("courseAdd.php",formData);
        break;
        case "teacher":
          insertLoad("teacherAdd.php",formData);
        break;
        case "student":
          insertLoad("studentAdd.php",formData);
        break;
        case "grade":
          insertLoad("gradeAdd.php",formData);
          break;

        default:
          return null;
      }
      onClose(); // after add, close modal automatically
    } else {

      // Edit user

      switch (role) {
        case "admin":
          insertLoad("teacherEdit.php",formData);
        break;
        case "course":
          insertLoad("teacherEdit.php",formData);
        break;
        case "teacher":
          insertLoad("teacherEdit.php",formData);
        break;
        case "student":
          insertLoad("teacherEdit.php",formData);
        break;
        case "grade":
          insertLoad("teacherEdit.php",formData);
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

        <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
                  // defaultValue ={(prev!=null)?prev.email:null}
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
                  defaultValue ={(prev!=null)?prev.user_name:null}
                />
              </FloatingLabel>
            )}

            {role != "course" && role != "grade" && (
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
                  defaultValue ={(prev!=null)?prev.classwork:null}
                />
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
                  defaultValue ={(prev!=null)?prev.student_id:null}
                />
              </FloatingLabel>
            )}

          {role == "student" && (
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
                    defaultValue ={(prev!=null)?prev.course_id:null}>
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
                  defaultValue ={(prev!=null)?prev.student_id:null}
                />
              </FloatingLabel>
            )}

            {role == "teacher" && (
              <FloatingLabel controlId="Salary" label="Salary" className="mb-3">
                <Form.Control
                  name="salary"
                  type="number"
                  placeholder="Salary"
                  defaultValue ={(prev!=null)?prev.salary:null}
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
                  defaultValue ={(prev!=null)?prev.address:null}

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
                  defaultValue ={(prev!=null)?prev.birthday:null}

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
                  defaultValue ={(prev!=null)?prev.course_name:null}

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
                  defaultValue ={(prev!=null)?prev.description:null}

                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Mark" label="Mark" className="mb-3">
                <Form.Control
                  name="mark"
                  type="number"
                  placeholder="Mark"
                  defaultValue ={(prev!=null)?prev.mark:null}

                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Date" label="Date" className="mb-3">
                <Form.Control
                  name="date"
                  type="date"
                  placeholder="Date"
                  defaultValue ={(prev!=null)?prev.date:null}

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
                  defaultValue ={(prev!=null)?prev.feedback:null}

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

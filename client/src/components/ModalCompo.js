import { useEffect, useState } from "react";
import axios from "axios";

import { Button, Form, FloatingLabel, Modal } from "react-bootstrap";

const ModalCompo = ({ edit, role, show, onClose }) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    classworkName: "",
    studentID: false,
    courseID: false,
    selectedCourse: "",
    teacherID: false,
    salary: false,
    address: "",
    birthday: "",
    courseName: "",
    description: "",
    mark: false,
    date: "",
    feedback: "",
  });

  const {
    email,
    username,
    password,
    classworkName,
    studentID,
    courseID,
    selectedCourse,
    teacherID,
    salary,
    address,
    birthday,
    courseName,
    description,
    mark,
    date,
    feedback,
  } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(form); // new form data
  }, [form]);

  const handleSubmit = (e) => {
    console.log("HERE");
    e.preventDefault(); // Blocking default action which occurs page moving when the form is submitted.

    // Validate username
    if (username.length < 4)
      return alert("Username must be at least 4 characters long.");

    if (!edit) {
      // ADD user
      switch (role) {
        case "admin":
          axios
            .post(
              "http://localhost:8888/course-05/php-beavers/adminUserAdd.php",
              form
            )
            .then((res) => {
              console.log(res.data); // new admin data
            })
            .catch((error) => {
              console.log(error.response);
            });
          break;

        case "course":
          axios
            .post(
              "http://localhost:8888/course-05/php-beavers/courseAdd.php",
              form
            )
            .then((res) => {
              console.log(res.data); // new course data
            })
            .catch((error) => {
              console.log(error.response);
            });
          break;

        case "teacher":
          axios
            .post(
              "http://localhost/final-project-beavers/server/teacherAdd.php",
              form
            )
            .then((res) => {
              console.log(res.data); // new teacher data
            })
            .catch((error) => {
              console.log(error.response);
            });
          break;

        case "student":
          axios
            .post(
              "http://localhost:8888/course-05/php-beavers/studentAdd.php",
              form
            )
            .then((res) => {
              console.log(res.data); // new student data
            })
            .catch((error) => {
              console.log(error.response);
            });
          break;

        case "grade":
          axios
            .post(
              "http://localhost:8888/course-05/php-beavers/gradeAdd.php",
              form
            )
            .then((res) => {
              console.log(res.data); // new grade data
            })
            .catch((error) => {
              console.log(error.response);
            });
          break;

        default:
          return form;
      }
    } else {
      // Edit user
    }
    setForm({
      // initialization
      email: "",
      username: "",
      password: "",
      classworkName: "",
      studentID: false,
      courseID: false,
      selectedCourse: "",
      teacherID: false,
      salary: false,
      address: "",
      birthday: "",
      courseName: "",
      description: "",
      mark: false,
      date: "",
      feedback: "",
    });
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
    [7, "courseTest", "courseTestcourseTest"],
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
                  value={email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@example.com"
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
                  name="username"
                  value={username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Username"
                />
              </FloatingLabel>
            )}

            {role != "course" && role != "grade" && (
              <FloatingLabel controlId="Password" label="Password">
                <Form.Control
                  name="password"
                  value={password}
                  onChange={handleChange}
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
                  name="classworkName"
                  value={classworkName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Classwork Name"
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
                  name="studentID"
                  value={studentID}
                  onChange={handleChange}
                  type="number"
                  placeholder="Student ID"
                />
              </FloatingLabel>
            )}

            {(role == "teacher" || role == "student" || role == "grade") && (
              <FloatingLabel
                controlId="Course ID"
                label="Course ID"
                className="mb-3"
              >
                <Form.Control
                  name="courseID"
                  value={courseID}
                  onChange={handleChange}
                  type="number"
                  placeholder="Course ID"
                />
              </FloatingLabel>
            )}

            {role == "student" && (
              <FloatingLabel controlId="Select Course Name" label="Course Name">
                <Form.Select
                  name="selectedCourse"
                  value={selectedCourse}
                  onChange={handleChange}
                  aria-label="Floating label select example"
                >
                  <option value="">Select Course Name</option>
                  {course.map((course) => (
                    <option key={course[0]} value={course[1]}>
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
                  name="teacherID"
                  value={teacherID}
                  onChange={handleChange}
                  type="number"
                  placeholder="Teacher ID"
                />
              </FloatingLabel>
            )}

            {role == "teacher" && (
              <FloatingLabel controlId="Salary" label="Salary" className="mb-3">
                <Form.Control
                  name="salary"
                  value={salary}
                  onChange={handleChange}
                  type="number"
                  placeholder="Salary"
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
                  value={address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Address"
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
                  value={birthday}
                  onChange={handleChange}
                  type="date"
                  placeholder="Birthday"
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
                  name="courseName"
                  value={courseName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Course Name"
                />
              </FloatingLabel>
            )}

            {role == "course" && (
              <FloatingLabel controlId="Description" label="Description">
                <Form.Control
                  as="textarea"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Description"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Mark" label="Mark" className="mb-3">
                <Form.Control
                  name="mark"
                  value={mark}
                  onChange={handleChange}
                  type="number"
                  placeholder="Mark"
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Date" label="Date" className="mb-3">
                <Form.Control
                  name="date"
                  value={date}
                  onChange={handleChange}
                  type="date"
                  placeholder="Date"
                />
              </FloatingLabel>
            )}

            {role == "grade" && (
              <FloatingLabel controlId="Feedback" label="Feedback">
                <Form.Control
                  as="textarea"
                  name="feedback"
                  value={feedback}
                  onChange={handleChange}
                  placeholder="Feedback"
                  style={{ height: "100px" }}
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
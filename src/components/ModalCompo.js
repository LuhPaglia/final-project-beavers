import { Button, Form, Modal } from "react-bootstrap";

const ModalCompo = ({ role, show, onClose }) => {
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {role != "course" && role != "grade" && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            )}

            {role != "course" && role != "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" />
              </Form.Group>
            )}

            {role != "course" && role != "grade" && (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            )}

            {role == "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Classwork Name</Form.Label>
                <Form.Control placeholder="Classwork Name" />
              </Form.Group>
            )}

            {role == "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Student ID</Form.Label>
                <Form.Control placeholder="Student ID" />
              </Form.Group>
            )}

            {(role == "teacher" || role == "student" || role == "grade") && (
              <Form.Group className="mb-3">
                <Form.Label>Course ID</Form.Label>
                <Form.Control placeholder="Course ID" />
              </Form.Group>
            )}

            {role == "student" && (
              <Form.Group className="mb-3">
                <Form.Label>Course Name</Form.Label>
                <Form.Select>
                  {course.map((course) => (
                    <option>{course[1]}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}

            {(role == "student" || role == "grade") && (
              <Form.Group className="mb-3">
                <Form.Label>Teacher ID</Form.Label>
                <Form.Control placeholder="Teacher ID" />
              </Form.Group>
            )}

            {role == "teacher" && (
              <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control placeholder="Salary" />
              </Form.Group>
            )}

            {role != "course" && role != "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Address" />
              </Form.Group>
            )}

            {role != "course" && role != "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Birthday</Form.Label>
                <Form.Control placeholder="Birthday" />
              </Form.Group>
            )}

            {role == "course" && (
              <Form.Group className="mb-3">
                <Form.Label>Course Name</Form.Label>
                <Form.Control placeholder="Course Name" />
              </Form.Group>
            )}

            {role == "course" && (
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Description" />
              </Form.Group>
            )}

            {role == "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Mark</Form.Label>
                <Form.Control placeholder="Mark" />
              </Form.Group>
            )}

            {role == "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date" />
              </Form.Group>
            )}

            {role == "grade" && (
              <Form.Group className="mb-3">
                <Form.Label>Feedback</Form.Label>
                <Form.Control placeholder="Feedback" />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="success" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCompo;

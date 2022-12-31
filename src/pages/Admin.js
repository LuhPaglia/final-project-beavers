import { useState } from "react";
import Dashboard from "../components/Dashboard";
import ModalCompo from "../components/ModalCompo";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const adminTh = [
    "admin_id",
    "user_name",
    "email",
    "profile_url",
    "birthday",
    "address",
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Admin Management</h1>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Dashboard th={adminTh} />
        </Row>
      </Container>
      {show && <ModalCompo show={show} onClose={handleClose} />}
    </>
  );
};

export default Admin;




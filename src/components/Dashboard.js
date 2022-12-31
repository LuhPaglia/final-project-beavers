import { useState } from "react";
import ModalCompo from "../components/ModalCompo";

import { Table, Button } from "react-bootstrap";

const Dashboard = ({ role, th, tr }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {th.map((thName) => (
              <th>{thName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tr.map((td) => (
            <tr>
              {td.map((element, index) =>
                role == "teacher" && index == 4 && element != null ? (
                  <td>${element}</td>
                ) : (
                  <td>{element}</td>
                )
              )}
              {role != "admin" && role != "course" && (
                <td>
                  <Button variant="success" onClick={handleShow}>
                    Edit
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      {show && <ModalCompo role={role} show={show} onClose={handleClose} />}
    </>
  );
};

export default Dashboard;

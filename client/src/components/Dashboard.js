import { useState } from "react";
import ModalCompo from "../components/ModalCompo";

import { Table, Button } from "react-bootstrap";

const Dashboard = ({ role, th, tr }) => {
  const [show, setShow] = useState(false);

  const edit = true;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {th.map((thName) => (
              <th key={thName}>{thName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tr.map((td) => (
            <tr>
              {td.map((element, index) =>
                role == "teacher" && index == 4 && element != null ? (
                  <td key={index}>${element}</td>
                ) : (
                  <td key={index}>{element}</td>
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
      {show && <ModalCompo edit={edit} role={role} show={show} onClose={handleClose} />}
    </>
  );
};

export default Dashboard;

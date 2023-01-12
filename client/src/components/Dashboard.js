import { useState } from "react";
import ModalCompo from "../components/ModalCompo";

import { Table, Button } from "react-bootstrap";

const Dashboard = ({ role, th, data }) => {
  const [show, setShow] = useState(false);

  const edit = true;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  // const load = () => {

  //   let trVal = [];
  //   data.forEach(obj => {
  //     trVal.push(Object.values(obj))
  //   });
  //   console.log(trVal);
  //   setData(trVal);
  // }


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
          {(data!=null) ?

          data.map((td,idx) => (
            <tr key={idx}>
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
          ))

          : null
          }
        </tbody>
      </Table>
      {show && <ModalCompo edit={edit} role={role} show={show} onClose={handleClose} />}
    </>
  );
};

export default Dashboard;

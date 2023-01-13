import { useState, useEffect } from "react";
import ModalCompo from "../components/ModalCompo";

import { Table, Button } from "react-bootstrap";

const Dashboard = ({ role, th, data, setData, fields }) => {
  const [show, setShow] = useState(false);

  const edit = true;

  const [prev, setPrev] = useState();


  const handleClose = () => setShow(false);
  const handleShow = (e) => {

    let selectedId = e.target.value;
    let prevVal = {};

    fields.forEach((th, idx) => {
      prevVal[th] = data[selectedId][idx];
    });

    console.log(prevVal);  // LOG
    setPrev(prevVal);
    setShow(true)

  };

  // const load = () => {
  //   let trVal = [];
  //   data.forEach(obj => {
  //     trVal.push(Object.values(obj))
  //   });
  //   console.log(trVal);
  //   setData(trVal);
  // }

  useEffect(()=>{
    console.log("Dashboard render"); // LOG
  })

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
                  // each btn value == teacher_id
                  <td>
                    <Button variant="success" onClick={handleShow} value={idx}>
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
      {show && <ModalCompo edit={edit} role={role} show={show} onClose={handleClose} prev={prev}/>}
    </>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import ModalCompo from "../components/ModalCompo";
import axiosSrv from "../Services/axiosSrv";

import { Table, Button } from "react-bootstrap";

const Dashboard = ({ role, th, data, fields, load, deletePage }) => {
  
  const edit = true;

  const [show, setShow] = useState(false);
  const [prev, setPrev] = useState();
  const [del, setDel] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (e) => {

    let selectedId = e.target.value;

    // selected previous value as json object
    let prevVal = {};
    fields.forEach((th, idx) => {
      prevVal[th] = data[selectedId][idx];
    });

    console.log(prevVal);  // LOG
    setPrev(prevVal);
    setShow(true)

  };

  const deleteRow = (e) => {
    let selectedId = e.target.value;

    // selected delete item ID
    let id = data[selectedId][0];
    console.log(id);  // LOG
    setDel(id);
  };

  useEffect(()=>{
    console.log("Dashboard render"); // LOG
  })

  useEffect(()=>{
    if (del!=null) {
      const formData = new FormData()
      formData.append('id', del)
  
      axiosSrv.post(deletePage,formData)
      .then((res)=>{
        console.log(res.data);
        load();
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  },[del])

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
                  // each btn value == tr row index
                  <>
                    <td>
                      <Button variant="success" onClick={handleShow} value={idx}>
                        Edit
                      </Button>
                    </td>
                    <td>
                    <Button variant="success" onClick={(e)=>{alert("Are you sure to delete a user?"); deleteRow(e);}} value={idx}>
                      Delete
                    </Button>
                    </td>
                  </>
                )}
              </tr>
          ))
          : null
          }
        </tbody>
      </Table>
      {show && <ModalCompo edit={edit} role={role} show={show} onClose={handleClose} prev={prev} load={load} />}
    </>
  );
};

export default Dashboard;
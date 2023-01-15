import { Button, Modal } from "react-bootstrap";

const AlertCompo = ({ warn, onClose, handleDelete }) => {
  
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={warn} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure to delete a user?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="success" onClick={handleDelete}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AlertCompo;
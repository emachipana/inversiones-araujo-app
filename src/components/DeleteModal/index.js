import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function DeleteModal({ description, name, handleClose, handleDelete }) {
  return (
    <Modal 
      isOpen
      toggle={handleClose}
    >
      <ModalHeader 
        toggle={handleClose}
      >
        <span
          style={{fontSize: "1.5rem"}}
        >
          Eliminar { `"${name}"` }
        </span>
      </ModalHeader>
      <ModalBody
        style={{fontSize: "17px"}}
      >
        { description }
      </ModalBody>
      <ModalFooter>
        <Button
          style={{fontWeight: "700"}}
          onClick={handleDelete}
          color="danger"
        >
          Eliminar
        </Button>
        {" "}
        <Button
          style={{fontWeight: "700"}}
          onClick={handleClose}
          color="warning"
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteModal;

import React from "react";
import { Modal, Button } from "react-bootstrap";
import api from "./../config";
const DeleteCategory = ({ setres, id, isShow, handleClose }) => {
  const handleSubmit = async () => {
    try {
      const response = await api.delete("/api/category/" + id);      
      setres(response.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={isShow}>
      <Modal.Header>
        <Modal.Title>Eliminar Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Deseas eliminar esta categoria?. Si eliminas una categoria podria tener implicancias en las Tareas creadas.</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          cancelar
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCategory;

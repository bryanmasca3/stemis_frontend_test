import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import api from "./../config";
const EditCategory = ({ title, setTitle, setres, id, isShow, handleClose }) => {
  // const [data, setData] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await api.put("/api/category/" + id, { title });
      setres(response.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={isShow}>
      <Modal.Header>
        <Modal.Title>Editar Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row">
          <div class="col col-lg-12">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titulo"
              />
            </div>
          </div>
        </div>
      </Modal.Body>
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

export default EditCategory;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import api from "./../config";

const EditTask = ({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  state,
  setState,
  setres,
  id,
  isShow,
  categories,
  handleClose,
}) => {
  const handleSubmit = async () => {
    try {
      const response = await api.put("/api/task/" + id, {
        title,
        description,
        category,
        state,
      });
      setres(response.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={isShow}>
      <Modal.Header>
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row">
          <div class="col col-lg-12">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titulo"
              />
            </div>
          </div>
          <div class="col col-lg-12">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripcion"
              />
            </div>
          </div>
          <div class="col col-lg-12">
            <div class="mb-3">
              <select
                class="form-select"
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option key={"-1"} value={"-1"}>
                  {"Selecciona una categoria ..."}
                </option>
                {categories.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
              {/*  <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoria"
              /> */}
            </div>
          </div>
          <div class="col col-lg-12">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Estado"
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

export default EditTask;

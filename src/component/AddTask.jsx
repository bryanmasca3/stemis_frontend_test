import React, { useState } from "react";
import api from "./../config";

const AddTask = ({ setres, category }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cat, setCat] = useState("");
  const [state, setState] = useState("");
  const handleSubmit = async () => {
    try {
      const data = {
        title,
        description,
        category: cat,
        state,
      };     
      const response = await api.post("/api/task", data);
      console.log(response.data);
      setres(response.data);
      if (response.data) {
        setTitle("");
        setDescription("");
        setCat("-1");
        setState("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="row">
        <p class="h6 mb-3">Agregar Tarea</p>
      </div>
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
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option key={"-1"} value={"-1"}>
                {"Selecciona una categoria ..."}
              </option>
              {category.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
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
      <div class="row">
        <div class="col  offset-lg-6 col-lg-6 d-flex justify-content-end">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

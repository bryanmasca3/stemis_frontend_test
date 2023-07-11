import React, { useState } from "react";
import api from "./../config";
const AddCategory = ({ setres }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/api/category", { title });
      console.log(response.data);
      setres(response.data);
      if (response.data) {
        setTitle("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="row">
        <p class="h6 mb-3">Agregar Categoria</p>
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

export default AddCategory;

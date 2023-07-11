import React, { useState } from "react";
import EditTask from "./EditTask";
import { Button } from "react-bootstrap";
import DeleteTask from "./DeleteTask";
import api from "./../config";
const ViewTask = ({ data, setres, categories }) => {
  const [isShowEdit, setisShowEdit] = useState(false);
  const [isShowDelete, setisShowDelete] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const handleCloseEdit = () => {
    setisShowEdit(false);
  };
  const handleShowEdit = async (idx) => {
    try {
      const response = await api.get("/api/task/" + idx);
      setId(idx);

      setTitle(response.data[0]?.title);
      setDescription(response.data[0]?.description);
      setCategory(response.data[0]?.category);
      setState(response.data[0]?.state);

      setisShowEdit(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseDelete = () => {
    setisShowDelete(false);
  };
  const handleShowDelete = (idx) => {
    setId(idx);
    setisShowDelete(true);
  };
  return (
    data && (
      <div>
        <div class="row">
          <p class="h6 mb-3">Lista de Tareas</p>
        </div>
        <div class="row">
          <div class="col col-lg-12">
            <div class="mb-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    {/*  <th scope="col">Id</th> */}
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Estado </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, index) => (
                    <tr>
                      <th scope="row">{index + 1} </th>
                      {/* <td> {el.id} </td> */}
                      <td> {el.title} </td>
                      <td> {el.description} </td>
                      <td> {el.category} </td>
                      <td> {el.state} </td>
                      <td>
                        <div class="d-flex justify-content-end gap-2">
                          <Button
                            variant="success"
                            onClick={() => handleShowEdit(el.id)}
                          >
                            <i class="bx bxs-pencil"></i>
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleShowDelete(el.id)}
                          >
                            <i class="bx bxs-trash-alt"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {
                <EditTask
                  id={id}
                  isShow={isShowEdit}
                  setTitle={setTitle}
                  title={title}
                  description={description}
                  setDescription={setDescription}
                  category={category}
                  categories={categories}
                  setCategory={setCategory}
                  state={state}
                  setState={setState}
                  setres={setres}
                  handleClose={handleCloseEdit}
                />
              }
              {
                <DeleteTask
                  id={id}
                  isShow={isShowDelete}
                  setres={setres}
                  handleClose={handleCloseDelete}
                />
              }
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ViewTask;

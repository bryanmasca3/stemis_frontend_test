import React, { useState } from "react";
import EditCategory from "./EditCategory";
import { Button } from "react-bootstrap";
import DeleteCategory from "./DeleteCategory";
import api from "./../config";
const ViewCategory = ({ data, setres }) => {
  const [isShowEdit, setisShowEdit] = useState(false);
  const [isShowDelete, setisShowDelete] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const handleCloseEdit = () => {
    setisShowEdit(false);
  };
  const handleShowEdit = async (idx) => {
    try {
      const response = await api.get("/api/category/" + idx);
      setId(idx);
      setTitle(response.data[0]?.title);
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
          <p class="h6 mb-3">Lista de Categorias</p>
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, index) => (
                    <tr>
                      <th scope="row">{index + 1} </th>
                      {/* <td> {el.id} </td> */}
                      <td> {el.title} </td>
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
                <EditCategory
                  id={id}
                  isShow={isShowEdit}
                  setTitle={setTitle}
                  title={title}
                  setres={setres}
                  handleClose={handleCloseEdit}
                />
              }
              {
                <DeleteCategory
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

export default ViewCategory;

import React, { useState, useEffect } from "react";
import AddCategory from "../component/AddCategory";
import ViewCategory from "../component/ViewCategory";

import api from "./../config";
const Category = () => {
  const [data, setData] = useState([]);
  const [res, setres] = useState("");
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await api.get("/api/category");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
  }, [res]);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-4">
            <AddCategory setres={setres}></AddCategory>
          </div>
          <div class="offset-lg-2 col col-lg-6">
            <ViewCategory data={data} setres={setres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

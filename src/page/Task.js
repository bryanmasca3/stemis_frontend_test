import React, { useState,useEffect } from "react";
import AddTask from "../component/AddTask";
import ViewTask from "../component/ViewTask";
import api from "./../config";
const Task = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [res, setres] = useState("");
  useEffect(() => {
   
    const getCategory = async () => {
      try {
        const response = await api.get("/api/category");
        console.log(response.data);
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getTask = async () => {
      try {
        const response = await api.get("/api/task");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
    getTask();
  }, [res]);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-4">
            <AddTask setres={setres} category={category}></AddTask>
          </div>
          <div class="offset-lg-1 col col-lg-7">
            <ViewTask data={data} setres={setres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

import "./App.css";
import Category from "./page/Category";
import Task from "./page/Task";
import Layout from "./page/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/category" replace />} />
            <Route path="/task" element={<Task />} />
            <Route path="/category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

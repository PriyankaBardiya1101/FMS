import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddData from "./pages/AddData";
import UpdateData from "./pages/UpdateData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/update/:id" element={<UpdateData />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/pages/AddData.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddData.css";

function AddData() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    amount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/insertData", formData);
      navigate("/dashboard"); // save hone ke baad dashboard pe redirect
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="nav-title">Add Finance Data</h2>
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          ⬅ Back to Dashboard
        </button>
      </nav>

      {/* Form */}
      <div className="form-container">
        <h2>Add New Data</h2>
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
          />

          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddData;

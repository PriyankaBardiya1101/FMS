import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateData.css";   // 👈 CSS import

function UpdateData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    amount: ""
  });

  // Fetch existing data by id
  useEffect(() => {
    axios
      .get("http://localhost:8080/fetchData")
      .then((res) => {
        const record = res.data.find((item) => item.id === parseInt(id));
        if (record) {
          setFormData(record);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/updtData/${id}`, formData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="update-container">
      {/* Navbar */}
      <div className="update-navbar">
        <h1>Update Finance Data</h1>
        <button onClick={() => navigate("/dashboard")}>Back</button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateData;

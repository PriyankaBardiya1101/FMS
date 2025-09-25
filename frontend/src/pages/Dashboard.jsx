// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Backend se data fetch
  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/fetchData");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:8080/deleteData/${id}`);
        fetchDatas(); // refresh after delete
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  // Update handler
  const handleUpdate = (id) => {
    navigate(`/update/${id}`); // update ke liye ek page banayenge
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2 className="nav-title">Finance Dashboard</h2>
        <div>
          <button className="add-btn" onClick={() => navigate("/add")}>
            ➕ Add
          </button>
          <button className="logout-btn" onClick={() => navigate("/")}>
            🚪 Logout
          </button>
        </div>
      </nav>

      <div className="table-container">
        <h2>Finance Records</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th> {/* 👈 yaha action column */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>
  <button
  onClick={() => navigate(`/update/${item.id}`)}
  className="btn btn-success btn-sm"
>
  Update
</button>
  <button
    onClick={() => handleDelete(item.id)}
    className="btn btn-danger btn-sm ms-2"
  >
    Delete
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

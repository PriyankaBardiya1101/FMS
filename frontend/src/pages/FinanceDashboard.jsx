import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FinanceDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login"); // agar login nahi hai to login pe bhejo
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Finance Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Yaha pe aap apna finance data dekh aur manage kar sakte ho.
      </p>
    </div>
  );
}

import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Register } from "./components/Index";
import DashboardRoutes from "./views/DashboardRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

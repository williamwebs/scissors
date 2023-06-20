import { Route, Routes } from "react-router-dom";
import {
  Analytics,
  CreateLink,
  Dashboard,
  Home,
  Login,
  MyURLs,
  QRCode,
  Register,
} from "./components/Index";
import DashboardRoutes from "./views/DashboardRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
}

export default App;

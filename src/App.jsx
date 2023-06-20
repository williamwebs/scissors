import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./components/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

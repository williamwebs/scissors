import React from "react";
import {
  Analytics,
  CreateLink,
  Dashboard,
  MyURLs,
  QRCode,
} from "../components/Index";
import { Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<CreateLink />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="my-urls" element={<MyURLs />} />
        <Route path="qr-code" element={<QRCode />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardRoutes;

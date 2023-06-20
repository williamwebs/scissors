import React from "react";
import { SideNav } from "../components/Index";
import "./styles/dashboard.scss";

const Dashboard = ({ children }) => {
  return (
    <main id="dashboard">
      <SideNav />
      <section className="body">{children}</section>
    </main>
  );
};

export default Dashboard;

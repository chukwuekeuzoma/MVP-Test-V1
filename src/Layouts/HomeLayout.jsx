import React from "react";
import { Footer, Sidebar, Header } from "../Components";
import { Dashboard } from "../Pages";

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;

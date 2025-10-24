import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar  />
      <main className="container mx-auto px-4 py-6 flex-1">
        <Outlet></Outlet>
      </main>
      <Footer />
      </div>
    </>
  );
}


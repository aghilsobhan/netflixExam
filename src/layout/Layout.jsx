import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import React from "react";
function Layout({ children }) {
  return (
    <>
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;

import React from "react";
import Navbar from "./Navbar";
import "./UserAndEmp.css";

function UserAndEmp() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="content-left">
          <h1>User</h1>
          <button className="content-button">
            <a href="#">Select</a>
          </button>
        </div>
        <div className="content-right">
          <h1>Employee</h1>
          <button className="content-button">
            <a href="#">Select</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default UserAndEmp;

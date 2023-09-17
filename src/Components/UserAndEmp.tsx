import React from "react";
import "./UserAndEmp.css";

function UserAndEmp() {
  return (
    <div className="content">
      <div className="content-left">
        <h1>User</h1>
        <button className="content-button">User Button</button>
      </div>
      <div className="content-right">
        <h1>Employee</h1>
        <button className="content-button">Employee Button</button>
      </div>
    </div>
  );
}

export default UserAndEmp;

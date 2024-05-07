import { AccountCircleOutlined } from "@mui/icons-material";
import React from "react";

function NavBar() {
  return (
    <div className="navbar flex justify-end ">
      <div className="flex">
        <div className="logo-profile">
          <AccountCircleOutlined />
        </div>
        <div>
          <p>User Name</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

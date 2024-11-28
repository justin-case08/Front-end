import React from "react";
import { GlobalOutlined } from "@ant-design/icons";

const Logo = () => {
  return (
    <div className="logo-background>">
      <div className="logo">
        <div className="logo-icon">
          {/* this should be the profile picture and name of the user that's logged in */}
          <GlobalOutlined style={{ padding: 4 }} />
        </div>
      </div>
      {/* <div className="profile">
        <div className="profile-name">
          Profile
        </div>
      </div> */}
    </div>
  );
};

export default Logo;

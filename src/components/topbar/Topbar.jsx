import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Captain Dennis</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQETLrl25RgB9g/profile-displayphoto-shrink_800_800/0/1622327546664?e=1631145600&v=beta&t=U4mqsgRYfrDUeMFYPoBDk3b23tcjGpsfJLJI3-XJRKQ"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

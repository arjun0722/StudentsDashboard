import React from "react";
import "./Sidebar.css";
import { AccountCircle } from "@material-ui/icons";
import {
  PlayCircleTwoTone,
  SnippetsTwoTone,
  HighlightTwoTone,
  HomeTwoTone,
  SkinTwoTone,
  TabletTwoTone,
  PushpinTwoTone,
  SmileOutlined,
} from "@ant-design/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>School Space </h1>
      </div>
      <div className="sidebar__botm"></div>
      <div className="sidebar__chats">
        <ul className="">
          <li className="sidebarlistitem ">
            <HomeTwoTone className="sidebaricon" />
            Course
          </li>
          <li className="sidebarlistitem">
            <SkinTwoTone className="sidebaricon" />
            Students
          </li>
          <li className="sidebarlistitem">
            <HighlightTwoTone className="sidebaricon" />
            Exam
          </li>
          <li className="sidebarlistitem">
            <SnippetsTwoTone className="sidebaricon" />
            Result
          </li>
          <li className="sidebarlistitem">
            <TabletTwoTone className="sidebaricon" />
            Notice Board
          </li>
          <li className="sidebarlistitem">
            <PlayCircleTwoTone className="sidebaricon" />
            Live Class
          </li>
          <li className="sidebarlistitem">
            <PushpinTwoTone className="sidebaricon" />
            Notification
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="footericon">
          <AccountCircle />
        </div>
        <div>
          <h1 className="footername">John joius</h1>
        </div>
        <h3 className="footeremail">john12321@gmail.com</h3>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import styles from "./sidebar.module.css";
import { X } from "lucide-react";

const Sidebar = ({ handleSidebar }) => {
  return (
    <nav className={styles.sidebar}>
      <X onClick={handleSidebar} />
      <a href="#">SHOP</a>
      <a href="#">SKILLS</a>
      <a href="#">STORIES</a>
      <a href="#">ABOUT</a>
      <a href="#">CONTACT US</a>
    </nav>
  );
};

export default Sidebar;

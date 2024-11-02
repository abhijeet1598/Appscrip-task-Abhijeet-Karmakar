import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLineOne}>
        <div className="logo">
          <Image src={"/Logo.png"} alt="brand logo" width={36} height={36} />
        </div>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.icons}>
          <Image
            src={"/search-normal.png"}
            alt="search"
            width={24}
            height={24}
          />
          <Image src={"/heart.png"} alt="wishlist" width={24} height={24} />
          <Image
            src={"/shopping-bag.png"}
            alt="shopping bag"
            width={24}
            height={24}
          />
          <Image
            src={"/profile.png"}
            alt="profile"
            width={24}
            height={24}
            className="mobile-hide"
          />
          <div className="flex-wrapper mobile-hide">
            <p className="font-bold">ENG</p>
            <ChevronDown />
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;

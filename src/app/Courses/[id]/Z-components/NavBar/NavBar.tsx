"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./NavBar.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TerminalIcon from "@mui/icons-material/Terminal";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={70} height={70} alt="VeroBlend" />
      </div>
      <nav className={styles.navLinks}>
        <ul className={styles.linksContent}>
          <li className={styles.link}>
            <div
              className={styles.item}
              onClick={() => {
                router.push("/");
              }}
            >
              <HomeIcon />
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.item}>
              <MenuBookIcon />
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.item}>
              <TerminalIcon />
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.item}>
              <YouTubeIcon />
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.item}>
              <SettingsIcon />
            </div>
          </li>
          <li className={`${styles.link} ${styles.exit}`}>
            <div
              className={`${styles.item} ${styles.exit}`}
              onClick={() => {
                router.push("/Courses");
              }}
            >
              <ArrowBackIcon />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

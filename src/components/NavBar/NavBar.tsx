"use client";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { IoPeopleSharp, IoHandLeft } from "react-icons/io5";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import { FlyoutMenus } from "./components/FlyoutMenus";

interface NavBarProps {
  darkColor: string;
}

const NavBar: React.FC<NavBarProps> = ({ darkColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuBurgerVisible, setMenuBurgerVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuBurgerVisible(!menuBurgerVisible);
  };

  return (
    <>
      <div className={`border-b border-${darkColor} ${styles.NavBar}`}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.png" width={60} height={60} alt="veroblend" />
            </Link>
          </div>
          <FlyoutMenus />
          <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/">
                  <p>
                    <AiFillHome />
                  </p>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p>
                    <AiTwotoneBell />
                  </p>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Services">
                  <p>
                    <IoHandLeft />
                  </p>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <p>
                    <IoPeopleSharp />
                  </p>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            {menuOpen ? (
              <div>
                <VscChromeClose />
              </div>
            ) : (
              <div>
                <VscMenu />
              </div>
            )}
          </div>
        </nav>
      </div>

      {!menuBurgerVisible && (
        <div id="menuBurger" className={styles.menuBurger}>
          <ul className={styles.Burger_navLinks}>
            <li>
              <Link href="/">
                <p>
                  <AiFillHome />
                </p>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About">
                <p>
                  <AiTwotoneBell />
                </p>
                About
              </Link>
            </li>
            <li>
              <Link href="/Services">
                <p>
                  <IoHandLeft />
                </p>
                Services
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <p>
                  <IoPeopleSharp />
                </p>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;

"use client";
import React, { useState } from "react";
import { Slide } from "@mui/material";
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { IoPeopleSharp, IoHandLeft } from "react-icons/io5";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import { Transition } from "@headlessui/react";

const NavLinks = () => {
  return (
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
  );
};

const NavBar: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.NavBar}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.png" width={60} height={60} alt="veroblend" />
            </Link>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <NavLinks />
          </div>
          <div className={styles.menuToggle} onClick={toggle}>
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
        <Transition
          show={isShowing}
          enter="transition duration-300 ease-out transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition duration-300 ease-out transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          {(ref) => (
            <Slide in={isShowing} direction="left" timeout={300}>
              <div
                ref={ref}
                className={`fixed inset-y-0 top-0 right-0 w-64 bg-gray-200 ${styles.Slide}`}
              >
                <div id="menuBurger" className={styles.menuBurger}>
                  <NavLinks />
                </div>
              </div>
            </Slide>
          )}
        </Transition>
      </div>
    </>
  );
};

export default NavBar;

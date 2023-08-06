"use client";
import React from "react";
// import { Slide } from "@mui/material";
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { IoPeopleSharp, IoHandLeft } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";
// import { Transition } from "@headlessui/react";
import { MenuBuger } from "./components/MenuBurguer";

const paths = [
  {
    icon: <AiFillHome />,
    name: "Home",
    path: "/",
  },
  {
    icon: <AiTwotoneBell />,
    name: "About",
    path: "/About",
  },
  {
    icon: <IoHandLeft />,
    name: "Services",
    path: "/Services",
  },
  {
    icon: <IoPeopleSharp />,
    name: "Contact",
    path: "/Contact",
  },
  {
    icon: <AiFillHome />,
    name: "Curses",
    path: "/Curses",
  },
];

const NavLinks = () => {
  return (
    <ul className={styles.navLinks}>
      {paths.map((index) => (
        <li key={index.name}>
          <Link href={index.path}>
            <p>
            {index.icon}
          </p>
          {index.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar: React.FC = () => {
  return (
    <>
      <div className={styles.NavBar}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.png" width={60} height={60} alt="veroblend" />
            </Link>
          </div>
          <div className={`${styles.menu} `}>
            <NavLinks />
          </div>
          {/* esto es el menuBurger que esta en otro archivo (COMPONENTE) */}
          <MenuBuger />
        </nav>
      </div>
    </>
  );
};

export default NavBar;

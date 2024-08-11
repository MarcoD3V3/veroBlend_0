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
    name: "Courses",
    path: "/Courses",
  },
];

const NavLinks = () => {
  return (
    <ul className={styles.navLinks}>
      {paths.map((index) => (
        <li key={index.name}>
          <Link href={index.path}>
            <p>{index.icon}</p>
            {index.name}
          </Link>
        </li>
      ))}
      <div></div>
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
              <picture>
                <source
                  srcSet="/logo_white.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <Image src="/logo.svg" width={60} height={60} alt="veroblend" />
              </picture>
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

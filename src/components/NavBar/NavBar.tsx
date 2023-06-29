"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> fd753a8 (escho muy bien)
import { Slide } from "@mui/material";
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { IoPeopleSharp, IoHandLeft } from "react-icons/io5";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import { Transition } from "@headlessui/react";

<<<<<<< HEAD
interface NavLinksProps {
  inHome: boolean;
  inAbout: boolean;
  inServices: boolean;
  inContact: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({
  inHome,
  inAbout,
  inServices,
  inContact,
}) => {
  return (
    <ul className={styles.navLinks}>
      <li>
        <Link
          href="/"
          className={`${styles.linkClosed} ${inHome && styles.linkOpen}`}
        >
          <p>
            <AiFillHome />
          </p>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/About"
          className={`${styles.linkClosed} ${inAbout && styles.linkOpen}`}
        >
          <p>
            <AiTwotoneBell />
          </p>
          About
        </Link>
      </li>
      <li>
        <Link
          href="/Services"
          className={`${styles.linkClosed} ${inServices && styles.linkOpen}`}
        >
          <p>
            <IoHandLeft />
          </p>
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/Contact"
          className={`${styles.linkClosed} ${inContact && styles.linkOpen}`}
        >
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
  const urlAllPagesLink = {
    Home: "http://localhost:3000/",
    About: "http://localhost:3000/About",
    Services: "http://localhost:3000/Services",
    Contact: "http://localhost:3000/Contact",
  };
  const [inHome, setInHome] = useState(false);
  const [inAbout, setInAbout] = useState(false);
  const [inServices, setInServices] = useState(false);
  const [inContact, setInContact] = useState(false);

  const [isShowing, setIsShowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const urlHrefSinPath = `${window.location.protocol}//${window.location.hostname}:3000`;
    const urlPath = window.location.pathname;
    const urlCommpleto = window.location.href;
    console.log(urlCommpleto);
    console.log(urlHrefSinPath + urlPath);
    if (urlAllPagesLink.Home === urlCommpleto) {
      setInHome(true);

      setInContact(false);
      setInAbout(false);
      setInServices(false);
    } else if (urlAllPagesLink.About === urlCommpleto) {
      setInAbout(true);

      setInHome(false);
      setInServices(false);
      setInContact(false);
    } else if (urlAllPagesLink.Services === urlCommpleto) {
      setInServices(true);

      setInAbout(false);
      setInHome(false);
      setInContact(false);
    } else if (urlAllPagesLink.Contact === urlCommpleto) {
      setInContact(false);

      setInAbout(false);
      setInHome(false);
      setInServices(false);
    } else {
      setInHome(false);
      setInAbout(false);
      setInHome(false);
      setInServices(false);
    }
  }, []);

=======
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

>>>>>>> fd753a8 (escho muy bien)
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
<<<<<<< HEAD
            <NavLinks
              inHome={inHome}
              inAbout={inAbout}
              inContact={inContact}
              inServices={inServices}
            />
=======
            <NavLinks />
>>>>>>> fd753a8 (escho muy bien)
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
<<<<<<< HEAD
                  <NavLinks
                    inHome={inHome}
                    inAbout={inAbout}
                    inContact={inContact}
                    inServices={inServices}
                  />
=======
                  <NavLinks />
>>>>>>> fd753a8 (escho muy bien)
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

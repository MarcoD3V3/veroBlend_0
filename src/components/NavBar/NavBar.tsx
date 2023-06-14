/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/indent */
'use client';
import {useState} from 'react';
import {AiFillHome, AiTwotoneBell} from 'react-icons/ai';
import {IoPeopleSharp, IoHandLeft} from 'react-icons/io5';
import {VscMenu, VscChromeClose} from 'react-icons/vsc';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
	const [menuBurguerVisible, setMenuBurguerVisible] = useState(true);

  const toggleMenu = () => {
		console.log(`el estado del menu amburguesa esta en: ${menuOpen}`);
    setMenuOpen(!menuOpen);
		setMenuBurguerVisible(!menuBurguerVisible);
	};

  return (
		<>
			<div className={styles.NavBar}>
				<nav className={styles.navbar}>
					<div className={styles.logo}>
						<Link href="/">
							<Image
								src='/logo.png'
								width={60}
								height={60}
								alt="veroblend"
							/>
						</Link>
					</div>
					<div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/">
									<p><AiFillHome /></p>Home
								</Link>
							</li>
							<li>
								<Link href="/About">
									<p><AiTwotoneBell /></p>About
								</Link>
							</li>
							<li>
								<Link href="/Services">
									<p><IoHandLeft/></p>Services
								</Link>
							</li>
							<li>
								<Link href="/Contact">
									<p><IoPeopleSharp/></p>Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.menuToggle} onClick={toggleMenu}>
						{menuOpen ? (
							<div><VscChromeClose/></div>
						) : (
							<div><VscMenu/></div>
						) }

					</div>
				</nav>
			</div>

			{
			!menuBurguerVisible && <div id='menuBurger' className={styles.menuBurger}>
				<ul className={styles.Burger_navLinks}>
					<li>
						<Link href="/">
							<p><AiFillHome /></p>Home
						</Link>
					</li>
					<li>
						<Link href="/About">
							<p><AiTwotoneBell /></p>About
						</Link>
					</li>
					<li>
						<Link href="/Services">
							<p><IoHandLeft/></p>Services
						</Link>
					</li>
					<li>
						<Link href="/Contact">
							<p><IoPeopleSharp/></p>Contact
						</Link>
					</li>
				</ul>
			</div>
			}
		</>
  );
};

export default NavBar;

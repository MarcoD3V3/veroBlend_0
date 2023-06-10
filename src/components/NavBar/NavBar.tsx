'use client';
import {AiFillHome} from 'react-icons/ai';
import {AiTwotoneBell} from 'react-icons/ai';
import React, {useState} from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.NavBar}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link href="/">Logo</Link>
				</div>
				<div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
					<ul className={styles.navLinks}>
						<li>
							<Link href="/">Home<AiFillHome/></Link>
						</li>
						<li>
							<Link href="/About">About<AiTwotoneBell/></Link>
						</li>
						<li>
							<Link href="/Services">Services</Link>
						</li>
						<li>
							<Link href="/Contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className={styles.menuToggle} onClick={toggleMenu}>
					<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;

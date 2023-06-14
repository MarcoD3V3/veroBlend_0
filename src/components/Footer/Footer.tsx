import React from 'react';
import Link from 'next/link';
import {FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaSpotify} from 'react-icons/fa';

import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.logo}>
						{/* Aquí puedes insertar tu propio logo o marca */}
						<Link href="/"><p>VeroBlend</p></Link>
						<Link href="/"><Image src="/logo.png" width={150} height={150} alt='veroblend'/></Link>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>Explorar</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/About">About</Link>
							</li>
							<li>
								<Link href="/Services">Services</Link>
							</li>
							<li>
								<Link href="/Contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>
							<Link href='/Resources'>Recursos</Link>
						</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/Resources/blog">Blog</Link>
							</li>
							<li>
								<Link href="/Resources/faq">FAQ</Link>
							</li>
							<li>
								<Link href="/Resources/terms">Terms of Service</Link>
							</li>
							<li>
								<Link href="/Resources/privacy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/Resources/Api">API</Link>
							</li>
							<li>
								<Link href="/Resources/Projects">Projects</Link>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>Contacto</h3>
						<p className={styles.contactInfo}>
							Dirección: Calle Principal 123, Ciudad
						</p>
						<p className={styles.contactInfo}>
							Teléfono: +1 234 567 890
						</p>
						<p className={styles.contactInfo}>
							Email: info@example.com
						</p>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>Síguenos</h3>
						<div className={styles.socialMedia}>
							{/* Aquí puedes agregar tus enlaces a las redes sociales */}
							<a href="https://twitter.com" target="_blank" rel="noreferrer" ><FaTwitter/></a>
							<a href="https://facebook.com" target="_blank" rel="noreferrer" ><FaFacebookF/></a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer" ><FaInstagram/></a>
							<a href="https://www.github.com" target="_blank" rel="noreferrer" ><FaGithub/></a>
							<a href="https://www.linkedinin.com" target="_blank" rel="noreferrer" ><FaLinkedinIn/></a>
							<a href="https://www.spotify.com" target="_blank" rel="noreferrer" ><FaSpotify/></a>
						</div>
					</div>
				</div>
				<div className={styles.bottomBar}>
					{/* Aquí puedes agregar cualquier información adicional o derechos de autor */}
					&copy; {new Date().getFullYear()} VeroBlend. Todos los derechos reservados. VeroBlend es una marca registrada de VeroBlend. Prohibida su reproducción total o parcial sin autorización escrita
				</div>
			</footer>
		</div>
	);
};

export default Footer;

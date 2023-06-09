
import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.logo}>
						{/* Aquí puedes insertar tu propio logo o marca */}
						Logo
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>Explorar</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/services">Services</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>Recursos</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/faq">FAQ</Link>
							</li>
							<li>
								<Link href="/terms">Terms of Service</Link>
							</li>
							<li>
								<Link href="/privacy">Privacy Policy</Link>
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
							<a href="https://twitter.com">Twitter</a>
							<a href="https://facebook.com">Facebook</a>
							<a href="https://instagram.com">Instagram</a>
						</div>
					</div>
				</div>
				<div className={styles.bottomBar}>
					{/* Aquí puedes agregar cualquier información adicional o derechos de autor */}
					&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
				</div>
			</footer>
		</div>
	);
};

export default Footer;

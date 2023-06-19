import React from 'react';
import Link from 'next/link';
import {FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaSpotify} from 'react-icons/fa';

import styles from './Footer.module.scss';
import Image from 'next/image';
export type FooterProps = {
	columnONE_Title: string;
	columnONE_Rowone: string;
	columnONE_RowTwo: string;
	columnONE_RowTree: string;
	columnONE_RowFour: string;
	columnONE_RowFive: string;

	columnTWO_Title: string;
	columnTWO_Rowone: string;
	columnTWO_RowTwo: string;
	columnTWO_RowTree: string;
	columnTWO_RowFour: string;
	columnTWO_RowFive: string;

};

const Footer: React.FC<FooterProps> = props => {
	const columnOneTitle = props.columnONE_Title;
	const columnOneRowOne = props.columnONE_Rowone;
	const columnOneRowTwo = props.columnONE_RowTwo;
	const columnOneRowTree = props.columnONE_RowTree;
	const columnOneRowFour = props.columnONE_RowFour;
	const columnOneRowFive = props.columnONE_RowFive;

	const columnTwoTitle = props.columnTWO_Title;
	const columnTwoRowOne = props.columnTWO_Rowone;
	const columnTwoRowTwo = props.columnTWO_RowTwo;
	const columnTwoRowTree = props.columnTWO_RowTree;
	const columnTwoRowFour = props.columnTWO_RowFour;
	const columnTwoRowFive = props.columnTWO_RowFive;

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
						<h3 className={styles.columnTitle}>{columnOneTitle}</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/">{columnOneRowOne}</Link>
							</li>
							<li>
								<Link href="/About">{columnOneRowTwo}</Link>
							</li>
							<li>
								<Link href="/Services">{columnOneRowTree}</Link>
							</li>
							<li>
								<Link href="/Contact">{columnOneRowFour}</Link>
							</li>
							<li>
								<Link href="/Contact">{columnOneRowFive}</Link>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>
							<Link href='/Resources'>Recursos</Link>
						</h3>
						<ul className={styles.navLinks}>
							<li>
								<Link href="/Resources/blog">{columnTwoRowOne}</Link>
							</li>
							<li>
								<Link href="/Resources/faq">{columnTwoRowTwo}</Link>
							</li>
							<li>
								<Link href="/Resources/terms">{columnTwoRowTree}</Link>
							</li>
							<li>
								<Link href="/Resources/privacy">{columnTwoRowFour}</Link>
							</li>
							<li>
								<Link href="/Resources/Api">{columnTwoRowFive}</Link>
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

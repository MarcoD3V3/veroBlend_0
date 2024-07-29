"use client";
import React from 'react';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';



export type SidebarProps = {
	// types...
}

const Sidebar: React.FC<SidebarProps>  = ({}) => {
	return (
		<div className={styles.sidebar}>
            <div className={styles.header}>
                <Image src="/logoVeroBlend_white" alt="CSS3 Logo" className={styles.logo} width={200} height={200}/>
                <h1>CSS<sup>3</sup></h1>
                <p>The Journey of Centering</p>
            </div>
            <nav>
                <ul>
                    <li>En este artículo</li>
                    <li>Más artículos
                        <ul>
                            <li>¿Qué son las tipografías?</li>
                            <li>Bases de fuentes y tipografías</li>
                            <li>Decoraciones de texto</li>
                            <li>Ajuste y balance de textos <span className={styles.label}>MID</span></li>
                            <li>Contorno en tipografías</li>
                            <li>Textos con degradados <span className={styles.label}>MID</span></li>
                            <li>Textos y alineaciones <span className={styles.label}>MID</span></li>
                            <li>Ajustes en tipografías <span className={`${styles.label} ${styles.pro}`}>PRO</span></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={styles.footer}>
                <Link href="#">Saltar al siguiente tema</Link>
                <Link href="#">Volver al índice</Link>
            </div>
        </div>
	);
};

export default Sidebar;

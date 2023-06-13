
/* eslint-disable @typescript-eslint/indent */
'use client';
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - No encontrado</h1>
      <p className={styles.description}>
        Lo siento, la página que estás buscando no existe.
      </p>
      <br />
      <Link href="/">
        <p className={styles.link}>Volver a la página de inicio</p>
      </Link>
		</div>
	);
}

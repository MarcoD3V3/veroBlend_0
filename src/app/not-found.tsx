"use client";
import Link from "next/link";
import styles from "./not-found.module.scss";
import Image from "next/image";

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
      <div className={styles.containerImg}>
        <Image
          src="/logoTriste.png"
          width={400}
          height={400}
          alt="VeroBlend-NotFound"
        />
      </div>
    </div>
  );
}

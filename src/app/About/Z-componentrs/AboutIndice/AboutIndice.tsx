import React from "react";
import styles from "./AboutIndice.module.scss";
import Link from "next/link";
import Image from "next/image";

export type AboutIndiceProps = {};

const AboutIndice: React.FC<AboutIndiceProps> = () => {
  return (
    <div className={styles.AboutIndice}>
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">Acerca de nosotros</h1>
        <div className="flex items-center mb-6">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <p className="ml-2">
            ¡Bienvenido a nuestra página Acerca de nosotros!
          </p>
        </div>
        <p className="text-lg mb-4">
          Somos una empresa apasionada por la enseñanza de la programación y el
          desarrollo de software.
        </p>
        <p className="text-lg mb-4">
          Nuestro objetivo es brindar a nuestros estudiantes las habilidades y
          conocimientos necesarios para tener éxito en el mundo de la
          programación.
        </p>
        <p className="text-lg mb-4">
          En nuestra página Acerca de nosotros encontrarás información detallada
          sobre nuestro equipo de instructores altamente calificados, nuestras
          metodologías de enseñanza y los cursos que ofrecemos.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Nuestro enfoque de enseñanza
        </h2>
        <p className="text-lg mb-4">
          Nos basamos en un enfoque práctico, brindando a nuestros estudiantes
          la oportunidad de trabajar en proyectos reales y aplicar los conceptos
          aprendidos en un entorno práctico.
        </p>
        <p className="text-lg mb-4">
          Nuestros cursos cubren una amplia gama de temas, desde los fundamentos
          de la programación hasta tecnologías avanzadas como React.js, Node.js
          y bases de datos SQL y NoSQL.
        </p>
        <h2 className="text-2xl font-bold mb-4">Nuestros valores</h2>
        <ul className="list-disc ml-8 mb-4">
          <li className="text-lg mb-2">
            Compromiso con la excelencia educativa
          </li>
          <li className="text-lg mb-2">
            Apoyo continuo a nuestros estudiantes
          </li>
          <li className="text-lg mb-2">Fomento de un entorno colaborativo</li>
          <li className="text-lg mb-2">
            Promoción de la diversidad e inclusión
          </li>
          <li className="text-lg">
            Pasión por la programación y la innovación
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Únete a nuestra comunidad</h2>
        <p className="text-lg mb-4">
          Si estás interesado en aprender a programar o mejorar tus habilidades
          existentes, te invitamos a unirte a nuestra comunidad.
        </p>
        <p className="text-lg mb-4">
          Explora nuestros cursos, participa en nuestros eventos y únete a
          nuestras redes sociales para estar al tanto de las últimas noticias y
          recursos relacionados con la programación.
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <Link href="/courses" passHref>
              Ver nuestros cursos
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutIndice;

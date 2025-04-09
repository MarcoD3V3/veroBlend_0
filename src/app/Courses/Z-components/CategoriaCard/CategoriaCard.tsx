/* eslint-disable @typescript-eslint/indent */
"use client";
import Image from "next/image";
import React from "react";
import styles from "./CategoriaCard.module.scss";
// import { useRouter } from "next/navigation";

type Course = {
  id: number;
  PCV: string;
  nombre: string;
  descripcion: string;
  tags: string[];
  imagen: string;
};

type CategoriaCardProps = {
  curso: Course;
  onOpenModal: () => void;
};
const randomNumber = Math.floor(Math.random() * 4) + 1;

const CategoriaCard: React.FC<CategoriaCardProps> = ({ curso, onOpenModal }) => {
  return (
    <div className={`${styles.CourseCard}`}>
      <div className={`${styles.containerImgCourse}`}>
        <Image
          width={200}
          height={200}
          src={curso.imagen}
          alt={curso.nombre}
          className={styles.imgCourse}
        />
      </div>

      <div className={`${styles.InfoCourse}`}>
        <h2 className={styles.TitleCourse}>{curso.nombre}</h2>
        <p className={`${styles.descripcion}`}>{curso.descripcion}</p>

        <div  
          className={`${styles.Tags} ${styles[`CourseCard-${randomNumber}`]}`}
        >
          {curso.tags.map((tag) => (
            <span key={tag} className={`${styles.tagName}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.containerButtons}>
          <button
            onClick={onOpenModal}
            className={`${styles.button}`}
            // onClick={() => {
            //   router.push(`/Courses/${curso.PCV}`);
            // }}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriaCard;

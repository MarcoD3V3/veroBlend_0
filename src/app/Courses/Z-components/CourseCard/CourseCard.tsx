/* eslint-disable @typescript-eslint/indent */
"use client";
import Image from "next/image";
import React from "react";
import styles from "./CourseCard.module.scss";

type Course = {
  id: number;
  nombre: string;
  descripcion: string;
  tags: string[];
  imagen: string;
};

type CourseCardProps = {
  curso: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ curso }) => {
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

        <div className={`${styles.Tags}`}>
          {curso.tags.map((tag) => (
            <span key={tag} className={`${styles.tagName}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.containerButtons}>
          <button className={`${styles.button}`}>Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

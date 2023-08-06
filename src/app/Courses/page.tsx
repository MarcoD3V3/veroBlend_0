"use client";
import React from "react";
import styles from "./Courses.module.scss";
import { CourseCard } from "./Z-components/CourseCard";
import { Footer, NavBar } from "@/components";

const cursos = [
  {
    id: 1,
    PCV: "Conceptos",
    nombre: "Conceptos ",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 2,
    PCV: "CursoDePion",
    nombre: "Curso de Pion",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 3,
    PCV: "CursoDeProgramacion",
    nombre: "Curso de Programacion",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 4,
    PCV: "CursoDeProgramacion",
    nombre: "Curso de Programacion",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 5,
    PCV: "CursoDeProgramacion",
    nombre: "Curso de Programacion",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 6,
    PCV: "CursoDeProgramacion",
    nombre: "Curso de Programacion",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
];

export default function Courses() {
  return (
    <>
      <NavBar />
      <div className={styles.Courses}>
        <div className={styles.containercurso}>
          <div className={`${styles.headingText}`}>
            <h1 className={`text-2xl font-semibold `}>Cursos Disponibles</h1>
          </div>
          <div className={styles.CourseCardContainer}>
            {cursos.map((curso) => (
              <CourseCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

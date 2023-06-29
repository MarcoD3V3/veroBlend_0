import React from "react";
import styles from "./Courses.module.scss";
import { CourseCard } from "./Z-components/CourseCard";
import { NavBar } from "@/components";

const cursos = [
  {
    id: 1,
    nombre: "Conceptos ",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 2,
    nombre: "Curso de Pión",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 3,
    nombre: "Curso de Programación",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 4,
    nombre: "Curso de Programación",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 5,
    nombre: "Curso de Programación",
    descripcion: "Aprende a programar desde cero",
    tags: ["Programación", "Desarrollo web", "JavaScript"],
    imagen: "/logo.png",
  },
  {
    id: 6,
    nombre: "Curso de Programación",
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
          <h1 className="text-2xl font-semibold">Cursos Disponibles</h1>
          <div className={styles.CourseCardContainer}>
            {cursos.map((curso) => (
              <CourseCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

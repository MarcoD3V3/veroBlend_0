"use client";
import React from "react";
import styles from "./Courses.module.scss";
import { Footer, NavBar } from "@/components";
import { CategoriaCard } from "./Z-components/CategoriaCard";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

type Course = {
  id: number;
  PCV: string;
  nombre: string;
  descripcion: string;
  tags: string[];
  imagen: string;
};

const cursos: Course[] = [
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
};

export default function Courses() {
  const [open, setOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);

  const handleOpen = (curso: Course): void => {
    setSelectedCourse(curso);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setSelectedCourse(null);
  };

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
              <CategoriaCard 
                key={curso.id} 
                curso={curso} 
                onOpenModal={() => {
                  handleOpen(curso);
                }}
              />
            ))}
          </div>
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {selectedCourse?.nombre}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className={styles.description} >
              {selectedCourse?.descripcion}
            </Typography>
          </Box>
        </Fade>
        </Modal>
      </div>
      <Footer />
    </>
  );  
}

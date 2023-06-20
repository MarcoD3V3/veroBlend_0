import React from 'react';
import styles from './Courses.module.scss';
import {CourseCard} from './Z-components/CourseCard';
const cursos = [
	{
		id: 1,
		nombre: 'Conceptos de la Programacion',
		descripcion: 'Aprende a programar desde cero',
		tags: ['Programación', 'Desarrollo web', 'JavaScript'],
		imagen: '/logo.png',
	},
	{
		id: 2,
		nombre: 'Curso de Programación',
		descripcion: 'Aprende a programar desde cero',
		tags: ['Programación', 'Desarrollo web', 'JavaScript', ''],
		imagen: '/logo.png',
	},
	{
		id: 3,
		nombre: 'Curso de Programación',
		descripcion: 'Aprende a programar desde cero',
		tags: ['Programación', 'Desarrollo web', 'JavaScript'],
		imagen: '/logo.png',
	},
	{
		id: 4,
		nombre: 'Curso de Programación',
		descripcion: 'Aprende a programar desde cero',
		tags: ['Programación', 'Desarrollo web', 'JavaScript'],
		imagen: '/logo.png',
	},
];

export default function Courses() {
	return (
		<div className={styles.Courses}>
			<div className={styles.containercurso}>
				<h1 className="text-2xl font-semibold mb-4">Cursos Disponibles</h1>
				<div className="grid grid-cols-4 gap-10">
					{cursos.map(curso => (
						<CourseCard key={curso.id} curso={curso} />
					))}
				</div>
			</div>
		</div>);
}


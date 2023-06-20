/* eslint-disable @typescript-eslint/indent */
'use client';
import Image from 'next/image';
import React, {useState} from 'react';
import styles from './CourseCard.module.scss';

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

const CourseCard: React.FC<CourseCardProps> = ({curso}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Acciones a realizar al hacer clic en el card del curso
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 transition duration-300 ${
        isHovered ? 'border-2 border-purple-500' : ''
      } ${styles.CourseCard}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className='flex items-center justify-center'>
				<Image
					width={200}
					height={200}
					src={curso.imagen}
					alt={curso.nombre}
					className="w-full h-40 object-cover rounded-t-lg"
				/>
			</div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-purple-800">{curso.nombre}</h2>
        <p className="text-gray-600 mt-2">{curso.descripcion}</p>

        <div className="flex flex-wrap mt-4">
          {curso.tags.map(tag => (
            <span
              key={tag}
              className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button
            className={`${
              isHovered ? 'bg-purple-800' : 'bg-purple-600'
            } text-white px-4 py-2 rounded hover:bg-purple-700`}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

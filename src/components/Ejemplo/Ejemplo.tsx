/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import styles from './Ejemplo.module.scss';

type Testimonial = {
  id: number;
  name: string;
  comment: string;
};

const Ejemplo: React.FC = () => {
  const title = 'Página principal';
  const description = 'Bienvenido a nuestra página principal';
  const nextVersion = 13;
  const features: string[] = [
    'Renderizado del lado del servidor (SSR)',
    'Generación de sitios estáticos (SSG)',
    'Enrutamiento dinámico',
    'API Routing',
    'Soporte para TypeScript',
    'Hot Module Replacement (HMR)',
  ];
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      comment: 'Next.js ha mejorado la velocidad de desarrollo de mis proyectos significativamente.',
    },
    {
      id: 2,
      name: 'María Gómez',
      comment: 'La posibilidad de generar sitios estáticos me ha permitido mejorar el rendimiento de mi sitio web.',
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      comment: 'Next.js es una herramienta imprescindible para el desarrollo web moderno.',
    },
  ];

  return (
    <div className={styles.container}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Descripción</h2>
          <p>{description}</p>
        </section>
        <section className={styles.section}>
          <h2>Next.js {nextVersion}</h2>
          <p>
            Next.js es un framework de React que ofrece características poderosas para el desarrollo web,
            incluyendo:
          </p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
        <section className={styles['photo-paragraph']}>
          <div className={styles.photo}>
            <img src="/logo.png" alt="Foto 1" />
          </div>
          <div className={styles.paragraph}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nobis maxime odit itaque molestias fuga harum. Amet delectus facilis, maxime hic eligendi perferendis officiis, odit quae et tenetur laboriosam eaque!</p>
          </div>
        </section>
        <section className={styles['photo-paragraph']}>
          <div className={styles.paragraph}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius deserunt minus esse quo, repellendus, eligendi dignissimos inventore, exercitationem accusantium molestiae assumenda a voluptates quidem pariatur porro aspernatur praesentium aliquam nobis!</p>
          </div>
          <div className={styles.photo}>
            <img src="/logo.png" alt="Foto 2" />
          </div>
        </section>
        <section className={styles['photo-paragraph']}>
          <div className={styles.photo}>
            <img src="/logo.png" alt="Foto 3" />
          </div>
          <div className={styles.paragraph}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus temporibus, voluptates molestias numquam nemo quam, doloremque delectus eveniet voluptatibus odit maxime placeat odio cumque magnam tempora in, laudantium repudiandae! Quo?</p>
          </div>
        </section>
        <section className={styles['photo-paragraph']}>
          <div className={styles.paragraph}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, error voluptatem minima non rem, odio laborum illo nulla magni at tempore ducimus? At error maiores alias iure voluptate hic quaerat?</p>
          </div>
          <div className={styles.photo}>
            <img src="/logo.png" alt="Foto 4" />
          </div>
        </section>
				<section className={styles.section}>
          <h2>Testimonios</h2>
          <ul>
            {testimonials.map(testimonial => (
              <li key={testimonial.id}>
                <p>{testimonial.comment}</p>
                <p>- {testimonial.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Ejemplo;

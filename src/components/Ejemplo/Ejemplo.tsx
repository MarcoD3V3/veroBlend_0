import React from "react";
import styles from "./Ejemplo.module.scss";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  comment: string;
};

const Ejemplo: React.FC = () => {
  const features: string[] = [
    "Renderizado del lado del servidor (SSR)",
    "Generación de sitios estáticos (SSG)",
    "Enrutamiento dinámico",
    "API Routing",
    "Soporte para TypeScript",
    "Hot Module Replacement (HMR)",
  ];
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Juan Pérez",
      comment:
        "Next.js ha mejorado la velocidad de desarrollo de mis proyectos significativamente.",
    },
    {
      id: 2,
      name: "María Gómez",
      comment:
        "La posibilidad de generar sitios estáticos me ha permitido mejorar el rendimiento de mi sitio web.",
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      comment:
        "Next.js es una herramienta imprescindible para el desarrollo web moderno.",
    },
  ];

  return (
    <div className={styles.Ejemplo}>
      <div className={styles.container}>
        <main className={styles.main}>
          <ul>
            {features.map((feature, index) => (
              <div key={index}>
                <li>{feature}</li>
              </div>
            ))}
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section className={styles["photo-paragraph"]}>
            <div className={styles.photo}>
              <Image width={120} height={120} src="/logo.png" alt="Foto 3" />
            </div>
            <div className={styles.paragraph}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                nobis maxime odit itaque molestiasLorem ipsum dolor sit amet
                consectetur, adipisicing elit. Repellendus temporibus,
                voluptates molestias numquam nemo quam, doloremq hic eligendi
                perferendis officiis, odit quae et tenetur laboriosam eaque!
              </p>
            </div>
          </section>
          <section className={styles["photo-paragraph"]}>
            <div className={styles.paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                deserunt minus esse quo, repellendus, eligendi dignissimos
                inventore, exercitationem accusantium niet voluptatibus odit
                maxime placeat odio cumque magnam tempora in, laudantium
                repudiandae! Quoraesentium aliquam nobis!
              </p>
            </div>
            <div className={styles.photo}>
              <Image width={120} height={120} src="/logo.png" alt="Foto 3" />
            </div>
          </section>
          <section className={styles["photo-paragraph"]}>
            <div className={styles.photo}>
              <Image width={120} height={120} src="/logo.png" alt="Foto 3" />
            </div>
            <div className={styles.paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus temporibus, voluptates molestias numquam nemo quam,
                doloremque delectus eveniet voluptatibus odit maxsum dolor sit
                amet consectetur, adipisicing elit. Repellentemporibus, voluque
                delectus dus evenie cumque magnam tempora in, laudantium
                repudiandae! Quo?
              </p>
            </div>
          </section>
          <section className={styles["photo-paragraph"]}>
            <div className={styles.paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, error voluptateLorempisicing elit. Repellendu
                voluptatibus odit maxime placeat odio cumque magnam tempora in,
                laudantium repudiandae! Quom merror maiores alias iure voluptate
                hic quaerat?
              </p>
            </div>
            <div className={styles.photo}>
              <Image width={120} height={120} src="/logo.png" alt="Foto 3" />
            </div>
          </section>
          <section className={styles.section}>
            <h2>Testimonios</h2>
            <ul>
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <p>{testimonial.comment}</p>
                  <p>- {testimonial.name}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Ejemplo;

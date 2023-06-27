import React from 'react';
import styles from './AboutHistoria.module.scss';

export type AboutHistoriaProps = {
}

const AboutHistoria: React.FC = () => {
	return (
		<div className={styles.AboutHistoria}>
			<div className={`text-center py-8 text-gray-800 ${styles.Historia}`}>
				<h2 className="text-4xl font-bold mb-4 text-blue-900">Historia inspiradora</h2>
				<p className="text-lg mb-6">
					¡Bienvenidos a VeroBlend! Somos apasionados de la programación y estamos emocionados de compartir nuestros conocimientos contigo. Nuestra historia comenzó hace años cuando descubrimos el fascinante mundo de la programación y experimentamos de primera mano cómo puede cambiar vidas y abrir un sinfín de oportunidades.
				</p>
				<p className="text-lg mb-6">
					Durante nuestro propio viaje de aprendizaje, nos encontramos con desafíos y obstáculos que muchos principiantes enfrentan. Sentimos la necesidad de crear un espacio donde la programación sea accesible, atractiva y comprensible para todos, sin importar su nivel de experiencia. Así nació VeroBlend: un lugar donde los aspirantes a programadores pueden encontrar recursos claros, ejemplos prácticos y apoyo para desarrollar sus habilidades y alcanzar el éxito.
				</p>
				<p className="text-lg mb-6">
					En VeroBlend, creemos firmemente en el poder de la educación y el aprendizaje colaborativo. Nuestra misión es proporcionar a cada estudiante las herramientas necesarias para dominar la programación, desde los conceptos básicos hasta los niveles más avanzados. Nuestro enfoque se centra en el aprendizaje práctico, brindando ejercicios interactivos, proyectos reales y desafiantes para que puedas aplicar lo que aprendes y fortalecer tus habilidades.
				</p>
				<p className="text-lg mb-6">
					Pero VeroBlend no es solo una plataforma de enseñanza, también es una comunidad vibrante y solidaria. Queremos que te sientas parte de algo especial, donde puedas interactuar con otros estudiantes, compartir ideas, obtener retroalimentación valiosa y crear conexiones duraderas. Nuestros mentores y colaboradores están aquí para apoyarte en cada paso del camino, y juntos construiremos una red de aprendizaje fuerte y en constante crecimiento.
				</p>
				<p className="text-lg mb-6">
					Si estás listo para embarcarte en un viaje emocionante hacia la maestría en programación, has llegado al lugar correcto. Únete a la comunidad de VeroBlend y descubre cómo la programación puede transformar tu vida y abrir nuevas puertas hacia un futuro lleno de oportunidades infinitas. ¡Te damos la bienvenida a bordo!
				</p>
			</div>
		</div>
	);
};

export default AboutHistoria;

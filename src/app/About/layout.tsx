import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({subsets: ['latin']});
export const metadata = {
	title: 'VeroBlend | About',
	description: 'En VeroBlend, nos apasiona enseñar programación desde cero hasta niveles expertos. Somos una comunidad dedicada a proporcionar recursos y conocimientos de programación a todos aquellos que deseen adentrarse en este fascinante mundo. Nuestro enfoque se basa en ofrecer una experiencia de aprendizaje práctica y personalizada. Comenzando desde los fundamentos de la programación, te guiaremos a través de diversos lenguajes y tecnologías populares, incluyendo JavaScript, Python, HTML/CSS y más. A medida que adquieras habilidades, te acompañaremos en la construcción de proyectos reales que te permitirán aplicar y consolidar tus conocimientos. Nuestro objetivo es crear una comunidad inclusiva y colaborativa, donde los estudiantes puedan interactuar, compartir ideas y recibir retroalimentación constructiva. Aquí encontrarás el apoyo de mentores experimentados y otros estudiantes apasionados por la programación. Juntos, nos esforzamos por fomentar un ambiente de aprendizaje enriquecedor y motivador. Ya sea que estés buscando adquirir habilidades para iniciar una carrera en tecnología, potenciar tus habilidades existentes o simplemente explorar el emocionante mundo de la programación, VeroBlend es el lugar perfecto para comenzar tu viaje. Te invitamos a unirte a nuestra comunidad y descubrir el poder de la programación. ¡Embárcate en esta emocionante aventura con VeroBlend y desbloquea tu potencial como programador',
};

export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}



import styles from './homePage.module.scss';
import {NavBar, Footer, VerURL, Ejemplo} from '@/components/';
import Image from 'next/image';
import {ParalaxEjem} from './Z-components/ParalaxEjem';

export default function HomePage() {
	const headingTitle = 'VeroBlend';
	return (
		<>
			<NavBar />
			<div className={styles.Intro}>
				<div className={styles.containerIntro}>
					<div className={styles.headingIntro}>
						<div className={styles.textHeading}><h5 className={styles.learning}>Learning</h5>{headingTitle}</div>
						<div className={styles.textLorem}>
							<p>Embark on a coding journey with our interactive platform, designed to empower learners with comprehensive tutorials and resources for mastering programming skills.</p>
						</div>
						<div className={styles.buttonsContainer}>
							<button>Learn</button>
							<button>Courses</button>
						</div>
					</div>
					<div className={styles.imgIntro}><div className={styles.imgContainer}><Image src="/logo.png" width={460} height={460} alt='asd'/></div></div>
				</div>
			</div>
			<div className={styles.HomePage}>
				<Ejemplo/>
				{/* <div className={styles.container}>
					<div className={styles.homeIntro}>
						<section className={styles.section}>
							<article id='articleImage' className={styles.articleImage}>
								<Image
									src='/id.png'
									width={400}
									height={400}
									alt='mas'/>
							</article>
							<article id='articleInfo' className={styles.articleInfo}>
								asdasd
							</article>
						</section>
					</div>
				</div> */}
			</div>
			<Footer/>
		</>
	);
}

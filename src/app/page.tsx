
import styles from './homePage.module.scss';
import {NavBar} from '@/components/';
import {Footer} from '@/components/';
import Image from 'next/image';
import {ParalaxEjem} from './Z-components/ParalaxEjem';

export default function HomePage() {
	return (
		<>
			<NavBar />
			<div className={styles.HomePage}>
				<div className={styles.container}>
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
				</div>
				<ParalaxEjem/>
			</div>
			<Footer/>
		</>
	);
}

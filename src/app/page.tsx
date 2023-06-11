
import styles from './homePage.module.scss';
import {NavBar} from '@/components/NavBar';
import {Footer} from '@/components/Footer';

export default function HomePage() {
	return (
		<>
			<NavBar />
			<div className={styles.HomePage}>
				hola
				<br />
				<br />
				<video src='/v.mp4' width={320} height={320} controls></video>
				<br />
				<br />
				<br />
				<br />

			</div>
			<Footer/>
		</>
	);
}

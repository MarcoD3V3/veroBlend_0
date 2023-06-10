
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
				<br />
				<br />
				<br />
				<br />

			</div>
			<Footer/>
		</>
	);
}

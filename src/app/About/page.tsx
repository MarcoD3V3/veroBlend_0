import React from 'react';
import styles from './About.module.scss';
import {NavBar, Footer} from '@/components';

export default function AboutPage() {
	return (
		<>
			<NavBar/>
			<div className={styles.About}>
				About
			</div>
			<Footer/>
		</>
	);
}


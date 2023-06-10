import React from 'react';
import styles from './About.module.scss';
import {NavBar} from '@/components/NavBar';

export default function AboutPage() {
	return (
		<>
			<NavBar/>
			<div className={styles.About}>
				About
			</div>
		</>
	);
}


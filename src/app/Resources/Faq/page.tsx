import React from 'react';
import styles from './Faq.module.scss';
import {NavBar} from '@/components/NavBar';

export default function FaqPage() {
	return (
		<>
			<NavBar/>
			<div className={styles.FaqPage}>
				Faq
			</div>
		</>
	);
}


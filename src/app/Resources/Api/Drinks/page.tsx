import React from 'react';
import styles from './Drinks.module.scss';
import {NavBar} from '@/components/';

export default function Drinks() {
	return (
		<>
			<NavBar/>
			<div className={styles.Drinks}>
				Drinks
			</div>
		</>
	);
}

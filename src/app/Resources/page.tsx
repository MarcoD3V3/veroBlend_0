import React from 'react';
import styles from './Resources.module.scss';
import {NavBar, Footer, ListSitesChildren} from './Z-components';
import {Ejemplo} from '@/components/';

export default function ResourcesPage() {
	return (
		<>
			<NavBar />
			<Ejemplo/>
			<div className={styles.Resources}>
			</div>
			<Footer
				nameFirstRow='Projects Api'
				item1='drinks'
				item2='games'
				item3='movis'
				item4='pacman'
				item5='morty'
				item6='myapi'
			/>
		</>
	);
}


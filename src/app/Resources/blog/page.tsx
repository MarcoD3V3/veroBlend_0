import React from 'react';
import styles from './Blog.module.scss';
import {NavBar, Footer} from '@/components';

export default function BlogPage() {
	return (
		<>
			<NavBar/>
			<div className={styles.BlogPage}>
        blog
			</div>
			<Footer/>
		</>
	);
}

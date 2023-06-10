import React from 'react';
import styles from './Blog.module.scss';
import {NavBar} from '@/components/NavBar';

export default function BlogPage() {
	return (
		<>
			<NavBar/>
			<div className={styles.BlogPage}>
        blog
			</div>
		</>
	);
}

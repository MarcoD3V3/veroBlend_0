'use client';
import React from 'react';
import styles from './Contact.module.scss';
import {FileUploader} from './Z-components/FileUploader';

export default function ContactPage() {
	return (
		<>
			<div className={styles.contact}>
				<FileUploader/>
			</div>
		</>
	);
}

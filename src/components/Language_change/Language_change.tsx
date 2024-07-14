"use client";
import React from 'react';
import styles from './Language_change.module.scss';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

export type Language_changeProps = {
	// types...
}

const Language_change: React.FC<Language_changeProps>  = ({}) => {
	return (
		<div className={styles.language_change}>
 			<div className={styles.button_CloseAndOpenContainer}>
				<div className={styles.button_arrow}>
					<MdKeyboardDoubleArrowLeft />
				</div>
			</div>
			<div className={styles.options}>
				<div className={styles.Optn}>
					<BiWorld />
				</div>
				<div className={styles.Optn}>
					<BiWorld />
				</div>
				<div className={styles.Optn}>
					<BiWorld />
				</div>
				<div className={styles.Optn}>
					<BiWorld />
				</div>
			</div>
		</div>
	);
};

export default Language_change;

"use client";
import React from 'react';
import styles from './Language_change.module.scss';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


export type Language_changeProps = {
	// types...
}

const Language_change: React.FC<Language_changeProps>  = ({}) => {
	return (
		<div className={styles.language_change}>
 			<div className={styles.button_CloseAndOpenContainer}>
				<div className={styles.button}>
					<MdKeyboardDoubleArrowLeft />
				</div>
			</div>
 		</div>
	);
};

export default Language_change;

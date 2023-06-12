/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/indent */
'use client';
import React, {useState} from 'react';
import styles from './ProjectsPage.module.scss';

export default function ProjectsPage() {
	const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const handleInputChange = (event: {target: {value: React.SetStateAction<string>}}) => {
    setInputText(event.target.value);
  };

  const handleSummarize = () => {
    const sentences = inputText.split('.'); // Divide el texto en oraciones
    const numSentences = Math.min(3, sentences.length); // Número máximo de oraciones en el resumen

    const summarySentences = sentences
      .slice(0, numSentences) // Selecciona las primeras numSentences oraciones
			.map((sentence) => sentence.trim()) // Elimina espacios en blanco al inicio y al final de cada oración
			.filter((sentence) => sentence !== ''); // Elimina oraciones vacías

		const summary = summarySentences.join('. '); // Une las oraciones en un solo texto

		setSummary(summary);
	};

	return (
		<div className={styles.summary}>
			ProjectsPage
			<div>
				<textarea
					value={inputText}
					onChange={handleInputChange}
					placeholder="Ingrese el texto que desea resumir"
				></textarea>
				<button onClick={handleSummarize}>Resumir</button>
				<p>{summary}</p>
			</div>
		</div>
	);
}

import React, { useState, useRef } from 'react';
import styles from './CreateUsers.module.scss';
import { UserCard } from '../User';
import Image from 'next/image';

export type CreateUsersProps = {
	id: number;
	userName: string;
	imageUrl: string;
};

type Users = {
	id: number;
	name: string;
	url: string;
};

const CreateUsers: React.FC = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const urlRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState('');
	const [ImgError, setImgError] = useState('/logo.png')
	const [img, setImg] = useState('')

	const [nameUser, setNameUser] = useState('');
	const [urlImage, setUrlImage] = useState('');
	const [errorUser, setErrorUser] = useState(true);

	function handler(): void {
		if (urlRef.current && nameRef.current) {
			const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
			const NameValue = nameRef.current.value;
			const UrlValue = urlRef.current.value;
			if (UrlValue == '' && NameValue == '' || NameValue == '' || UrlValue == '') {
				setError('rellenar todos los campos: ');
				setErrorUser(false)
				setNameUser('');
				setUrlImage('');
			}
			else if (typeof urlRef == 'string') {
				setUrlImage('')
			}
			else {
				console.log(urlRef.current.value);
				setNameUser(nameRef.current.value);
				setUrlImage(urlRef.current.value);
				setErrorUser(true);
				setError('');
			}
		}
	}
	console.log(urlRef.current)

	const on = useRef<HTMLImageElement>(null);
	function onClick(): void {
		if (on.current !== null || on.current) {
			const current = on.current;
			const src = on.current.src;
			if (src == null) {
				setImgError('/logoTriste.png')
			} else {
				setImgError('/logoTriste.png')
				console.log(urlImage)
			}
			// setImg(src)
			// console.log(src)
			// console.log(img)
		}
	}

	return (
		<>
			<div className={styles.createUsers}>
				<form>
					<input type="text" placeholder="name" className='bg-black' ref={nameRef} />
					<input type="text" placeholder="imageURL" className='bg-black' ref={urlRef} />
					<input type="button" value="Create" onClick={handler} />
					<div>{nameUser}</div>
					<div>{urlImage}</div>
					<div className={styles.ErrorText}><p>{error}</p></div>
				</form>
			</div>
			{errorUser && <>
				<div className="rounded-lg shadow-md p-4">
					<div className="w-40 h-40 mx-auto mb-4">
						<Image ref={on} src={ImgError} alt={nameUser} className="rounded-full" width={100} height={100} />
					</div>
					<h2 className="text-xl font-semibold text-center">{nameUser}</h2>
					<button onClick={onClick}>Click</button>
				</div>
			</>
			}

		</>
	);
}

export default CreateUsers;

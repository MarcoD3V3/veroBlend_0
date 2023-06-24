import React, {useState, useRef} from 'react';
import styles from './CreateUsers.module.scss';

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

const CreateUsers: React.FC<CreateUsersProps> = ({id, userName, imageUrl}) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const urlRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState('');
	const [nameUser, setNameUser] = useState('');
	const [urlImage, setUrlImage] = useState('');

	function handler(): void {
		if (urlRef.current && nameRef.current) {
			console.log(urlRef.current.value);
			setNameUser(nameRef.current.value);
			setUrlImage(urlRef.current.value);
		} else {
			setError('rellenar todos los campos: ');
		}
	}

	return (
		<div className={styles.createUsers}>
			<form>
				<input type="text" placeholder="name" className={styles.NAMEUSER} ref={nameRef} />
				<input type="text" placeholder="imageURL" className={styles.URLIMAGE} ref={urlRef} />
				<input type="button" value="Create" onClick={handler} />
				<div>{nameUser}</div>
				<div>{urlImage}</div>
				<div>{error}</div>
			</form>
		</div>
	);
};

export default CreateUsers;

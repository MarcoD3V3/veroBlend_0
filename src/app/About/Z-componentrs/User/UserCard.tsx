import React from 'react';
import styles from './User.module.scss';
import Image from 'next/image';

export type UserCardProps = {
	name: string;
	image: string;
};

const UserCard: React.FC<UserCardProps> = ({name, image}) => {
	return (
		<div className="rounded-lg shadow-md p-4">
			<div className="w-40 h-40 mx-auto mb-4">
				<Image src={image} alt={name} className="rounded-full" width={100} height={100} />
			</div>
			<h2 className="text-xl font-semibold text-center">{name}</h2>
		</div>
	);
};

export default UserCard;

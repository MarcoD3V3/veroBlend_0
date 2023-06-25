import React from 'react';
import styles from './User.module.scss';
import Image from 'next/image';
type UserCardProps = {
	key: number;
	userName: string;
	imageUrl: string;
};

const UserCard: React.FC<UserCardProps> = ({ userName, imageUrl }) => {
	return (
		<div>
			<h3>{userName}</h3>
			<Image width={200} height={200} src={imageUrl} alt={userName} />
		</div>
	);
};


export default UserCard;

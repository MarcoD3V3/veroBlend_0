/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import styles from './Learn.module.scss';

type UsersProps = {
  id: number;
  name: string;
  text: string;
};

export default function Learn() {
  const UsersP: UsersProps[] = [
    {
      id: 0,
      name: 'maecxo',
      text: 'asdasdasd',
    },
    {
      id: 1,
      name: 'maecxo',
      text: 'asdasd',
    },
    {
      id: 2,
      name: 'maecxo',
      text: 'asxt',
    },
    {
      id: 3,
      name: 'maecxo',
      text: 'asdasd',
    },
    {
      id: 4,
      name: 'maecxo',
      text: 'asdasd',
    },
    {
      id: 5,
      name: 'maecxo',
      text: 'asdasd',
    },
  ];

  const UsersPmap = UsersP.map(({id, text, name}) => (
    <div key={id} className={styles.users__container}>
      <h1 className={styles.user__name}>{name}</h1>
      <p className={styles.user__text}>{text}</p>
    </div>
  ));

  return (
    <div className={styles.learn}>
      <div className={styles.container}>
        <div className={styles.containerButtonsTop}>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
        </div>
        <div className={styles.heading}></div>
        <div className={styles.infoText}>
          <p>asdasdasdasdasdasdasdasdasdkjasdhujkasjkhdasdkjh</p>
        </div>
        <div className={styles.containerButtons}>
          <button>name1</button>
          <button>name1</button>
          <button>name1</button>
        </div>
      </div>
    </div>
  );
}

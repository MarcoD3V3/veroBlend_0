/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/indent */
'use client';
import React, {useState} from 'react';
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

  const [OpenModal, setOpenModal] = useState(false);
  function modalToggle() {
    setOpenModal(!OpenModal);
  }

  return (
    <div className={styles.learn}>
      <div className={styles.container}>
        <div className={styles.containerButtonsTop}>
          <button className={styles.topButtonCd} onClick={modalToggle}>modal</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
          <button className={styles.topButtonCd}>nametop</button>
        </div>
        <div className={styles.heading}></div>
        <div className={styles.infoText}>
          {OpenModal && <>
          {/* modal tailwind css */}
          <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={modalToggle} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
          <button onClick={() => {
            // Confirm() Method
            const text = 'Are you sure you want to deactivate your account? All of your data will be permanent';
            if (confirm(text)) {
              alert('Account activated successfully');
              setOpenModal(false);
            } else {
              alert('Account Deactivated');
            }
          }} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </>
          }
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

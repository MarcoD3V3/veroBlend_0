/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/naming-convention */
'use client';
import React, {useState, useEffect} from 'react';
import styles from './VerURL.module.scss';

const VerURL: React.FC = () => {
  const [URL, setURL] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setURL(window.location.href);
    }
  }, []);

  return <div>{URL}</div>;
};

export default VerURL;

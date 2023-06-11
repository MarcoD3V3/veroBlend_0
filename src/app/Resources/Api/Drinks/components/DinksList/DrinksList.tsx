/* eslint-disable @typescript-eslint/indent */
import React, {useState, useEffect} from 'react';
import styles from './DrinksList.module.scss';

type ApiData = {
  id: number;
  title: string;
  // Agrega aquí las propiedades de tu API JSON
};

const DrinksList = () => {
	const [apiData, setApiData] = useState(null);

	return (
		<>
			<div className={styles.DrinksList}>
        Drinks List
			</div>
       <div>
        <h1>API Data</h1>
        {/* {apiData ? (
          <ul>
            {apiData.map (
              <li key={item.idDrink}>
              {item.strDrink}
              </li>
            )}
          </ul>
        ) : (
          <p>Cargando datos...</p>
        )} */}
      </div>
		</>
	);
};

export default DrinksList;

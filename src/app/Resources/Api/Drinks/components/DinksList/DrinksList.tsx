/* eslint-disable @typescript-eslint/indent */
import React from "react";
import styles from "./DrinksList.module.scss";

const DrinksList = () => {
  return (
    <>
      <div className={styles.DrinksList}>Drinks List</div>
      <div>
        <h1>API Data</h1>
{/*          {apiData ? (
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

import React from "react";
import styles from "./curse.module.scss";
import { NavBar } from "./Z-components/NavBar";

export default function course() {
  return (
    <>
      <NavBar />
      <div className={styles.course}>
        <h1>Detalles del curso:</h1>
      </div>
    </>
  );
}

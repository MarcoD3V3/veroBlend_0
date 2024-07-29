"use client";
import React from "react";
import styles from "./About.module.scss";
import { NavBar, Footer } from "@/components";
import { CreateUsers } from "./Z-componentrs/CreateUsers";
import { AboutHistoria } from "./Z-componentrs/AboutHistoria";

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <NavBar />
      <div className={styles.About}>
        <AboutHistoria />
        <div>
          <div>
            <CreateUsers />
          </div>
        </div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}

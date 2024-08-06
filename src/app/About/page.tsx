"use client";
import React from "react";
import styles from "./About.module.scss";
import { NavBar, Footer } from "@/components";
import { CreateUsers } from "./Z-componentrs/CreateUsers";
import { AboutHistoria } from "./Z-componentrs/AboutHistoria";
import { ComboboxAutocomplete } from "@/components/ComboboxAutocomplete";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className={styles.About}>
        <div>
          <CreateUsers />
        </div>
        <div>
          <ComboboxAutocomplete />
        </div>
      </div>

      <Footer />
    </>
  );
}

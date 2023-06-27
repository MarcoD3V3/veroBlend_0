"use client";
import React from "react";
import styles from "./About.module.scss";
import { NavBar, Footer } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { CreateUsers } from "./Z-componentrs/CreateUsers";
import { AboutHistoria } from "./Z-componentrs/AboutHistoria";
import { ComboboxAutocomplete } from "@/components/ComboboxAutocomplete";

export default function AboutPage() {
  return (
    <>
      <NavBar darkColor="#111" />
      <div className={styles.About}>
        <AboutHistoria />
        <div>
          <div>
            <CreateUsers />
          </div>
        </div>
        <div>
          <ComboboxAutocomplete />
        </div>
      </div>

      <Footer />
    </>
  );
}

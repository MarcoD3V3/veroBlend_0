"use client";
import React from "react";
import styles from "./Contact.module.scss";
import { FileUploader } from "./Z-components/FileUploader";
import { Footer, NavBar } from "@/components";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className={styles.contact}>
        <FileUploader />
      </div>
      <Footer />
    </>
  );
}

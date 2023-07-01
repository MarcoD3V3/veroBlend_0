"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./FileUploader.module.scss";
import Image from "next/image";

const FileUploader: React.FC = () => {
  const [imageProps, setImageProps] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = (event: any) => {
    if (Boolean(event.target.files) && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fil = event.target;
      const fileUrl = URL.createObjectURL(file);
      console.log(file);
      console.log(fil.class);
      setImageUrl(fileUrl);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const ImgProps = acceptedFiles[0];
    setImageProps(ImgProps.name);
    console.log(ImgProps);

    console.log(ImgProps.lastModified);
    // Console.log(ImgProps.lastModifiedDate);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.FileUploader}>
      <div {...getRootProps()} className={styles.containerFileUploader}>
        <input {...getInputProps()} className={styles.DropUpload} />
        {isDragActive ? (
          <p>Suelta los archivos aquí...</p>
        ) : (
          <p>
            Arrastra y suelta los archivos aquí, o haz clic para seleccionar los
            archivos
          </p>
        )}
      </div>
      <div>{imageProps}</div>
      <div>
        <input type="file" onChange={handleFileChange} className="asdx" />
        {imageUrl.length > 0 && (
          <Image src={imageUrl} alt="User's Image" width={200} height={200} />
        )}
      </div>
    </div>
  );
};

export default FileUploader;

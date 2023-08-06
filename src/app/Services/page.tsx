"use client";
import React from "react";
import styles from "./Services.module.scss";
import { Footer, NavBar } from "@/components";
import { Box, List, ListItem, Typography, Button } from "@mui/material";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet enim id justo tincidunt, ac faucibus odio sodales.",
    image: "/logo.png",
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Praesent non urna in dui laoreet vehicula. Integer pharetra purus sit amet neque feugiat, non ultrices ligula tincidunt.",
    image: "/logo.png",
  },
  {
    id: 3,
    title: "Service 3",
    description:
      "Fusce id mi quis lorem rhoncus aliquet. Pellentesque eget velit gravida, scelerisque purus et, luctus elit.",
    image: "/logo.png",
  },
  // ... Agregar más servicios aquí ...
];

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <div className={styles.services}>
        <div className={styles.container}>
          <Typography variant="h3" component="h3" gutterBottom>
            Our Services
          </Typography>
          <List className={styles.serviceList}>
            {servicesData.map((service) => (
              <ListItem key={service.id} className={styles.serviceItem}>
                <Box className={styles.imageContainer}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.image}
                  />
                </Box>
                <Box className={styles.content}>
                  <Typography
                    variant="h2"
                    component="h2"
                    className={styles.title}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className={styles.description}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={styles.button}
                  >
                    Learn More
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <Footer />
    </>
  );
}

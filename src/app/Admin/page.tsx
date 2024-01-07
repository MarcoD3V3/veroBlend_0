// AdminPage.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../authContext";

export default function AdminPage() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirigir al usuario a la página de inicio de sesión si no está autenticado
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div>{isAuthenticated && <p>Contenido del panel de administración</p>}</div>
  );
}

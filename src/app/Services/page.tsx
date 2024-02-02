// pages/api/auth/login.ts

import { type NextApiRequest, type NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  try {
    // Realiza la autenticación real, por ejemplo, verifica en tu base de datos.
    const response = await axios.post<{ token: string }>("/api/auth/login", {
      username,
      password,
    });

    // Almacena el token en una cookie o en el almacenamiento local según tu preferencia
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const token = response.data.token;
    // Aquí deberías manejar la respuesta y almacenar el token de manera segura

    res.status(200).json({ success: true });
  } catch (error) {
    // Autenticación fallida
    console.error("Inicio de sesión fallido:", error);
    res.status(401).json({ success: false });
  }
}

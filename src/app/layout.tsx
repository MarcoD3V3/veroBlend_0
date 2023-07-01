import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // eslint-disable-next-line @typescript-eslint/indent
  title: "VeroBlent",
  description:
    "Unlock the power of coding with our comprehensive programming tutorials and courses. Our platform offers expert guidance, hands-on projects, and real-world examples to help you master programming languages and frameworks. Accelerate your learning journey and become a proficient programmer with our SEO-optimized resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

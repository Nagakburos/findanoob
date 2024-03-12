import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find a Noob",
  description:
    "Encontre talentos e oportunidades de carreira no Find a Noob. Conectamos empresas e profissionais em busca do próximo passo na carreira. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
          {children}
          </Providers>
          
          </body>
      </html>
    </ClerkProvider>
  );
}

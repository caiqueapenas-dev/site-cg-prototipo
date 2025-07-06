import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Gama - Sua Saúde Completa em Ribeira do Pombal",
  description: "Mais de 65 serviços de saúde e bem-estar. Encontre especialistas em odontologia, ginecologia, pediatria e muito mais. Agende sua consulta de forma rápida e fácil.",
  keywords: "clínica, saúde, dentista, ginecologista, pediatra, ribeira do pombal, clínica gama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Alteração da cor de fundo e texto principal */}
      <body className={`${inter.className} bg-[#faffed] text-[#06250c]`}>
        {children}
      </body>
    </html>
  );
}
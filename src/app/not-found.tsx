import { MainLayout } from "@/components/layout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable - Erreur 404",
  description:
    "Il semble que la page que vous cherchez n'existe pas ou a été déplacée. Pas de panique, vous pouvez facilement retrouver votre chemin :",
};

export default function NotFound() {
  return (
    <MainLayout>
      <header className="top-header">
        <div className="content">
          <h1>
            Oups ! On dirait que vous avez découvert un territoire inexploré...
          </h1>
          <p>
            Il semble que la page que vous cherchez n’existe pas ou a été
            déplacée. Pas de panique, vous pouvez facilement retrouver votre
            chemin :
          </p>

          <Link href="/">
            <strong>Retourner sur la page d’accueil</strong>
          </Link>
        </div>
      </header>
    </MainLayout>
  );
}

import { Nav } from "@/components/common";
import { env } from "@/utils/env";
import type { Metadata } from "next";
import Image from "next/image";
const titre =
  "Soirée 100% Danse et Repas Chateaux de roques - R&C Danse pour tous";
const description =
  "🎉 Préparez-vous pour une soirée inoubliable au Château de Roques, à La Forge, 09500 Teilhet ! Le samedi 24 mai 2025, vivez une ambiance 100 % danse et convivialité avec un savoureux repas et une piste partagée entre rythmes latino (salsa, bachata, kizomba) et rock & swing. Une soirée festive dans un cadre d’exception, à ne pas manquer !";

export const metadata: Metadata = {
  title: titre,
  description: description,
  authors: [{ name: "Gaetan Ritel" }],
  publisher: "Gaetan Ritel",
  creator: "Gaetan Ritel",
  openGraph: {
    title: titre,
    description: description,
    url: `${env.NEXTAUTH_URL}/events/soiree-chateaux-roques-24-05`,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${env.NEXTAUTH_URL}/images/soiree.24.05.25.jpg`,
        alt: titre,
      },
    ],
  },
};

export default async function Chateauroque() {
  return (
    <>
      <header className="header events-chateaux-roques">
        <Nav />
        <div className="banner">
          <h1>
            <span>Soirée 100% danse et repas</span>
          </h1>
          <a href="/qui-sommes-nous#contact-form" className="btn">
            Nous contacter
          </a>
        </div>
      </header>
      <section className="events container event-show">
        <figure>
          <Image
            src={"/images/soiree.24.05.25.jpg"}
            alt="Planning mont d’olmes"
            width={802}
            height={1134}
          />
          <figcaption>
            <p>
              <strong>
                🎉 Préparez-vous pour une soirée inoubliable au Château de
                Roques !
              </strong>
              <br />
              <br />
              Le samedi 24 mai 2025, vivez une ambiance 100 % danse et
              convivialité avec un savoureux repas et une piste partagée entre
              rythmes latino (salsa, bachata, kizomba) et rock & swing. Une
              soirée festive dans un cadre d’exception, à ne pas manquer !{" "}
              <br /> <br /> 📍 Lieu : Château de Roques, La Forge – 09500
              Teilhet <br /> 📅 Date : Samedi 24 mai 2025 <br />
              🕗 Heure : À partir de 19h00
            </p>
            <p>
              50% Latino Salsa-Bachata-Kizomba <br />
              50% Rock-Swing <br />
              Pensez à réserver
              <br />
              19h Accueil <br />
              19h30 Repas <br />
              21h : Soirée de danse
              <br />
              2 DJ Matthieu et Carlos <br />
            </p>
          </figcaption>
        </figure>
      </section>
      <section className="container event-show programme">
        <h2>Au programme ?</h2>
        <div>
          <figure>
            <img src="/images/chateaux-roques/18.jpeg" alt="" />
            <figcaption>
              <h3>Animations</h3>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/chateaux-roques/20.jpeg" alt="" />
            <figcaption>
              <h3>Initiations</h3>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/chateaux-roques/38.jpeg" alt="" />
            <figcaption>
              <h3>Repas</h3>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/chateaux-roques/27.jpeg" alt="" />
            <figcaption>
              <h3>Soirée</h3>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

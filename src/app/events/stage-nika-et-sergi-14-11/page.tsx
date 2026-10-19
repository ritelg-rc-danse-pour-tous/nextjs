import { Nav } from "@/components/common";
import { VideoYoutube } from "@/components/ui";
import { env } from "@/utils/env";
import type { Metadata } from "next";
import Image from "next/image";

const titre =
  "Stages Salsa, Bachata & Kizomba + Soirée SBK & Rock avec Nika & Sergi Martinez - R&C Danse pour tous";
const description =
  "Samedi 14 novembre 2026 à l'ADN New Age, Verniolle (09) : 5h30 de stages de Salsa, Bachata et Kizomba avec Nika & Sergi Martinez, venus d'Espagne, suivies dès 21h30 d'une soirée Salsa, Bachata, Kizomba, Latino et Rock avec animations et démonstrations. Réservation avant le 7 novembre 2026.";

export const metadata: Metadata = {
  title: titre,
  description: description,
  authors: [{ name: "Gaetan Ritel" }],
  publisher: "Gaetan Ritel",
  creator: "Gaetan Ritel",
  openGraph: {
    title: titre,
    description: description,
    url: `${env.NEXTAUTH_URL}/events/stage-nika-et-sergi-14-11`,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${env.NEXTAUTH_URL}/images/flyer-adn-14_11-1.jpeg`,
        alt: titre,
      },
    ],
  },
};

export default async function StageNikaEtSergi() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="banner header-event-show">
          <div>
            <h1>
              <span>Stages Salsa, Bachata & Kizomba</span> + Soirée SBK & Rock
            </h1>
            <p>
              🔥 Boostez votre style avec Nika & Sergi Martinez, tout droit
              venus d’Espagne ! L’association R&C Danse Pour Tous vous donne
              rendez-vous pour une journée exceptionnelle placée sous le signe
              de la danse, du partage et de la convivialité ! ❤️
            </p>
            <p className="event-highlight">
              📅 Samedi 14 novembre 2026
              <br />
              📍 ADN New Age – Verniolle (09)
            </p>
            <div className="banner-actions">
              <a href="/qui-sommes-nous#contact-form" className="btn">
                Nous contacter
              </a>
              <a
                href="https://www.helloasso.com/associations/retc-danse-pour-tous/evenements/stage-nika-et-sergi"
                target="_blank"
                rel="noreferrer"
                className="btn btn-event"
              >
                Réserver
              </a>
            </div>
          </div>
          <div className="image">
            <Image
              src={"/images/flyer-adn-14_11-1.jpeg"}
              alt="Flyer des stages de Salsa, Bachata & Kizomba du 14 novembre 2026 à l’ADN New Age, Verniolle"
              width={800}
              height={1128}
            />
          </div>
        </div>
      </header>
      <section className="events container event-show">
        <figure>
          <Image
            src={"/images/flyer-adn-14_11-2.jpeg"}
            alt="Flyer de la soirée Salsa, Bachata, Kizomba & Rock du 14 novembre 2026 à l’ADN New Age, Verniolle"
            width={800}
            height={1128}
          />
          <figcaption>
            <p>
              <strong>✨ Au programme :</strong>
              <br />
              <br />
              🔥 5h30 de stages de Salsa, Bachata et Kizomba pour perfectionner
              votre technique, enrichir votre style et faire le plein d’énergie
              !
              <br />
              <br />
              🎶 Dès 21h30 : soirée Salsa, Bachata, Kizomba & Rock !
              <br />
              Prolongez le plaisir sur la piste avec une soirée festive mêlant
              Salsa, Bachata, Kizomba, Latino et Rock, avec des animations et
              démonstrations de Nika & Sergi tout au long de la soirée !
              <br />
              <br />
              🍔 Restauration sur place dès 11h30, midi et soir.
            </p>
            <p>
              💰 <strong>Tarifs des stages :</strong>
              <br />
              1h : 10 €
              <br />
              1h30 : 15 €
              <br />
              2h30 : 20 €
              <br />
              4h : 33 €
              <br />
              5h30 : 45 € avec l’entrée à la soirée offerte ! 🎁
              <br />
              <br />
              🎟️ Soirée : 10 € avec une boisson incluse !
              <br />
              <br />
              ⚠️ Réservation avant le 7 novembre au plus tard !
              <br />
              <br />
              📞 Infos et réservations : 07 75 67 57 31
              <br />
              📧 associationrcdansepourtous@gmail.com
            </p>
            <a
              href="https://www.helloasso.com/associations/retc-danse-pour-tous/evenements/stage-nika-et-sergi"
              target="_blank"
              rel="noreferrer"
              className="btn btn-event"
            >
              Réserver sur HelloAsso
            </a>
          </figcaption>
        </figure>
      </section>
      <section className="container event-intervenants">
        <h2>Qui sont Nika & Sergi Martinez ?</h2>
        <div className="event-intervenants-content">
          <Image
            src="/images/nika-et-sergi.jpeg"
            alt="Nika & Sergi Martinez"
            width={1000}
            height={666}
          />
          <p>
            Nika & Sergi Martinez sont un couple d’artistes et de danseurs venus
            d’Espagne, passionnés par la Salsa, la Bachata et la Kizomba. Ils
            partagent leur énergie et leur style à travers des stages et des
            démonstrations, pour vous permettre de progresser tout en vous
            amusant. Ils seront avec nous le 14 novembre pour une journée
            complète de stages et une soirée pleine d’animations et de
            démonstrations !
          </p>
        </div>
        <div className="video-wrapper">
          <VideoYoutube
            id="VjeYHpPuKwk"
            title="Nika & Sergi Martinez"
            show={true}
          />
        </div>
      </section>
    </>
  );
}

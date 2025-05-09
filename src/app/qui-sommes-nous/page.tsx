import { ContactForm, Nav } from "@/components/common";
import { SVGIcon, VideoYoutube } from "@/components/ui";
import { env } from "@/utils/env";
import type { Metadata } from "next";
import Image from "next/image";
const titre = "Qui sommes nous - R&C Danse pour tous";
const description =
  "Rose Marie et Carlos LAMEGO, professeurs de Danses passionnés par les Danse de Couple, nous enseignons depuis 1991 de nombreuses danses Latines et Standards y compris salsa, bachata et kizomba, En plus d’être chacun diplômés de l’Institut de Formation en Danses de Société de Toulouse, d’avoir obtenue notre Monitorat (1994) et notre Professorat (1996), nous avons été formés par des grands noms de la Danse tel que Christian Dubar, Elisabeth Béclier et Charly Moser, Nous donnons des cours dans toute l‘Ariège de Lavelanet jusqu’a Pamiers en passant par Verniolle, Laroque d’Olmes, Prayols, Mercus et St Girons.. Aujourd’hui, nous animons de nombreux évènements afin de partager le plaisir de la Danse avec vous !";

export const metadata: Metadata = {
  title: titre,
  description: description,
  authors: [{ name: "Gaetan Ritel" }],
  publisher: "Gaetan Ritel",
  creator: "Gaetan Ritel",
  openGraph: {
    title: titre,
    description: description,
    url: `${env.NEXTAUTH_URL}/`,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${env.NEXTAUTH_URL}/images/danseurs-header.jpg`,
        alt: titre,
      },
    ],
  },
};

export default async function about() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="banner">
          <h1>
            <span>Qui sommes</span> nous <span>?</span>
          </h1>
          <p>
            Plongez dans l’univers envoûtant de la danse avec notre association
            ! <br />
            De la sensualité de la bachata à l’énergie du rock, en passant par
            la chaleur de la salsa et l’élégance de la kizomba, nous vous
            invitons à explorer, apprendre et partager votre passion pour la
            danse avec nous.
            <br /> Rejoignez-nous pour des moments inoubliables et laissez-vous
            emporter par le rythme et la magie de nos cours et événements !
          </p>
          <a href="/qui-sommes-nous#contact-form" className="btn">
            Nous contacter
          </a>
        </div>
      </header>
      <section className="about container">
        <Image
          src="/images/danseurs-header.jpg"
          className="illustration-danseurs"
          alt="Rose et Carlos illustrations"
          width={500}
          height={669}
        />
        <div>
          <h2>A propos de nous</h2>
          <p>
            Rose Marie et Carlos LAMEGO, professeurs de Danses passionnés par
            les Danse de Couple, nous enseignons depuis 1991 de nombreuses
            danses Latines et Standards y compris salsa, bachata et kizomba.
          </p>
          <p>
            En plus d’être chacun diplômés de l’Institut de Formation en Danses
            de Société de Toulouse, d’avoir obtenue notre Monitorat (1994) et
            notre Professorat (1996), nous avons été formés par des grands noms
            de la Danse tel que Christian Dubar, Elisabeth Béclier et Charly
            Moser…
          </p>
          <p>
            Nous donnons des cours dans toute l‘Ariège de Lavelanet jusqu’a
            Pamiers en passant par Verniolle, Laroque d’Olmes, Prayols, Mercus
            et St Girons.. Aujourd’hui, nous animons de nombreux évènements afin
            de partager le plaisir de la Danse avec vous !
          </p>
        </div>
      </section>
      <section className="home-gallerie">
        <div>
          <Image
            src="/images/rose-carlos-01.jpg"
            alt="Rose et carlos"
            width={1000}
            height={562}
          />
          <div className="home-flex">
            <Image
              src="/images/rose-carlos-4.jpg"
              alt="Rose et carlos"
              width={500}
              height={562}
            />
            <div>
              <Image
                src="/images/rose-carlos-5.jpg"
                alt="Rose et carlos"
                width={1440}
                height={810}
              />
              <Image
                src="/images/rose-carlos-2.jpg"
                alt="Rose et carlos"
                width={500}
                height={281}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="home-flex">
            <Image
              src="/images/IMG_4478.jpg"
              alt="Rose et carlos"
              width={600}
              height={675}
            />
            <div>
              <VideoYoutube
                id="-_WF3i0g_3k?si=0T8tqu1jM6V8yFFF"
                title="Rose et Carlos"
                show={true}
              />
              <Image
                src="/images/rose-carlos-8.jpg"
                alt="Rose et carlos"
                width={500}
                height={281}
              />
            </div>
          </div>

          <Image
            src="/images/rose-carlos-02.jpg"
            alt="Rose et carlos"
            width={1000}
            height={562}
          />
        </div>
        <div>
          <VideoYoutube
            id="PFs-_orTLqA?si=tQeGkDSClym7U6LG"
            title="Bachata - Danseurs de la MJC de laroques d’olmes"
            show={true}
          />
          <div className="home-flex">
            <Image
              src="/images/rose-carlos-12.jpg"
              alt="Rose et carlos"
              width={500}
              height={563}
            />
            <div>
              <Image
                src="/images/rose-carlos-10.jpg"
                alt="Rose et carlos"
                width={600}
                height={337}
              />
              <Image
                src="/images/rose-carlos-13.jpg"
                alt="Zenaida & Christian, July & Lau"
                width={500}
                height={281}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="home-flex">
            <div>
              <Image
                src="/images/rose-carlos-6.jpg"
                alt="Rose et carlos"
                width={500}
                height={282}
              />
              <Image
                src="/images/rose-carlos-14.jpg"
                alt="Rose et carlos"
                width={500}
                height={281}
              />
            </div>
            <Image
              src="/images/sebastien-azais.jpg"
              alt="Seb & Shauna"
              width={500}
              height={563}
            />
          </div>
          <VideoYoutube
            id="l4iO1szQGtY?si=xx2fFv5R6xCD7STA"
            title="Boléro par Carlos et Rosa - Lloret 2016 - by CDA31"
            show={true}
          />
        </div>
        <div className="flex-row">
          <Image
            src="/images/fiesta-latino-1.jpg"
            alt="Fanny & Denis"
            width={600}
            height={338}
          />
          <div className="home-flex">
            <Image
              src="/images/fanny-denis.jpg"
              alt="Fanny & Denis"
              width={500}
              height={563}
            />
            <div>
              <Image
                src="/images/carlos-1.jpg"
                alt="Fanny & Denis"
                width={600}
                height={338}
              />
              <VideoYoutube
                id="7wXmKP9sDqw?si=nYJmyqqWUWhh4QqE"
                title="Stage de kizomba avec Rose et Carlos - Saint Girons"
                show={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-contact" id="contact-form">
        <div>
          <h2>Nous contacter</h2>
          <p>
            Vous avez une question, vous souhaitez en savoir plus sur nos
            activités, ou vous voulez prendre des cours particuliers ? Vous
            pouvez utilisez le formulaire ci-dessous. Pour toutes demandes de
            cours particuliers veuillez préciser votre adresse, le nombre de
            personnes ainsi que les danses souhaitées.
          </p>
          <div className="infos">
            <p>Téléphone : 06.88.51.17.15 / 06.73.52.43.17</p>
            <p>Email : contact@rc-dansepourtous.fr</p>
            <div className="socials-links">
              <a
                href="https://www.facebook.com/RCDansePourTous"
                target="_blank"
                rel="noreferrer"
              >
                <SVGIcon name="facebook" />
              </a>
              <a
                href="https://www.youtube.com/@rcdansepourtous"
                target="_blank"
                rel="noreferrer"
              >
                <SVGIcon name="youtube" />
              </a>
              <a
                href="https://www.instagram.com/rc.danse/"
                target="_blank"
                rel="noreferrer"
              >
                <SVGIcon name="instagram" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm endpoint={`${env.NEXTAUTH_URL}/api/contact`} />
      </section>
    </>
  );
}

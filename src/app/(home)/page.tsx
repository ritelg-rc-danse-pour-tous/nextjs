import { Nav } from "@/components/common";
import { env } from "@/utils/env";
import type { Metadata } from "next";
import Image from "next/image";
const titre = "Accueil - R&C Danse pour tous";
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

export default async function Home() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="banner">
          <h1>
            <span>Bienvenu dans la</span> Danse
          </h1>
          <p>
            Plongez dans l’univers envoûtant de la danse avec l'association R&C
            Danse pour tous ! <br />
            De la sensualité de la Bachata à l’énergie du Rock, en passant par
            la chaleur de la Salsa et l’élégance de la Kizomba, nous vous
            invitons à explorer, apprendre et partager notre univers de la
            danse.
            <br /> Rejoignez-nous pour des moments inoubliables et laissez-vous
            emporter par le rythme et la magie de nos cours et événements !
          </p>
          <a href="/qui-sommes-nous#contact-form" className="btn">
            Nous contacter
          </a>
        </div>
      </header>
      <section className="cours" id="nos-cours">
        <div>
          <h2>Nos cours de danses à la MJC Laroque d’olmes</h2>
          <p>
            <br />
            De la Kizomba à la Bachata, en passant par la Salsa et le Rock, nous
            proposons des cours pour tous les goûts et tous les niveaux. Que
            vous soyez débutant ou confirmé, trouvez le cours qui vous
            correspond et rejoignez-nous pour partager des moments de danse
            inoubliables.
            <span className="light">
              Mjc de Laroque d’olmes, Avenue Gabriel Péri, 09600
            </span>
          </p>
        </div>
        <figure>
          <Image
            src={"/images/bachata.jpg"}
            alt="Bachata"
            width={800}
            height={533}
          />
          <figcaption>
            <h3>Bachata</h3>
            <ul>
              <strong>Lundi</strong>
              <li>Intermédiaire : 21h (avec Carlos)</li>
              <li>Avancé : 21h (avec Rose)</li>
            </ul>
            <ul>
              <strong>Mercredi</strong>
              <li>Débutant : de 21h</li>
            </ul>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={"/images/salsa.jpg"}
            alt="Salsa"
            width={800}
            height={571}
          />
          <figcaption>
            <h3>Salsa</h3>
            <ul>
              <strong>Lundi</strong>
              <li>Intermédiaire : 20h (avec Rose)</li>
              <li>Avancé : 20h (avec Carlos)</li>
            </ul>
            <ul>
              <strong>Mercredi</strong>
              <li>Débutant : 21h (avec Rose)</li>
            </ul>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={"/images/kizomba.jpg"}
            alt="Kizomba"
            width={800}
            height={533}
          />
          <figcaption>
            <h3>Kizomba</h3>
            <ul>
              <strong>Mercredi</strong>
              <li>Tout niveau : 19h (avec Rose et Carlos)</li>
            </ul>
          </figcaption>
        </figure>
        <figure>
          <Image src={"/images/rock.jpg"} alt="Rock" width={800} height={534} />
          <figcaption>
            <h3>Rock</h3>
            <ul>
              <strong>Lundi</strong>
              <li>Intermédiaire : 19h (avec Rose)</li>
            </ul>
            <ul>
              <strong>Mercredi</strong>
              <li>Débutant : 20h (avec Carlos)</li>
            </ul>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={"/images/danse-salon.jpg"}
            alt="Danses de salon"
            width={800}
            height={534}
          />
          <figcaption>
            <h3>Danses de salon</h3>
            <p>Valse, Tango, Quick step</p>
            <ul>
              <strong>Mercredi</strong>
              <li>Tout niveau : 20h</li>
            </ul>
          </figcaption>
        </figure>
      </section>
      <section className="events container">
        <h2>Nos Évènements à venir</h2>
        <figure>
          <Image
            src={"/images/soiree.24.05.25.jpg"}
            alt="Planning mont d’olmes"
            width={802}
            height={1134}
          />
          <figcaption>
            <h3>Soirée 100% danse et repas</h3>
            <div>
              <p className="date">
                <img src="/images/date.svg" alt="" />
                24 Mai
              </p>
              <p className="address">
                <img src="/images/address.svg" alt="" />
                Chateaux de roques
              </p>
            </div>
            <p>
              50% Latino Salsa-Bachata-Kizomba <br />
              50% Rock-Swing <br />
              Animations, Initiations, Danses en lignes <br />
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
    </>
  );
}

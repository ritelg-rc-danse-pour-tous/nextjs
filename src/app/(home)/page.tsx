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
            <span>Bienvenue dans la</span> Danse
          </h1>
          <p>
            Plongez dans l’univers envoûtant de la danse avec l’association R&C
            Danse pour tous ! <br />
            De la sensualité de la Bachata à l’énergie du Rock, en passant par
            la chaleur de la Salsa et l’élégance de la Kizomba, nous vous
            invitons à explorer, apprendre et partager notre univers de la
            danse.
            <br /> Rejoignez-nous pour des moments inoubliables et laissez-vous
            emporter par le rythme et la magie de nos cours et événements !
            <br />
            <br />
            <strong>
              🎉 Cet été, on danse aux Monts d’Olmes avec Rose & Carlos ! 🎶
              <br />
              Tous les vendredis du 10 juillet au 28 août 2026 — barbecue géant,
              repas et soirée dansante en plein air !
            </strong>
          </p>
          <a href="/qui-sommes-nous#contact-form" className="btn">
            Nous contacter
          </a>
        </div>
      </header>
      <section className="cours" id="nos-cours">
        <div>
          <h2>Nos cours de danses à la MJC Laroque d’olmes</h2>
          <Image
            src={"/images/flyer-1.jpeg"}
            alt="Fêtes de la musique carnavalesque à Laroque d’olmes"
            width={800}
            height={1128}
          />
          <p>
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
              <strong>Lundi</strong>
              <li>Débutant : 19h (avec Carlos)</li>
            </ul>
            <ul>
              <strong>Mercredi</strong>
              <li>Intermédiaire : 19h (avec Rose et Carlos)</li>
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
      <section className="events container home-events">
        <h2>Nos Évènements à venir</h2>
        <div>
          <figure>
            <Image
              src={"/images/event-mont-dolmes.jpeg"}
              alt="Soirées dansantes aux Monts d’Olmes avec Rose & Carlos"
              width={595}
              height={842}
            />
            <figcaption>
              <h3>Soirées dansantes aux Monts d’Olmes avec Rose & Carlos</h3>
              <p>
                🎉 Cet été, on danse aux Monts d’Olmes avec Rose & Carlos ! 🎶
                <br />
                Cet été, la station des Monts d’Olmes s’anime tous les vendredis
                du 10 juillet au 28 août 2026 pour des soirées inoubliables !
                <br />
                <br />
                Au programme :
                <br />
                DJ Rose & Carlos aux platines
                <br />
                4 ambiances exceptionnelles :
                <br />
                🇫🇷 Ambiance Bretonne → 17 juillet
                <br />
                🇫🇷 Ambiance Occitane → 31 juillet
                <br />
                🇪🇸 Ambiance Basque → 14 août
                <br />
                🇪🇸 Ambiance Espagnole → 28 août
                <br />
                <br />
                Et surtout : Barbecue géant + Repas + Soirée dansante en plein
                air + Apéritifs à thèmes !
                <br />
                Un moment convivial en pleine montagne, à ne surtout pas manquer
                !
                <br />
                <br />
                📍 Monts d’Olmes
                <br />
                🗓 Tous les vendredis soir
                <br />
                🔗 Plus d’infos : www.rc-dansepourtous.fr
                <br />
                📞 06 88 51 17 15 ou 06 73 52 43 17
                <br />
                <br />
                Venez nombreux, on vous attend pour danser tout l’été ! 💃🕺
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

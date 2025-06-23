import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Avis } from "../components/views/All/Avis";
import { Intervention } from "../components/views/All/Intervention";
import { Newsletter } from "../components/views/All/Newsletter";
import { Cta } from "../components/views/Home/Cta";
import { Equipe } from "../components/views/Home/Equipe";
import { Faq } from "../components/views/Home/Faq";
import { GlanceInfo } from "../components/views/Home/GlanceInfo";
import { Heros } from "../components/views/Home/Heros";
import { Infos } from "../components/views/Home/Infos";
import { Pourqui } from "../components/views/Home/Pourqui";
import { Pourquoi } from "../components/views/Home/Pourquoi";
import { Resultats } from "../components/views/Home/Resultats";
import { Tarifs } from "../components/views/Home/Tarifs";
import { Testimonials } from "../components/views/Home/Testimonials";
import { Zone } from "../components/views/Home/Zone";

export function Home() {
  return (
    <>
      <Helmet>
        <title>
          Liposuccion Belgique - Chirurgie Esthétique Expert | Liposuccion.be
        </title>
        <meta
          name="description"
          content="Experts en liposuccion en Belgique. Éliminez la graisse localisée avec nos chirurgiens expérimentés. Résultats naturels, sécurité garantie. Consultation gratuite."
        />
        <meta
          name="keywords"
          content="liposuccion belgique, lipoaspiration, chirurgie esthétique, graisse localisée, ventre, hanches, cuisses, bras, résultats naturels"
        />
        <link rel="canonical" href="https://liposuccion.be/" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Liposuccion.be",
            description: "Spécialistes de la liposuccion en Belgique",
            url: "https://liposuccion.be",
            logo: "https://liposuccion.be/images/logo_liposuccion.png",
            image: "https://liposuccion.be/images/hero.jpeg",
            telephone: "+32-XXX-XXX-XXX",
            address: {
              "@type": "PostalAddress",
              addressCountry: "BE",
              addressRegion: "Belgique",
            },
            medicalSpecialty: "Plastic Surgery",
            serviceType: "Liposuction",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "2000",
            },
          })}
        </script>
      </Helmet>

      <Header className="absolute top-0 left-0 right-0 z-50" />
      <Heros />
      <GlanceInfo />
      <Infos />
      <Zone />
      <Pourqui />
      <Testimonials />
      <Resultats />
      <Tarifs />
      <Faq />
      <Pourquoi />
      <Equipe />
      <Intervention />
      <Avis />
      <Cta />
      <Newsletter />
      <Footer />
    </>
  );
}

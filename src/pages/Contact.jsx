import { Helmet } from "react-helmet";
import { Header } from "../components/Header/Header";
import { Contacter } from "../components/views/Contact/Contacter";
import { Avis } from "../components/views/All/Avis";
import { Footer } from "../components/Footer/Footer";
import { Intervention } from "../components/views/All/Intervention";
import { Newsletter } from "../components/views/All/Newsletter";
import { BackToTop } from "../components/UI/BackToTop";

export function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact - Consultation Liposuccion Belgique | Liposuccion.be
        </title>
        <meta
          name="description"
          content="Contactez nos experts en liposuccion en Belgique. Consultation gratuite, devis personnalisé. Prenez rendez-vous avec nos chirurgiens spécialisés."
        />
        <meta
          name="keywords"
          content="contact liposuccion, consultation gratuite, rendez-vous chirurgie esthétique, devis lipoaspiration belgique"
        />
        <link rel="canonical" href="https://liposuccion.be/contact" />

        {/* Schema.org pour la page contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Liposuccion.be",
            description: "Contactez nos experts en liposuccion",
            url: "https://liposuccion.be/contact",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Liposuccion.be",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: "French",
              },
            },
          })}
        </script>
      </Helmet>

      <Header className="bg-white" color="black" />
      <Contacter />
      <Avis />
      <Intervention />
      <Newsletter />
      <Footer />
    </>
  );
}

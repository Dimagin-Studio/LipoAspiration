import { Header } from "../components/Header/Header";
import { Heros } from "../components/views/Home/Heros";
import { Infos } from "../components/views/Home/Infos";
import { Zone } from "../components/views/Home/Zone";
import { Pourqui } from "../components/views/Home/Pourqui";
import { Testimonials } from "../components/views/Home/Testimonials";
import { Resultats } from "../components/views/Home/Resultats";
import { Tarifs } from "../components/views/Home/Tarifs";
import { Faq } from "../components/views/Home/Faq";
import { Pourquoi } from "../components/views/Home/Pourquoi";
import { Equipe } from "../components/views/Home/Equipe";
import { Intervention } from "../components/views/All/Intervention";
import { Avis } from "../components/views/All/Avis";
import { Cta } from "../components/views/Home/Cta";
import { Footer } from "../components/Footer/Footer";
import { Newsletter } from "../components/views/All/Newsletter";

export function Home() {
  return (
    <>
      <Header className="absolute top-0 left-0 right-0 z-50" />
      <Heros />
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

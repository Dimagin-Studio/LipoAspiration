import { Header } from "../components/Header/Header";
import { Contacter } from "../components/views/Contact/Contacter";
import { Avis } from "../components/views/All/Avis";
import { Footer } from "../components/Footer/Footer";
import { Intervention } from "../components/views/All/Intervention";
import { Newsletter } from "../components/views/All/Newsletter";

export function Contact() {
  return (
    <>
      <Header className="bg-white" color="black" />
      <Contacter />
      <Avis />
      <Intervention />
      <Newsletter />
      <Footer />
    </>
  );
}

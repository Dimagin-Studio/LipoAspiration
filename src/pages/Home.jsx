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

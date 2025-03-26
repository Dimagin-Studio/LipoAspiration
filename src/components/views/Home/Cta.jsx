import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Cta() {
	return (
		<section className="relative h-[620px] w-full overflow-hidden">
			<div
				className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center animate-zoom"
				style={{
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>
			<div className="absolute inset-0 bg-black/30"></div>
			<div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
				<Title color="white" className="text-center">
					<span className="block">PRETE À TRANSFORMER</span>
					<span className="block mt-2">VOTRE SILHOUETTE</span>
				</Title>
				<Paragraphe color="white" className="text-center max-w-2xl mx-auto">
					Réservez votre consultation dès maintenant et faites le premier pas
					vers un corps harmonieux et sculpté.
				</Paragraphe>
				<Button className="mt-6 sm:mt-8" text="Prendre Rendez-vous" />
			</div>
		</section>
	);
}

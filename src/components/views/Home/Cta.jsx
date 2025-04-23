import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

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
			<div className="absolute inset-0 bg-black/10"></div>

			<motion.div
				className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<Title color="white" className="text-center">
					<span className="block">PRETE À TRANSFORMER</span>
					<span className="block mt-2">VOTRE SILHOUETTE</span>
				</Title>

				<Paragraphe color="white" className="text-center max-w-2xl mx-auto">
					Réservez votre consultation dès maintenant et faites le premier pas
					vers un corps harmonieux et sculpté.
				</Paragraphe>

				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="mt-6 sm:mt-8"
				>
					<Button text="Prendre Rendez-vous" />
				</motion.div>
			</motion.div>
		</section>
	);
}

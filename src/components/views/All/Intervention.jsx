import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Intervention() {
	return (
		<section
			id="Intervention"
			className="w-full px-4 py-16 sm:py-24 bg-[#E9EAEB]"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
					<motion.div
						className="flex justify-center"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<div className="w-full">
							<img
								src="/images/intervention.jpeg"
								alt="résultats photos"
								className="rounded-2xl w-full h-full object-cover"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
					>
						<Title color="black" className="uppercase">
							Nos lieux d’intervention et de consultation
						</Title>
						<div className="space-y-6">
							<Paragraphe color="black">
								Nous vous accueillons dans des cliniques partenaires hautement
								équipées et certifiées, situées en Belgique. Les consultations
								pré- et post-opératoires sont organisées dans des espaces
								confortables, pensés pour votre bien-être et votre
								confidentialité. Chaque lieu a été sélectionné pour offrir un
								environnement sûr, rassurant et accessible.
							</Paragraphe>
							{/* <Paragraphe color="black">
								<span className="font-bold">
									Clinique Esthétique Parisienne
								</span>
								<br />
								45 Rue de la Santé, 75013 Paris, France
							</Paragraphe>
							<Paragraphe color="black">
								<span className="font-bold">
									Centre Médical de Chirurgie Esthétique Lyon
								</span>
								<br />
								120 Avenue de la République, 69003 Lyon, France
							</Paragraphe> */}
							<Paragraphe color="black">
								<span className="font-bold">Espace Médical Rogier</span>
								<br />
								28 Avenue Rogier, 4000 Liège
							</Paragraphe>
							<Paragraphe color="black">
								199 Avenue Louise, 1000 Bruxelles
							</Paragraphe>
							<Paragraphe color="black">
								34 Rue du Wairchat, 6240 Fariciennes
							</Paragraphe>
							<Paragraphe color="black">
								34 Rue Grande, 7330 Saint-Ghislain
							</Paragraphe>
							<Paragraphe color="black">
								4 Rue Ferrer, 6567 Merbes-Le-Château
							</Paragraphe>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

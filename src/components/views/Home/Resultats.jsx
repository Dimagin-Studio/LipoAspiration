import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Resultats() {
	const [showSecondPara, setShowSecondPara] = useState(false);

	return (
		<section className="container mx-auto px-4 py-16 sm:py-24">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
					<motion.div
						className="flex justify-center"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="w-[80%]">
							<img
								src="/images/resultats.jpeg"
								alt="résultats photos"
								className="rounded-tl-full rounded-tr-full rounded-br-full w-full h-auto object-cover"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Title color="black">
							RÉSULTATS : <br />
							UNE SILOUHETTE AFFINÉE
						</Title>

						<motion.h3
							className="text-2xl sm:text-3xl lg:text-4xl font-oswald text-black mb-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Des contours redéfinis, un corps harmonisé
						</motion.h3>

						<motion.div
							className="space-y-6"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: false, amount: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Paragraphe color="black">
								Après l’intervention, il est normal que la peau mette quelques
								semaines à retrouver toute sa sensibilité. Le port d’une{" "}
								<strong className="font-bold">gaine de contention,</strong>{" "}
								essentiel pour optimiser le remodelage, est recommandé pendant 2
								à 4 semaines, selon les recommandations du chirurgien.
							</Paragraphe>

							<Paragraphe color="black" className="hidden md:block">
								Les premiers changements sont visibles dès les premiers jours,
								mais le{" "}
								<strong className="font-bold">résultat définitif</strong> se
								révèle pleinement après 2 à 3 mois, lorsque les tissus traités
								se sont assouplis et se sont parfaitement adaptés à leur
								nouvelle forme.
							</Paragraphe>

							<div className="md:hidden space-y-4">
								{showSecondPara && (
									<Paragraphe color="black">
										Les premiers changements sont visibles rapidement, mais le
										résultat définitif s'apprécie pleinement après 2 à 3 mois,
										une fois que les tissus traités se sont assouplis et adaptés
										à leur nouvelle forme.
									</Paragraphe>
								)}
								<button
									onClick={() => setShowSecondPara((prev) => !prev)}
									className="bg-blue-600 text-white font-quicksand px-4 py-2 rounded-full transition-colors hover:bg-blue-700"
								>
									{showSecondPara ? "Voir moins" : "Voir plus"}
								</button>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

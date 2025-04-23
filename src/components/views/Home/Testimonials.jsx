import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const steps = [
		{
			id: 1,
			title: "Prise de contact / Avis",
			description:
				"Une consultation est indispensable pour analyser votre situation, vous informer en toute transparence et définir un traitement personnalisé, en vous laissant le temps de réfléchir sereinement.",
			image: "/images/testimonials/etape1.jpeg",
		},
		{
			id: 2,
			title: "Consultation pré-opératoire",
			description:
				"Le médecin évalue les zones concernées, explique le déroulement de l’intervention et réalise des photos médicales. Cette étape permet d’établir un plan personnalisé et de répondre à toutes vos questions.",
			image: "/images/testimonials/etape2.jpeg",
		},
		{
			id: 3,
			title: "Intervention",
			description:
				"La liposuccion est réalisée dans un environnement médical sécurisé. L’intervention est adaptée à votre morphologie et utilise des techniques modernes pour garantir un résultat naturel et une récupération optimale.",
			image: "/images/testimonials/etape3.jpeg",
		},
		{
			id: 4,
			title: "Consultation de suivi",
			description:
				"Un rendez-vous post-opératoire est prévu pour évaluer votre récupération, répondre à vos questions et garantir un résultat optimal.",
			image: "/images/testimonials/etape4.jpg",
		},
	];

	const canSlideLeft = currentIndex > 0;
	const canSlideRight = currentIndex < steps.length - 1;

	const slideLeft = () => {
		if (canSlideLeft) setCurrentIndex(currentIndex - 1);
	};

	const slideRight = () => {
		if (canSlideRight) setCurrentIndex(currentIndex + 1);
	};

	return (
		<section id="Resultats" className="w-full bg-[#E9EAEB] py-16 sm:py-24">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
				>
					<div className="mb-6 md:mb-0">
						<Title color="black">DÉROULEMENT DE LA SÉANCE</Title>
						<Paragraphe color="black">
							Un processus en 4 étapes pour une transformation en toute sérénité
						</Paragraphe>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: false, amount: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="hidden md:flex gap-4"
					>
						<button
							onClick={slideLeft}
							disabled={!canSlideLeft}
							className={`p-2 rounded-full border transition-colors ${
								canSlideLeft
									? "border-gray-300 hover:bg-gray-100 text-gray-800"
									: "border-gray-200 text-gray-400 cursor-not-allowed"
							}`}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							onClick={slideRight}
							disabled={!canSlideRight}
							className={`p-2 rounded-full border transition-colors ${
								canSlideRight
									? "border-gray-300 hover:bg-gray-100 text-gray-800"
									: "border-gray-200 text-gray-400 cursor-not-allowed"
							}`}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</motion.div>
				</motion.div>

				<div className="md:overflow-visible">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: false, amount: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out md:-mx-4 gap-8 md:gap-0"
						style={{
							transform: `translateX(-${currentIndex * (100 / 3)}%)`,
						}}
					>
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false, amount: 0.2 }}
								transition={{
									duration: 0.4,
									delay: index === 3 ? 0.1 : 0.1 * index,
								}}
								className="w-full md:min-w-[calc(50%-2rem)] md:px-4"
							>
								<div className="relative h-[500px] rounded-2xl overflow-hidden">
									<img
										src={step.image}
										alt={step.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-black/30"></div>
									<div className="absolute bottom-0 left-0 right-0 p-6">
										<div className="bg-white/40 backdrop-blur-md p-6 rounded-lg text-white w-full min-h-[180px] flex flex-col justify-center">
											<div className="flex items-baseline gap-2 mb-2">
												<span className="text-4xl font-oswald">{step.id}.</span>
												<h3 className="text-2xl font-oswald">{step.title}</h3>
											</div>
											<p className="font-quicksand text-lg text-left">
												{step.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

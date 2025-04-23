import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion, AnimatePresence } from "motion/react";

export function Faq() {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: "La liposuccion est-elle douloureuse?",
			answer:
				"L’intervention est réalisée sous anesthésie locale. Des douleurs modérées peuvent survenir après l’opération, semblables à des courbatures, et sont bien contrôlées par des antalgiques.",
		},
		{
			question: "Est-ce que la liposuccion fait perdre du poids ?",
			answer:
				"Non, la liposuccion n’est pas une méthode d’amaigrissement. Elle cible les excès de graisse localisés et permet de remodeler la silhouette, mais ne remplace pas un régime ou une activité physique régulière.",
		},
		{
			question: "La liposuccion peut-elle éliminer l'excédent de peau?",
			answer:
				"La liposuccion ne retire pas directement l’excès de peau. Toutefois, la peau peut se rétracter progressivement après l’intervention, surtout si son élasticité est bonne.",
		},
		{
			question: "Les résultats sont-ils permanents ?",
			answer:
				"Oui, les cellules graisseuses retirées ne se régénèrent pas. Toutefois, une bonne hygiène de vie est essentielle pour maintenir les résultats sur le long terme.",
		},
		{
			question: "Combien de temps dure l’intervention ?",
			answer:
				"La durée varie selon les zones traitées, mais elle est généralement comprise entre 1 et 2 heures.",
		},
		{
			question: "Y a-t-il des cicatrices ?",
			answer:
				"Les incisions sont très petites (quelques millimètres) et discrètement placées. Avec le temps, elles s’estompent nettement.",
		},
		{
			question: "Combien de temps avant de voir les résultats définitifs ?",
			answer:
				"Un premier changement est visible rapidement, mais les résultats définitifs s’observent après 2 à 3 mois, une fois l’œdème résorbé et les tissus stabilisés.",
		},
		{
			question: "Puis-je traiter plusieurs zones en une seule fois ?",
			answer:
				"Oui, il est possible de traiter plusieurs zones lors d’une seule intervention, selon votre état de santé et l’avis du chirurgien.",
		},
		{
			question: "Y a-t-il des risques ou effets secondaires ?",
			answer:
				"Comme toute intervention chirurgicale, la liposuccion comporte certains risques (ecchymoses, gonflements, engourdissements temporaires…). Un bon suivi médical permet de limiter ces effets et d’assurer une récupération optimale.",
		},
		{
			question: "À partir de quel âge peut-on envisager une liposuccion ?",
			answer:
				"La liposuccion peut être envisagée à l’âge adulte, généralement à partir de 18 ans, lorsque le développement corporel est terminé. Un avis médical est toujours nécessaire.",
		},
		{
			question: "La liposuccion est-elle adaptée aux hommes ?",
			answer:
				"Oui, de plus en plus d’hommes ont recours à la liposuccion, notamment pour traiter les poignées d’amour, l’abdomen ou la poitrine (gynécomastie).",
		},
	];

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="Faq"
			className="container mx-auto px-4 py-16 sm:py-24 bg-white"
		>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
				<motion.div
					className="flex flex-col justify-center md:pl-12 px-4 text-center md:text-left"
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<Title color="black">
						VOS QUESTIONS,
						<br />
						NOS RÉPONSES
					</Title>

					<Paragraphe color="black" className="mt-2">
						Tout ce qu’il faut savoir avant de vous lancer !
					</Paragraphe>

					<motion.button
						className="font-quicksand text-semibold text-white bg-black p-2 rounded-full w-full md:w-2/5 mt-6 mx-auto md:mx-0"
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						Parler à un Expert
					</motion.button>
				</motion.div>

				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							layout
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.1 }}
							transition={{ duration: 0.3, delay: 0.1 * index }}
							className="border-b border-gray-300"
						>
							<button
								className="w-full flex justify-between items-center py-4 text-left text-lg font-quicksand text-black"
								onClick={() => toggleFaq(index)}
							>
								<span>{faq.question}</span>
								{openIndex === index ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-gray-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-gray-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</button>
							<AnimatePresence initial={false}>
								{openIndex === index && (
									<motion.p
										key="content"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="text-gray-600 font-quicksand pb-4"
									>
										{faq.answer}
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

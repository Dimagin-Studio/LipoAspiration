import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Avis() {
	return (
		<section className="container mx-auto px-4 py-16 sm:py-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<Title color="black" className="text-center">
					ILS NOUS ONT FAIT CONFIANCE
				</Title>
				<Paragraphe color="black" className="text-center mb-8 sm:mb-12">
					Découvrez les témoignages de nos patients satisfaits.
				</Paragraphe>
			</motion.div>

			<div className="flex justify-center items-center lg:px-40">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
					{[
						{
							name: "Émilie Durand",
							text: "L'intervention s'est déroulée à la perfection, et le résultat est incroyable. Une équipe professionnelle et rassurante du début à la fin !",
							image: "temoin1.jpeg",
						},
						{
							name: "Sophie Martin",
							text: "Une expérience très positive. L'équipe médicale a été à l'écoute de mes besoins et le résultat dépasse mes attentes.",
							image: "temoin2.jpeg",
						},
						{
							name: "Marie Lambert",
							text: "Je recommande vivement cette clinique. Le professionnalisme et le suivi sont exemplaires.",
							image: "temoin3.jpeg",
						},
						{
							name: "Julie Dubois",
							text: "Résultats naturels et équipe médicale très compétente. Je suis ravie de mon choix.",
							image: "temoin4.jpeg",
						},
					].map((testimonial, index) => (
						<motion.article
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.02, y: -4 }}
							viewport={{ once: false, amount: 0.1 }}
							transition={{
								duration: 0.4,
								ease: "easeInOut",
								delay: index * 0.1,
							}}
							className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col items-center text-center p-6"
						>
							<div className="mb-4">
								<img
									src={`/images/Avis/${testimonial.image}`}
									alt={`Témoignage de ${testimonial.name}`}
									className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md"
								/>
							</div>

							<div className="flex justify-center mb-3 sm:mb-4">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								))}
							</div>
							<Paragraphe color="black" className="mb-3 sm:mb-4">
								"{testimonial.text}"
							</Paragraphe>
							<Paragraphe color="black" className="font-medium">
								- {testimonial.name}
							</Paragraphe>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

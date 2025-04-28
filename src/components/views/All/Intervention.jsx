import { motion } from "motion/react";
import { addresses } from "../../../constants/addresses";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Intervention() {
	return (
		<section id="Cliniques" className="w-full px-4 py-16 sm:py-24 bg-[#E9EAEB]">
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
							Nos lieux d'intervention et de consultation
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
							{addresses.map((item, index) => (
								<Paragraphe key={index} color="black">
									{item.name && (
										<>
											<span className="font-bold">{item.name}</span>
											<br />
										</>
									)}
									{item.address}
								</Paragraphe>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

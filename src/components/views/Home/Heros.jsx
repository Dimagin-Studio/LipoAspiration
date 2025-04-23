import { motion } from "motion/react";
import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

const backgroundVariants = {
	hidden: { scale: 1 },
	visible: {
		scale: 1.1,
		transition: {
			duration: 10,
			ease: "easeInOut",
		},
	},
};

export function Heros() {
	return (
		<section className="relative h-screen w-full overflow-hidden py-16 sm:py-24">
			<motion.div
				className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center"
				variants={backgroundVariants}
				initial="hidden"
				animate="visible"
			/>

			<div className="absolute inset-0 bg-black/10"></div>

			<div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
				<Title
					color="white"
					className="animate__animated animate__fadeInDown"
					style={{ animationDelay: "0.2s" }}
				>
					<span className="block">AFFINEZ VOTRE SILOUHETTE,</span>
					<span className="block mt-2">RÉVÉLEZ VOTRE CONFIANCE</span>
				</Title>

				<Paragraphe
					color="white"
					className="text-center mt-4 animate__animated animate__fadeInUp"
					style={{ animationDelay: "0.4s" }}
				>
					Une liposuccion encadrée par des médecins spécialisés, pour une
					transformation en toute sérénité.
				</Paragraphe>

				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="mt-12 sm:mt-16 animate__animated animate__fadeInUp"
					style={{ animationDelay: "0.6s" }}
				>
					<Button text="Prendre Rendez-vous" />
				</motion.div>
			</div>
		</section>
	);
}

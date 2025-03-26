import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Infos() {
	const images = [
		{
			src: "/images/avantaprès.png",
			alt: "Avant et après liposuccion abdominale",
		},
		{
			src: "/images/hero.jpeg",
			alt: "Avant et après liposuccion des cuisses",
		},
		{
			src: "/images/avantaprès.png",
			alt: "Avant et après liposuccion des bras",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<section id="Apropos" className="container mx-auto px-4 py-16 sm:py-24">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-12 lg:gap-20">
				<div className="md:w-1/3">
					<Title color="black">LA LIPOSUCCION</Title>
				</div>
				<div className="md:w-2/3 space-y-8">
					<div className="space-y-6 text-gray-700 font-quicksand text-lg">
						<Paragraphe color="black">
							La liposuccion, également connue sous le nom de lipoaspiration ou
							liposculpture, est une intervention chirurgicale qui vise à
							éliminer les dépôts de graisse indésirables de certaines zones du
							corps. Cette technique permet de remodeler et de sculpter le corps
							en retirant les excès de graisse qui résistent aux méthodes
							traditionnelles comme le régime alimentaire et l'exercice
							physique.
						</Paragraphe>
						<Paragraphe color="black">
							Initialement développée dans les années 1970, la liposuccion a
							considérablement évolué au fil des ans. Les techniques de
							chirurgie esthétique actuelles sont de moins en moins invasives et
							offrent des résultats plus naturels avec des temps de récupération
							plus courts. Il est à noter que la lipoaspiration ne constitue pas
							une méthode d'amaigrissement ou de contrôle de poids. Elle
							consiste à aspirer les cellules graisseuses localisées et
							excédentaires, qui ne réapparaîtront pas.
						</Paragraphe>
					</div>

					<div className="space-y-4" id="Avantapres">
						<div className="relative w-full h-[400px] rounded-lg overflow-hidden">
							<img
								src={images[currentIndex].src}
								alt={images[currentIndex].alt}
								className="w-full h-full object-cover"
							/>
							<div className="absolute top-4 left-4 bg-white/80 px-4 py-1 rounded font-quicksand">
								Avant
							</div>
							<div className="absolute top-4 right-4 bg-white/80 px-4 py-1 rounded font-quicksand">
								Après
							</div>
						</div>
						<div className="flex justify-start gap-4">
							<button
								onClick={goToPrevious}
								className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</button>
							<button
								onClick={goToNext}
								className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

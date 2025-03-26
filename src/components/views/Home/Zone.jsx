import { useEffect, useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Zone() {
	const zones = [
		{
			id: "ventre",
			name: "VENTRE & ABDOMEN",
			image: "/images/Zone/ventre.jpeg",
		},
		{
			id: "hanches",
			name: "HANCHES",
			image: "/images/Zone/hanche.jpeg",
		},
		{
			id: "cuisses",
			name: "CUISSES",
			image: "/images/Zone/cuisse.jpeg",
		},
		{
			id: "fesses",
			name: "FESSES",
			image: "/images/Zone/fesse.jpeg",
		},
		{
			id: "dos",
			name: "DOS",
			image: "/images/Zone/dos.jpeg",
		},
		{
			id: "bras",
			name: "BRAS",
			image: "/images/Zone/bras.jpeg",
		},
		{
			id: "genoux",
			name: "GENOUX",
			image: "/images/Zone/jambe.jpeg",
		},
	];

	const [selectedZone, setSelectedZone] = useState(zones[0]);
	const [autoplayPaused, setAutoplayPaused] = useState(false);

	useEffect(() => {
		if (!autoplayPaused) {
			const interval = setInterval(() => {
				setSelectedZone((currentZone) => {
					const currentIndex = zones.findIndex(
						(zone) => zone.id === currentZone.id
					);
					const nextIndex = (currentIndex + 1) % zones.length;
					return zones[nextIndex];
				});
			}, 5000);

			return () => clearInterval(interval);
		}
	}, [autoplayPaused, zones]);

	const handleZoneClick = (zone) => {
		setSelectedZone(zone);
		setAutoplayPaused(true);

		const timeout = setTimeout(() => {
			setAutoplayPaused(false);
		}, 10000);

		return () => clearTimeout(timeout);
	};

	return (
		<section className="relative h-screen py-16 sm:py-24">
			<div className="absolute inset-0">
				<img
					src={selectedZone.image}
					alt={`Zone ${selectedZone.name}`}
					className="w-full h-full object-cover transition-all duration-700 ease-in-out"
				/>
				<div className="absolute inset-0 bg-black/30 transition-opacity duration-700"></div>
			</div>

			<div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
				<div className="max-w-6xl mx-auto">
					<div className="md:w-1/2">
						<Title color="white">
							ZONES CIBLÉES :<br />
							SCULPTEZ VOTRE
							<br />
							SILHOUETTE
						</Title>
						<Paragraphe color="white" className="mb-12 max-w-3xl">
							La liposuccion permet de traiter avec précision les amas graisseux
							tenaces pour harmoniser votre silhouette. Certaines zones sont
							particulièrement propices à cette intervention pour des résultats
							visibles et durables.
						</Paragraphe>
					</div>
					<div className="flex flex-wrap md:flex-nowrap justify-between gap-4 pl-6">
						{zones.map((zone) => (
							<button
								key={zone.id}
								onClick={() => handleZoneClick(zone)}
								className={`
                  flex items-center gap-2 px-4 py-2 rounded-full font-quicksand transition-colors whitespace-nowrap text-lg
                  ${
										selectedZone.id === zone.id
											? "bg-black text-white"
											: "bg-white/80 text-black hover:bg-white"
									}
                `}
							>
								<img
									src={`${zone.image}`}
									alt=""
									className="w-6 h-6 object-contain rounded-full"
								/>
								{zone.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

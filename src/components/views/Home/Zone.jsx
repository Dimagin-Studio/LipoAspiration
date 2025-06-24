import "animate.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Zone() {
  const zones = [
    {
      id: "ventre",
      name: "VENTRE & ABDOMEN",
      image: "/images/Zone/ventre.jpeg",
      description:
        "La liposuccion cible efficacement les amas graisseux du ventre et de l’abdomen pour un ventre plat et une taille affinée, même en cas de résistance au sport ou au régime.",
    },
    {
      id: "hanches",
      name: "HANCHES",
      image: "/images/Zone/hanche.jpeg",
      description:
        "Dites adieu aux poignées d’amour grâce à la liposuccion, qui redessine les courbes et affine la silhouette latérale.",
    },
    {
      id: "cuisses",
      name: "CUISSES",
      image: "/images/Zone/cuisse.jpeg",
      description:
        "La liposuccion des cuisses (face interne et externe) affine la jambe, améliore le galbe et favorise une harmonie naturelle de la silhouette.",
    },
    {
      id: "fesses",
      name: "FESSES",
      image: "/images/Zone/fesse.jpeg",
      description:
        "Affinez et raffermissez vos fesses tout en préservant leur galbe naturel, pour un résultat ferme et équilibré.",
    },
    {
      id: "dos",
      name: "DOS",
      image: "/images/Zone/dos.jpeg",
      description:
        "Éliminez les bourrelets du dos pour une silhouette lisse et élégante, idéale sous des vêtements ajustés.",
    },
    {
      id: "bras",
      name: "BRAS",
      image: "/images/Zone/bras.jpeg",
      description:
        "Retrouver des bras toniques et affinés en supprimant l’effet « bras tombants » grâce à la liposuccion ciblée.",
    },
    {
      id: "genoux",
      name: "GENOUX",
      image: "/images/Zone/jambe.jpeg",
      description:
        "La liposuccion autour des genoux affine la jambe et contribue à une ligne plus élégante et harmonieuse.",
    },
    {
      id: "culotte de cheval",
      name: "CULOTTE DE CHEVAL",
      image: "/images/Zone/culotte.png",
      description:
        "Éliminez la graisse localisée et obtenez des jambes plus sculptées et une silhouette affinée grâce à une intervention ciblée.",
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
    <section className="relative h-screen py-16 sm:py-24" id="Avantapres">
      <div className="absolute inset-0">
        <img
          src={selectedZone.image}
          alt={`Zone ${selectedZone.name}`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-700"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="relative h-full container mx-auto px-4 flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <Title color="white">
              Zones ciblées par la liposuccion : sculptez votre silhouette{" "}
              <br /> sur-mesure
            </Title>
            <h3 className="text-4xl font-bold text-white">
              {selectedZone.name}
            </h3>
            <Paragraphe color="white" className="mb-6 max-w-3xl">
              {selectedZone.description}
            </Paragraphe>
          </div>

          <div className="flex flex-wrap justify-start gap-4 animate__animated animate__fadeInUp">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => handleZoneClick(zone)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full font-quicksand
                  transition-colors whitespace-nowrap text-lg
                  ${
                    selectedZone.id === zone.id
                      ? "bg-black text-white"
                      : "bg-white/80 text-black hover:bg-white"
                  }
                `}
              >
                <img
                  src={zone.image}
                  alt=""
                  className="w-6 h-6 object-contain rounded-full"
                />
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

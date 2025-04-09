import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import "animate.css";

export function Zone() {
  const zones = [
    {
      id: "ventre",
      name: "VENTRE & ABDOMEN",
      image: "/images/Zone/ventre.jpeg",
      description:
        "Le ventre et l'abdomen sont souvent sujets aux amas graisseux. La liposuccion permet de retrouver une silhouette affinée et harmonieuse.",
    },
    {
      id: "hanches",
      name: "HANCHES",
      image: "/images/Zone/hanche.jpeg",
      description:
        "Les poignées d'amour situées sur les hanches peuvent être traitées efficacement pour redéfinir les courbes du corps.",
    },
    {
      id: "cuisses",
      name: "CUISSES",
      image: "/images/Zone/cuisse.jpeg",
      description:
        "Que ce soit la face interne ou externe, la liposuccion des cuisses améliore le galbe et l'harmonie des jambes.",
    },
    {
      id: "fesses",
      name: "FESSES",
      image: "/images/Zone/fesse.jpeg",
      description:
        "La liposuccion permet d'affiner les fesses sans compromettre leur volume naturel, pour un rendu plus ferme.",
    },
    {
      id: "dos",
      name: "DOS",
      image: "/images/Zone/dos.jpeg",
      description:
        "Les bourrelets du dos peuvent être ciblés pour une silhouette plus lisse, surtout sous les vêtements ajustés.",
    },
    {
      id: "bras",
      name: "BRAS",
      image: "/images/Zone/bras.jpeg",
      description:
        "La liposuccion des bras supprime l'effet 'bras tombants' et redonne du tonus au haut du corps.",
    },
    {
      id: "genoux",
      name: "GENOUX",
      image: "/images/Zone/jambe.jpeg",
      description:
        "Affiner la zone autour des genoux contribue à une ligne de jambe plus harmonieuse et plus élégante.",
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
              ZONES CIBLÉES :<br />
              SCULPTEZ VOTRE
              <br />
              SILHOUETTE
            </Title>
            <Paragraphe color="white" className="mb-6 max-w-3xl">
              {selectedZone.description}
            </Paragraphe>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-start gap-4 animate__animated animate__fadeInUp">
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

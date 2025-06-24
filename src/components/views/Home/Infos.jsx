import { useState } from "react";
import { motion } from "motion/react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import "animate.css";

export function Infos() {
  const images = [
    {
      src: "/images/avantaprès.png",
      alt: "Avant et après liposuccion abdominale",
    },
    {
      src: "/images/avantapres2.png",
      alt: "Avant et après liposuccion des bras",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSecondPara, setShowSecondPara] = useState(false);

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-12 lg:gap-20"
      >
        <div className="md:w-1/3">
          <Title color="black">
            Liposuccion : Remodeler votre silhouette de façon ciblée et durable
          </Title>
        </div>

        <div className="md:w-2/3 space-y-8">
          <div className="space-y-6 text-gray-700 font-quicksand text-lg">
            <h3 className="text-2xl font-bold">
              Qu’est-ce que la liposuccion ?
            </h3>
            <Paragraphe color="black">
              La liposuccion, aussi appelée lipoaspiration ou liposculpture, est
              une intervention de chirurgie esthétique qui vise à retirer de
              manière définitive les excès de graisse localisés. Cette technique
              permet de cibler précisément les zones rebelles du corps – ventre,
              hanches, cuisses, bras – pour obtenir une silhouette harmonieuse
              et affinée, là où régime et sport restent inefficaces.
            </Paragraphe>

            <h3 className="text-2xl font-bold">
              Les avantages de la liposuccion moderne
            </h3>
            <Paragraphe color="black" className="hidden md:block">
              Grâce aux avancées médicales depuis les années 1970, la
              liposuccion est aujourd’hui plus sûre, moins invasive et offre des
              résultats naturels. Les techniques actuelles garantissent un
              confort optimal, une récupération rapide et des cicatrices
              minimes, pour une expérience patient améliorée.
            </Paragraphe>

            <h3 className="text-2xl font-bold">
              Liposuccion : pour qui et dans quel objectif ?
            </h3>
            <Paragraphe color="black" className="hidden md:block">
              La liposuccion ne remplace pas un régime ou une activité physique
              régulière. Elle s’adresse aux personnes proches de leur poids
              idéal souhaitant éliminer des amas graisseux persistants. Il
              s’agit d’une solution ciblée et durable pour redéfinir les
              contours du corps, et non d’une méthode d’amaigrissement globale.
            </Paragraphe>

            <div className="md:hidden space-y-4">
              {showSecondPara && (
                <Paragraphe color="black">
                  Initialement développée dans les années 1970, la liposuccion a
                  considérablement évolué au fil des ans. Les techniques de
                  chirurgie esthétique actuelles sont de moins en moins
                  invasives et offrent des résultats plus naturels avec des
                  temps de récupération plus courts. Il est à noter que la
                  lipoaspiration ne constitue pas une méthode d'amaigrissement
                  ou de contrôle de poids. Elle consiste à aspirer les cellules
                  graisseuses localisées et excédentaires, qui ne réapparaîtront
                  pas.
                </Paragraphe>
              )}
              <button
                onClick={() => setShowSecondPara((prev) => !prev)}
                className="bg-blue-600 text-white font-quicksand px-4 py-2 rounded-full transition-colors hover:bg-blue-700"
              >
                {showSecondPara ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="space-y-4"
            id="Avantapres"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden animate__animated animate__fadeIn">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/80 px-4 py-1 rounded font-quicksand animate__animated animate__fadeInLeft">
                Avant
              </div>
              <div className="absolute top-4 right-4 bg-white/80 px-4 py-1 rounded font-quicksand animate__animated animate__fadeInRight">
                Après
              </div>
            </div>

            <div className="flex justify-start gap-4 animate__animated animate__fadeInUp">
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

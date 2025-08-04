import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Equipe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialists = [
    {
      name: "Docteur Emmanuel Blairvacq",
      title: "Médecin esthétique et nutritionniste",
      image: "/images/equipe/Emmanuel-Blairvacq.JPG",
    },
    {
      name: "Docteur Julien Félix",
      title: "Chirurgien urologue et médecin esthétique",
      image: "/images/equipe/Julien-Félix.JPG",
    },

    // {
    //   name: "Dr. Clara Dupont",
    //   title: "Chirurgienne Esthétique Spécialiste",
    //   image: "/images/equipe/membre1.jpeg",
    // },
    // {
    //   name: "Dr. Marc Lefevre",
    //   title: "Chirurgien Plastique et Reconstructeur",
    //   image: "/images/equipe/membre2.png",
    // },
    // {
    // 	name: "Dr. Sophie Bernard",
    // 	title: "Spécialiste en Médecine Liposculpture",
    // 	image: "/images/equipe/membre3.png",
    // },
    // {
    // 	name: "Dr. Thomas Martin",
    // 	title: "Chirurgien Esthétique",
    // 	image: "/images/equipe/membre4.png",
    // },
  ];

  return (
    <section
      id="Intervenants"
      className="container mx-auto px-4 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-6 md:mb-0">
            <Title color="black">NOTRE ÉQUIPE DE SPÉCIALISTES </Title>
            <Paragraphe color="black">
              Des experts à votre écoute pour des résultats parfaits
            </Paragraphe>
          </div>
        </motion.div>

        <div className="md:overflow-visible">
          <div
            className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out md:-mx-4 gap-8 md:gap-0"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {specialists.map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="w-full md:min-w-[calc(25%-2rem)] md:px-4"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-200">
                  <div className="aspect-[4/5]">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-md bg-opacity-90 min-h-[135px]">
                    <h3 className="text-2xl font-oswald mb-1 text-white">
                      {specialist.name}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-quicksand text-white max-w-2xl mx-auto">
                      {specialist.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

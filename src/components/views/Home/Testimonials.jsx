import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "Évaluation personnalisée, informations détaillées et plan de traitement sur mesure.",
      image: "/images/testimonials/etape1.jpeg",
    },
    {
      id: 2,
      title: "Intervention",
      description:
        "Incisions discrètes, aspiration ciblée des graisses sous anesthésie.",
      image: "/images/testimonials/etape2.jpeg",
    },
    {
      id: 3,
      title: "Réveil",
      description: "Observation post-opératoire et retour à domicile.",
      image: "/images/testimonials/etape3.jpeg",
    },
    {
      id: 4,
      title: "Suivi",
      description:
        "Accompagnement personnalisé et suivi régulier pour des résultats optimaux.",
      image: "/images/testimonials/etape4.jpg",
    },
  ];

  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex < steps.length - 3;

  const slideLeft = () => {
    if (canSlideLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (canSlideRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="Resultats" className="w-full bg-[#E9EAEB] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Title color="black">DÉROULEMENT DE LA SÉANCE</Title>
            <Paragraphe color="black">
              Un processus en 4 étapes pour une transformation en toute sérénité
            </Paragraphe>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={slideLeft}
              disabled={!canSlideLeft}
              className={`p-2 rounded-full border transition-colors ${
                canSlideLeft
                  ? "border-gray-300 hover:bg-gray-100 text-gray-800"
                  : "border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={slideRight}
              disabled={!canSlideRight}
              className={`p-2 rounded-full border transition-colors ${
                canSlideRight
                  ? "border-gray-300 hover:bg-gray-100 text-gray-800"
                  : "border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:overflow-visible">
          <div
            className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out md:-mx-4 gap-8 md:gap-0"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full md:min-w-[calc(33.333%-2rem)] md:px-4"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/40 backdrop-blur-md p-6 rounded-lg text-white w-full min-h-[180px] flex flex-col justify-center">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-oswald">{step.id}.</span>
                        <h3 className="text-2xl font-oswald">{step.title}</h3>
                      </div>
                      <p className="font-quicksand text-lg text-center md:text-left">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

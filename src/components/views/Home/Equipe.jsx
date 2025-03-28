import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Equipe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialists = [
    {
      name: "Dr. Clara Dupont",
      title: "Chirurgienne Esthétique Spécialiste",
      image: "/images/equipe/membre1.jpeg",
    },
    {
      name: "Dr. Marc Lefevre",
      title: "Chirurgien Plastique et Reconstructeur",
      image: "/images/equipe/membre2.png",
    },
    {
      name: "Dr. Sophie Bernard",
      title: "Spécialiste en Médecine Liposculpture",
      image: "/images/equipe/membre3.png",
    },
    {
      name: "Dr. Thomas Martin",
      title: "Chirurgien Esthétique",
      image: "/images/equipe/membre4.png",
    },
  ];

  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex < specialists.length - 3;

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
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Title color="black">NOTRE ÉQUIPE DE SPÉCIALISTES </Title>
            <Paragraphe color="black">
              Des experts à votre écoute pour des résultats parfaits
            </Paragraphe>
          </div>
          <div className="hidden lg:flex gap-4">
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
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className="w-full md:min-w-[calc(33.333%-2rem)] md:px-4"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-200">
                  <div className="aspect-[4/5]">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/30 backdrop-blur-md bg-opacity-90 ">
                    <h3 className="text-2xl font-oswald mb-1 text-white">
                      {specialist.name}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-quicksand text-white max-w-2xl mx-auto">
                      {specialist.title}
                    </p>
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

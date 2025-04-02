import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "La liposuccion est-elle douloureuse ?",
      answer:
        "L'inconfort est comparable à des courbatures et bien géré par des antalgiques. Une légère sensation d'engourdissement peut persister mais s'estompe rapidement.",
    },
    {
      question: "Combien de temps pour récupérer ?",
      answer: "lorem ipsum dolor sit amet",
    },
    {
      question: "Les résultats sont-ils définitifs ?",
      answer: "lorem ipsum dolor sit amet",
    },
    {
      question: "À quel âge peut-on faire une liposuccion ?",
      answer: "lorem ipsum dolor sit amet",
    },
    {
      question: "Les cicatrices sont-elles visibles ?",
      answer: "lorem ipsum dolor sit amet",
    },
    {
      question: "Quand reprendre le sport ?",
      answer: "lorem ipsum dolor sit amet",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="Faq"
      className="container mx-auto px-4 py-16 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Partie de gauche : même rendu desktop, adapté pour mobile */}
        <div
          className="
            flex flex-col justify-center
            md:pl-12    /* Conserve le même padding à gauche dès le md breakpoint */
            px-4       /* Ajout d’un léger padding horizontal sur mobile */
            text-center md:text-left
          "
        >
          <Title color="black">
            VOS QUESTIONS,
            <br />
            NOS RÉPONSES
          </Title>

          <Paragraphe color="black" className="mt-2">
            Tout ce qu’il faut savoir avant de vous lancer !
          </Paragraphe>

          <button
            className="
              font-quicksand text-semibold text-white bg-black p-2 rounded-full
              w-full md:w-2/5   /* Pleine largeur en mobile, 2/5 sur desktop */
              mt-6
              mx-auto md:mx-0  /* Centré en mobile, aligné à gauche en desktop */
            "
          >
            Parler à un Expert
          </button>
        </div>

        {/* Partie de droite : FAQ inchangée */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-lg font-quicksand text-black"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 font-quicksand pb-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

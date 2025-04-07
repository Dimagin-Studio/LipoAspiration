import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion, AnimatePresence } from "framer-motion";

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
      answer:
        "La récupération prend environ 1 à 2 semaines pour les activités légères.",
    },
    {
      question: "Les résultats sont-ils définitifs ?",
      answer: "Oui, à condition de maintenir un mode de vie sain.",
    },
    {
      question: "À quel âge peut-on faire une liposuccion ?",
      answer: "À partir de 18 ans, sous réserve d’un bon état de santé.",
    },
    {
      question: "Les cicatrices sont-elles visibles ?",
      answer: "Elles sont discrètes et placées dans des zones peu visibles.",
    },
    {
      question: "Quand reprendre le sport ?",
      answer: "Généralement après 4 à 6 semaines, selon avis médical.",
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
        <motion.div
          className="flex flex-col justify-center md:pl-12 px-4 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Title color="black">
            VOS QUESTIONS,
            <br />
            NOS RÉPONSES
          </Title>

          <Paragraphe color="black" className="mt-2">
            Tout ce qu’il faut savoir avant de vous lancer !
          </Paragraphe>

          <motion.button
            className="font-quicksand text-semibold text-white bg-black p-2 rounded-full w-full md:w-2/5 mt-6 mx-auto md:mx-0"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Parler à un Expert
          </motion.button>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="border-b border-gray-300"
            >
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
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-600 font-quicksand pb-4"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

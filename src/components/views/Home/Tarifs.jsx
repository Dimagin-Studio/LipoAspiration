import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "framer-motion";

export function Tarifs() {
  return (
    <section
      id="Price"
      className="w-full py-16 sm:py-24 bg-[#E9EAEB] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title color="black" className="text-center">
            NOS TARIFS
          </Title>
          <Paragraphe color="black" className="text-center mb-12">
            Des solutions adaptées à vos besoins
          </Paragraphe>
        </motion.div>

        <div className="justify-items-center">
          {[
            {
              title: "Essentielle",
              price: "2500 €",
              description: "L'essentiel formule pour affiner une zone ciblée.",
              items: [
                "Traitement d'une zone",
                "Consultation pré-opératoire incluse",
                "Anésthésie locale",
                "Suivi post-opératoire",
              ],
            },
          ].map((box, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="w-full bg-white p-10 rounded-2xl shadow-lg cursor-pointer transition-transform flex flex-col items-center text-center"
            >
              <h4 className="font-oswald text-3xl mb-4 text-black">
                {box.title}
              </h4>
              <Paragraphe
                color="black"
                className="text-lg font-quicksand font-medium mb-2"
              >
                À partir de
              </Paragraphe>
              <span className="text-5xl font-semibold font-quicksand text-black mb-6">
                {box.price}
              </span>
              <Paragraphe
                color="black"
                className="text-base font-quicksand font-medium mb-6 leading-relaxed max-w-xl"
              >
                {box.description}
              </Paragraphe>

              <hr className="border-gray-200 w-full mb-6" />
              <ul className="flex flex-col items-start gap-4 w-full mb-8 sm:flex-wrap sm:flex-row sm:justify-center sm:gap-6">
                {" "}
                {box.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-500 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                    </svg>
                    <span className="font-quicksand text-lg font-medium leading-snug text-left break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 w-full mb-6" />
              <Button
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-quicksand font-medium text-lg"
                text="Prendre Rendez-Vous"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

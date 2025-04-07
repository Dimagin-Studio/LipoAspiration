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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
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
            {
              title: "Silhouette",
              price: "4500 €",
              description: "Un remodelage harmonieux sur plusieurs zones.",
              items: [
                "Traitement de 2 à 3 zones",
                "Anesthésie générale",
                "Hospitalisation ambulatoire",
                "Suivi personnalisé",
              ],
            },
            {
              title: "Premium",
              price: "6500 €",
              description: "Résultats optimaux avec un accompagnement complet.",
              items: [
                "Traitement de plusieurs zones",
                "Séjour en clinique inclus",
                "Vêtements de contention fournis",
                "Suivi médical renforcé",
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
              className="w-full max-w-[405px] bg-white p-8 rounded-2xl shadow-lg cursor-pointer transition-transform"
            >
              <h4 className="font-oswald text-2xl mb-6">{box.title}</h4>
              <div className="flex justify-between items-baseline mb-8">
                <Paragraphe
                  color="black"
                  className="text-lg font-quicksand font-medium"
                >
                  À partir de{" "}
                  <span className="font-quicksand text-4xl text-black ml-1 font-semibold">
                    {box.price}
                  </span>
                </Paragraphe>
              </div>
              <Paragraphe
                color="black"
                className="mb-8 font-quicksand font-medium"
              >
                {box.description}
              </Paragraphe>
              <div className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center flex items-center justify-center"
                  text="Prendre Rendez-Vous"
                />
                <hr className="border-gray-200" />
              </div>
              <ul className="space-y-4 mt-6">
                {box.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-500 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                    </svg>
                    <span className="font-quicksand font-medium text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

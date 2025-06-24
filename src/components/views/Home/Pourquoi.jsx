import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Pourquoi() {
  return (
    <section id="Pourquoi" className="w-full px-4 py-16 sm:py-24 bg-[#E9EAEB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Title color="black">
              Pourquoi choisir notre équipe pour votre liposuccion ?
            </Title>
            <div className="space-y-6 mb-6">
              <Paragraphe color="black">
                Opter pour notre équipe, c’est faire le choix de la sécurité, de
                l’expertise et de l’accompagnement sur-mesure à chaque étape de
                votre liposuccion.
              </Paragraphe>
              <ul className="space-y-4">
                <li className="font-quicksand text-lg">
                  <strong>Des chirurgiens spécialisés</strong> et expérimentés
                </li>
                <li className="font-quicksand text-lg">
                  <strong>Des technologies de pointe</strong> pour des résultats
                  naturels et durables
                </li>
                <li className="font-quicksand text-lg">
                  <strong>Un suivi personnalisé</strong> avant, pendant et après
                  l’intervention
                </li>
                <li className="font-quicksand text-lg">
                  <strong>Une approche humaine</strong> axée sur l’écoute, la
                  transparence et votre bien-être
                </li>
              </ul>
              <Paragraphe color="black">
                Votre confort, votre sécurité et votre satisfaction sont nos
                priorités absolues.
              </Paragraphe>
              <Paragraphe color="black">
                <strong>
                  Contactez-nous pour un accompagnement sur-mesure et découvrez
                  comment la liposuccion peut transformer votre silhouette en
                  toute confiance.
                </strong>
              </Paragraphe>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block"
            >
              <Button text="Prendre Rendez-Vous" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-[80%]">
              <img
                src="/images/pourquoi confiance.jpeg"
                alt="résultats photos"
                className="rounded-tl-full rounded-tr-full rounded-br-full w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

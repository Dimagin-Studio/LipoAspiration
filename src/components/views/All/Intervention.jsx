import { motion } from "motion/react";
import { addresses } from "../../../constants/addresses";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Intervention() {
  return (
    <section id="Cliniques" className="w-full px-4 py-16 sm:py-24 bg-[#E9EAEB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-full">
              <img
                src="/images/intervention.jpeg"
                alt="résultats photos"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Title color="black" className="uppercase">
              Où réaliser votre liposuccion ? Nos cliniques partenaires en
              Belgique
            </Title>
            <div className="space-y-6">
              <Paragraphe color="black">
                Pour votre liposuccion, nous vous recevons dans des cliniques
                esthétiques partenaires, certifiées et équipées des dernières
                technologies, situées en Belgique.
              </Paragraphe>

              <ul className="space-y-4">
                <li className="font-quicksand text-lg">
                  <strong>Confort et confidentialité</strong> à chaque étape
                </li>
                <li className="font-quicksand text-lg">
                  <strong>Environnement médical sécurisé</strong> et accessible
                </li>
                <li className="font-quicksand text-lg">
                  <strong>Accompagnement personnalisé</strong> pour votre
                  bien-être
                </li>
              </ul>
              <Paragraphe color="black">
                Chaque établissement a été sélectionné pour répondre aux plus
                hauts standards de qualité et de sécurité.
              </Paragraphe>

              <Paragraphe color="black">
                <strong>Nos adresses en Belgique :</strong>
              </Paragraphe>
              {addresses.map((item, index) => (
                <Paragraphe key={index} color="black">
                  {item.name && (
                    <>
                      <span className="font-bold">{item.name}</span>
                      <br />
                    </>
                  )}
                  {item.address}
                </Paragraphe>
              ))}
              <Paragraphe color="black">
                <strong>
                  Contactez-nous pour choisir la clinique la plus proche de chez
                  vous et organiser votre première consultation en toute
                  sérénité.
                </strong>
              </Paragraphe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
            <Title color="black">Pourquoi nous faire confiance?</Title>
            <div className="space-y-6 mb-6">
              <Paragraphe color="black">
                La liposuccion est une solution efficace pour éliminer
                durablement les graisses localisées qui résistent aux régimes et
                au sport. Grâce aux techniques modernes, l’intervention est plus
                précise, la récupération rapide et les résultats naturels.
              </Paragraphe>
              <Paragraphe color="black">
                En choisissant notre équipe, vous bénéficiez de l’expertise de
                chirurgiens spécialisés, d’un accompagnement personnalisé et
                d’un suivi attentif à chaque étape. Nous utilisons des
                technologies de pointe pour garantir votre confort, votre
                sécurité et des résultats harmonieux, adaptés à votre
                silhouette.
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

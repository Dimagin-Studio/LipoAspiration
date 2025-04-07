import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "framer-motion";

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
            <Title color="black">POURQUOI CHOISIR LA LIPOSUCCION ?</Title>
            <div className="space-y-6 mb-6">
              <Paragraphe color="black">
                La liposuccion est la solution idéale pour éliminer
                définitivement les graisses résistantes aux régimes et au sport.
                Grâce aux techniques modernes, l’intervention est plus précise,
                avec une récupération rapide et des résultats naturels. Offrez à
                votre corps un contour harmonieux et sculpté.
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
                src="/images/hanche2.jpeg"
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

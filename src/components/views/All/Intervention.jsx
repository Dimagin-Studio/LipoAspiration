import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "framer-motion";

export function Intervention() {
  return (
    <section
      id="Intervention"
      className="w-full px-4 py-16 sm:py-24 bg-[#E9EAEB]"
    >
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
            <Title color="black">LIEU D'INTERVENTION</Title>
            <div className="space-y-6">
              <Paragraphe color="black">
                Nos interventions de liposuccion sont réalisées dans des
                cliniques modernes et agréées, équipées des dernières
                technologies pour garantir votre sécurité et votre confort.
                Chaque lieu a été soigneusement sélectionné pour offrir un
                environnement optimal, propice à une récupération rapide et
                efficace.
              </Paragraphe>
              <Paragraphe color="black">
                <span className="font-bold">
                  Clinique Esthétique Parisienne
                </span>
                <br />
                45 Rue de la Santé, 75013 Paris, France
              </Paragraphe>
              <Paragraphe color="black">
                <span className="font-bold">
                  Centre Médical de Chirurgie Esthétique Lyon
                </span>
                <br />
                120 Avenue de la République, 69003 Lyon, France
              </Paragraphe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

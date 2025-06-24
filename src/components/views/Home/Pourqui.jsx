import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "motion/react";

export function Pourqui() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <Title color="black">
          À qui s’adresse la liposuccion ? Profils idéaux et précautions
        </Title>

        <Paragraphe color="black" className="mb-12">
          La liposuccion s’adresse aux personnes désireuses de sculpter leur
          silhouette en éliminant des amas graisseux localisés, résistants aux
          régimes et à l’activité physique. Idéale pour celles et ceux ayant une
          peau élastique et un poids stable, cette intervention permet d’obtenir
          un résultat harmonieux et durable, à condition d’avoir des attentes
          réalistes sur les bénéfices.
        </Paragraphe>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-2xl font-oswald mb-6">Indications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-quicksand text-lg">
                  <strong>Graisses localisées</strong> résistantes aux méthodes
                  classiques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-quicksand text-lg">
                  <strong>Bonne élasticité de la peau</strong> pour une
                  rétraction optimale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-quicksand text-lg">
                  <strong>Poids stable</strong> et proche de l’IMC idéal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-quicksand text-lg">
                  <strong>Attentes réalistes</strong> quant aux résultats
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-oswald mb-6">Contre-indications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span className="font-quicksand text-lg">
                  <strong>Obésité</strong> ou recherche d’une perte de poids
                  globale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span className="font-quicksand text-lg">
                  <strong>Manque d’élasticité cutanée</strong> risquant un
                  relâchement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span className="font-quicksand text-lg">
                  <strong>Maladies chroniques non stabilisées</strong> (diabète,
                  troubles cardiovasculaires…)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span className="font-quicksand text-lg">
                  <strong>Grossesse ou allaitement</strong> en cours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span className="font-quicksand text-lg">
                  <strong>Troubles de la coagulation</strong> empêchant une
                  cicatrisation optimale
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="w-6 h-6 text-red-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
    </svg>
  );
}

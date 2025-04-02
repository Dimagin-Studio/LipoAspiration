import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Pourqui() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <Title color="black">
          LA LIPOSUCCION, <br />
          POUR QUI ?
        </Title>
        <Paragraphe color="black" className="mb-12">
          Cette intervention s'adresse aux personnes souhaitant affiner leur
          silhouette en ciblant les graisses localisées résistantes aux régimes
          et à l'exercice. Elle est idéale pour celles et ceux ayant une peau
          élastique et un poids stable, afin d'obtenir des résultats harmonieux
          et durables.
        </Paragraphe>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <h3 className="text-2xl font-oswald mb-6">Indications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Présence de graisses localisées résistantes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Bonne élasticité de la peau
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Poids stable et proche de l'IMC recommandé
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Attentes réalistes sur les résultats
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-oswald mb-6">Contre-indications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Obésité ou recherche d'une perte de poids globale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Manque d'élasticité cutanée risquant un relâchement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Maladies chroniques non stabilisées (diabète, troubles
                  cardiovasculaires, etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Grossesse ou allaitement en cours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                </svg>
                <span className="font-quicksand text-lg">
                  Troubles de la coagulation empêchant une cicatrisation
                  optimale
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Tarifs() {
  return (
    <section
      id="Price"
      className="w-full py-16 sm:py-24 bg-[#E9EAEB] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Title color="black" className="text-center">
          NOS TARIFS
        </Title>
        <Paragraphe color="black" className="text-center mb-12">
          Des solutions adaptées à vos besoins
        </Paragraphe>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          <article className="w-full max-w-[405px] bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="font-oswald text-2xl mb-6">Essentielle</h4>
            <div className="flex justify-between items-baseline mb-8">
              <Paragraphe
                color="black"
                className="text-lg font-quicksand font-medium"
              >
                À partir de{" "}
                <span className="font-quicksand text-4xl text-black ml-1 font-semibold">
                  2500 €
                </span>
              </Paragraphe>
            </div>
            <Paragraphe
              color="black"
              className="mb-8 font-quicksand font-medium"
            >
              L'essentiel formule pour affiner une zone ciblée.
            </Paragraphe>
            <div className="flex flex-col space-y-4">
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center flex items-center justify-center"
                text="Prendre Rendez-Vous"
              />
              <hr className="border-gray-200" />
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Traitement d'une zone
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Consultation pré-opératoire incluse
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Anésthésie locale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Suivi post-opératoire
                </span>
              </li>
            </ul>
          </article>

          <article className="w-full max-w-[405px] bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="font-oswald text-2xl mb-6">Silhouette</h4>
            <div className="flex justify-between items-baseline mb-8">
              <Paragraphe
                color="black"
                className="text-lg font-quicksand font-medium"
              >
                À partir de{" "}
                <span className="font-quicksand text-4xl text-black ml-1 font-semibold">
                  4500 €
                </span>
              </Paragraphe>
            </div>
            <Paragraphe
              color="black"
              className="mb-8 font-quicksand font-medium"
            >
              Un remodelage harmonieux sur plusieurs zones.
            </Paragraphe>
            <div className="flex flex-col space-y-4">
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center flex items-center justify-center"
                text="Prendre Rendez-Vous"
              />
              <hr className="border-gray-200" />
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Traitement de 2 à 3 zones
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Anesthésie générale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Hospitalisation ambulatoire
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Suivi personnalisé
                </span>
              </li>
            </ul>
          </article>

          <article className="w-full max-w-[405px] bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="font-oswald text-2xl mb-6">Premium</h4>
            <div className="flex justify-between items-baseline mb-8">
              <Paragraphe
                color="black"
                className="text-lg font-quicksand font-medium"
              >
                À partir de{" "}
                <span className="font-quicksand text-4xl text-black ml-1 font-semibold">
                  6500 €
                </span>
              </Paragraphe>
            </div>
            <Paragraphe
              color="black"
              className="mb-8 font-quicksand font-medium"
            >
              Résultats optimaux avec un accompagnement complet.
            </Paragraphe>
            <div className="flex flex-col space-y-4">
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center flex items-center justify-center"
                text="Prendre Rendez-Vous"
              />
              <hr className="border-gray-200" />
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Traitement de plusieurs zones
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Séjour en clinique inclus
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Vêtements de contention fournis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                <span className="font-quicksand font-medium text-lg">
                  Suivi médical renforcé
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

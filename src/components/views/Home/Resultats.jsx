import { useState } from "react";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

export function Resultats() {
  const [showSecondPara, setShowSecondPara] = useState(false);

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="flex justify-center">
            <div className="w-[80%]">
              <img
                src="/images/resultats.jpeg"
                alt="résultats photos"
                className="rounded-tl-full rounded-tr-full rounded-br-full w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <Title color="black">
              RÉSULTATS : <br />
              UNE SILOUHETTE AFFINÉE
            </Title>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald text-black mb-6">
              Des contours redéfinis, un corps harmonisé
            </h3>

            <div className="space-y-6">
              <Paragraphe color="black">
                Après l'intervention, il faut quelques semaines pour que la peau
                retrouve toute sa sensibilité. Le port d'une gaine de
                contention, essentiel pour optimiser le remodelage, est
                recommandé jour et nuit pendant 2 à 6 semaines selon les
                conseils du chirurgien.
              </Paragraphe>

              <Paragraphe color="black" className="hidden md:block">
                Les premiers changements sont visibles rapidement, mais le
                résultat définitif s'apprécie pleinement après 2 à 3 mois, une
                fois que les tissus traités se sont assouplis et adaptés à leur
                nouvelle forme.
              </Paragraphe>

              <div className="md:hidden">
                {showSecondPara ? (
                  <Paragraphe color="black">
                    Les premiers changements sont visibles rapidement, mais le
                    résultat définitif s'apprécie pleinement après 2 à 3 mois,
                    une fois que les tissus traités se sont assouplis et adaptés
                    à leur nouvelle forme.
                  </Paragraphe>
                ) : (
                  <button
                    className="text-blue-600 underline"
                    onClick={() => setShowSecondPara(true)}
                  >
                    Voir plus
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

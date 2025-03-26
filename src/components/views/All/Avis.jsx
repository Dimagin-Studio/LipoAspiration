import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Avis() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <Title color="black" className="text-center">
        ILS NOUS ONT FAIT CONFIANCE
      </Title>
      <Paragraphe color="black" className="text-center mb-8 sm:mb-12">
        Découvrez les témoignages de nos patients satisfaits.
      </Paragraphe>
      <div className="flex justify-center items-center lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {[
            {
              name: "Émilie Durand",
              text: "L'intervention s'est déroulée à la perfection, et le résultat est incroyable. Une équipe professionnelle et rassurante du début à la fin !",
              image: "temoin1.jpeg",
            },
            {
              name: "Sophie Martin",
              text: "Une expérience très positive. L'équipe médicale a été à l'écoute de mes besoins et le résultat dépasse mes attentes.",
              image: "temoin2.jpeg",
            },
            {
              name: "Marie Lambert",
              text: "Je recommande vivement cette clinique. Le professionnalisme et le suivi sont exemplaires.",
              image: "temoin3.jpeg",
            },
            {
              name: "Julie Dubois",
              text: "Résultats naturels et équipe médicale très compétente. Je suis ravie de mon choix.",
              image: "temoin4.jpeg",
            },
          ].map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex h-full"
            >
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2">
                  <div className="h-full">
                    <img
                      src={`/images/Avis/${testimonial.image}`}
                      alt={`Témoignage de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center h-full">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <Paragraphe color="black" className="mb-3 sm:mb-4">
                    "{testimonial.text}"
                  </Paragraphe>
                  <Paragraphe color="black" className="font-medium">
                    - {testimonial.name}
                  </Paragraphe>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

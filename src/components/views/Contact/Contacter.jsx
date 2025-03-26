import { Button } from "../../UI/Button";

export function Contacter() {
  return (
    <section className="container mx-auto px-4 min-h-screen py-16 sm:py-24 font-semibold">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-12">
          <div className="h-[800px]">
            <img
              src="public/images/equipe/member5.jpeg"
              alt="contact"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald text-black mb-6">
                CONTACTEZ-NOUS
              </h2>
              <p className="text-gray-700 font-quicksand font-medium text-xl mb-8">
                Une question ? Besoin d'un rendez-vous ? Notre équipe est à
                votre écoute.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="nom"
                      className="text-gray-700 font-medium mb-2 font-quicksand"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      placeholder="EX : Dupont"
                      className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="prenom"
                      className="text-gray-700 font-medium mb-2 font-quicksand"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      placeholder="EX : Pauline"
                      className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="EX : votreEmail@gmail.com"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="telephone"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    placeholder="EX : X XX XX XX"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="sujet"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Sujet
                  </label>
                  <select
                    name="sjet"
                    id="sujet"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">Merci de choisir un sujet</option>
                    <option value="dog">Prise de rendez-vous</option>
                    <option value="cat">Information</option>
                    <option value="hamster">Autres</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Saisir Votre Message"
                    rows="4"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>
                <Button
                  text="Envoyer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center flex items-center justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

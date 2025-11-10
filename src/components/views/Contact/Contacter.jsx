import { motion } from "motion/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contacter() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id || name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    emailjs
      .sendForm(
        "service_rvc7p7o", // Remplacez par votre Service ID obtenu dans EmailJS
        "template_ahm7ssn", // Remplacez par votre Template ID obtenu dans EmailJS
        formRef.current,
        "GH_245kuvQRBGJIue" // Remplacez par votre clé publique (Account > API Keys)
      )
      .then((result) => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
        });
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
        });
      })
      .catch((error) => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: error.text,
        });
      });
  };

  return (
    <section className="container mx-auto px-4 min-h-screen py-16 sm:py-24 font-semibold">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="images/equipe/rendez-vous2.jpg"
              alt="contact"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald text-black mb-6">
                CONTACTEZ-NOUS
              </h2>
              <p className="text-gray-700 font-quicksand font-medium text-xl mb-8">
                Une question ? Besoin d'un rendez-vous ? Notre équipe est à
                votre écoute.
              </p>

              {formStatus.isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <p className="font-quicksand">
                    Votre message a bien été envoyé. Nous vous répondrons dans
                    les plus brefs délais.
                  </p>
                </div>
              ) : null}

              {formStatus.error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                  <p className="font-quicksand">
                    Une erreur est survenue: {formStatus.error}
                  </p>
                </div>
              ) : null}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="EX : Dupont"
                      className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
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
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="EX : Pauline"
                      className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EX : votreEmail@gmail.com"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
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
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
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
                    name="sujet"
                    id="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  >
                    <option value="">Merci de choisir un sujet</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="information">Information</option>
                    <option value="autres">Autres</option>
                  </select>
                </div>
                {/* <div className="flex flex-col">
                  <label
                    htmlFor="lieux"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Lieux d'intervention
                  </label>
                  <select
                    name="lieux"
                    id="lieux"
                    value={formData.lieux}
                    onChange={handleChange}
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  >
                    <option value="">
                      Merci de choisir un lieu d'intervention
                    </option>
                    <option value="Liège">Liège</option>
                    <option value="Bruxelles">Bruxelles</option>
                    <option value="Charleroi">Charleroi</option>
                    <option value="Binche">Binche</option>
                    <option value="Mons">Mons</option>
                    <option value="Autres">Autres</option>
                  </select>
                </div> */}

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium mb-2 font-quicksand"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Saisir Votre Message"
                    rows="4"
                    className="font-quicksand px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-quicksand font-medium text-center"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

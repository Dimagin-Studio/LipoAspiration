import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setErrorMessage("Veuillez vérifier le Captcha.");
      return;
    }

    try {
      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer YOUR_API_TOKEN`,
          },
          body: JSON.stringify({
            email,
            groups: ["117872522076096341"],
          }),
        }
      );

      const data = await response.json();
      if (data.errors) {
        setErrorMessage(data.errors[0]?.message || "Erreur inattendue.");
        return;
      }

      setSuccessMessage("Merci de vous être inscrit(e) à notre newsletter !");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16 sm:py-24 h-auto sm:h-[400px] mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <Title color="black" className="text-center">
          Ne manquez aucune info !
        </Title>

        <Paragraphe
          color="black"
          className="text-center w-full sm:w-[50%] mx-auto font-medium"
        >
          Recevez en avant-première nos conseils, actualités, et offres
          exclusives directement dans votre boîte mail.
        </Paragraphe>

        <form className="mt-10" onSubmit={handleSubmit}>
          {errorMessage && (
            <p className="error text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="success text-green-500 text-center">
              {successMessage}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-end gap-4 mt-6">
            {/* Label visible */}
            <div className="w-full sm:w-auto flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-black font-quicksand font-semibold"
              >
                Votre adresse e-mail
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="ex : nom@email.com"
                className="font-quicksand font-normal px-5 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm w-full sm:min-w-[300px]"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black text-white font-quicksand px-6 py-3 rounded-full font-medium w-full sm:w-auto text-lg"
            >
              S'abonner
            </motion.button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          />
        </div>
      </div>
    </motion.section>
  );
}

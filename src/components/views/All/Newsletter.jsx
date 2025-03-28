import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";

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
    <section className="container mx-auto px-4 py-16 sm:py-24 h-[400px] mb-14">
      <div className="max-w-6xl mx-auto ">
        <Title color="black" className="text-center">
          Ne manquez aucune info !
        </Title>
        <Paragraphe
          color="black"
          className="text-center w-[50%] mx-auto font-medium"
        >
          Recevez en avant-première nos conseils, actualités, et offres
          exclusives directement dans votre boîte mail.
        </Paragraphe>

        <form
          className="flex justify-center gap-2 mt-4"
          onSubmit={handleSubmit}
        >
          {errorMessage && <p className="error text-red-500">{errorMessage}</p>}
          {successMessage && (
            <p className="success text-green-500">{successMessage}</p>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Saisir votre email"
            className="font-quicksand font-normal px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />

          <button
            type="submit"
            className="bg-black text-white font-quicksand px-4 py-2 rounded-full font-medium"
          >
            S'abonner
          </button>
        </form>
        <ReCAPTCHA
          className="flex justify-center mt-4"
          ref={recaptchaRef}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        />
      </div>
    </section>
  );
}

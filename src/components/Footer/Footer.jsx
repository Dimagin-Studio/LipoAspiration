import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 sm:py-24 font-quicksand font-medium ">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-4">
            <img
              src="/images/lotus.png"
              alt="Logo"
              className="w-[80px] sm:w-[100px]"
            />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Transformez votre corps avec des experts en liposuccion. Des
            résultats naturels et durables dans un cadre sécurisé et
            professionnel.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-yellow-400">★★★★★</span>
            <div>
              Satisfaction 100%
              <br />
              <span className="text-xs">2.000+ avis</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Liens</h3>
          <ul className="space-y-2 text-gray-400 text-sm ">
            <li>
              <a href="#" className="hover:text-white">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Avant / Après
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Indications
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Nos prix
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Clients
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Infos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vie privée
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Paiement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Adresses</h3>
          <div className="text-gray-400 text-sm mb-4">
            <p className="font-bold text-white">
              Clinique Esthétique Parisienne
            </p>
            <p>45 Rue de la Santé, 75013 Paris, France</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="font-bold text-white">
              Centre Médical de Chirurgie Esthétique
            </p>
            <p>120 Avenue de la République, 69003 Lyon, France</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">© 2025 - LIPOASPIRATION.BE</p>
        <p className="text-sm text-gray-500">Design & developed by Dimagin</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Pinterest"
            className="text-gray-400 hover:text-white"
          >
            <FaPinterest size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="text-gray-400 hover:text-white"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="#"
            aria-label="X / Twitter"
            className="text-gray-400 hover:text-white"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

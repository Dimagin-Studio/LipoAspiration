import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { addresses } from "../../constants/addresses";
import { links } from "../../constants/links";

export function Footer() {
  const columns = [
    "Transformez votre corps avec des experts en liposuccion...",
    "Liens",
    "Infos",
    "Adresses",
  ];

  return (
    <footer className="bg-black text-white py-16 sm:py-24 font-quicksand font-medium">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <div className="mb-4">
            <img
              src="/images/logo_liposuccion_white.png"
              alt="Logo"
              className="h-[30px] lg:h-[40px]"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">Liens</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-4">Infos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Mentions légales", "Vie privée", "Paiement", "Contact"].map(
              (link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Adresses</h3>
          <div className="text-gray-400 text-sm mb-4 space-y-2">
            {addresses.map((address, i) => (
              <p key={i}>{address.address}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">© 2025 - LIPOSUCCION.BE</p>
        <p className="text-sm text-gray-500">
          Design & developed by{" "}
          <a
            href="https://dimagin.be"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Dimagin
          </a>
        </p>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[FaInstagram, FaPinterest, FaFacebookF, FaTiktok, FaXTwitter].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                aria-label="social"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={20} />
              </motion.a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

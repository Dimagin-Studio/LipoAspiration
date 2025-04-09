import { useState } from "react";
import { Button } from "../UI/Button";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

export function Header({ className = "", color = "white" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href="/" className="flex-shrink-0">
        <img
          src="/images/lotus.png"
          alt="Logo"
          className="w-[80px] sm:w-[100px]"
        />
      </a>
      <nav className="hidden md:flex flex-1 items-center font-normal">
        <div className="flex-1 flex justify-center">
          <ul
            className={`flex items-center space-x-4 lg:space-x-8 font-quicksand text-base lg:text-lg ${
              color === "black" ? "text-black" : "text-white"
            }`}
          >
            <li>
              <a href="/" className="hover:text-gray-300">
                Accueil
              </a>
            </li>
            <li>
              <a href="/#Apropos" className="hover:text-gray-300">
                A propos
              </a>
            </li>
            <li>
              <a href="/#Avantapres" className="hover:text-gray-300">
                Avant/Après
              </a>
            </li>
            <li>
              <a href="/#Resultats" className="hover:text-gray-300">
                Comment ça marche ?
              </a>
            </li>
            <li>
              <a href="/#Price" className="hover:text-gray-300">
                Nos prix
              </a>
            </li>
            <li>
              <a href="/#Faq" className="hover:text-gray-300">
                Faqs
              </a>
            </li>
          </ul>
        </div>
        <Button text="Prendre Rendez-vous" />
      </nav>
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-black z-50"
        >
          <Menu className="w-8 h-8 text-white stroke-black" />
        </button>
      )}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-quicksand text-black">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-black"
          >
            <X className="w-8 h-8" />
          </button>
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </a>
          <a href="/#Apropos" onClick={() => setIsMenuOpen(false)}>
            À propos
          </a>
          <a href="/#Avantapres" onClick={() => setIsMenuOpen(false)}>
            Avant/Après
          </a>
          <a href="/#Resultats" onClick={() => setIsMenuOpen(false)}>
            Comment ça marche ?
          </a>
          <a href="/#Price" onClick={() => setIsMenuOpen(false)}>
            Nos prix
          </a>
          <a href="/#Faq" onClick={() => setIsMenuOpen(false)}>
            Faqs
          </a>

          <Button text="Prendre Rendez-vous" />
        </div>
      )}
    </motion.header>
  );
}

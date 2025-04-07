import { motion } from "framer-motion";

export function Button({ text, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <a
        href="/contact"
        className={` font-quicksand text-semibold text-white bg-[#218EF5] p-3 px-6 rounded-full hover:bg-blue-600 ${className}`}
      >
        {text}
      </a>
    </motion.div>
  );
}

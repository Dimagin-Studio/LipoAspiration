import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (!isVisible) return null;

	return (
		<motion.button
			onClick={scrollToTop}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="fixed bottom-6 right-6 z-50 bg-[#218EF5] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
			aria-label="Remonter en haut de la page"
		>
			<ArrowUp size={24} />
		</motion.button>
	);
}

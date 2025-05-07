import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { links } from "../../constants/links";
import { Button } from "../UI/Button";

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
					src="/images/logo_liposuccion_white.png"
					alt="Logo"
					className="h-[30px] lg:h-[40px]"
				/>
			</a>
			<nav className="hidden md:flex flex-1 items-center font-normal">
				<div className="flex-1 flex justify-center">
					<ul
						className={`flex items-center gap-4 lg:gap-8 font-quicksand text-base lg:text-lg ${
							color === "black" ? "text-black" : "text-white"
						}`}
					>
						{links.map((link) => {
							const lessImportantLinks = [
								"À propos",
								"Zones Ciblés",
								"Intervention",
							];
							const isLessImportant = lessImportantLinks.includes(link.label);
							return (
								<li
									key={link.href}
									className={`${isLessImportant ? "hidden xl:block" : ""}`}
								>
									<a href={link.href} className="hover:text-gray-300">
										{link.label}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<Button text="Prendre Rendez-vous" />
			</nav>
			{!isMenuOpen && (
				<button onClick={() => setIsMenuOpen(true)} className="md:hidden z-50">
					<Menu
						className={`w-8 h-8 ${
							color === "black" ? "text-black" : "text-white"
						}`}
					/>
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
					{links.map((link) => (
						<a href={link.href} onClick={() => setIsMenuOpen(false)}>
							{link.label}
						</a>
					))}

					<Button text="Prendre Rendez-vous" />
				</div>
			)}
		</motion.header>
	);
}

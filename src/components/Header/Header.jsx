import { Button } from "../UI/Button";

export function Header({ className = "", color = "white" }) {
	return (
		<header
			className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ${className}`}
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
							<a href="/" className="hover:text-gray-300 transition-colors">
								Accueil
							</a>
						</li>
						<li>
							<a
								href="/#Apropos"
								className="hover:text-gray-300 transition-colors"
							>
								A propos
							</a>
						</li>
						<li>
							<a
								href="/#Avantapres"
								className="hover:text-gray-300 transition-colors"
							>
								Avant/Après
							</a>
						</li>
						<li>
							<a
								href="/#Resultats"
								className="hover:text-gray-300 transition-colors"
							>
								Comment ca marche ?
							</a>
						</li>
						<li>
							<a
								href="/#Price"
								className="hover:text-gray-300 transition-colors"
							>
								Nos prix
							</a>
						</li>
						<li>
							<a href="/#Faq" className="hover:text-gray-300 transition-colors">
								Faqs
							</a>
						</li>
						<li>
							<a
								href="/#Clients"
								className="hover:text-gray-300 transition-colors"
							>
								Clients
							</a>
						</li>
					</ul>
				</div>
				<Button text="Prendre Rendez-vous" />
			</nav>

			<button className="md:hidden text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</header>
	);
}

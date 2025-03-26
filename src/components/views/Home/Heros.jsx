import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Heros() {
  return (
    <section className="relative h-screen w-full overflow-hidden py-16 sm:py-24">
      <div
        className="absolute inset-0 bg-[url('/public/images/hero.jpeg')] bg-cover bg-center animate-zoom"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <Title color="white">
          <span className="block">AFFINEZ VOTRE SILOUHETTE,</span>
          <span className="block mt-2">RÉVÉLEZ VOTRE CONFIANCE</span>
        </Title>
        <Paragraphe color="white" className="text-center">
          Redessinez votre corps selon vos envies et retrouvez une silhouette
          harmonieuse en toute sérénité.
        </Paragraphe>
        <Button className="mt-12 sm:mt-16" text="Prendre Rendez-vous" />
      </div>
    </section>
  );
}

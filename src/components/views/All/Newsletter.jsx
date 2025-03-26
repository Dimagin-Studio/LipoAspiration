import { Title } from "../../UI/Title";
import { Paragraphe } from "../../UI/paragraphe";
export function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 h-[400px] ">
      <div className="max-w-6xl mx-auto ">
        <Title color="black" className="text-center">
          Ne manquez aucune info !
        </Title>
        <Paragraphe
          color="black"
          className="text-center w-[50%] mx-auto font-medium"
        >
          Recevez en avant-première nos conseils, actualités, et offres
          exclusives directement dans votre boîte mail.
        </Paragraphe>
        <div className="flex justify-center gap-2 mt-4">
          <input
            type="email"
            id="email"
            placeholder="Saisir votre email"
            className="font-quicksand font-medium px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
          <button className="bg-black text-white font-quicksand px-4 py-2 rounded-full font-medium">
            S'abonner
          </button>
        </div>
      </div>
    </section>
  );
}

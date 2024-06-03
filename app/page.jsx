import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Olá, eu sou <br /> <span className="text-accent">Leonardo Wiese</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Com ampla experiência em desenvolvimento web, sou especializado em criar soluções eficazes e inovadoras para projetos online. Minha paixão pelo desenvolvimento de software me impulsiona a buscar constantemente maneiras de melhorar e aprimorar a experiência do usuário.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/CV.pdf"  // Caminho para o arquivo de currículo
                download="CV.pdf"  // Nome do arquivo baixado
                className="uppercase flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-gray-300 hover:bg-gray-300 hover:text-primary transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

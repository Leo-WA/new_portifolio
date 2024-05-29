"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "2 anos produzindo sites, landing pages e e-commerces, que não apenas se comunicam eficazmente com o cliente. Utilizando as mais recentes tecnologias e práticas de design responsivo, garantimos que seu site seja rápido, seguro e adaptável a qualquer dispositivo, proporcionando uma experiência de usuário superior e aumentando suas chances de sucesso online.",
    href: "https://contate.me/wiesesolutions",
  },
  {
    num: "02",
    title: "Gestor de trafego pago",
    description:
    "5 anos produzindo anúncios para Meta ads, Google ads e diversas plataformas de anúncios utilizando o ouro das estrátegias já validadas por grandes nomes como Pedro Sobral e Thiago Thessman",
    href: "https://contate.me/wiesesolutions",
  },
  {
    num: "03",
    title: "desenvolvimento de software",
    description:
      "Especializado em criar soluções de software personalizadas que atendem às necessidades específicas do seu negócio. Com uma abordagem focada na qualidade e eficiência, entregamos aplicativos robustos e escaláveis.",
    href: "https://contate.me/wiesesolutions",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Aprimore a visibilidade do seu site nos motores de busca com estratégias de SEO avançadas. Ajudamos seu negócio a alcançar as primeiras posições no Google e atrair mais tráfego qualificado.",
    href: "https://contate.me/wiesesolutions",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import {
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGem, // Ruby icon
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiKotlin, SiRubyonrails, SiSpringboot, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si"; // Kotlin, Rails, Spring Boot, MongoDB, MySQL, and PostgreSQL icons

// about data
const about = {
  title: "Sobre Mim",
  description:
    "Desenvolvedor Full Stack, trazendo uma abordagem comunicativa e colaborativa para projetos inovadores. Com 2 anos de experiência em desenvolvimento de sites e landing pages e 5 anos em meta ads e google ads, aplico conhecimentos profundos em Ruby, Python, HTML, CSS, JavaScript, e Kotlin para criar soluções de alta qualidade que atendem às necessidades dos clientes e superam suas expectativas.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Leonardo Wiese",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(47) 997780819",
    },
    {
      fieldName: "Experience",
      fieldValue: "5 Years",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Email",
      fieldValue: "wiese.programmer@gmail.com",
    },
    {
      fieldName: "Para CLT ou PJ",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Linguas",
      fieldValue: "Inglês, Português",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description:
    "Com uma sólida experiência em desenvolvimento full stack e marketing digital, tenho atuado como freelancer, entregando soluções de alta qualidade para diversas necessidades empresariais.",
  items: [
    {
      company: "Freelancer",
      position: "Front-End Developer",
      duration: "Jul 2022 - Present",
      description: "Desenvolvimento de sites institucionais e landing pages utilizando HTML, CSS, JavaScript e frameworks como React. Implementação de design responsivo e práticas de SEO."
    },
    {
      company: "Freelancer",
      position: "Profissional de Marketing Digital",
      duration: "Jan 2019 - Present",
      description: "Gestão de campanhas de marketing digital, incluindo Google Ads e Facebook Ads. Análise de métricas e otimização de campanhas para aumento de conversão e engajamento."
    },
    {
      company: "Freelancer",
      position: "Back-End Developer",
      duration: "Jul 2022 - Present",
      description: "Desenvolvimento de processos de automação e integração de APIs. Implementação de métodos de pagamento e e-commerce. Criação e gestão de bancos de dados relacionais e não-relacionais."
    }
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educação",
  description:
    "Minha formação acadêmica e cursos complementares fornecem uma base sólida em desenvolvimento full stack e tecnologias de ponta.",
  items: [
    {
      institution: "EBAC",
      degree: "Desenvolvedor Full Stack Python",
      duration: "Jul 2023 - Aug 2024",
    },
    {
      institution: "DIO",
      degree: "Formação Kotlin Back-end Developer",
      duration: "2023",
    },
    {
      institution: "Alura",
      degree: "Ruby on Rails  Aplicações Web",
      duration: "2022",
    },
    {
      institution: "DIO",
      degree: "Desenvolvimento Web com Spring Boot 3",
      duration: "2022",
    },
    {
      institution: "Alura",
      degree: "Curso React: Desenvolvendo aplicações web interativas",
      duration: "2022",
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Minha formação e experiência me proporcionaram uma ampla gama de habilidades em desenvolvimento full stack e tecnologias de ponta.",
  skillList: [
    {
      icon: <SiRubyonrails />, // Ruby on Rails icon
      name: "Ruby on Rails",
    },
    {
      icon: <SiKotlin />, // Kotlin icon
      name: "Kotlin",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiSpringboot />, // Spring Boot icon
      name: "Spring Boot",
    },
    {
      icon: <SiMongodb />, // MongoDB icon
      name: "MongoDB",
    },
    {
      icon: <SiMysql />, // MySQL icon
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />, // PostgreSQL icon
      name: "PostgreSQL",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

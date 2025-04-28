"use client";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./card";
import Section from "./section";
import CardDetail from "./carddetails";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: "1",
      titre: "Liste de cadeaux",
      description: "",
      lien: "https://github.com/EddyGmt/challenge-myGift",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Symfony", "Tailwind", "Docker"],
    },
    {
      id: "2",
      titre: "Kermesse",
      description: "",
      lien: "https://github.com/EddyGmt/challenge-kermesse",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Flutter", "Golang", "Docker", "PostgresSQl"],
    },
    {
      id: "3",
      titre: "Appli de voyage",
      description: "",
      lien: "https://github.com/chiekhou/challenge-golang-flutter",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Flutter", "Golang", "Docker", "PostgresSQl"],
    },
    {
      id: "4",
      titre: "Plateforme de paiement",
      description: "",
      lien: "",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["VueJS", "NodeJS", "Docker", "PostgresSQl", "MongoDB"],
    },
  ];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <Section className="scroll-smooth flex flex-col items-center justify-start h-screen">
      <h2 className="text-center w-full mt-10 text-3xl font-bold" id="projects">
        Mes projets
      </h2>
      <div className="flex flew-wrap justify-center gap-8 mt-10">
        {projects.map((exp) => (
          <Card
            key={exp.id}
            title={exp.titre}
            description={exp.description}
            img={exp.img}
            lienGit={exp.lien}
            stacks={exp.stacks}
          />
        ))}
      </div>
    </Section>
  );
}

//   return (
//     <Section className="scroll-smooth flex justify-start h-screen w-full">
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 p-6 w-full">
//         {projects.map((project, index) => (
//           <motion.div
//             layoutId={project.id}
//             key={project.id}
//             onClick={() => setSelectedId(project.id)}
//             className={`
//           ${index % 2 === 0 ? "col-span-3" : "col-span-2"} 
//           row-span-1 bg-white rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer
//         `}
//           >
//             <Card {...project} />
//           </motion.div>
//         ))}

//         <AnimatePresence>
//           {selectedId && (
//             <CardDetail
//               project={projects.find((p) => p.id === selectedId)!}
//               onClose={() => setSelectedId(null)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </Section>
//   );
// };
export default Projects;

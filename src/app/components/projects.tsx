import Card from "./card";
import Section from "./section";

const Projects = () => {
  const projects = [
    {
      id: 1,
      titre: "Liste de cadeaux",
      description: "",
      lien: "",
      demo: "",
      img: "",
    },
    {
      id: 2,
      titre: "Kermesse",
      description: "",
      lien: "",
      demo: "",
      img: "",
    },
    {
      id: 3,
      titre: "Appli de voyage",
      description: "",
      lien: "",
      demo: "",
      img: "",
    },
    {
      id: 4,
      titre: "Plateforme de paiment",
      description: "",
      lien: "",
      demo: "",
      img: "",
    },
  ];
  return (
    <Section className="scroll-smooth flex flex-col items-center justify-start h-screen">
      <h2 className="text-center w-full mt-10 text-3xl font-bold" id="projets">
        Mes projets
      </h2>
      <div className="flex flew-wrap justify center gap-8 mt-10">
        {projects.map((exp) => (
          <Card
            key={exp.id}
            title={exp.titre}
            description={exp.description}
            img={exp.img}
            lienGit={exp.lien}
          />
        ))}
      </div>
    </Section>
  );
};
export default Projects;

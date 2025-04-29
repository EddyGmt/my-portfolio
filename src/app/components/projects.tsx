"use client";
import Card from "./card";
import Section from "./section";

const Projects = () => {
  const projects = [
    {
      id: "1",
      titre: "Liste de cadeaux",
      description: "Plateforme permettant de créer des listes de cadeaux pour n'importe quel événement, listes disponible uniquement par lien d'invitation. Possibilité de scrapper des liens amazon afin de retrouver toutes les informations et de les réserver également (afin d'éciter toutes confusions).",
      lien: "https://github.com/EddyGmt/challenge-myGift",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Symfony", "Tailwind", "Docker"],
      height: "h-60",
      color: "bg-red-400",
    },
    {
      id: "2",
      titre: "Kermesse",
      description: "Application mobile permettant de gérer une kermesse, participer à une tombola (achat de tocket), mais également historiser les activités et gains et paratager ses jetons entre parents et enfants.",
      lien: "https://github.com/EddyGmt/challenge-kermesse",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Flutter", "Golang", "Docker", "PostgresSQl"],
      height: "h-80",
      color: "bg-blue-400",
    },
    {
      id: "3",
      titre: "Appli de voyage",
      description: "Application mobile regroupant quelues hôtels qui permet de créer un groupe de voyage ainsi qu'une roadmap d'activités et d'hôtel entre le créateur du groupe et ses invités, possobiliés de communiquer en tant rééls pour chaque groupes.",
      lien: "https://github.com/chiekhou/challenge-golang-flutter",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["Flutter", "Golang", "Docker", "PostgresSQl"],
      height: "h-72",
      color: "bg-green-400",
    },
    {
      id: "4",
      titre: "Plateforme de paiement",
      description: "Plateforme de paiement type 'Stripe', le marchand peut lier son compte à un autre site marchand, ce qui permettra d'historiser les paiements des clients. Possiblités de faire des achats directs ou non (accord de paiement du marchand).",
      lien: "",
      demo: "",
      img: "https://etudestech.com/wp-content/uploads/2021/07/19682.png",
      stacks: ["VueJS", "NodeJS", "Docker", "PostgresSQl", "MongoDB"],
      height: "h-64",
      color: "bg-purple-400",
    },
  ];
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <Section className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-14">
      <h2
        className="text-center w-full mt-10 text-3xl font-bold mb-10 scroll-mt-24"
        id="projects">
        Mes projets
      </h2>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.titre}
            description={project.description}
            img={project.img}
            lienGit={project.lien}
            stacks={project.stacks}
          />
        ))}
      </div>
    </Section>
  );
};
export default Projects;

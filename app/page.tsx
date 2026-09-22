import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Vitalhealth",
    description: "A full-stack app for managing health products.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/Zureyma-Manrique/vitalhealth-testing",
  },
  {
    title: "Paws & Paths API",
    description: "Backend API for Paws & Paths, a dog-walking scheduler that connects dog owners with professional walkers.",
    technologies: ["HTML", "CSS", "Javascript", "Python"],
    link: "https://github.com/Zureyma-Manrique/cse341",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here
          are some of my projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}

import SkillCard from "@/components/SkillCard";

const skills = [
  {
    skill: "JavaScript / TypeScript",
    level: "Proficient",
    typeface: { fontFamily: "sans-serif", weight: "bold" as const },
  },
  {
    skill: "React & Next.js",
    level: "Proficient",
    typeface: { fontFamily: "sans-serif", weight: "medium" as const },
  },
  {
    skill: "Tailwind CSS",
    level: "Comfortable",
    typeface: { fontFamily: "sans-serif", weight: "normal" as const },
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and
        work. I&apos;m currently studying web development and
        building projects with modern JavaScript frameworks. Also, I'm currently SSr Backend.
      </p>

      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((s) => (
          <SkillCard key={s.skill} {...s} />
        ))}
      </div>
    </main>
  );
}

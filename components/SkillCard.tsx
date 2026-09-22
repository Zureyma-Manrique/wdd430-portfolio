interface Typeface {
  fontFamily: string;
  weight: "normal" | "medium" | "bold";
}

interface SkillCardProps {
  skill: string;
  level: string;
  typeface: Typeface;
}

export default function SkillCard({ skill, level, typeface }: SkillCardProps) {
  const weightClass =
    typeface.weight === "bold"
      ? "font-bold"
      : typeface.weight === "medium"
      ? "font-medium"
      : "font-normal";

  return (
    <div
      className={`p-4 border border-gray-200 rounded-lg shadow-sm bg-white ${weightClass}`}
      style={{ fontFamily: typeface.fontFamily }}
    >
      <h4 className="text-lg text-gray-900">{skill}</h4>
      <p className="text-sm text-gray-600">{level}</p>
    </div>
  );
}

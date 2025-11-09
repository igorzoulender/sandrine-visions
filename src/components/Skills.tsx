import { Code2, Database, Wrench, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["Angular", "Vue.js", "Ionic", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: Database,
      title: "Backend & BDD",
      skills: ["Laravel (PHP)", "Node.js", "MySQL", "Oracle"],
    },
    {
      icon: Wrench,
      title: "Outils",
      skills: ["Git / GitHub", "VS Code", "Postman", "Android Studio", "Linux / Windows"],
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["UI/UX", "Design d'interfaces", "Responsive Design", "Ergonomie"],
    },
  ];

  const softSkills = [
    "Autonome et proactive",
    "Sens du détail",
    "Capacité d'adaptation",
    "Rigueur et organisation",
    "Esprit collaboratif",
    "Apprentissage continu",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-hover bg-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-secondary/70 hover:bg-secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Compétences <span className="text-gradient">Personnelles</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="p-4 text-center card-hover bg-card border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-medium text-foreground">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

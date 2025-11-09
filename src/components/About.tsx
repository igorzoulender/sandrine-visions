import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Technique",
      description: "Maîtrise des frameworks modernes et des meilleures pratiques de développement",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Souci du détail et création d'interfaces élégantes et intuitives",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Applications optimisées pour une expérience utilisateur fluide",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-primary">moi</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Mon objectif est d'accompagner les entreprises et les particuliers dans leur
            transformation digitale en créant des solutions web et mobiles qui allient esthétique,
            performance et fonctionnalité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center card-hover bg-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

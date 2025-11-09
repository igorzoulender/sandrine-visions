import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Développeuse Web & Mobile (Front-End)",
      company: "Cabinet Informatique IT4U",
      location: "Togo",
      period: "Septembre 2023 - Aujourd'hui",
      description:
        "Évolution de poste : Stagiaire → Développeuse Front-End → Front-End Lead",
      highlights: [
        "Conception et développement d'applications web et mobiles avec Angular et Ionic",
        "Migration et maintenance de projets vers des versions récentes",
        "Développement de fonctionnalités pour applications FinTech et TPE",
        "Refonte et mise à jour d'applications existantes",
        "Réalisation autonome du design d'interface",
      ],
      technologies: ["Angular", "Ionic", "TypeScript", "Laravel", "Git"],
    },
    {
      title: "Stagiaire - Département Systèmes d'Information",
      company: "Port Autonome de Lomé (PAL)",
      location: "Togo",
      period: "Avril 2022 - Juin 2022",
      description:
        "Découverte du fonctionnement du département SI et participation à un projet Oracle",
      highlights: [
        "Participation au démarrage d'un projet Oracle",
        "Renforcement des compétences en bases de données",
      ],
      technologies: ["Oracle", "Bases de données"],
    },
    {
      title: "Stagiaire - Projet de Fin d'Études",
      company: "Expert Afrique Conseil",
      location: "Togo",
      period: "Juin 2021 - Septembre 2021",
      description: "Conception et développement d'une application de gestion interne",
      highlights: [
        "Conception et développement complet de la solution",
        "Présentation technique réussie lors de la soutenance",
      ],
      technologies: ["Laravel", "MySQL", "PHP", "HTML", "CSS"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-hover bg-card border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 italic">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-secondary/70 hover:bg-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ma <span className="text-gradient">Formation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 card-hover bg-card border-border/50">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-soft">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Licence Professionnelle
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  Génie Logiciel et Systèmes d'Informations
                </p>
                <p className="text-muted-foreground mb-4">
                  Institut Africain d'Informatique (IAI) - Togo
                </p>
                <p className="text-foreground/80">2018 - 2021</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

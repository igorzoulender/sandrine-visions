import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Essi-Nana Sandrine{" "}
              <span className="text-gradient">AGBODJI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
              Développeuse Web & Mobile Front-End
            </p>
          </div>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Je conçois des sites et applications modernes, performants et adaptés à chaque besoin.
            Créative et rigoureuse, j'accorde une attention particulière à l'expérience utilisateur,
            à la performance technique et à la qualité du design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lomé, Togo</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+228 92 62 09 90</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>agbodjisandrine@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover"
            >
              Me contacter
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#experience");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Voir mon parcours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

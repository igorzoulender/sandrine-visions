import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "agbodjisandrine@gmail.com",
      href: "mailto:agbodjisandrine@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+228 92 62 09 90",
      href: "tel:+22892620990",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Lomé, Togo",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="text-primary">Contacter</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Un projet en tête ? Une opportunité à discuter ? N'hésitez pas à me contacter,
            je serai ravie d'échanger avec vous.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center card-hover bg-card border-border/50"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border/50 text-center">
            <h3 className="text-2xl font-bold mb-4">Travaillons ensemble</h3>
            <p className="text-foreground/80 mb-6">
              Je suis disponible pour des missions freelance, des collaborations ou des opportunités
              d'emploi en CDI.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover"
              onClick={() => window.location.href = "mailto:agbodjisandrine@gmail.com"}
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

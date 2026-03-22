import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individuella KBT-sessioner",
      description:
        "Individuella KBT-sessioner anpassade till dina behov, mål och vardag.",
      features: [
        "Personlig behandlingsplan",
        "Veckovisa 60-minuters sessioner",
        "Hemuppgifter mellan samtal",
        "Uppföljning av framsteg",
      ],
      duration: "12-20 veckor, eller efter behov",
    },
    {
      icon: Zap,
      title: "Intensivt KBT-program",
      description:
        "Ett mer koncentrerat upplägg för dig som vill arbeta i ett högre tempo.",
      features: [
        "Tätare sessioner",
        "Personlig behandlingsplan",
        "Övningar mellan samtal",
        "Uppföljning och justering",
      ],
      duration: "6-8 veckor",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <SEO
        title="Tjänster inom online KBT"
        description="Se vilka KBT-tjänster Harmonia erbjuder online, inklusive individuella samtal, intensivare upplägg och hur behandlingen brukar läggas upp."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Online KBT-tjänster",
          provider: {
            "@type": "ProfessionalService",
            name: "Harmonia KBT",
            url: SITE_URL,
          },
          areaServed: "SE",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/services`,
            availableLanguage: ["sv"],
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "KBT-tjänster",
            itemListElement: services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
              },
            })),
          },
        }}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vad jag erbjuder
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vi utformar tillsammans ett upplägg som passar just dig. Ibland
              räcker ett mindre antal samtal, och ibland är ett mer strukturerat
              program det bästa valet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Vad som ingår
                    </h2>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    asChild
                  >
                    <Link to="/contact">Boka eller fråga mer</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Så fungerar KBT
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">
                    1
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Identifiera mönster
                </h3>
                <p className="text-muted-foreground">
                  Känna igen negativa tankemönster och beteenden som bidrar till dina utmaningar.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">
                    2
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Utmana tankar
                </h3>
                <p className="text-muted-foreground">
                  Lär dig att ifrågasätta och omformulera onyttiga tankar med mer balanserade perspektiv.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">
                    3
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Utveckla strategier
                </h3>
                <p className="text-muted-foreground">
                  Bygg praktiska copingstrategier och beteendeförändringar för bestående resultat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

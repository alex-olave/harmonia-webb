import SEO, { SITE_URL } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      icon: Clock,
      name: "Individuellt samtal helg",
      price: "900",
      period: "per session",
      description: "Standard-KBT-session med personlig behandlingsplan.",
      features: [
        "60-minuters session",
        "Personlig behandlingsplan",
        "Stöd mellan sessioner",
        "Framstegsspårning",
        "Hemuppgifter",
      ],
      popular: false,
      bookingNote: "Lördag och söndag 10-18",
    },
    {
      icon: Clock,
      name: "Individuellt samtal vardag",
      price: "800",
      period: "per session",
      description: "Standard-KBT-session med personlig behandlingsplan.",
      features: [
        "60-minuters session",
        "Personlig behandlingsplan",
        "Stöd mellan sessioner",
        "Framstegsspårning",
        "Hemuppgifter",
      ],
      popular: true,
      bookingNote: "Vardagar 17-21",
    },
    {
      icon: Clock,
      name: "Paket med flera samtal",
      price: "600",
      period: "per session",
      description: "Åtta KBT-sessioner med personlig behandlingsplan.",
      features: [
        "En eller flera samtal i veckan",
        "Personlig behandlingsplan",
        "Stöd mellan sessioner",
        "Framstegsspårning",
        "Hemuppgifter",
      ],
      popular: false,
      bookingNote: "Vardagar 17-21, lördag och söndag 10-18",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <SEO
        title="Prislista för KBT online"
        description="Se aktuell prislista för online KBT hos Harmonia, inklusive vardags- och helgtider, paketpris per session och bokningsinformation."
        path="/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Prislista Harmonia KBT",
          url: `${SITE_URL}/pricing`,
          itemListElement: pricingPlans.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            priceCurrency: "SEK",
            price: plan.price,
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/pricing`,
          })),
        }}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prislista
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Priserna är tydliga och uppläggen flexibla, så att du enklare kan
              välja ett alternativ som passar din vardag och dina behov.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    Mest populär
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price} kr
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      {plan.bookingNote}
                    </p>
                    <Button
                      className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <Link to="/contact">Boka session</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Betalning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h2 className="font-semibold text-foreground mb-2">
                    Betalningsalternativ
                  </h2>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Kort</li>
                    <li>Faktura</li>
                    <li>Epassi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Bokningsinformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h2 className="font-semibold text-foreground mb-2">
                    Schemaläggning
                  </h2>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Online-bokning tillgänglig dygnet runt</li>
                    <li>Flexibla mötestider</li>
                    <li>Tillgänglighet samma vecka när det är möjligt</li>
                    <li>Alla samtal sker på distans</li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-foreground mb-2">
                    Avbokningspolicy
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Avbokning behöver göras senast 8 timmar innan bokad session.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Redo att komma igång?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Boka en konsultation om du vill prata om dina behov och hitta ett
              upplägg som passar dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/contact">Boka gratis konsultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Kontakta mig</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

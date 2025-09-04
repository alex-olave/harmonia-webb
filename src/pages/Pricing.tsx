import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Zap } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      icon: Clock,
      name: "Individuella Sessioner",
      price: "1200 kr",
      period: "per session",
      description: "Standard en-till-en KBT-sessioner med personliga behandlingsplaner",
      features: [
        "50-minuters sessioner",
        "Personlig behandlingsplan",
        "Stöd mellan sessioner",
        "Framstegsspårning",
        "Hemuppgifter",
        "Krisstöd tillgängligt"
      ],
      popular: false,
      bookingNote: "Typiskt 12-20 sessioner rekommenderas"
    },
    {
      icon: Users,
      name: "Gruppterapi",
      price: "600 kr",
      period: "per session",
      description: "Små grupp-KBT-sessioner med stöd från andra och gemensamt lärande",
      features: [
        "90-minuters gruppsessioner",
        "Maximalt 6-8 deltagare",
        "Stödnätverk av andra",
        "Gruppövningar och aktiviteter",
        "Individuella checkins",
        "Material att ta hem"
      ],
      popular: true,
      bookingNote: "10-12 veckors program"
    },
    {
      icon: Zap,
      name: "Intensivt Program",
      price: "2000 kr",
      period: "per session",
      description: "Accelererad behandling med flera sessioner per vecka för snabbare resultat",
      features: [
        "2-3 sessioner per vecka",
        "Snabbare symptomlindrung",
        "Prioriterad schemaläggning",
        "Utökade sessionsmöjligheter",
        "Krisintervention",
        "Omfattande vårdkoordinering"
      ],
      popular: false,
      bookingNote: "6-8 veckors intensivprogram"
    }
  ];

  const packages = [
    {
      name: "Startpaket",
      sessions: "6 Sessioner",
      originalPrice: "7200 kr",
      discountedPrice: "6500 kr",
      savings: "700 kr",
      description: "Perfekt för att hantera specifika bekymmer eller prova KBT för första gången"
    },
    {
      name: "Standardpaket",
      sessions: "12 Sessioner",
      originalPrice: "14400 kr",
      discountedPrice: "12600 kr",
      savings: "1800 kr",
      description: "Mest populära alternativet som ger omfattande behandling för de flesta tillstånd"
    },
    {
      name: "Utökat Paket",
      sessions: "20 Sessioner",
      originalPrice: "24000 kr",
      discountedPrice: "20000 kr",
      savings: "4000 kr",
      description: "Omfattande behandling för komplexa tillstånd eller flera bekymmer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparenta Priser
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Prisvärd, högkvalitativ kognitiv beteendeterapi med flexibla betalningsalternativ. 
              Jag tror att alla förtjänar tillgång till professionell mentalvård.
            </p>
          </div>

          {/* Main Pricing Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    Mest Populär
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      {plan.bookingNote}
                    </p>
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Boka Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Package Deals */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Paketpriser</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Spara pengar med våra sessionspaket. Perfekt för engagerade individer redo att investera i sin mentala hälsoresa.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-card shadow-card hover:shadow-gentle transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-foreground">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-foreground">{pkg.discountedPrice}</p>
                      <p className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</p>
                      <Badge variant="secondary" className="text-green-600">
                        Spara {pkg.savings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="font-semibold text-foreground">{pkg.sessions}</p>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Välj Paket
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Insurance & Payment Info */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Försäkring & Betalning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accepterade Försäkringar</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Folksam</li>
                    <li>• Länsförsäkringar</li>
                    <li>• If</li>
                    <li>• Trygg-Hansa</li>
                    <li>• Och många andra</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Betalningsalternativ</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Kredit/Betalkort</li>
                    <li>• Friskvårdsbidrag Accepteras</li>
                    <li>• Betalningsplaner Tillgängliga</li>
                    <li>• Glidande Skala för Ekonomiska Svårigheter</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Bokningsinformation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Schemaläggning</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Online-bokning tillgänglig 24/7</li>
                    <li>• Flexibla mötestider</li>
                    <li>• Tillgänglighet samma vecka</li>
                    <li>• Distansalternativ tillgängliga</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Avbokningspolicy</h4>
                  <p className="text-sm text-muted-foreground">
                    24 timmars avbokningsvarsel krävs. Sena avbokningar kan medföra en avgift motsvarande 50% av sessionskostnaden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">Redo Att Komma Igång?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ta det första steget mot bättre mental hälsa. Boka en konsultation idag för att diskutera dina behov och hitta rätt behandlingsplan för dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Boka Gratis Konsultation
              </Button>
              <Button size="lg" variant="outline">
                Kontakta Mig
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
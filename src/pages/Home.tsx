import SEO, { SITE_URL } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const testimonials = [
    {
      name: "Emma",
      text: "Att arbeta med Anna-Karin hjälpte mig att förstå min ångest på ett helt nytt sätt. Jag har äntligen verktyg som faktiskt fungerar, och jag känner mig mycket mer självsäker.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SEO
        title="Online KBT-terapi med Anna-Karin Ekström"
        description="Harmonia erbjuder online KBT i Sverige med personlig, evidensbaserad terapi för stress, ångest och livsutmaningar."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Harmonia KBT",
          url: SITE_URL,
          description:
            "Online KBT-terapi med Anna-Karin Ekström för dig som vill få praktiska verktyg, tryggt stöd och en personlig behandlingsplan.",
          areaServed: "SE",
          availableLanguage: ["sv"],
          serviceType: "Kognitiv beteendeterapi online",
          provider: {
            "@type": "Person",
            name: "Anna-Karin Ekström",
            jobTitle: "Diplomerad KBT-terapeut",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: "anna-karin@harmonia-kbt.se",
            telephone: "+46738124226",
            contactType: "customer service",
            areaServed: "SE",
            availableLanguage: ["sv"],
          },
        }}
      />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Harmonia
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Jag heter Anna-Karin och är diplomerad KBT-terapeut. Jag erbjuder
              samtal online för dig som vill förändra negativa tankar och
              beteenden, få praktiska verktyg och må bättre i vardagen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/contact">Boka ett samtal</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Läs mer om min metodik</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto animate-slide-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">2+</div>
              <div className="text-sm text-muted-foreground">Års erfarenhet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Diplomerad</div>
              <div className="text-sm text-muted-foreground">KBT-terapeut</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Hur jag kan hjälpa dig</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jag specialiserar mig på att hjälpa människor arbeta igenom dessa vanliga utmaningar med
              varsamma, evidensbaserade kognitiva beteendeterapi-tekniker.
          </p>
        </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Varför kognitiv beteendeterapi?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                KBT är en av de mest effektiva terapiformerna eftersom den ger dig praktiska verktyg du kan använda direkt.
                Jag tror att förändring ofta börjar med små steg, och att det är lättare att ta dem när man inte går ensam.
              </p>

              <div className="space-y-4">
                {[
                  "Praktiska verktyg du kan använda omedelbart",
                  "Online-sessioner för flexibilitet",
                  "Fokus på dina aktuella utmaningar och mål",
                  "Strategier för långsiktigt välbefinnande",
                  "Trygg behandling i din egen takt",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                className="mt-8 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/services">Se tjänster</Link>
              </Button>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Så fungerar KBT
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Identifiera mönster",
                    text: "Känna igen onyttiga tankar och beteenden",
                  },
                  {
                    step: "2",
                    title: "Utmana tankar",
                    text: "Ifrågasätt och omformulera negativt tänkande",
                  },
                  {
                    step: "3",
                    title: "Öva på nya färdigheter",
                    text: "Utveckla hälsosammare copingstrategier",
                  },
                  {
                    step: "4",
                    title: "Skapa bestående förändring",
                    text: "Bygg motståndskraft för långsiktigt välbefinnande",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad människor säger
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Hör från några av de människor jag haft förmånen att arbeta med
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="bg-card shadow-card animate-fade-in md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto w-full"
              >
                <CardContent className="p-6">
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      - {testimonial.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*  */}{/* CTA Section */}
      {/*  <section className="py-20 px-4">*/}
      {/*    <div className="max-w-4xl mx-auto text-center">*/}
      {/*      <h2 className="text-3xl font-bold text-foreground mb-6">*/}
      {/*        Redo att ta första steget?*/}
      {/*      </h2>*/}
      {/*      <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">*/}
      {/*        Om du känner dig redo att arbeta med din mentala hälsa skulle jag gärna prata med dig. */}
      {/*        Vi kan börja med ett vänligt samtal för att se om vi passar bra att arbeta tillsammans.*/}
      {/*      </p>*/}
      {/*      <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
      {/*        <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">*/}
      {/*          Boka ett samtal*/}
      {/*        </Button>*/}
      {/*        <Button size="lg" variant="outline" asChild>*/}
      {/*          <Link to="/contact">Kontakta mig</Link>*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*      <p className="text-sm text-muted-foreground mt-6">*/}
      {/*        Vänlig konsultation • Flexibel schemaläggning • De flesta försäkringar accepteras*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </section>*/}
    </div>
  );
};

export default Home;

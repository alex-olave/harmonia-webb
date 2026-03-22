import SEO, { SITE_URL } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      <SEO
        title="Om Anna-Karin Ekström"
        description="Läs om Anna-Karin Ekström, diplomerad KBT-terapeut bakom Harmonia, och hur hennes metod kombinerar struktur, värme och evidensbaserad terapi online."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anna-Karin Ekström",
          jobTitle: "Diplomerad KBT-terapeut",
          url: `${SITE_URL}/about`,
          worksFor: {
            "@type": "ProfessionalService",
            name: "Harmonia KBT",
            url: SITE_URL,
          },
          knowsAbout: [
            "Kognitiv beteendeterapi",
            "Online-terapi",
            "Stress",
            "Ångest",
            "Självkänsla",
          ],
        }}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground text-3xl font-bold">
                          AK
                        </span>
                      </div>
                      <h2 className="font-bold text-xl text-foreground mb-2">
                        Anna-Karin Ekström
                      </h2>
                      <p className="text-primary font-medium mb-4">
                        Diplomerad KBT-terapeut
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Jag arbetar som samtalsterapeut med KBT i fokus och vill
                        göra det enklare för dig att få stöd, struktur och
                        praktiska verktyg som fungerar i vardagen.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Samtalen sker online, vilket passar dig som vill ha
                        flexibilitet utan att tumma på kvalitet eller närvaro i
                        behandlingen.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Tillsammans utforskar vi tankar, känslor och beteenden
                        för att hitta sätt som gör livet mer hanterbart,
                        meningsfullt och hållbart över tid.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Min metod
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Bedömning
                  </h3>
                  <p className="text-muted-foreground">
                    Vi börjar med att förstå din situation, dina behov och vad
                    du vill uppnå med terapin.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Behandling
                  </h3>
                  <p className="text-muted-foreground">
                    Du får evidensbaserade KBT-tekniker anpassade till dina mål
                    och utmaningar.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Tillväxt
                  </h3>
                  <p className="text-muted-foreground">
                    Fokus ligger på hållbara förändringar och färdigheter du kan
                    fortsätta använda efter behandlingen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Harmonia
            </h2>

            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Här finns utrymme för både allvar och värme. Målet är att skapa
                en plats där du kan vara precis som du är, med det som är lätt
                och det som är svårt.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Förändring börjar ofta med små steg. Genom KBT arbetar vi
                tillsammans för att du ska förstå dig själv bättre och möta dig
                själv med mer acceptans och vänlighet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Min ambition är att erbjuda trygg, personlig och evidensbaserad
                behandling där du får ett verkligt stöd i processen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

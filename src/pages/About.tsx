import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Our Mission */}
          {/* About Me Section */}
          <div className="mb-20">
            {/*<h2 className="text-3xl font-bold text-foreground text-center mb-12">Om mig</h2>*/}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground text-3xl font-bold">AK</span>
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Anna-Karin Ekström</h3>
                      <p className="text-primary font-medium mb-4">Diplomerad KBT-terapeut</p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Jag heter Anna-Karin och är diplomerad KBT-terapeut. Jag arbetar som samtalsterapeut med KBT (kognitiv beteendeterapi) i fokus. Med hjälp av KBT får du hjälp med att förändra negativa tankar och beteenden som påverkar ditt välmående.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Våra samtal utförs online, vilket är en fördel för dig som har ett hektiskt vardagsliv eller andra orsaker som gör att det är svårt att behöva åka iväg för att träffa en terapeut.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Jag erbjuder KBT för dig som vill förstå dig själv bättre och känna större acceptans. Tillsammans utforskar vi dina tankar, känslor och beteenden – och hittar vägar som gör livet lite lättare och mer meningsfullt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Min metod</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Bedömning</h3>
                  <p className="text-muted-foreground">
                    Omfattande utvärdering för att förstå dina unika behov och utveckla en personlig behandlingsplan.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Behandling</h3>
                  <p className="text-muted-foreground">
                    Evidensbaserade KBT-tekniker anpassade till dina specifika mål och utmaningar.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Tillväxt</h3>
                  <p className="text-muted-foreground">
                    Kontinuerligt stöd och färdighetsutveckling för att bibehålla framstegen.
                  </p>
                </div>
              </div>
            </div>
          </div>
                  <div className="max-w-4xl mx-auto mt-16" id="fix">
                      <h2 className="text-3xl font-bold text-foreground text-center mb-12">Harmonia</h2>

            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Här finns utrymme för både allvar och värme. Jag vill skapa en plats där du får vara precis som du är – med allt som känns lätt och allt som känns svårt.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Genom KBT arbetar vi tillsammans för att du ska förstå dig själv bättre och möta dig själv med mer acceptans och vänlighet. Jag tror att förändring ofta börjar med små steg, och att det är lättare att ta dem när man inte går ensam.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Min evidensbaserade metod säkerställer att du får effektiv, personlig behandling i en trygg, icke-dömande miljö där läkning och tillväxt kan ske.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

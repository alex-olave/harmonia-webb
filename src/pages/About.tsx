import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Om Harmonia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jag är dedikerad till att tillhandahålla medkännande, evidensbaserad kognitiv beteendeterapi 
              för att hjälpa dig övervinna livets utmaningar och uppnå bestående positiv förändring.
            </p>
          </div>

          {/* Our Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Min Filosofi</h2>
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
            <div className="bg-card p-8 rounded-lg shadow-card animate-fade-in">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Medkännande Vård</h3>
                  <p className="text-sm text-muted-foreground">Erbjuder empatiskt stöd</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Evidensbaserad</h3>
                  <p className="text-sm text-muted-foreground">Beprövade terapeutiska metoder</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Individuellt Fokus</h3>
                  <p className="text-sm text-muted-foreground">Personliga behandlingsplaner</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Kontinuerlig Utbildning</h3>
                  <p className="text-sm text-muted-foreground">Pågående utbildning & träning</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Om Mig</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground text-3xl font-bold">AK</span>
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Anna-Karin</h3>
                      <p className="text-primary font-medium mb-4">Diplomerad KBT-terapeut</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="text-xs">Ångest</Badge>
                        <Badge variant="secondary" className="text-xs">Depression</Badge>
                        <Badge variant="secondary" className="text-xs">Livsförändringar</Badge>
                      </div>
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

          <div className="bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Min Metod</h2>
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
                  Kontinuerligt stöd och färdighetsutveckling för att bibehålla framsteg och förhindra återfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
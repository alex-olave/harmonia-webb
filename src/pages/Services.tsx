import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Users, Zap, Shield, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individuella KBT-sessioner",
      description: "Individuella kognitiva beteendeterapi-sessioner anpassade till dina specifika behov och mål.",
      features: ["Personliga behandlingsplaner", "Veckovisa 60-minuters sessioner", "Hemuppgifter", "Uppföljning"],
      duration: "12-20 veckor, eller efter behov",
    },
    //{
    //  icon: Users,
    //  title: "Gruppterapi",
    //  description: "Små gruppsessioner som ger stöd från andra samtidigt som ni lär er KBT-tekniker tillsammans.",
    //  features: ["Maximalt 6-8 deltagare", "Veckovisa 90-minuters sessioner", "Stödnätverk av andra", "Kostnadseffektivt alternativ"],
    //  duration: "10-12 veckor per grupp",
    //  suitable: "Individer som är bekväma med gruppmiljöer och delade erfarenheter"
    //},
    //{
    //  icon: Heart,
    //  title: "Par-KBT",
    //  description: "Specialiserad kognitiv beteendeterapi för par som hanterar relationsutmaningar.",
    //  features: ["Gemensamma och individuella sessioner", "Träning i kommunikationsfärdigheter", "Konfliktlösningstekniker", "Relationsbedömning"],
    //  duration: "Typiskt 8-16 veckor",
    //  suitable: "Par som upplever kommunikationsproblem, konflikter eller relationsbekymmer"
    //},
    {
      icon: Zap,
      title: "Intensivt KBT-program",
      description: "Accelererat behandlingsprogram för individer som behöver mer frekventa sessioner.",
      features: ["Personliga behandlingsplaner", "Veckovisa 60-minuters sessioner", "Hemuppgifter", "Uppföljning"],
      duration: "6-8 veckor",
      suitable: "Individer med allvarliga symptom eller tidskänsliga behandlingsbehov"
    },
    //{
    //  icon: Shield,
    //  title: "Traumafokuserad KBT",
    //  description: "Specialiserad behandling för traumarelaterade störningar med evidensbaserade KBT-tekniker.",
    //  features: ["PTSD-behandling", "Traumabearbetning", "Säkerhet och stabilisering", "Gradvis exponenterapi"],
    //  duration: "Typiskt 12-16 veckor",
    //  suitable: "Individer med PTSD, traumahistoria eller traumarelaterade symptom"
    //},
  //  {
  //    icon: Target,
  //    title: "Specialiserade Program",
  //    description: "Riktade KBT-program för specifika tillstånd och målgrupper.",
  //    features: ["OCD-behandling", "Fobibehandling", "Panikstörningsprogram", "Ungdoms-KBT"],
  //    duration: "Varierar per program",
  //    suitable: "Individer med specifika diagnoser eller åldersrelaterade behov"
  //  }
  ];

  const conditions = [
    "Ångeststörningar", "Depression", "Panikstörning", "Social ångest", 
    "OCD", "PTSD", "Fobier", "Stresshantering", "Relationsproblem", 
    "Livsförändringar", "Sorg och förlust", "Ilskahantering"
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vad jag erbjuder
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                          Vanligen utformar vi tillsammans en plan som passar just dig, men här är några förslag på hur det brukar kunna se ut. I vissa fall räcker det 
                          med några enstaka samtal. En session är i grunden en timme lång, men du kan boka längre eller kortare samtalstid vid behov. 
   
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Vad som ingår:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    Läs Mer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* How CBT Works */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Så Fungerar KBT</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Identifiera mönster</h3>
                <p className="text-muted-foreground">
                  Känna igen negativa tankemönster och beteenden som bidrar till dina utmaningar.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Utmana tankar</h3>
                <p className="text-muted-foreground">
                  Lär dig att ifrågasätta och omformulera onyttiga tankar med mer balanserade perspektiv.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Utveckla strategier</h3>
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
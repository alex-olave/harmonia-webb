import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Users, Zap, Shield, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual CBT Sessions",
      description: "One-on-one cognitive behavioral therapy sessions tailored to your specific needs and goals.",
      features: ["Personalized treatment plans", "Weekly 50-minute sessions", "Homework assignments", "Progress tracking"],
      duration: "12-20 weeks typically",
      suitable: "Adults dealing with anxiety, depression, trauma, and other mental health challenges"
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Small group sessions that provide peer support while learning CBT techniques together.",
      features: ["6-8 participants maximum", "Weekly 90-minute sessions", "Peer support network", "Cost-effective option"],
      duration: "10-12 weeks per group",
      suitable: "Individuals comfortable with group settings and shared experiences"
    },
    {
      icon: Heart,
      title: "Couples CBT",
      description: "Specialized cognitive behavioral therapy for couples addressing relationship challenges.",
      features: ["Joint and individual sessions", "Communication skills training", "Conflict resolution techniques", "Relationship assessment"],
      duration: "8-16 weeks typically",
      suitable: "Couples experiencing communication issues, conflicts, or relationship distress"
    },
    {
      icon: Zap,
      title: "Intensive CBT Program",
      description: "Accelerated treatment program for individuals requiring more frequent sessions.",
      features: ["2-3 sessions per week", "Faster symptom relief", "Comprehensive approach", "Crisis intervention"],
      duration: "6-8 weeks",
      suitable: "Individuals with severe symptoms or time-sensitive treatment needs"
    },
    {
      icon: Shield,
      title: "Trauma-Focused CBT",
      description: "Specialized treatment for trauma-related disorders using evidence-based CBT techniques.",
      features: ["PTSD treatment", "Trauma processing", "Safety and stabilization", "Gradual exposure therapy"],
      duration: "12-16 weeks typically",
      suitable: "Individuals with PTSD, trauma history, or trauma-related symptoms"
    },
    {
      icon: Target,
      title: "Specialized Programs",
      description: "Targeted CBT programs for specific conditions and populations.",
      features: ["OCD treatment", "Phobia treatment", "Panic disorder program", "Teen/adolescent CBT"],
      duration: "Varies by program",
      suitable: "Individuals with specific diagnoses or age-related needs"
    }
  ];

  const conditions = [
    "Anxiety Disorders", "Depression", "Panic Disorder", "Social Anxiety", 
    "OCD", "PTSD", "Phobias", "Stress Management", "Relationship Issues", 
    "Life Transitions", "Grief and Loss", "Anger Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive cognitive behavioral therapy services designed to help you overcome challenges 
              and achieve your mental health goals through evidence-based treatment approaches.
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
                    <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Best for:</span> {service.suitable}
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conditions We Treat */}
          <div className="bg-card p-8 rounded-lg shadow-card mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Conditions We Treat
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Our cognitive behavioral therapy services are effective for a wide range of mental health conditions 
              and life challenges. We provide personalized treatment plans for each individual's unique needs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {conditions.map((condition, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          {/* How CBT Works */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">How CBT Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Identify Patterns</h3>
                <p className="text-muted-foreground">
                  Recognize negative thought patterns and behaviors that contribute to your challenges.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Challenge Thoughts</h3>
                <p className="text-muted-foreground">
                  Learn to question and reframe unhelpful thoughts with more balanced perspectives.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Develop Skills</h3>
                <p className="text-muted-foreground">
                  Build practical coping strategies and behavioral changes for lasting improvement.
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Users, Shield, CheckCircle, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              Professional CBT Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Mind,
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Transform Your Life</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional cognitive behavioral therapy to help you overcome challenges, develop healthy coping strategies, 
              and achieve lasting positive change in a supportive, evidence-based environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Clients Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="py-20 px-4 bg-gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Can Help You With</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cognitive behavioral therapy services are effective for a wide range of mental health challenges and life situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Anxiety & Panic", description: "Overcome overwhelming worry, panic attacks, and social anxiety with proven CBT techniques." },
              { icon: Heart, title: "Depression", description: "Break free from negative thought patterns and regain joy and motivation in your life." },
              { icon: Users, title: "Relationship Issues", description: "Improve communication and resolve conflicts in your personal relationships." },
              { icon: Shield, title: "Trauma & PTSD", description: "Process traumatic experiences safely with specialized trauma-focused CBT approaches." },
              { icon: Brain, title: "OCD & Phobias", description: "Reduce compulsive behaviors and overcome specific fears through gradual exposure." },
              { icon: Heart, title: "Life Transitions", description: "Navigate major life changes with confidence and emotional resilience." }
            ].map((item, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CBT Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Cognitive Behavioral Therapy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                CBT is one of the most researched and effective forms of psychotherapy. It focuses on identifying and changing 
                negative thought patterns and behaviors that contribute to emotional distress.
              </p>
              
              <div className="space-y-4">
                {[
                  "Evidence-based approach with proven results",
                  "Shorter treatment duration than traditional therapy",
                  "Practical skills you can use for life",
                  "Focus on present challenges, not just past events",
                  "Collaborative approach between therapist and client"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity" asChild>
                <Link to="/about">Learn More About Our Approach</Link>
              </Button>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How CBT Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Identify Patterns</h4>
                    <p className="text-sm text-muted-foreground">Recognize unhelpful thoughts and behaviors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Challenge Thoughts</h4>
                    <p className="text-sm text-muted-foreground">Question and reframe negative thinking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Practice New Skills</h4>
                    <p className="text-sm text-muted-foreground">Develop healthier coping strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Create Lasting Change</h4>
                    <p className="text-sm text-muted-foreground">Build resilience for long-term wellbeing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who've transformed their lives through CBT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                condition: "Anxiety & Panic Disorder",
                text: "CBT therapy gave me the tools to manage my anxiety. I learned to challenge my worried thoughts and now feel more confident in social situations."
              },
              {
                name: "Michael K.",
                condition: "Depression",
                text: "The structured approach of CBT helped me break out of negative thinking patterns. I'm grateful for the practical skills I learned."
              },
              {
                name: "Lisa R.",
                condition: "OCD",
                text: "After years of struggling with OCD, CBT finally helped me understand my compulsions and develop effective coping strategies."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-card animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey to Better Mental Health?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Take the first step today. Book a free consultation to discuss your needs and learn how 
            cognitive behavioral therapy can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • Same-week availability • Insurance accepted
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
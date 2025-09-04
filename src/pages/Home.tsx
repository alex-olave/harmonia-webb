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
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              Compassionate CBT Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Find Your Path to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Emotional Wellbeing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm here to support you through life's challenges with personalized cognitive behavioral therapy. 
              Together, we'll work towards healing and growth in a safe, understanding environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Schedule a Chat
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About My Approach</Link>
              </Button>
            </div>
          </div>

          {/* Simple Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto animate-slide-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Licensed</div>
              <div className="text-sm text-muted-foreground">CBT Therapist</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="py-20 px-4 bg-gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How I Can Help You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in helping people work through these common challenges using gentle, 
              evidence-based cognitive behavioral therapy techniques.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why I Use Cognitive Behavioral Therapy
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                CBT is one of the most effective approaches to therapy because it gives you practical tools you can use right away. 
                We'll work together to understand your thoughts and feelings, and find new ways to respond to challenges.
              </p>
              
              <div className="space-y-4">
                {[
                  "Practical tools you can use immediately",
                  "Warm, personalized approach to healing",
                  "Focus on your current challenges and goals",
                  "Learn skills for long-term emotional wellbeing",
                  "Work at your own pace in a safe space"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity" asChild>
                <Link to="/about">Learn More About My Approach</Link>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Hear from some of the wonderful people I've had the privilege to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah",
                text: "Working with this therapist helped me understand my anxiety in a completely new way. I finally have tools that actually work, and I feel so much more confident."
              },
              {
                name: "Michael",
                text: "I was skeptical about therapy at first, but the gentle approach and practical techniques really helped me work through my depression. I'm grateful for the support."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-card animate-fade-in">
                <CardContent className="p-6">
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">- {testimonial.name}</span>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            If you're feeling ready to work on your mental health, I'd love to chat with you. 
            We can start with a friendly conversation to see if we're a good fit to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Schedule a Chat
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Friendly consultation • Flexible scheduling • Most insurance accepted
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
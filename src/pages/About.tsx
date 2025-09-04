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
              About Harmonia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm dedicated to providing compassionate, evidence-based cognitive behavioral therapy 
              to help you overcome life's challenges and achieve lasting positive change.
            </p>
          </div>

          {/* Our Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">My Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Harmonia, I believe that everyone deserves access to compassionate mental health care. 
                My mission is to provide professional, caring, and effective cognitive behavioral therapy 
                services that empower individuals to overcome challenges and live fulfilling lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am committed to creating a safe, non-judgmental environment where healing and growth can occur. 
                My evidence-based approach ensures that you receive effective, personalized treatment.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-card animate-fade-in">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Compassionate Care</h3>
                  <p className="text-sm text-muted-foreground">Providing empathetic support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Evidence-Based</h3>
                  <p className="text-sm text-muted-foreground">Proven therapeutic methods</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Individual Focus</h3>
                  <p className="text-sm text-muted-foreground">Personalized treatment plans</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">Ongoing education & training</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground text-4xl font-bold">H</span>
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Licensed CBT Therapist</h3>
                      <p className="text-primary font-medium mb-4">8+ Years Experience</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="text-xs">Anxiety</Badge>
                        <Badge variant="secondary" className="text-xs">Depression</Badge>
                        <Badge variant="secondary" className="text-xs">Life Transitions</Badge>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        I became a therapist because I believe in the power of small changes to create big transformations. 
                        After completing my training in cognitive behavioral therapy, I've spent the last eight years 
                        helping individuals work through anxiety, depression, and life's challenging transitions.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        What I love most about CBT is that it gives people practical tools they can use right away. 
                        My approach is warm, collaborative, and focused on your unique goals and strengths.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        When I'm not working, you'll find me reading, hiking, or spending time with my family. 
                        I bring this same sense of balance and authenticity to our work together.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">My Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-4">Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation to understand your unique needs and develop a personalized treatment plan.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-4">Treatment</h3>
                <p className="text-muted-foreground">
                  Evidence-based CBT techniques tailored to your specific goals and challenges.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-4">Growth</h3>
                <p className="text-muted-foreground">
                  Ongoing support and skill development to maintain progress and prevent relapse.
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
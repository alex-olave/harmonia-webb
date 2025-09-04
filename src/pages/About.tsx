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
              About Our Practice
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are dedicated to providing compassionate, evidence-based cognitive behavioral therapy 
              to help you overcome life's challenges and achieve lasting positive change.
            </p>
          </div>

          {/* Our Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At CBT Therapy Center, we believe that everyone deserves access to high-quality mental health care. 
                Our mission is to provide professional, compassionate, and effective cognitive behavioral therapy 
                services that empower individuals to overcome challenges and live fulfilling lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to creating a safe, non-judgmental environment where healing and growth can occur. 
                Our evidence-based approach ensures that you receive the most effective treatment available.
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

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  title: "Licensed Clinical Psychologist",
                  specialties: ["Anxiety Disorders", "Depression", "Trauma"],
                  experience: "15+ years experience",
                },
                {
                  name: "Dr. Michael Chen",
                  title: "CBT Specialist",
                  specialties: ["OCD", "Phobias", "Panic Disorders"],
                  experience: "12+ years experience",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  title: "Clinical Therapist",
                  specialties: ["Relationship Issues", "Stress Management", "Life Transitions"],
                  experience: "10+ years experience",
                },
              ].map((therapist, index) => (
                <Card key={index} className="bg-card shadow-card hover:shadow-gentle transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground text-2xl font-bold">
                        {therapist.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground text-center mb-1">
                      {therapist.name}
                    </h3>
                    <p className="text-primary text-center mb-3 font-medium">
                      {therapist.title}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {therapist.experience}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {therapist.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Approach</h2>
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
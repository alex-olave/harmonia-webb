import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Zap } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      icon: Clock,
      name: "Individual Sessions",
      price: "$120",
      period: "per session",
      description: "Standard one-on-one CBT sessions with personalized treatment plans",
      features: [
        "50-minute sessions",
        "Personalized treatment plan",
        "Between-session support",
        "Progress tracking",
        "Homework assignments",
        "Crisis support availability"
      ],
      popular: false,
      bookingNote: "Typically 12-20 sessions recommended"
    },
    {
      icon: Users,
      name: "Group Therapy",
      price: "$60",
      period: "per session",
      description: "Small group CBT sessions with peer support and shared learning",
      features: [
        "90-minute group sessions",
        "6-8 participants maximum",
        "Peer support network",
        "Group exercises and activities",
        "Individual check-ins",
        "Take-home materials"
      ],
      popular: true,
      bookingNote: "10-12 week programs"
    },
    {
      icon: Zap,
      name: "Intensive Program",
      price: "$200",
      period: "per session",
      description: "Accelerated treatment with multiple sessions per week for faster results",
      features: [
        "2-3 sessions per week",
        "Faster symptom relief",
        "Priority scheduling",
        "Extended session options",
        "Crisis intervention",
        "Comprehensive care coordination"
      ],
      popular: false,
      bookingNote: "6-8 week intensive programs"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      sessions: "6 Sessions",
      originalPrice: "$720",
      discountedPrice: "$650",
      savings: "$70",
      description: "Perfect for addressing specific concerns or trying CBT for the first time"
    },
    {
      name: "Standard Package",
      sessions: "12 Sessions",
      originalPrice: "$1,440",
      discountedPrice: "$1,260",
      savings: "$180",
      description: "Most popular option providing comprehensive treatment for most conditions"
    },
    {
      name: "Extended Package",
      sessions: "20 Sessions",
      originalPrice: "$2,400",
      discountedPrice: "$2,000",
      savings: "$400",
      description: "Comprehensive treatment for complex conditions or multiple concerns"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Affordable, high-quality cognitive behavioral therapy with flexible payment options. 
              We believe everyone deserves access to professional mental health care.
            </p>
          </div>

          {/* Main Pricing Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-card shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      {plan.bookingNote}
                    </p>
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Package Deals */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Package Deals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Save money with our session packages. Perfect for committed individuals ready to invest in their mental health journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-card shadow-card hover:shadow-gentle transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-foreground">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-foreground">{pkg.discountedPrice}</p>
                      <p className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</p>
                      <Badge variant="secondary" className="text-green-600">
                        Save {pkg.savings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="font-semibold text-foreground">{pkg.sessions}</p>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Insurance & Payment Info */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Insurance & Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accepted Insurance</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Blue Cross Blue Shield</li>
                    <li>• Aetna</li>
                    <li>• Cigna</li>
                    <li>• United Healthcare</li>
                    <li>• And many others</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Options</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Credit/Debit Cards</li>
                    <li>• HSA/FSA Accepted</li>
                    <li>• Payment Plans Available</li>
                    <li>• Sliding Scale for Financial Hardship</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Scheduling</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Online booking available 24/7</li>
                    <li>• Flexible appointment times</li>
                    <li>• Same-week availability</li>
                    <li>• Telehealth options available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    24-hour cancellation notice required. Late cancellations may incur a fee equivalent to 50% of the session cost.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards better mental health. Book a consultation today to discuss your needs and find the right treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
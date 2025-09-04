import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Redo att ta första steget mot bättre mental hälsa? Jag är här för att hjälpa.
              Kontakta mig idag för att boka en konsultation eller ställa frågor.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Skicka ett meddelande</CardTitle>
                  <p className="text-muted-foreground">
                    Fyll i formuläret nedan så återkommer jag inom 24 timmar.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Fullständigt namn *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Ditt fullständiga namn"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-postadress *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="din.epost@exempel.se"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefonnummer</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="070-123 45 67"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-method">Föredragen kontaktväg</Label>
                        <select
                          id="contact-method"
                          value={formData.preferredContact}
                          onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                          className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                        >
                          <option value="email">E-post</option>
                          <option value="phone">Telefon</option>
                          <option value="either">Spelar ingen roll</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Ämne</Label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                      >
                        <option value="">Välj ett ämne</option>
                        <option value="consultation">Kostnadsfri konsultation</option>
                        <option value="individual">Individuell terapi</option>
                        <option value="group">Gruppterapi</option>
                        <option value="couples">Parterapi</option>
                        <option value="pricing">Prisfrågor</option>
                        <option value="insurance">Försäkringsfrågor</option>
                        <option value="other">Annat</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Berätta hur jag kan hjälpa dig..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Skicka meddelande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card shadow-card animate-slide-in">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Kontaktinformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adress</p>
                      <p className="text-sm text-muted-foreground">
                        Online-terapi<br />
                        Hela Sverige<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <p className="text-sm text-muted-foreground">070-123 45 67</p>
                      <p className="text-xs text-muted-foreground">Krislinje: 112</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-post</p>
                      <p className="text-sm text-muted-foreground">anna-karin@harmonia-kbt.se</p>
                      <p className="text-xs text-muted-foreground">Svar inom 24 timmar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Tider</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Måndag - fredag: 08:00 - 20:00</p>
                        <p>Lördag: 09:00 - 17:00</p>
                        <p>Söndag: 10:00 - 16:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Snabbåtgärder</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    <Calendar className="w-4 h-4 mr-2" />
                    Boka kostnadsfri konsultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Livechatt
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Krissupport</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Om du har en akut kris, kontakta:
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-full justify-start p-3">
                      <span className="font-medium">Krislinje:</span>
                      <span className="ml-2">112</span>
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-start p-3">
                      <span className="font-medium">Suicidlinjen:</span>
                      <span className="ml-2">90101</span>
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-start p-3">
                      <span className="font-medium">BRIS (för barn/unga):</span>
                      <span className="ml-2">116 111</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Vanliga frågor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Hur snabbt kan jag få en tid?</h4>
                    <p className="text-sm text-muted-foreground">
                      Jag har vanligtvis lediga tider inom 1-2 veckor för nya klienter. Akuta konsultationer kan ofta bokas inom 24-48 timmar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Erbjuder du online-terapi?</h4>
                    <p className="text-sm text-muted-foreground">
                      Ja, jag erbjuder säkra videoterapi-sessioner för din bekvämlighet. Många klienter tycker att online-terapi är lika effektivt som fysiska möten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Vad kan jag förvänta mig av första sessionen?</h4>
                    <p className="text-sm text-muted-foreground">
                      Första sessionen fokuserar på att förstå dina bekymmer, diskutera dina mål och tillsammans utveckla en personlig behandlingsplan.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Är min information konfidentiell?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolut. Alla sessioner och kommunikation är strikt konfidentiell, enligt sekretesslagen och professionella etiska riktlinjer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Hur lång är en KBT-behandling vanligtvis?</h4>
                    <p className="text-sm text-muted-foreground">
                      KBT är vanligtvis kortare än andra terapiformer, ofta 12-20 sessioner, men det varierar beroende på individuella behov och mål.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tar du emot försäkring?</h4>
                    <p className="text-sm text-muted-foreground">
                      Jag tar emot de flesta större försäkringsbolag. Jag hjälper gärna till att kontrollera ditt försäkringsskydd innan första sessionen.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
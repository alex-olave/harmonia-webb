import SEO, { SITE_URL } from "@/components/SEO";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const formEndpoint = "https://formspree.io/f/mjgaqgyb";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "email",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      <SEO
        title="Kontakt och bokning"
        description="Kontakta Harmonia för att boka online KBT, ställa frågor om priser eller få mer information om hur samtalen fungerar."
        path="/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Harmonia KBT",
            url: SITE_URL,
            email: "anna-karin@harmonia-kbt.se",
            telephone: "+46738124226",
            areaServed: "SE",
            availableLanguage: ["sv"],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hur snabbt kan jag få en tid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vanligtvis finns lediga tider inom 1 till 2 veckor för nya klienter, och akuta konsultationer kan ofta bokas inom 24 till 48 timmar.",
                },
              },
              {
                "@type": "Question",
                name: "Erbjuder du online-terapi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, samtalen erbjuds online via Google Meet och det går bra att delta med eller utan kamera.",
                },
              },
              {
                "@type": "Question",
                name: "Hur lång är en KBT-behandling vanligtvis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KBT är ofta kortare än andra terapiformer och brukar ligga omkring 12 till 20 sessioner, beroende på behov och mål.",
                },
              },
            ],
          },
        ]}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakt
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Skicka ett meddelande
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fyll i formuläret så återkommer jag inom 24 timmar.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Fullständigt namn *</Label>
                        <Input
                          id="name"
                          name="name"
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
                          name="email"
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
                          name="phone"
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
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={(e) =>
                            handleInputChange("preferredContact", e.target.value)
                          }
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
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                      >
                        <option value="">Välj ett ämne</option>
                        <option value="Kostnadsfri konsultation">
                          Kostnadsfri konsultation
                        </option>
                        <option value="Individuell terapi">Individuell terapi</option>
                        <option value="Prisfrågor">Prisfrågor</option>
                        <option value="Forsakringsfrågor">Försäkringsfrågor</option>
                        <option value="Annat">Annat</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Berätta hur jag kan hjälpa dig..."
                        rows={5}
                        required
                      />
                    </div>

                    {submitStatus === "success" && (
                      <p className="text-sm text-green-700">
                        Tack! Ditt meddelande har skickats.
                      </p>
                    )}

                    {submitStatus === "error" && (
                      <p className="text-sm text-destructive">
                        Något gick fel när meddelandet skulle skickas. Försök
                        igen om en liten stund, eller mejla mig direkt på
                        anna-karin@harmonia-kbt.se.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70"
                    >
                      {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card shadow-card animate-slide-in">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Kontaktinformation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <p className="text-sm text-muted-foreground">073 81 24 226</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-post</p>
                      <p className="text-sm text-muted-foreground">
                        anna-karin@harmonia-kbt.se
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Svar inom 24 timmar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    Krissupport
                  </CardTitle>
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
                      <span className="font-medium">BRIS:</span>
                      <span className="ml-2">116 111</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Vanliga frågor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Hur snabbt kan jag få en tid?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Vanligtvis finns lediga tider inom 1-2 veckor för nya
                      klienter. Akuta konsultationer kan ibland bokas snabbare.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Erbjuder du online-terapi?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ja, samtalen sker online via Google Meet och det går bra
                      att delta med eller utan kamera.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Vad kan jag förvänta mig av första sessionen?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Första sessionen är främst ett samtal där vi lär känna varandra och går igenom vad som är viktigt för just dig, och
                        tillsammans utformar vi en plan för att hitta ett nytt förhållningssätt till negativa tankemönster.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Är min information konfidentiell?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ja. Sessioner och kommunikation behandlas konfidentiellt.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Hur lång är en KBT-behandling vanligtvis?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      KBT är ofta kortare än andra terapiformer och ligger ofta
                      runt 12-20 sessioner, beroende på behov och mål.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-2">
                      Tar du emot friskvårdsbidrag?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ja, om du använder Epassi.
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

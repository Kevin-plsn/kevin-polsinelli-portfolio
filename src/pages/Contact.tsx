
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Contact</h1>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              N'hésitez pas à me contacter pour discuter de projets, opportunités professionnelles 
              ou simplement pour échanger sur les thématiques qui me passionnent.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="w-full max-w-md border-primary/20">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-2 border-primary shadow-lg mb-4">
                  <img 
                    src="/lovable-uploads/b7ea56a5-46c6-4306-81b8-89970e8d4c89.png" 
                    alt="Kevin POLSINELLI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Kevin POLSINELLI</CardTitle>
                <CardDescription>Expert Ingénierie Informatique</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" className="flex gap-2">
                      <a href="mailto:contact@example.com">
                        <Mail className="h-5 w-5" />
                        Email
                      </a>
                    </Button>
                    
                    <Button asChild className="flex gap-2">
                      <a 
                        href="https://www.linkedin.com/in/kevin-polsinelli-a69198218/" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Je suis disponible pour discuter de nouvelles opportunités 
                      et collaborations. N'hésitez pas à me contacter !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

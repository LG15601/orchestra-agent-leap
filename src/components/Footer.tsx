import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 px-4 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Orchestra Connect</h3>
            <p className="text-muted-foreground">
              Agents IA nouvelle génération pour PME françaises
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@orchestra-connect.fr" className="hover:text-foreground transition-colors">
                  contact@orchestra-connect.fr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+33123456789" className="hover:text-foreground transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Démarrez maintenant</h4>
            <p className="text-sm text-muted-foreground">
              Obtenez une démo personnalisée en moins de 24h
            </p>
            <Button
              variant="hero"
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver ma démo
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Orchestra Connect. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

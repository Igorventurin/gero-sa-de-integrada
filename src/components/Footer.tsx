import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '@/assets/logo-horizontal.png';

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="SOMOS GERO"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Cuidado integrado para a saúde musculoesquelética da pessoa idosa. Unimos ortopedia, fisioterapia e especialidades complementares com ciência e acolhimento.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Londrina, PR<br />Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+5543999999999" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  (43) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:contato@somosgero.com.br" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  contato@somosgero.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-6">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} SOMOS GERO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

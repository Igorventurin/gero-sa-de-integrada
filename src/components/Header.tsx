import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-horizontal.png';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src={logo}
              alt="SOMOS GERO"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-beige/20 rounded-md transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contato"
              className="btn-secondary text-sm"
            >
              Converse com os profissionais
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-secondary block text-center"
                >
                  Converse com os profissionais
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

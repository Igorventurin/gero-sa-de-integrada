import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate a brief delay then redirect to WhatsApp
    setTimeout(() => {
      const phoneNumber = '5543996328616'; // Replace with actual WhatsApp number
      const message = encodeURIComponent(`Olá! Meu nome é ${name} e gostaria de saber mais sobre os serviços da SOMOS GERO.`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      
      setIsSubmitting(false);
      setName('');
      setPhone('');
      
      toast({
        title: "Redirecionando...",
        description: "Você será direcionado ao nosso WhatsApp.",
      });
    }, 500);
  };

  return (
    <section id="contato" className="section-padding section-beige">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-section text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground">
              Preencha seus dados e entraremos em contato pelo WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  maxLength={16}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar e ir para WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

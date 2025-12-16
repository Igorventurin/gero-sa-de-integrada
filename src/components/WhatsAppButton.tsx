import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '5543999999999'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da SOMOS GERO.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

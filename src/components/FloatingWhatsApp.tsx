import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/2347051551543";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9995] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-1.5 sm:-inset-2 rounded-full animate-ping opacity-30 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500"></div>
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/50">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 animate-pulse opacity-50"></div>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;

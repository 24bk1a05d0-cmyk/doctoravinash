import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+917488000000';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/7488707238?text=Hello%20Dr.%20Avinash%20Raj,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all group relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          WhatsApp Us
        </span>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="bg-sky-600 hover:bg-sky-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all group relative"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 md:h-7 md:w-7" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Call Now
        </span>
      </motion.button>
    </div>
  );
}

import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:7488707238';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/7488707238?text=Hello%20Dr.%20Avinash%20Raj,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/90 via-blue-700/85 to-cyan-600/90 z-10" />
        <img
          src="/bhaijihero.png"
          alt="Dental Clinic"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Healthy Smile Starts Here 😁
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mb-3 text-sky-50"
            >
              Expert dental care by <span className="font-semibold">Dr. Avinash Raj</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg mb-8 text-sky-100"
            >
              Trusted care for your entire family
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-white text-sky-700 hover:bg-sky-50 font-semibold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>

              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-green-500 text-white hover:bg-green-600 font-semibold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Booking
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-3 text-sky-50"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Available Today</span>
              </div>
              <span className="text-sky-300">•</span>
              <span className="text-sm">Mon-Sat, 10am-7pm</span>
            </motion.div>
          </motion.div>

          {/* Right: Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bhaijihero.png"
                alt="Dr. Avinash Raj"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Dr. Avinash Raj</h3>
                <p className="text-sky-200 text-sm">BDS, Dental Surgeon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

export function EmergencyCTA() {
  const handleCall = () => {
    window.location.href = 'tel:+917488000000';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/7488707238?text=Hello%20Dr.%20Avinash%20Raj,%20I%20have%20a%20dental%20emergency', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 md:p-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <AlertCircle className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                  Tooth Pain? Don't Wait.
                </h2>
              </div>
              <p className="text-white/90 text-center text-base md:text-lg">
                दर्द सहना जरूरी नहीं। अभी संपर्क करें।
              </p>
            </div>

            <div className="p-6 md:p-10">
              <p className="text-gray-700 text-center mb-8 text-base md:text-lg leading-relaxed">
                Dental emergencies can happen anytime. We're here to help you get relief fast.
                <strong> Same-day appointments available</strong> for urgent cases.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call Now - Emergency
                </Button>

                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Book Appointment
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-2xl">10am - 7pm</p>
                  <p className="text-gray-600 text-sm">Mon - Sat</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-2xl">Same Day</p>
                  <p className="text-gray-600 text-sm">Emergency Slots</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-2xl">Near You</p>
                  <p className="text-gray-600 text-sm">Belsand, Sitamarhi</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

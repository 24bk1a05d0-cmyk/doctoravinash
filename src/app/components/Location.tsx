import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';

export function Location() {
  const handleCall = () => {
    window.location.href = 'tel:7488707238';
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/place/Simra+Chowk,+Bihar+843301/@26.5519708,85.520901,3a,75y,155.93h,86.42t/data=!3m7!1e1!3m5!1sTFefPIhEAce92mpN07FQLA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D3.577145217310431%26panoid%3DTFefPIhEAce92mpN07FQLA%26yaw%3D155.9340893550222!7i13312!8i6656!4m15!1m8!3m7!1s0x39ecf74d2ffeae75:0xe46112adf9da3ab9!2sSimra+Chowk,+Bihar+843301!3b1!8m2!3d26.5520409!4d85.5206498!16s%2Fg%2F11bz41fw7t!3m5!1s0x39ecf74d2ffeae75:0xe46112adf9da3ab9!8m2!3d26.5520409!4d85.5206498!16s%2Fg%2F11bz41fw7t?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/7488707238?text=Hello%20Dr.%20Avinash%20Raj,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Easy to find, easy to reach
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.234567890123!2d85.4567890!3d26.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf74d2ffeae75:0xe46112adf9da3ab9!2sSimra+Chowk,+Bihar+843301!5e0!3m2!1sen!2sin!4v1720730600000!5m2!1sen!2sin!4m15!1m8!3m7!1s0x39ecf74d2ffeae75:0xe46112adf9da3ab9!2sSimra+Chowk,+Bihar+843301!3b1!8m2!3d26.5520409!4d85.5206498!16s%2Fg%2F11bz41fw7t!3m5!1s0x39ecf74d2ffeae75:0xe46112adf9da3ab9!8m2!3d26.5520409!4d85.5206498!16s%2Fg%2F11bz41fw7t?entry=ttu&amp;g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oral Dental Clinic Location"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Oral Dental Clinic</strong><br />
                      आरल डेंटल क्लिनिक<br />
                      Near Shiv Medical Hall<br />
                      Belsand/Simra, Sitamarhi<br />
                      Bihar - 843302
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Contact</h3>
                    <p className="text-gray-700 mb-3">
                      Phone: <span className="font-semibold">74887 07238</span>
                    </p>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={handleCall}
                        className="bg-sky-600 hover:bg-sky-700"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleWhatsApp}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Clinic Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p className="text-sm text-purple-700 mt-2">
                        ⚡ Emergency cases accepted
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGetDirections}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-6"
                size="lg"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { GraduationCap, CheckCircle } from 'lucide-react';

export function AboutDoctor() {
  const qualifications = [
    'BDS (Bachelor of Dental Surgery)',
    'Expert in painless extractions',
    'Specialized in root canal treatments',
    'Family dental care specialist'
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 to-cyan-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/bhaiji.png"
                  alt="Dr. Avinash Raj - Dental Surgeon"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-sky-600" />
                    <span className="font-semibold text-gray-900">BDS Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Meet Dr. Avinash Raj
              </h2>
              <p className="text-sky-600 font-semibold mb-4 text-lg">
                BDS, Dental Surgeon
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                Providing reliable and affordable dental care with a focus on patient comfort
                and long-term oral health. Every patient deserves a healthy smile and
                pain-free treatment.
              </p>

              <div className="space-y-3 mb-6">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{qual}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-sky-100">
                <p className="text-gray-800 italic">
                  "मेरा लक्ष्य है कि हर मरीज को बिना दर्द के बेहतरीन इलाज मिले और वे स्वस्थ मुस्कान के साथ घर जाएं।"
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  — Dr. Avinash Raj
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

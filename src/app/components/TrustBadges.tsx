import { motion } from 'motion/react';
import { Award, Shield, Heart, Smile } from 'lucide-react';

const badges = [
  {
    icon: Award,
    title: 'Qualified Dental Surgeon',
    subtitle: 'BDS Certified',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Shield,
    title: 'Safe & Hygienic Treatment',
    subtitle: 'Sterilized Equipment',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Heart,
    title: 'Experienced Care',
    subtitle: 'Years of Practice',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Smile,
    title: 'Patient-Friendly Approach',
    subtitle: 'Comfortable Treatment',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  }
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-sky-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted dental partner in Belsand, Sitamarhi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`${badge.bgColor} ${badge.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {badge.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

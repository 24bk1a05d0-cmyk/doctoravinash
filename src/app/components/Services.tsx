import { motion } from 'motion/react';
import { Wrench, Sparkles, Activity, Users, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Tooth Extraction',
    description: 'Painless tooth removal with expert care',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Sparkles,
    title: 'Teeth Cleaning',
    description: 'Professional cleaning for a brighter smile',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    description: 'Advanced treatment to save your tooth',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Users,
    title: 'Dentures / Artificial Teeth',
    description: 'Custom-fitted dentures for comfort',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Stethoscope,
    title: 'General Dental Checkup',
    description: 'Complete oral health examination',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

export function Services() {
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
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care for all your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Belsand',
    rating: 5,
    text: 'Very gentle doctor, painless treatment. मुझे root canal करवाना था और मैं बहुत डर रहा था, लेकिन डॉक्टर साहब ने बहुत आराम से किया। दर्द बिल्कुल नहीं हुआ।',
    image: '👨'
  },
  {
    name: 'Sunita Devi',
    location: 'Sitamarhi',
    rating: 5,
    text: 'Affordable and clean clinic. पहली बार इतने साफ-सुथरे क्लिनिक में गई। दाम भी उचित है और इलाज भी बढ़िया। हमारे पूरे परिवार का इलाज यहीं होता है।',
    image: '👩'
  },
  {
    name: 'Amit Singh',
    location: 'Belsand',
    rating: 5,
    text: 'Best dentist in Belsand area. डॉक्टर बहुत समझदार हैं और मरीज की बात ध्यान से सुनते हैं। Treatment भी professional है।',
    image: '👨‍💼'
  },
  {
    name: 'Priya Kumari',
    location: 'Sitamarhi',
    rating: 5,
    text: 'Highly recommended! मेरे बच्चे के दांत का इलाज बहुत अच्छे से किया। बच्चा भी डरा नहीं। थैंक यू डॉक्टर साहब!',
    image: '👩‍🦰'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-sky-200" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                👨
              </div>
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                👩
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                👨‍💼
              </div>
            </div>
            <span className="text-gray-700 font-semibold">
              500+ Happy Patients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

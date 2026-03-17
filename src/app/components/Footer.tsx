import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-sky-400">
              Oral Dental Clinic
            </h3>
            <p className="text-gray-300 mb-2">आरल डेंटल क्लिनिक</p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Expert dental care by Dr. Avinash Raj, BDS. Your trusted dental partner in Belsand.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Available for appointments</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-400">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  Near Shiv Medical Hall<br />
                  Belsand/Simra, Sitamarhi<br />
                  Bihar - 843302
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <a href="tel:7488707238" className="text-gray-300 hover:text-white transition-colors text-sm">
                  74887 07238
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@oraldentalclinic.in
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-400">Clinic Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold">Monday - Saturday</p>
                  <p>10:00 AM - 7:00 PM</p>
                  <p className="text-red-400 mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-sky-900/30 rounded-lg p-3 border border-sky-700/30">
              <p className="text-sky-300 font-semibold text-sm mb-1">
                🦷 Services
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Tooth Extraction • Cleaning • Root Canal • Dentures • General Checkup
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Oral Dental Clinic. All rights reserved. | Dr. Avinash Raj, BDS
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed for patient care and comfort
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

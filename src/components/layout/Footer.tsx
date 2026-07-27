import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold font-heading text-white">
                Ashapura <span className="text-secondary">Travels</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your Trusted Travel Partner in Kutch. We offer premium, comfortable, and affordable car rental services and tour packages across Kutch and beyond.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Car Fleet', 'Kutch Destinations', 'Tour Packages', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-').replace('our-', '').replace('-us', '')}`}
                    className="text-slate-400 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-heading">Our Services</h4>
            <ul className="space-y-2">
              {['Local Sightseeing', 'One Way Taxi', 'Airport Transfer', 'Corporate Travel', 'Family Tours', 'Wedding Car'].map((item) => (
                <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Bhuj, Kutch, Gujarat, India - 370001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:7069807339" className="text-sm text-slate-400 hover:text-white transition-colors">+91 7069807339</a>
                  <a href="tel:9913953212" className="text-sm text-slate-400 hover:text-white transition-colors">+91 9913953212</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@ashapuratravels.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@ashapuratravels.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Ashapura Tour & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

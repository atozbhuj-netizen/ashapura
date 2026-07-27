import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548818559-0f46c656911c?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-900/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
            Explore Kutch With <span className="text-secondary">Comfort</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            Affordable Car Rental & Premium Tour Packages Across the Beauty of Kutch.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg hover:scale-105">
                Book Now
              </Button>
            </Link>
            <a href="tel:7069807339" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full gap-2 text-lg hover:scale-105">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom curved shape or gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10"></div>
    </section>
  );
};

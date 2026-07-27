import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { cars } from '../data/cars';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin } from 'lucide-react';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ashapura Tour & Travels | Premium Car Rental in Kutch</title>
        <meta name="description" content="Explore Kutch with comfort. Affordable car rental and tour packages across Kutch. Professional drivers, clean cars, and 24x7 booking." />
      </Helmet>

      <Hero />
      <WhyChooseUs />

      {/* Popular Destinations Preview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations in Kutch</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Discover the vibrant culture, vast white desert, and historical monuments of Kutch with our guided tours.
              </p>
            </div>
            <Link to="/destinations" className="mt-6 md:mt-0">
              <Button variant="outline" className="gap-2">
                View All Destinations <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((destination, index) => (
              <Card key={destination.id} className="group overflow-hidden cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 text-primary">
                    <MapPin className="w-3 h-3" />
                    {destination.distance}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{destination.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                    {destination.shortDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Curated itineraries to ensure you don't miss the best of Kutch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.slice(0, 2).map((pkg, index) => (
              <Card key={pkg.id} className="flex flex-col sm:flex-row overflow-hidden group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-accent font-bold px-3 py-1 rounded-lg text-sm shadow-md">
                    {pkg.duration}
                  </div>
                </div>
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white dark:bg-slate-900">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{pkg.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {pkg.shortDescription}
                  </p>
                  <div className="mt-auto">
                    <Link to="/packages">
                      <Button variant="outline" className="w-full sm:w-auto">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/packages">
              <Button>Explore All Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Fleet</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Choose from our wide range of well-maintained vehicles for a comfortable journey.
              </p>
            </div>
            <Link to="/fleet" className="mt-6 md:mt-0">
              <Button variant="outline" className="gap-2">
                View Entire Fleet <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.slice(0, 4).map((car, index) => (
              <Card key={car.id} data-aos="fade-up" data-aos-delay={index * 100} className="group">
                <div className="h-48 overflow-hidden p-4 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <div className="text-xs font-semibold text-secondary mb-1 uppercase tracking-wider">{car.category}</div>
                  <h3 className="font-bold text-lg">{car.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
    </>
  );
};

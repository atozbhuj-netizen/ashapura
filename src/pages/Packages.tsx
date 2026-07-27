import { Helmet } from 'react-helmet-async';
import { packages } from '../data/packages';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Car } from 'lucide-react';

export const Packages = () => {
  return (
    <>
      <Helmet>
        <title>Tour Packages | Ashapura Tour & Travels</title>
        <meta name="description" content="Explore our curated Kutch tour packages including White Rann, Bhuj local sightseeing, and religious tours." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629237466170-176378411d73?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Tour Packages</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Curated itineraries to ensure you don't miss the best of Kutch.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} data-aos="fade-up" data-aos-delay={index * 100} className="flex flex-col md:flex-row overflow-hidden group">
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative shrink-0">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-accent font-bold px-3 py-1 rounded-lg text-sm shadow-md">
                    {pkg.duration}
                  </div>
                </div>
                
                <CardContent className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{pkg.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {pkg.shortDescription}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold block text-slate-800 dark:text-slate-200">Places Covered:</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{pkg.placesCovered.join(', ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold block text-slate-800 dark:text-slate-200">Available Vehicles:</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{pkg.vehiclesAvailable.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <a href="tel:7069807339" className="flex-1">
                      <Button variant="outline" className="w-full">Call Now</Button>
                    </a>
                    <a href={`https://wa.me/917069807339?text=Hello,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">Book Package</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

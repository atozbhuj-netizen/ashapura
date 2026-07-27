import { Helmet } from 'react-helmet-async';
import { destinations } from '../data/destinations';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

export const Destinations = () => {
  return (
    <>
      <Helmet>
        <title>Kutch Tourist Destinations | Ashapura Tour & Travels</title>
        <meta name="description" content="Explore the best tourist destinations in Kutch including White Rann, Kala Dungar, Mandvi Beach, and Dholavira with our guided tours." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Kutch Tourist Destinations</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover the vibrant culture, vast white desert, and historical monuments of Kutch.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={destination.id} data-aos="fade-up" data-aos-delay={index * 50} className="group overflow-hidden flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{destination.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                    {destination.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 text-secondary shrink-0" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CalendarDays className="w-4 h-4 text-secondary shrink-0" />
                      <span>Best Time: {destination.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-secondary shrink-0" />
                      <span>Duration: {destination.duration}</span>
                    </div>
                  </div>

                  <a href={`https://wa.me/917069807339?text=Hello,%20I%20want%20to%20book%20a%20taxi%20for%20${encodeURIComponent(destination.name)}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Book Taxi
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

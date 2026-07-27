import { Helmet } from 'react-helmet-async';
import { cars } from '../data/cars';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Users, Briefcase, Snowflake } from 'lucide-react';

export const Fleet = () => {
  return (
    <>
      <Helmet>
        <title>Car Fleet | Ashapura Tour & Travels</title>
        <meta name="description" content="Choose from our premium fleet of Hatchbacks, Sedans, SUVs, and Tempo Travellers for a comfortable journey in Kutch." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Car Fleet</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Well-maintained, clean, and comfortable vehicles for every group size and budget.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card key={car.id} data-aos="fade-up" data-aos-delay={index * 50} className="group flex flex-col h-full">
                <div className="h-56 overflow-hidden p-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {car.category}
                  </div>
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">{car.passengers} Seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Briefcase className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">{car.luggage} Bags</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Snowflake className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">{car.ac ? 'AC Available' : 'Non-AC'}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href={`https://wa.me/917069807339?text=Hello,%20I%20want%20to%20book%20the%20${encodeURIComponent(car.name)}`} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full gap-2">
                        Book This Car
                      </Button>
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

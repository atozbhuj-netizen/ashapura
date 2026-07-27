import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { Card, CardContent } from '../components/ui/Card';

export const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Ashapura Tour & Travels</title>
        <meta name="description" content="Explore our wide range of car rental services in Kutch including local sightseeing, outstation tours, airport transfers, and more." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Premium Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to meet all your transportation needs across Kutch and Gujarat.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} data-aos="fade-up" data-aos-delay={index * 100} className="text-center group border-0 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

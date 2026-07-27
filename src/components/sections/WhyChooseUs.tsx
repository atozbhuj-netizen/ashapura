import { Shield, Clock, ThumbsUp, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '../ui/Card';

const features = [
  {
    icon: ThumbsUp,
    title: 'Affordable Price',
    description: 'We offer competitive and transparent pricing with no hidden charges.',
  },
  {
    icon: Shield,
    title: 'Safe Journey',
    description: 'Your safety is our priority. All vehicles are GPS enabled and drivers are verified.',
  },
  {
    icon: Clock,
    title: '24×7 Service',
    description: 'Round-the-clock customer support and car rental availability.',
  },
  {
    icon: MapPin,
    title: 'Doorstep Pickup',
    description: 'Convenient pickup and drop-off at your home, hotel, or airport.',
  },
];

const stats = [
  { value: 15, label: 'Years Experience', suffix: '+' },
  { value: 50, label: 'Vehicles', suffix: '+' },
  { value: 10, label: 'K+ Happy Clients', suffix: 'K' },
  { value: 100, label: 'Tour Packages', suffix: '%' }, // 100% Satisfaction
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Ashapura Tour & Travels is dedicated to providing the most reliable, comfortable, and affordable travel solutions across Kutch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className="text-center group border-0 bg-transparent shadow-none hover:shadow-none dark:bg-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-10 lg:p-16 text-white shadow-xl relative overflow-hidden" data-aos="zoom-in">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-2">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} />
                  ) : (
                    '0'
                  )}
                  {stat.suffix}
                </h4>
                <p className="text-sm md:text-base font-medium text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

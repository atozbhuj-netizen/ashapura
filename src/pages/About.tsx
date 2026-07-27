import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Award } from 'lucide-react';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ashapura Tour & Travels</title>
        <meta name="description" content="Ashapura Tour & Travels is one of the trusted travel service providers in Kutch offering AC and Non AC vehicles for all travel requirements." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Ashapura Travels</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Your Trusted Travel Partner in Kutch, providing premium, comfortable, and affordable car rental services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" 
                  alt="About Ashapura Travels" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-primary text-4xl font-bold font-heading mb-1">15+</div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Years of Experience</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Ashapura Tour & Travels is one of the most trusted travel service providers in Kutch, offering both AC and Non AC vehicles for all your travel requirements. We are dedicated to making your journeys across Kutch and Gujarat as comfortable, safe, and memorable as possible.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you need a car for local sightseeing, outstation travel, airport transfers, or corporate events, we have a diverse fleet of well-maintained vehicles to cater to your specific needs and budget. Our focus has always been on safety, comfort, affordable pricing, punctual service, and ultimate customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Clean & Well Maintained Cars',
                  'Professional & Verified Drivers',
                  'Transparent Pricing',
                  '24/7 Customer Support',
                  'Punctual Service',
                  'Customized Tour Packages'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-soft" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide safe, reliable, and affordable transport solutions to travelers exploring Kutch, ensuring every journey is comfortable and leaves our customers with beautiful memories.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-soft" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To be the leading and most trusted car rental and travel agency in Kutch, known for our uncompromising commitment to quality, customer satisfaction, and continuous innovation in our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

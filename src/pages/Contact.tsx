import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

type ContactFormData = {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  vehicle: string;
  tripType: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Generate WhatsApp message based on form data
    const message = `Hello Ashapura Tour & Travels,\n\nI would like to book a car.
Name: ${data.name}
Mobile: ${data.phone}
Pickup: ${data.pickup}
Drop: ${data.drop}
Date: ${data.date}
Vehicle: ${data.vehicle}
Trip Type: ${data.tripType}
Message: ${data.message || 'None'}\n\nPlease contact me.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917069807339?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ashapura Tour & Travels</title>
        <meta name="description" content="Contact Ashapura Tour & Travels for car rental bookings, tour packages, and travel inquiries in Kutch." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, and customized tour packages.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <Card className="mb-6">
                  <CardContent className="p-6 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Phone Numbers</h4>
                        <a href="tel:7069807339" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">+91 7069807339</a>
                        <a href="tel:9913953212" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">+91 9913953212</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                        <a href="mailto:info@ashapuratravels.com" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">info@ashapuratravels.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Office Address</h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          Ashapura Tour & Travels<br />
                          Bhuj, Kutch<br />
                          Gujarat, India - 370001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          24x7 Available for Booking<br />
                          Office: 9:00 AM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Book Your Ride / Send Inquiry</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name *</label>
                        <input 
                          {...register('name', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-xs text-red-500">Name is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number *</label>
                        <input 
                          {...register('phone', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+91 9876543210"
                        />
                        {errors.phone && <span className="text-xs text-red-500">Phone is required</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Pickup Location *</label>
                        <input 
                          {...register('pickup', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Bhuj Railway Station"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Drop Location *</label>
                        <input 
                          {...register('drop', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="White Rann / Hotel"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Journey Date *</label>
                        <input 
                          type="date"
                          {...register('date', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Vehicle Type *</label>
                        <select 
                          {...register('vehicle', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="Hatchback (Swift/WagonR)">Hatchback (Swift/WagonR)</option>
                          <option value="Sedan (Dzire/Etios)">Sedan (Dzire/Etios)</option>
                          <option value="SUV (Innova/Ertiga)">SUV (Innova/Ertiga)</option>
                          <option value="Tempo Traveller">Tempo Traveller</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Trip Type *</label>
                        <select 
                          {...register('tripType', { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="Local Sightseeing">Local Sightseeing</option>
                          <option value="Outstation">Outstation</option>
                          <option value="One Way Drop">One Way Drop</option>
                          <option value="Airport/Railway Transfer">Airport/Railway Transfer</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Special Request / Message</label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Any specific requirements..."
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                      <Send className="w-5 h-5" />
                      Send on WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200 dark:bg-slate-800">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.19520448108!2d69.58557989938817!3d23.24213165201174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e6490895315%3A0xc0fb10df4312ce10!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </section>
    </>
  );
};

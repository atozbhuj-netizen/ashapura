import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export const TestimonialsCarousel = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Don't just take our word for it. Read reviews from our happy travelers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            className="w-full max-w-md mx-auto"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 h-auto">
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white dark:border-slate-800"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

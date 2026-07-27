export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Patel',
    city: 'Ahmedabad',
    rating: 5,
    review: 'Booked a 3-day Kutch tour with Ashapura Travels. The Innova was very clean and well-maintained. Our driver, Maheshbhai, was extremely polite and acted as a great guide throughout the trip. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 't2',
    name: 'Sneha Sharma',
    city: 'Mumbai',
    rating: 5,
    review: 'We used their services for an airport pickup and local sightseeing in Bhuj. The booking process via WhatsApp was seamless, pricing was transparent, and the service was punctual. A very professional travel agency.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 't3',
    name: 'Amit Kumar',
    city: 'Delhi',
    rating: 5,
    review: 'Rented a Swift Dzire for our family trip to Rann Utsav. The car was in excellent condition with good AC. The driver knew all the local routes and good places to eat. Made our Kutch trip memorable.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 't4',
    name: 'Priya Desai',
    city: 'Surat',
    rating: 5,
    review: 'Excellent service! We hired a Tempo Traveller for our large family group. Very comfortable seating, smooth driving, and affordable rates compared to others in Bhuj. Will definitely book with them again.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

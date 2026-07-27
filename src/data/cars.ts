export interface Car {
  id: string;
  name: string;
  category: string;
  image: string;
  passengers: number;
  luggage: number;
  ac: boolean;
  pricePerKm: number;
}

export const cars: Car[] = [
  {
    id: 'c1',
    name: 'Maruti Suzuki Swift',
    category: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&q=80&w=800',
    passengers: 4,
    luggage: 2,
    ac: true,
    pricePerKm: 10,
  },
  {
    id: 'c2',
    name: 'Maruti Suzuki WagonR',
    category: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1629897148564-946344ab4f9a?auto=format&fit=crop&q=80&w=800',
    passengers: 4,
    luggage: 2,
    ac: true,
    pricePerKm: 10,
  },
  {
    id: 'c3',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    passengers: 4,
    luggage: 3,
    ac: true,
    pricePerKm: 12,
  },
  {
    id: 'c4',
    name: 'Hyundai Aura',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1550346146-24cb185c74fa?auto=format&fit=crop&q=80&w=800',
    passengers: 4,
    luggage: 3,
    ac: true,
    pricePerKm: 12,
  },
  {
    id: 'c5',
    name: 'Toyota Etios',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
    passengers: 4,
    luggage: 3,
    ac: true,
    pricePerKm: 12,
  },
  {
    id: 'c6',
    name: 'Maruti Suzuki Ertiga',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    passengers: 6,
    luggage: 4,
    ac: true,
    pricePerKm: 15,
  },
  {
    id: 'c7',
    name: 'Toyota Innova Crysta',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800',
    passengers: 7,
    luggage: 5,
    ac: true,
    pricePerKm: 18,
  },
  {
    id: 'c8',
    name: 'Mahindra Scorpio',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1559404221-d601b332d431?auto=format&fit=crop&q=80&w=800',
    passengers: 7,
    luggage: 4,
    ac: true,
    pricePerKm: 16,
  },
  {
    id: 'c9',
    name: 'Tempo Traveller',
    category: 'Van',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    passengers: 12,
    luggage: 10,
    ac: true,
    pricePerKm: 25,
  },
];

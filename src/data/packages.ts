export interface Package {
  id: string;
  name: string;
  duration: string;
  placesCovered: string[];
  image: string;
  vehiclesAvailable: string[];
  shortDescription: string;
}

export const packages: Package[] = [
  {
    id: 'p1',
    name: '1 Day Bhuj Local Sightseeing',
    duration: '1 Day',
    placesCovered: ['Aina Mahal', 'Prag Mahal', 'Kutch Museum', 'Swaminarayan Temple', 'Smritivan', 'Bhujodi'],
    image: 'https://images.unsplash.com/photo-1601614051084-5f15d7426e2e?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['Sedan', 'SUV', 'Tempo Traveller'],
    shortDescription: 'Explore the historical monuments, museums, and handicraft villages in and around Bhuj city.',
  },
  {
    id: 'p2',
    name: 'White Rann & Kala Dungar',
    duration: '1 Day / 1 Night',
    placesCovered: ['Khavda Village', 'Kala Dungar', 'India Bridge', 'White Rann (Rann Utsav)'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['Hatchback', 'Sedan', 'SUV'],
    shortDescription: 'Experience the magic of the white salt desert and enjoy a panoramic sunset from the highest point in Kutch.',
  },
  {
    id: 'p3',
    name: 'Mandvi Beach Tour',
    duration: '1 Day',
    placesCovered: ['72 Jinalaya', 'Vijay Vilas Palace', 'Shyamji Krishna Varma Memorial', 'Mandvi Beach'],
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['Sedan', 'SUV', 'Van'],
    shortDescription: 'Relax on the pristine beaches of Mandvi and explore royal heritage and historical memorials.',
  },
  {
    id: 'p4',
    name: 'Religious Tour of Kutch',
    duration: '2 Days / 1 Night',
    placesCovered: ['Mata no Madh', 'Narayan Sarovar', 'Koteshwar', 'Lakhpat Fort', 'Chhari Dhandh'],
    image: 'https://images.unsplash.com/photo-1616428781600-d9d3004494fb?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['Sedan', 'SUV'],
    shortDescription: 'A spiritual journey covering the most sacred temples and historical sites in western Kutch.',
  },
  {
    id: 'p5',
    name: 'Complete Kutch Experience',
    duration: '3 Days / 2 Nights',
    placesCovered: ['Bhuj Local', 'White Rann', 'Kala Dungar', 'Mandvi', 'Mata no Madh', 'Narayan Sarovar'],
    image: 'https://images.unsplash.com/photo-1629237466170-176378411d73?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['SUV', 'Tempo Traveller'],
    shortDescription: 'Our most popular comprehensive tour package covering all major attractions across the Kutch district.',
  },
  {
    id: 'p6',
    name: 'Dholavira Heritage Tour',
    duration: '1 Day / 2 Days',
    placesCovered: ['Dholavira Harappan Site', 'Fossil Park', 'Wood Fossil Park', 'Rann Lake'],
    image: 'https://images.unsplash.com/photo-1621217036329-a35ab254c794?auto=format&fit=crop&q=80&w=800',
    vehiclesAvailable: ['Sedan', 'SUV'],
    shortDescription: 'Journey back in time to one of the largest and most prominent archaeological sites of the Indus Valley Civilization.',
  },
];

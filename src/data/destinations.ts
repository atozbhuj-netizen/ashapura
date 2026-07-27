export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  distance: string; // from Bhuj
  bestTime: string;
  duration: string;
}

export const destinations: Destination[] = [
  {
    id: 'd1',
    name: 'White Rann of Kutch',
    shortDescription: 'The Great Rann of Kutch is a seasonal salt marsh located in the Thar Desert. It is one of the largest salt deserts in the world.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1000',
    distance: '85 km from Bhuj',
    bestTime: 'October to March',
    duration: '1-2 Days',
  },
  {
    id: 'd2',
    name: 'Kala Dungar (Black Hill)',
    shortDescription: 'The highest point in Kutch, offering spectacular panoramic views of the Great Rann. Known for the 400-year-old Dattatreya temple.',
    image: 'https://images.unsplash.com/photo-1629237466170-176378411d73?auto=format&fit=crop&q=80&w=1000',
    distance: '97 km from Bhuj',
    bestTime: 'October to March (Sunset time)',
    duration: '4-5 Hours',
  },
  {
    id: 'd3',
    name: 'Mandvi Beach',
    shortDescription: 'A pristine, tranquil beach in the coastal town of Mandvi. Enjoy camel rides, water sports, and beautiful sunset views.',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000',
    distance: '60 km from Bhuj',
    bestTime: 'Throughout the year',
    duration: 'Half Day',
  },
  {
    id: 'd4',
    name: 'Vijay Vilas Palace',
    shortDescription: 'A magnificent summer palace built in Rajput architecture style. Famous for its appearance in several Bollywood movies.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000',
    distance: '65 km from Bhuj (near Mandvi)',
    bestTime: 'Throughout the year',
    duration: '2-3 Hours',
  },
  {
    id: 'd5',
    name: 'Dholavira',
    shortDescription: 'An archaeological site containing ruins of an ancient Indus Valley Civilization city. A UNESCO World Heritage Site.',
    image: 'https://images.unsplash.com/photo-1621217036329-a35ab254c794?auto=format&fit=crop&q=80&w=1000',
    distance: '210 km from Bhuj',
    bestTime: 'October to March',
    duration: '1 Full Day',
  },
  {
    id: 'd6',
    name: 'Smritivan Earthquake Memorial',
    shortDescription: 'A large memorial and museum built on Bhujiyo Dungar dedicated to the victims of the 2001 Gujarat earthquake.',
    image: 'https://images.unsplash.com/photo-1599583196947-f377c8e9b600?auto=format&fit=crop&q=80&w=1000',
    distance: 'Located in Bhuj',
    bestTime: 'Throughout the year',
    duration: '3-4 Hours',
  },
  {
    id: 'd7',
    name: 'Aina Mahal & Prag Mahal',
    shortDescription: 'Historic palaces in the heart of Bhuj. Aina Mahal is an 18th-century palace of mirrors, while Prag Mahal features Gothic-style architecture.',
    image: 'https://images.unsplash.com/photo-1601614051084-5f15d7426e2e?auto=format&fit=crop&q=80&w=1000',
    distance: 'Located in Bhuj',
    bestTime: 'Throughout the year',
    duration: '2 Hours',
  },
  {
    id: 'd8',
    name: 'Mata no Madh',
    shortDescription: 'A famous temple dedicated to Ashapura Mata, the patron deity of the former Jadeja rulers of Kutch.',
    image: 'https://images.unsplash.com/photo-1585444154784-06d2038743c3?auto=format&fit=crop&q=80&w=1000',
    distance: '138 km from Bhuj',
    bestTime: 'Navratri or throughout the year',
    duration: 'Half Day',
  },
  {
    id: 'd9',
    name: 'Narayan Sarovar & Koteshwar',
    shortDescription: 'Narayan Sarovar is one of the five holy lakes of Hinduism. Nearby Koteshwar features a historic Shiva temple overlooking the sea.',
    image: 'https://images.unsplash.com/photo-1616428781600-d9d3004494fb?auto=format&fit=crop&q=80&w=1000',
    distance: '150 km from Bhuj',
    bestTime: 'October to March',
    duration: 'Half to Full Day',
  },
];

import { 
  Car, 
  Plane, 
  Train, 
  MapPin, 
  Briefcase, 
  Users, 
  Heart, 
  Map 
} from 'lucide-react';
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'Local Sightseeing',
    description: 'Explore Bhuj and surrounding areas comfortably with our knowledgeable local drivers.',
    icon: MapPin,
  },
  {
    id: 's2',
    title: 'Outstation Tours',
    description: 'Planning a trip out of Kutch? We provide reliable cars for all outstation journeys across Gujarat.',
    icon: Map,
  },
  {
    id: 's3',
    title: 'Airport Transfers',
    description: 'Punctual pickup and drop-off services at Bhuj Airport, Ahmedabad Airport, and Rajkot Airport.',
    icon: Plane,
  },
  {
    id: 's4',
    title: 'Railway Transfers',
    description: 'Hassle-free railway station pickup and drop-off at Bhuj and Gandhidham stations.',
    icon: Train,
  },
  {
    id: 's5',
    title: 'Corporate Travel',
    description: 'Professional and premium car rental solutions tailored for your business and corporate guests.',
    icon: Briefcase,
  },
  {
    id: 's6',
    title: 'Family & Group Tours',
    description: 'Spacious SUVs and Tempo Travellers ideal for comfortable family vacations and group trips.',
    icon: Users,
  },
  {
    id: 's7',
    title: 'Wedding Cars',
    description: 'Luxury cars available for weddings and special events to make your big day memorable.',
    icon: Heart,
  },
  {
    id: 's8',
    title: 'One Way Taxi',
    description: 'Affordable one-way cab services from Bhuj to major cities without paying for a return trip.',
    icon: Car,
  },
];

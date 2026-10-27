export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  rating: number;
  quote: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ocean-babs',
    name: 'Ocean Babs',
    role: 'Head of IT',
    company: 'TechCorp Solutions',
    image: '', // Demonstrating initials fallback on navy circle
    rating: 5,
    quote: '“Pearl Infotech team is a life saver. I have had very big problem with my Web Devlopment. I have just found em as friendly and problem solver. 100% Recommended”',
    featured: true,
  },
  {
    id: 'jacob-osman',
    name: 'Jacob Osman',
    role: 'Marketing Director',
    company: 'GrowthHub Digital',
    image: '',
    rating: 5,
    quote: '“I love the Service and Product Quality. It\'s Awesome!. Pearl Infotech has a great knowledge of Graphic and relevant work knowledge. I am happy.”',
    featured: false,
  },
  {
    id: 'adam-jones',
    name: 'Adam Jones',
    role: 'Lead Product Designer',
    company: 'Aura Studio',
    image: '',
    rating: 5,
    quote: '“Pearl Infotech is a real Problem Solver. Skilled and professional Employee with Quick Support. I must recommend to take Service of Pearl Infotech. Cheers!!”',
    featured: false,
  },
];

export default TESTIMONIALS;

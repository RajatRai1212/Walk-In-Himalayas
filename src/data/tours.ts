export type Tour = {
  slug: string;
  name: string;
  region: string;
  durationDays: number;
  style: string;
  priceFrom: number;
  highlights: string[];
  overview: string;
};

export const tours: Tour[] = [
  {
    slug: 'dalhousie-chamba-escape',
    name: 'Dalhousie + Chamba Escape',
    region: 'Dalhousie/Chamba',
    durationDays: 4,
    style: 'Family-friendly',
    priceFrom: 13500,
    highlights: ['Dainkund', 'Khajjiar', 'Chamba heritage'],
    overview: 'A relaxed loop covering Dalhousie viewpoints, Khajjiar meadows, and Chamba heritage walks.'
  },
  {
    slug: 'chamba-valley-offbeat',
    name: 'Chamba Valley Offbeat Trails',
    region: 'Chamba Valley',
    durationDays: 6,
    style: 'Cultural',
    priceFrom: 21000,
    highlights: ['Village homestays', 'Riverside camps', 'Temple visits'],
    overview: 'Explore lesser-known villages with homestays, local meals, and gentle hikes.'
  },
  {
    slug: 'dharamshala-wellness-retreat',
    name: 'Dharamshala Wellness & Spiritual Retreat',
    region: 'Dharamshala',
    durationDays: 5,
    style: 'Wellness',
    priceFrom: 18500,
    highlights: ['Monasteries', 'Yoga sessions', 'Tea garden walks'],
    overview: 'A calming trip around McLeod Ganj and Dharamshala with light hikes and wellness time.'
  },
  {
    slug: 'manali-adventure-loop',
    name: 'Manali Adventure Loop',
    region: 'Manali/Kullu',
    durationDays: 5,
    style: 'Adventure',
    priceFrom: 22500,
    highlights: ['Valley activities', 'Short treks', 'Riverside camping'],
    overview: 'Mix of short treks, local adventure activities, and riverside stays around Manali.'
  },
  {
    slug: 'himachal-family-break',
    name: 'Himachal Family Break',
    region: 'Pan-Himachal',
    durationDays: 7,
    style: 'Family',
    priceFrom: 26500,
    highlights: ['Easy hikes', 'Village meals', 'Scenic drives'],
    overview: 'A family-friendly itinerary with gentle hikes, village visits, and scenic stays.'
  },
  {
    slug: 'honeymoon-in-hills',
    name: 'Honeymoon in the Hills',
    region: 'Dalhousie/Manali',
    durationDays: 6,
    style: 'Romantic',
    priceFrom: 32000,
    highlights: ['Boutique stays', 'Private sunsets', 'Candlelight dinner setup'],
    overview: 'Romantic escapes with scenic viewpoints and private stays (customizable).' 
  },
  {
    slug: 'backpacker-himachal',
    name: 'Backpacker Himachal Circuit',
    region: 'Himachal',
    durationDays: 10,
    style: 'Backpacking',
    priceFrom: 28000,
    highlights: ['Shared stays', 'Local buses', 'Community experiences'],
    overview: 'Budget-conscious circuit with shared stays and authentic local experiences.'
  },
  {
    slug: 'luxury-himalayan-escape',
    name: 'Luxury Himalayan Escape',
    region: 'Dalhousie/Manali',
    durationDays: 7,
    style: 'Luxury',
    priceFrom: 55000,
    highlights: ['Premium stays', 'Private transfers', 'Curated experiences'],
    overview: 'Premium Himalayan experiences with boutique stays and curated day trips.'
  },
  {
    slug: 'spiti-extension',
    name: 'Spiti Circuit Extension (Optional)',
    region: 'Spiti',
    durationDays: 8,
    style: 'Adventure',
    priceFrom: 42000,
    highlights: ['High-altitude monasteries', 'Desert landscapes', 'Remote villages'],
    overview: 'Add-on circuit for seasoned travelers; routes subject to seasonal conditions.'
  },
  {
    slug: 'women-only-himachal',
    name: 'Women-Only Himachal Getaway',
    region: 'Dalhousie/Dharamshala',
    durationDays: 5,
    style: 'Women-only',
    priceFrom: 19500,
    highlights: ['Supportive pacing', 'Comfortable stays', 'Flexible schedule'],
    overview: 'A women-only itinerary with gentle hikes and comfortable stays (women-led options on request).'
  }
];

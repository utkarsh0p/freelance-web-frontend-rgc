export type Brand = {
  slug: string;
  name: string;
  sector: string;
  description: string;
  longDescription: string;
  image: string;
  status: "live" | "coming-soon";
  website?: { url: string; label: string };
  featured?: boolean;
};

export const brands: Brand[] = [
  {
    slug: "crushburg",
    name: "Crushburg",
    sector: "Foods & Beverages",
    description:
      "Bringing the best from U.S. to India. American-style burgers, 13+ outlets, 153+ menu items.",
    longDescription:
      "Crushburg is a quick service restaurant chain serving American-style fast food adapted for Indian tastes. Founded in February 2022, it has grown to more than 13 outlets with a menu of over 153 items, offering dine-in, delivery and franchise opportunities.",
    image: "/assets/images/brand-crushburg.jpg",
    status: "live",
    website: { url: "https://crushburg.com", label: "crushburg.com" },
    featured: true,
  },
  {
    slug: "advyantra",
    name: "AdVyantra",
    sector: "Media & Marketing",
    description:
      "Innovative media, branding, and performance-driven marketing solutions.",
    longDescription:
      "AdVyantra is the group's media and marketing arm, delivering innovative media, branding, and performance-driven marketing solutions for brands that want to grow with intent.",
    image: "/assets/images/brand-advyantra.jpg",
    status: "coming-soon",
  },
  {
    slug: "gurukul",
    name: "Gurukul",
    sector: "Education",
    description:
      "Value-based education blending tradition, knowledge, and modern learning.",
    longDescription:
      "Gurukul delivers value-based education that blends tradition, knowledge, and modern learning, reflecting the group's commitment to nation building through education.",
    image: "/assets/images/brand-gurukul.jpg",
    status: "coming-soon",
  },
  {
    slug: "baretha",
    name: "Baretha",
    sector: "Laundry & Dry Cleaning",
    description: "Premium laundry and dry cleaning with reliable service.",
    longDescription:
      "Baretha delivers premium laundry and dry cleaning built on reliable service, bringing professional garment care to everyday life.",
    image: "/assets/images/brand-baretha.jpg",
    status: "coming-soon",
  },
  {
    slug: "trishul-fitness",
    name: "Trishul Fitness",
    sector: "Fitness & Gym",
    description:
      "Powerful training, modern equipment, and results-driven fitness programs.",
    longDescription:
      "Trishul Fitness delivers powerful training, modern equipment, and results-driven fitness programs designed to build strength with discipline.",
    image: "/assets/images/brand-trishul-fitness.jpg",
    status: "coming-soon",
  },
  {
    slug: "kerabon-professional",
    name: "Kerabon Professional",
    sector: "Unisex Salon",
    description: "Premium unisex salon services with expert care.",
    longDescription:
      "Kerabon Professional delivers premium unisex salon services with expert care, combining professional products with skilled stylists.",
    image: "/assets/images/brand-kerabon-professional.jpg",
    status: "coming-soon",
  },
  {
    slug: "herbgiri",
    name: "Herbgiri",
    sector: "Wellness & Herbal",
    description:
      "Natural, herbal wellness products inspired by traditional roots.",
    longDescription:
      "Herbgiri delivers natural, herbal wellness products inspired by traditional roots, carrying Indian wellness wisdom into modern daily routines.",
    image: "/assets/images/brand-herbgiri.jpg",
    status: "coming-soon",
  },
  {
    slug: "kidora-fox",
    name: "Kidora Fox",
    sector: "Kids Wear",
    description:
      "Stylish, comfortable, premium kidswear for every adventure.",
    longDescription:
      "Kidora Fox delivers stylish, comfortable, premium kidswear for every adventure. Its promise is simple: caring for your little ones.",
    image: "/assets/images/brand-kidora-fox.jpg",
    status: "coming-soon",
  },
  {
    slug: "foxic",
    name: "Foxic",
    sector: "Apparel & Clothing",
    description:
      "Trendy, premium quality apparel designed for modern lifestyle.",
    longDescription:
      "Foxic delivers trendy, premium quality apparel designed for the modern lifestyle, dressing everyday ambition in quality fabric.",
    image: "/assets/images/brand-foxic.png",
    status: "coming-soon",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

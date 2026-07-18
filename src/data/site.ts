import {
  IconShirt,
  IconHorseToy,
  IconLeaf,
  IconBarbell,
  IconToolsKitchen2,
  IconScissors,
  IconSpeakerphone,
  IconGlassCocktail,
  IconBuildingSkyscraper,
  IconSchool,
  type Icon,
} from "@tabler/icons-react";

export const site = {
  name: "RAI GROUP OF COMPANIES",
  fullName: "RESPLENDENT ADISHAKTI IMPERIUM GROUP",
  legalName: "RESPLENDENT ADISHAKTI IMPERIUM GROUP PRIVATE LIMITED",
  motto: ["Divine Power", "Eternal Prosperity", "Supreme Vision"],
  whatsapp: {
    number: "+91 95596 65789",
    href: "https://wa.me/919559665789",
  },
  hours: "09:00 am to 05:00 pm",
  chairman: "Mr. Suraj Kumar Rai",
  copyright: "Copyright © 2026 RAI GROUP OF COMPANIES. All Rights Reserved.",
};

export function whatsappHref(message?: string) {
  return message
    ? `${site.whatsapp.href}?text=${encodeURIComponent(message)}`
    : site.whatsapp.href;
}

export type Division = { name: string; blurb: string; icon: Icon };

export const divisions: Division[] = [
  {
    name: "Apparel & Clothing",
    blurb: "Trendy, premium apparel for the modern lifestyle, led by Foxic.",
    icon: IconShirt,
  },
  {
    name: "Kids Wear & Products",
    blurb: "Stylish, comfortable kidswear for every adventure with Kidora Fox.",
    icon: IconHorseToy,
  },
  {
    name: "Wellness & Pharmaceutical",
    blurb: "Herbal wellness inspired by traditional roots through Herbgiri.",
    icon: IconLeaf,
  },
  {
    name: "Fitness & Gym",
    blurb: "Results-driven training and modern equipment at Trishul Fitness.",
    icon: IconBarbell,
  },
  {
    name: "Foods & Beverages",
    blurb: "American-style QSR dining across India with Crushburg.",
    icon: IconToolsKitchen2,
  },
  {
    name: "Unisex Salon",
    blurb: "Premium salon services with expert care from Kerabon Professional.",
    icon: IconScissors,
  },
  {
    name: "Media & Marketing",
    blurb: "Branding and performance marketing solutions via AdVyantra.",
    icon: IconSpeakerphone,
  },
  {
    name: "Bar & Restaurant",
    blurb: "Hospitality ventures in food and drink, growing within the group.",
    icon: IconGlassCocktail,
  },
  {
    name: "Hotel & Hospitality",
    blurb: "Guest experiences built on service, an expanding frontier.",
    icon: IconBuildingSkyscraper,
  },
  {
    name: "Education",
    blurb: "Value-based learning that blends tradition and modernity, with Gurukul.",
    icon: IconSchool,
  },
];

export const stats = [
  { value: 10, suffix: "", label: "Business sectors" },
  { value: 9, suffix: "", label: "Brands in portfolio" },
  { value: 13, suffix: "+", label: "Crushburg outlets" },
  { value: 153, suffix: "+", label: "Menu items served" },
];

export const aboutCopy = {
  paragraphs: [
    "RESPLENDENT ADISHAKTI IMPERIUM GROUP (RAI GROUP OF COMPANIES) is a visionary conglomerate built on the foundation of innovation, integrity, and divine inspiration. Guided by the spiritual strength of Maa Adishakti, the group is committed to creating impactful businesses that enhance lifestyles, empower communities, and set new benchmarks across industries.",
    "With a diversified portfolio, the group operates across Apparel & Clothing, Kids Wear & Products, Wellness & Pharmaceutical, Fitness & Gym, Foods & Beverages, Unisex Salon, Media & Marketing, Bar & Restaurant, Hotel & Hospitality, and Education sectors. Each venture is driven by a passion for quality, customer satisfaction, and sustainable growth.",
    "From crafting premium lifestyle products to delivering exceptional service experiences, RESPLENDENT ADISHAKTI IMPERIUM GROUP stands as a symbol of trust, excellence, and future-ready entrepreneurship. Our mission is to build brands that not only succeed commercially but also create meaningful value for society.",
    "Powered by a strong team, ethical business practices, and a forward-thinking approach, the group continues to expand its footprint while staying rooted in its core belief: growth with purpose, strength with values, and success with gratitude.",
  ],
};

export const chairmanCopy = {
  name: "Mr. Suraj Kumar Rai",
  role: "Chairman, RAI Group of Companies",
  quote:
    "Growth with purpose, strength with values, and success with gratitude.",
  paragraphs: [
    "Mr. Suraj Kumar Rai is the visionary Chairman of RESPLENDENT ADISHAKTI IMPERIUM GROUP (RAI GROUP OF COMPANIES), known for his dynamic leadership, entrepreneurial mindset, and strong value-driven approach to business. With a mission to build impactful and future-ready enterprises, he has been instrumental in shaping the group into a diversified conglomerate operating across multiple industries.",
    "Starting his journey with determination and a strong belief in hard work, Mr. Rai has successfully transformed ideas into sustainable business ventures. His leadership philosophy is rooted in innovation, customer-centricity, and ethical business practices. Inspired by the divine blessings of Maa Adishakti, he believes in creating businesses that not only generate economic growth but also contribute positively to society.",
    "Under his guidance, the group continues to expand into new sectors while maintaining excellence, quality standards, and strong organizational culture. He is known for empowering teams, nurturing talent, and building brands that stand for trust and long-term value.",
    "His vision is to establish RAI GROUP OF COMPANIES as a globally recognized business group while staying committed to Indian values, spiritual strength, and social responsibility.",
  ],
};

export const missionCopy = {
  paragraphs: [
    "Our mission is to build innovative, high-quality, and value-driven businesses that enhance people's lifestyles and contribute to the overall growth of society. We are committed to establishing trusted, customer-centric, and future-ready brands across multiple industries.",
    "At RESPLENDENT ADISHAKTI IMPERIUM GROUP PRIVATE LIMITED, our goal is not only to achieve business success but also to create employment opportunities, support social development, and contribute to nation building. Inspired by the divine blessings of Maa Adishakti, we are dedicated to moving forward with integrity, excellence, and continuous progress.",
  ],
};

export const contactCopy = {
  heading: "Communication is the key",
  body: "We strive to stay in communication with our clients. Have a question about our business, or want to see if we match your specific needs? Send us a message, or give us a call. We're always happy to meet new customers!",
};

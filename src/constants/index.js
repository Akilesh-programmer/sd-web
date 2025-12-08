/**
 * Company Information Constants
 * Shri Dhanalakshmi Mill
 */

export const COMPANY_INFO = {
  name: "Shri Dhanalakshmi",
  fullName: "Shri Dhanalakshmi Groups",
  tagline: "100% Quality Yarn Producers",
  established: "1990s", // 3 decades of experience

  contact: {
    email: "info@shridhanalakshmi.com",
    phone: "+91 422 XXX XXXX",
    brochure: "/brochure.pdf",
    address: {
      line1: "Coimbatore - Salem National Highways",
      line2: "Karumathampatti",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641XXX",
      country: "India",
    },
  },

  social: {
    facebook: "https://facebook.com/shridhanalakshmi",
    twitter: "https://twitter.com/shridhanalakshmi",
    linkedin: "https://linkedin.com/company/shridhanalakshmi",
    instagram: "https://instagram.com/shridhanalakshmi",
  },
};

/**
 * Services/Departments offered by the mill
 */
export const SERVICES = [
  {
    id: "spinning",
    name: "Spinning",
    description:
      "Premium quality yarn production with ultra-modern machinery and 100% renewable energy",
    icon: "🧵",
    image: "spinning-placeholder.jpg",
  },
  {
    id: "sizing",
    name: "Sizing",
    description:
      "Precision sizing processes ensuring optimal fabric strength and quality",
    icon: "📏",
    image: "sizing-placeholder.jpg",
  },
  {
    id: "weaving",
    name: "Weaving",
    description:
      "Advanced weaving facilities producing premium textile fabrics with excellence",
    icon: "🪡",
    image: "weaving-placeholder.jpg",
  },
  {
    id: "windmill",
    name: "Wind Mill",
    description:
      "100% renewable energy generation through sustainable wind power",
    icon: "🌬️",
    image: "windmill-placeholder.jpg",
  },
];

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Spinning", path: "/spinning" },
  { name: "Sizing", path: "/sizing" },
  { name: "Weaving", path: "/weaving" },
  { name: "Wind Mill", path: "/windmill" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

/**
 * Footer Links
 */
export const FOOTER_LINKS = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "News", path: "/news" },
  ],
  services: [
    { name: "Spinning", path: "/services/spinning" },
    { name: "Weaving", path: "/services/weaving" },
    { name: "Sizing", path: "/services/sizing" },
    { name: "Windmill", path: "/services/windmill" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
};

export default {
  COMPANY_INFO,
  SERVICES,
  NAV_ITEMS,
  FOOTER_LINKS,
};

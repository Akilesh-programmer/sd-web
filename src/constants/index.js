/**
 * Company Information Constants
 * Shri Dhanalakshmi Mill
 */

export const COMPANY_INFO = {
  name: "Shri Dhanalakshmi",
  fullName: "Shri Dhanalakshmi Mill",
  tagline: "Excellence in Textile Manufacturing",
  established: "1985", // Update with actual year

  contact: {
    email: "info@shridhanalakshmimil.com", // Update with actual
    phone: "+91 XXX XXX XXXX", // Update with actual
    address: {
      line1: "Address Line 1",
      line2: "Address Line 2",
      city: "City",
      state: "State",
      pincode: "XXXXXX",
      country: "India",
    },
  },

  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
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
      "High-quality yarn production using state-of-the-art spinning technology",
    icon: "🧵",
  },
  {
    id: "weaving",
    name: "Weaving",
    description:
      "Advanced weaving facilities producing premium textile fabrics",
    icon: "🪡",
  },
  {
    id: "sizing",
    name: "Sizing",
    description: "Precision sizing processes ensuring optimal fabric strength",
    icon: "📏",
  },
  {
    id: "windmill",
    name: "Windmill",
    description: "Sustainable energy generation through wind power",
    icon: "🌬️",
  },
];

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Contact", path: "/contact" },
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

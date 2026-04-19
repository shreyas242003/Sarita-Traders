// Re-export data from the main data files
export {
  products,
  getProductsByCategory,
  getActiveProducts,
  getFeaturedProducts,
  searchProducts,
  getProductById,
} from "@/data/products";

export type { Product } from "@/data/products";

export {
  categories,
  getCategoryById,
  getActiveCategories,
} from "@/data/categories";

export type { Category } from "@/data/categories";

// Legacy company info - keeping for backward compatibility
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  established: string;
  certifications: string[];
  capabilities: string[];
}

export const companyInfo: CompanyInfo = {
  name: "Sarita Traders",
  tagline: "Your Complete Hardware Solution",
  description:
    "Established in 1999 in Kasba Peth, Pune, Sarita Traders has provided genuine hardware and honest technical advice for over 27 years. What started as a local retail shop has grown into a reliable supply hub for both everyday homeowners and professional civil contractors.Our focus today is simple: getting you the right materials without wasting your time. We supply genuine brands and have easy drive-through pickup system, allowing you to bypass market traffic and get exactly what you need, instantly.",
  established: "1990",
  certifications: ["Authorized Dealer", "Quality Assured", "Local Supplier"],
  capabilities: [
    "Complete Plumbing Solutions",
    "Hardware Supply",
    "Construction Materials",
    "Technical Support",
    "Delivery Services",
  ],
};

export interface ContactInfo {
  email: string;
  phone1: string;
  phone2: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
}

export const contactInfo: ContactInfo = {
  email: "orders.sarita@gmail.com",
  phone2: "+91 9145164679",
  phone1: "+91 9975710733",
  address: {
    street: "452/306 Kasba Peth, Near Phadke Haud",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pincode: "411011",
  },
};

export const stats = [
  { label: "Years of Service", value: "30+" },
  { label: "Happy Customers", value: "10K+" },
  { label: "Products Available", value: "1000+" },
  { label: "Cities Served", value: "50+" },
];

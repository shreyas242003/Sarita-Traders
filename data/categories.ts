// Category data structure designed for Supabase integration
// Interface matches potential database schema

export interface Category {
  id: string;
  title: string;
  description: string;
  icon?: string;
  sortOrder: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Static data - structured for easy database migration
export const categories: Category[] = [
  {
    id: "plumbing-piping",
    title: "Plumbing & Piping",
    description:
      "Complete range of CPVC pipes, SWR drainage systems, and plumbing fittings for residential and commercial water supply and drainage solutions.",
    icon: "🔧",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "sanitary-bath",
    title: "Sanitary Ware & Bath",
    description:
      "Premium faucets, mixers, ceramic basins, and commodes designed for modern bathrooms with durable materials and elegant finishes.",
    icon: "🚿",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "architectural-doors",
    title: "Architectural & Door Hardware",
    description:
      "High-quality door hinges, glass brackets, and architectural hardware for secure and stylish door installations and glass fixtures.",
    icon: "🚪",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "fasteners",
    title: "Fasteners",
    description:
      "Comprehensive selection of screws, nails, anchors, and zip ties for all your fastening needs in construction and DIY projects.",
    icon: "🔩",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "tools-equipment",
    title: "Tools & Equipment",
    description:
      "Professional hand tools, pliers, spanners, cutting wheels, and polishing grits for precise construction and maintenance work.",
    icon: "🛠️",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "adhesives-chemicals",
    title: "Adhesives & Chemicals",
    description:
      "Industrial adhesives, solvents, sealants, and maintenance chemicals including Fevicol, silicon, WD-40, and plumbing solvents.",
    icon: "🧪",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "cleaning-materials",
    title: "Cleaning Materials",
    description:
      "Heavy-duty cleaning solutions including acids, drain cleaners, brushes, wipers, and brooms for construction site and household cleaning.",
    icon: "🧽",
    sortOrder: 7,
    isActive: true,
  },
  {
    id: "site-essentials",
    title: "Site Essentials",
    description:
      "Essential safety gear, gloves, ropes, sutli, and transfer pumps required for construction sites and professional work environments.",
    icon: "🏗️",
    sortOrder: 8,
    isActive: true,
  },
  {
    id: "basic-electricals",
    title: "Basic Electricals",
    description:
      "Fundamental electrical components including bulb holders, plugs, LED bulbs, wires, and insulation tape for basic electrical installations.",
    icon: "💡",
    sortOrder: 9,
    isActive: true,
  },
  {
    id: "site-stationery",
    title: "Site Stationery",
    description:
      "Professional marking and cutting tools including permanent markers, carpenter pencils, heavy-duty cutters, and chalk boxes for construction work.",
    icon: "✏️",
    sortOrder: 10,
    isActive: true,
  },
];

// Helper functions for data operations (similar to what would be API calls)
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getActiveCategories = (): Category[] => {
  return categories
    .filter((category) => category.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);
};

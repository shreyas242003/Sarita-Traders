export type Product = {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  specifications: Record<string, string>;
  isActive: boolean;
  isFeatured: boolean;
  stockStatus: string;
  minOrderQuantity: number;
  searchTags: string[];
};
export const products: Product[] = [
  // ==========================================
  // 1. PLUMBING & PIPING SOLUTIONS
  // ==========================================
  {
    id: "cpvc-pipes-fittings",
    name: "CPVC Pipes & Hot Water Fittings",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      'SDR 11/13.5 Pipes, elbows, tees, unions, brass FTA/MTA. Sizes: 0.5" to 2".',
    longDescription:
      "Complete hot water CPVC plumbing system. Includes SDR 11 & 13.5 pipes, elbows, tees, sockets, reducers, end caps, brass FTA/MTA, unions, and step-over bends.",
    specifications: {
      material: "CPVC",
      size: "0.5 inch to 2.0 inch",
      application: "Hot Water",
      standard: "SDR 11 & 13.5",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["cpvc", "pipe", "hot water", "elbow", "fta", "mta"],
  },
  {
    id: "upvc-pipes-fittings",
    name: "UPVC Pipes & Cold Water Fittings",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      'Sch 40/80 Pipes, elbows, tees, flanges. Sizes: 0.5" to 6".',
    longDescription:
      "Heavy-duty UPVC cold water plumbing. We stock Schedule 40 & 80 pipes, elbows, tees, sockets, reducers, flanges, and UPVC brass threaded fittings.",
    specifications: {
      material: "UPVC",
      size: "0.5 inch to 6.0 inch",
      application: "Cold Water",
      pressure: "Sch 40 & 80",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["upvc", "pipe", "cold water", "flange", "socket"],
  },
  {
    id: "swr-pvc-drainage",
    name: "SWR / PVC Drainage Systems",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      'Pipes, Y-Tees, Nahani Traps, Cowl Covers. Sizes: 75mm (2.5") to 160mm (6").',
    longDescription:
      "Complete drainage solutions including soil, waste, and rainwater (SWR) pipes, bends, Y-Tees, door tees, cleansing pipes, Nahani traps, multi-floor traps, and cowl covers.",
    specifications: {
      material: "PVC / SWR",
      size: "75mm to 160mm",
      application: "Drainage / Sewage",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["swr", "drainage", "nahani trap", "pvc", "cowl"],
  },
  {
    id: "gi-pipes-fittings",
    name: "GI Pipes & Metal Fittings",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      'Galvanized heavy/light pipes, nipples, unions. Sizes: 0.5" to 4".',
    longDescription:
      "Heavy and light gauge Galvanized Iron (GI) pipes, perfectly threaded GI elbows, nipples, sockets, plugs, and unions for industrial and rugged applications.",
    specifications: {
      material: "Galvanized Iron (GI)",
      size: "0.5 inch to 4.0 inch",
      class: "Heavy / Light",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["gi", "pipe", "metal fitting", "nipple", "galvanized"],
  },
  {
    id: "valves-flow-control",
    name: "Brass & PVC Valves",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      'Brass/UPVC Ball valves, Gate valves, NRV, Float valves. Sizes: 0.5" to 4".',
    longDescription:
      "Comprehensive flow control. Stocking brass and UPVC ball valves, heavy-duty gate valves, Non-Return Valves (NRV), foot valves, and float valves (ball cocks for tanks).",
    specifications: {
      material: "Brass / UPVC / Gunmetal",
      size: "0.5 inch to 4.0 inch",
      types: "Ball, Gate, NRV, Float",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["valve", "ball valve", "nrv", "gate valve", "ball cock"],
  },
  {
    id: "water-storage-tanks",
    name: "Overhead Tanks & Nipples",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription: '3/4-Layer Tanks (300L-2000L) & Tank Nipples (0.5"-2").',
    longDescription:
      "Premium 3-layer and 4-layer overhead water storage tanks. We also stock heavy-duty brass and PVC tank nipples from 0.5 inch up to 2 inch for secure plumbing connections.",
    specifications: {
      capacity: "300L to 2000L",
      nippleSize: "0.5 inch to 2.0 inch",
      layers: "3-Layer & 4-Layer",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["tank", "overhead", "water storage", "tank nipple"],
  },
  {
    id: "flexible-hoses-connections",
    name: "Flexible Hoses & Geyser Connections",
    categoryId: "plumbing-piping",
    image: "/products/placeholder.svg",
    shortDescription:
      "Braided geyser connections (1ft-3ft), Waste pipes, Garden hoses.",
    longDescription:
      'Hot/Cold braided connection pipes for geysers and washbasins, corrugated PVC waste pipes (1.25" to 1.5"), and flexible garden hose pipes available by the meter.',
    specifications: {
      geyserSize: "1 ft to 3 ft",
      wastePipe: "1.25 inch & 1.5 inch",
      gardenHose: "0.5 inch to 1.5 inch",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["connection pipe", "geyser", "garden hose", "waste pipe"],
  },

  // ==========================================
  // 2. SANITARY WARE & BATH FITTINGS
  // ==========================================
  {
    id: "faucets-bib-pillar-cocks",
    name: "Faucets: Bib, Pillar & Swan Neck Taps",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      'Pillar cocks, long/short bib cocks (toti), swan neck taps. Standard 0.5" fit.',
    longDescription:
      "Everyday luxury and reliable taps. Including pillar cocks for basins, long body and short body bib cocks (toti), swan neck taps for kitchen sinks, and angle valves.",
    specifications: {
      material: "Brass / CP Finish",
      thread: "Standard 0.5 inch (15mm)",
      cartridge: "Ceramic / Rubber",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: [
      "tap",
      "toti",
      "faucet",
      "bib cock",
      "pillar cock",
      "swan neck",
    ],
  },
  {
    id: "mixers-wall-sink",
    name: "Wall & Sink Mixers",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      "2-in-1, 3-in-1 Wall mixers and Sink mixers for hot/cold flow.",
    longDescription:
      "Premium brass bathroom and kitchen mixers. Choose from 2-in-1 or 3-in-1 wall mixers for shower areas, and heavy-duty sink mixers for modular kitchens.",
    specifications: {
      material: "Solid Brass",
      finish: "Chrome",
      type: "Wall Mount / Table Top",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["mixer", "wall mixer", "sink mixer", "hot cold"],
  },
  {
    id: "tap-filters-aerators",
    name: "Tap Filters & Aerators",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      "Replacement tap filters (jaali). Sizes: 22mm, 24mm, 28mm.",
    longDescription:
      "Save water and fix blocked taps instantly with replacement tap aerators (jaali). Available in standard 22mm, 24mm, and 28mm male and female threads.",
    specifications: {
      sizes: "22mm, 24mm, 28mm",
      type: "Male / Female Thread",
      feature: "Foam Flow / Water Saving",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 2,
    searchTags: ["aerator", "filter", "jaali", "tap spare"],
  },
  {
    id: "showers-overhead-hand",
    name: "Overhead & Hand Showers",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      'Rain showers (4"-12") & Shower arms (6"-24"), Hand shower sets.',
    longDescription:
      "Create the perfect bathing experience. Stocking standard and rain overhead showers (4 inch to 12 inch), matching shower arms (6 inch to 24 inch), and flexible hand showers with tubes.",
    specifications: {
      headSize: "4 inch to 12 inch",
      armSize: "6 inch to 24 inch",
      material: "ABS / Brass / SS",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["shower", "rain shower", "hand shower", "shower arm"],
  },
  {
    id: "toilet-hygiene-spares",
    name: "Toilet Hygiene & Flush Spares",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      "Jet sprays, Seat covers, Flush tanks, and Internal syphon spares.",
    longDescription:
      "Complete toilet maintenance. Health faucets (jet sprays), standard/soft-close seat covers, PVC flush tanks (side-handle & center push), and internal syphon/ball valve spares.",
    specifications: {
      fit: "Universal",
      flushTanks: "PVC / Ceramic Spares",
      seatCover: "Standard / Soft-Close",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: [
      "jet spray",
      "health faucet",
      "flush tank",
      "syphon",
      "seat cover",
    ],
  },
  {
    id: "ceramics-basins-commodes",
    name: "Ceramic Wash Basins & Commodes",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      'Basins (12"-24"), EWC, Anglo-Indian, Orissa Pans, Urinals.',
    longDescription:
      'High-glaze ceramic sanitary ware. Wash basins (corner, tabletop, wall mount from 12" to 24"), commodes (EWC, Anglo-Indian, traditional Orissa pans), and urinals.',
    specifications: {
      basinSize: "12 inch to 24 inch",
      commodeType: "EWC, IWC, Anglo-Indian",
      material: "Ceramic",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["basin", "commode", "toilet", "orissa pan", "urinal"],
  },
  {
    id: "drainage-gratings-traps",
    name: "Floor Gratings, Jaalis & Traps",
    categoryId: "sanitary-bath",
    image: "/products/placeholder.svg",
    shortDescription:
      'SS/Brass floor jaalis (3"-6"), Cockroach traps, Bottle traps, Nipples.',
    longDescription:
      'Essential bathroom drainage accessories. Floor gratings/jaalis (SS, Brass, Anti-foul, Cockroach traps from 3" to 6"), basin bottle traps, extension nipples (1" to 6"), towel rods, and soap dishes.',
    specifications: {
      jaaliSize: "3 inch to 6 inch",
      nippleLength: "1 inch to 6 inch",
      material: "SS 304 / Brass / PVC",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: [
      "jaali",
      "grating",
      "bottle trap",
      "cockroach trap",
      "extension nipple",
    ],
  },

  // ==========================================
  // 3. ARCHITECTURAL & DOOR FITTINGS
  // ==========================================
  {
    id: "door-hinges-bijaagari",
    name: "Hinges (Bijaagari)",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      'MS/SS/Brass Butt, Ball Bearing, L-Hinges, Piano. Sizes: 1" to 6".',
    longDescription:
      "Hinges (bijaagari) for every door. MS/SS/Brass butt hinges, smooth ball bearing hinges, auto-closing cabinet L-hinges, and continuous piano hinges. Sizes ranging from 1 inch to 6 inch.",
    specifications: {
      size: "1 inch to 6 inch",
      material: "Brass / SS / MS",
      types: "Butt, Bearing, L-Hinge, Piano",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 2,
    searchTags: ["hinge", "bijaagari", "bearing", "door fitting"],
  },
  {
    id: "glass-hardware-brackets",
    name: "Glass Brackets & Hardware",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription: "L, D, F, Adjustable Brackets. For 4mm to 12mm glass.",
    longDescription:
      "Secure mounting solutions for glass shelves. Includes L-brackets, adjustable brackets, D-brackets, and F-brackets. Designed for glass thicknesses from 4mm to 12mm. Brackets available from 1 inch to 12 inch.",
    specifications: {
      glassThickness: "4mm to 12mm",
      bracketSize: "1 inch to 12 inch",
      finish: "Chrome / Matt",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 2,
    searchTags: ["glass bracket", "d bracket", "f bracket", "shelf support"],
  },
  {
    id: "hooks-wall-j",
    name: "Wall & J Hooks",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      'Metal J-Hooks (1"-6") & Sticky Wall Hooks (0.5kg-5kg load).',
    longDescription:
      "Versatile hanging solutions. We stock heavy-duty metal J-hooks (1 inch to 6 inch) and drill-free sticky wall hooks capable of holding loads from 0.5kg up to 5kg.",
    specifications: {
      jHookSize: "1 inch to 6 inch",
      stickyLoad: "0.5 kg to 5 kg",
      material: "Metal / Plastic",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["hook", "sticky hook", "j hook", "hanger"],
  },
  {
    id: "locks-mortise-cylinder",
    name: "Mortise & Cylindrical Locks",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      'Main door handle locks (6"-10") & bedroom/bathroom cylindrical locks.',
    longDescription:
      "Premium security for internal and external doors. Heavy-duty mortise handle locks (6 inch to 10 inch handles) and push-button cylindrical locks for bedrooms and bathrooms.",
    specifications: {
      mortiseSize: "6 inch to 10 inch",
      type: "Keyed / Bathroom Turn",
      material: "Brass / SS / Zinc",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["lock", "mortise", "cylindrical lock", "handle lock"],
  },
  {
    id: "padlocks-rim-latches",
    name: "Padlocks, Rim Locks & Latches",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      "Brass/Iron/Shutter padlocks (20mm-100mm), Godrej-style rim locks.",
    longDescription:
      "High-security external locking. Night latches, Godrej-style rim locks, and a massive range of padlocks (Brass, Iron, Shutter/Godown locks) from small 20mm to heavy 100mm sizes.",
    specifications: {
      padlockSize: "20mm to 100mm",
      type: "Rim, Latch, Shutter",
      security: "High Lever / Pin Cylinder",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["padlock", "rim lock", "night latch", "shutter lock"],
  },
  {
    id: "door-hardware-stoppers",
    name: "Door Hardware & Stoppers",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      'Tower bolts (2"-12"), Aldrops (8"-14"), Stoppers, Closers.',
    longDescription:
      "Essential door mechanics. Tower bolts (2 inch to 12 inch), heavy aldrops (8 inch to 14 inch), door chains, magic eyes (peep holes), door stoppers (magnetic, rubber, spring), and hydraulic door closers.",
    specifications: {
      towerBolt: "2 inch to 12 inch",
      aldrop: "8 inch to 14 inch",
      stopperType: "Magnetic, Rubber",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["tower bolt", "aldrop", "stopper", "door closer", "magic eye"],
  },
  {
    id: "cabinet-drawer-hardware",
    name: "Cabinet & Furniture Hardware",
    categoryId: "architectural-doors",
    image: "/products/placeholder.svg",
    shortDescription:
      'Telescopic channels (10"-24"), Handles (3"-12"), Knobs, Catchers.',
    longDescription:
      "Upgrade your furniture and wardrobes. Telescopic drawer channels (10 inch to 24 inch), designer handles (3 inch to 12 inch), knobs, magnetic catchers, and wardrobe pipes with brackets.",
    specifications: {
      channelSize: "10 inch to 24 inch",
      handleSize: "3 inch to 12 inch",
      material: "SS / Zinc / Brass",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 2,
    searchTags: ["channel", "drawer channel", "handle", "knob", "catcher"],
  },

  // ==========================================
  // 4. FASTENERS (Nuts & Bolts)
  // ==========================================
  {
    id: "screws-wood-gypsum-machine",
    name: "Screws: Wood, Gypsum & Machine",
    categoryId: "fasteners",
    image: "/products/placeholder.svg",
    shortDescription:
      'Black gypsum, sheet metal, wood, machine screws. Sizes: 0.5" to 6".',
    longDescription:
      "The fixing foundation. Black gypsum/drywall screws, silver sheet metal screws, brass/MS wood screws, and machine screws. Available in various thread gauges and lengths from 0.5 inch to 6 inches.",
    specifications: {
      size: "0.5 inch to 6 inch",
      types: "Gypsum, Sheet Metal, Wood, Machine",
      coating: "Black / Zinc / Brass",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 100,
    searchTags: ["screw", "gypsum", "drywall", "sheet metal"],
  },
  {
    id: "nails-wire-concrete",
    name: "Nails (Khila): Wire & Concrete",
    categoryId: "fasteners",
    image: "/products/placeholder.svg",
    shortDescription:
      'Wire nails (head/headless) & Steel concrete nails. Sizes: 0.5" to 6".',
    longDescription:
      "High-tensile nailing solutions. We stock standard wire nails (with head and headless/finishing), and hardened steel concrete nails for masonry. Sizes from 0.5 inch to 6 inches.",
    specifications: {
      size: "0.5 inch to 6 inch",
      types: "Wire, Headless, Concrete",
      material: "MS / Hardened Steel",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["nail", "khila", "concrete nail", "wire nail"],
  },
  {
    id: "bolts-nuts-hex",
    name: "Bolts & Nuts",
    categoryId: "fasteners",
    image: "/products/placeholder.svg",
    shortDescription:
      'Hex bolts, Carriage, Foundation bolts. M2 to M24, lengths up to 12".',
    longDescription:
      "Structural fastening. Hex bolts (fully threaded/half threaded), carriage bolts, foundation bolts, and nut assortments. Diameters from 2mm (M2) to 24mm (M24), lengths from 0.5 inch to 12 inches.",
    specifications: {
      diameter: "M2 to M24",
      length: "0.5 inch to 12 inch",
      types: "Hex, Carriage, Foundation",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 10,
    searchTags: ["bolt", "nut", "hex bolt", "carriage bolt"],
  },
  {
    id: "washers-anchors-rawlplugs",
    name: "Washers, Anchors & Rawlplugs (Gitti)",
    categoryId: "fasteners",
    image: "/products/placeholder.svg",
    shortDescription:
      "Flat/Spring washers, Anchor fasteners, Plastic Rawlplugs (6mm-16mm).",
    longDescription:
      "Secure wall mounting. Flat washers, spring washers, heavy-duty metal anchor fasteners, and plastic rawlplugs (gitti). Sizes covering 6mm to 16mm drill diameters.",
    specifications: {
      anchorSize: "6mm to 16mm",
      washerFit: "M2 to M24",
      types: "Flat, Spring, Anchor, Gitti",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 50,
    searchTags: ["washer", "anchor", "rawlplug", "gitti", "fastener"],
  },
  {
    id: "cable-management-zipties",
    name: "Heavy Duty Zip Ties",
    categoryId: "fasteners",
    image: "/products/placeholder.svg",
    shortDescription: 'Nylon cable ties in Black/White. Sizes: 4" up to 20".',
    longDescription:
      "Quick and permanent cable management. UV-resistant nylon zip ties available from small 4 inch sizes up to massive 20 inch lengths for heavy bundling.",
    specifications: {
      size: "4 inch to 20 inch",
      material: "Nylon (UV Resistant)",
      color: "Black / White",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1, // Sold in packets
    searchTags: ["zip tie", "cable tie", "binding"],
  },

  // ==========================================
  // 5. TOOLS & SITE EQUIPMENT
  // ==========================================
  {
    id: "screwdrivers-testers",
    name: "Screwdrivers & Testers",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription: 'Star, Minus, and Electrical Testers. Sizes: 2" to 12".',
    longDescription:
      "High-torque screwdrivers. Star (Phillips), Minus (Slotted), line testers, and multi-bit sets. Blade lengths ranging from stubby 2 inch up to 12 inch long-reach tools.",
    specifications: {
      size: "2 inch to 12 inch",
      types: "Star, Minus, Tester",
      handle: "Ergonomic / Insulated",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["screwdriver", "tester", "star", "minus"],
  },
  {
    id: "pliers-pakkad",
    name: "Pliers (Pakkad)",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription: 'Combination, Nose, and Cutting pliers. Sizes: 6" to 8".',
    longDescription:
      "Professional gripping tools. Combination pliers (pakkad), long nose pliers, and side-cutting pliers. Heavy insulated handles. Sizes standard 6 inch to 8 inch.",
    specifications: {
      size: "6 inch to 8 inch",
      types: "Combination (Pakkad), Nose, Cutter",
      feature: "Insulated Grip",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["plier", "pakkad", "cutter", "nose plier"],
  },
  {
    id: "spanners-wrenches-pana",
    name: "Spanners (Pana) & Pipe Wrenches",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription: 'Ring/Open spanners (6"-12"), Pipe wrenches (10"-36").',
    longDescription:
      "Essential plumbing and mechanical tools. Ring/Open spanners, adjustable spanners (pana) from 6 inch to 12 inch, and heavy-duty pipe wrenches from 10 inch up to massive 36 inch.",
    specifications: {
      spannerSize: "6 inch to 12 inch",
      wrenchSize: "10 inch to 36 inch",
      types: "Ring, Open, Adjustable, Pipe",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["spanner", "pana", "wrench", "pipe wrench", "adjustable"],
  },
  {
    id: "hammers-thapi",
    name: "Hammers & Trowels (Thapi)",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription: 'Claw/Ball Peen hammers (100g-2kg), Trowels (4"-8").',
    longDescription:
      "Striking and masonry tools. Claw hammers, ball peen hammers, and mallets (weights from 100g to 2kg). Cement trowels (thapi) from 4 inch to 8 inch.",
    specifications: {
      hammerWeight: "100g to 2kg",
      trowelSize: "4 inch to 8 inch",
      types: "Claw, Ball Peen, Thapi",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["hammer", "thapi", "trowel", "mallet"],
  },
  {
    id: "cutting-hacksaw-files",
    name: "Hacksaws, Saws & Files",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription:
      'Hexa frames/blades (12"), Hand saws (12"-24"), Files (4"-12").',
    longDescription:
      "Manual cutting and shaping. Hacksaw frames with standard 12 inch hexa blades, wood hand saws (12 inch to 24 inch), and flat/round/half-round metal files (4 inch to 12 inch).",
    specifications: {
      hacksaw: "12 inch blade",
      handSaw: "12 inch to 24 inch",
      fileSize: "4 inch to 12 inch",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["hacksaw", "hexa blade", "saw", "file"],
  },
  {
    id: "measurement-tapes-levels",
    name: "Measuring Tapes & Levels",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription:
      'Tapes (3m-30m), Spirit levels (12"-48"), Plumb bobs, Try squares.',
    longDescription:
      "Precision layout tools. Measuring tapes (3m, 5m, 15m, 30m), spirit levels (12 inch to 48 inch), heavy brass plumb bobs (oolamba), and try squares (guniya).",
    specifications: {
      tapeSize: "3m, 5m, 15m, 30m",
      levelSize: "12 inch to 48 inch",
      tools: "Oolamba, Guniya",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["tape", "measuring tape", "spirit level", "oolamba", "guniya"],
  },
  {
    id: "power-tool-drill-bits",
    name: "Drill Bits (Masonry, Wood, Metal)",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription:
      "Masonry, Wood, and HSS Metal drill bits. Sizes: 2mm to 25mm.",
    longDescription:
      "High-performance drilling consumables. Specialized masonry bits for concrete, sharp wood bits, and HSS (High-Speed Steel) bits for metal. Sizes ranging from 2mm to 25mm.",
    specifications: {
      size: "2mm to 25mm",
      types: "Masonry, Wood, HSS/Metal",
      fitting: "Standard / SDS",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["drill bit", "masonry bit", "hss", "wood bit"],
  },
  {
    id: "cutting-wheels-polish-grits",
    name: "Cutting Wheels & Polish Grits",
    categoryId: "tools-equipment",
    image: "/products/placeholder.svg",
    shortDescription:
      '4" and 14" metal/stone wheels, Polish paper (60 to 2000 grit).',
    longDescription:
      "Power tool consumables for precise cutting and finishing. Strictly 4-inch and 14-inch cutting wheels (metal and stone/diamond blades). Full range of water polish paper/emery from coarse 60 grit up to ultra-fine 2000 grit.",
    specifications: {
      wheelSize: "4 inch and 14 inch",
      gritRange: "60 to 2000",
      application: "Metal, Stone, Finishing",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: [
      "cutting wheel",
      "diamond blade",
      "polish paper",
      "emery",
      "grit",
    ],
  },

  // ==========================================
  // 6. ADHESIVES, SEALANTS & CHEMICALS
  // ==========================================
  {
    id: "plumbing-solvents-cements",
    name: "Plumbing Solvents & Sealants",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription:
      "CPVC/UPVC Solvents (50ml-1L), Teflon tape, Shellac, Dhaga.",
    longDescription:
      "Crucial plumbing sealants. CPVC and UPVC solvent cement in 50ml tubes up to 1 Liter tins. Also stocking PVC resin, standard 12mm Teflon tape rolls, shellac, and plumber's hemp (dhaga).",
    specifications: {
      solventSize: "50ml to 1 Liter",
      teflon: "12mm width (10m roll)",
      materials: "CPVC, UPVC, PVC",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["solvent", "cpvc solvent", "teflon", "dhaga", "shellac"],
  },
  {
    id: "general-adhesives-fevicol",
    name: "Fevicol, Resins & Instant Glue",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription: "Fevicol (50g-5kg), Araldite Epoxy, Fevikwik (1g-3g).",
    longDescription:
      "Wood and instant bonding solutions. Fevicol (SH, SR, Marine) from 50g tubs to 5kg buckets. Epoxy resins (Araldite fast/slow), and Fevikwik instant glue drops (1g, 2g, 3g).",
    specifications: {
      fevicolSize: "50g to 5kg",
      fevikwik: "1g, 2g, 3g",
      types: "Wood, Epoxy, Instant",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["fevicol", "glue", "fevikwik", "araldite", "resin"],
  },
  {
    id: "silicon-sealants-gun",
    name: "Silicon Sealants & Guns",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription:
      "Clear/White/Black Silicon (50g-280ml cartridge) & applicator guns.",
    longDescription:
      "Waterproof gap sealing. Silicon sealants available in Clear, White, and Black colors. Sizes range from 50g emergency squeeze tubes to 280ml cartridges requiring applicator guns.",
    specifications: {
      size: "50g to 280ml",
      colors: "Clear, White, Black",
      application: "Glass, Sanitary, Gaps",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["silicon", "sealant", "silicon gun", "waterproof"],
  },
  {
    id: "mseal-putty-grout",
    name: "M-Seal & Tile Grout",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription: "M-Seal Epoxy Putty (25g-1kg), Multicolored Tile Grout.",
    longDescription:
      "Permanent leak fixing and tile finishing. Heavy-duty M-Seal epoxy putty ranging from small 25g packs to 1kg industrial blocks. Tile grout available in various matching colors.",
    specifications: {
      msealSize: "25g to 1kg",
      grout: "1kg bags",
      application: "Leak repair, Tile joints",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["mseal", "putty", "grout", "epoxy"],
  },
  {
    id: "wd40-maintenance-spray",
    name: "WD-40 Rust & Maintenance Spray",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription:
      "Rust remover and lubricant. Sizes: 32g, 63g, 100g, 420ml.",
    longDescription:
      "The ultimate fix-all spray. WD-40 removes rust, lubricates hinges, and frees stuck parts. Available in 32g, 63g, 100g, and large 420ml contractor cans.",
    specifications: {
      size: "32g, 63g, 100g, 420ml",
      application: "Anti-rust, Lubrication",
      form: "Aerosol Spray",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["wd40", "spray", "rust remover", "lubricant"],
  },
  {
    id: "cement-putty-waterproofing",
    name: "White Cement, Putty & Dr. Fixit",
    categoryId: "adhesives-chemicals",
    image: "/products/placeholder.svg",
    shortDescription:
      "White Cement/Putty (1kg-40kg), Dr. Fixit LW+ (200ml-20L).",
    longDescription:
      "Construction chemicals and surface prep. White cement and wall putty available from 1kg repair pouches to 40kg bags. Waterproofing liquids (Dr. Fixit LW+) from 200ml up to 20 Liter drums. Crack fillers also available.",
    specifications: {
      cementPutty: "1kg to 40kg",
      drFixit: "200ml to 20 Liters",
      types: "Cement, Putty, Waterproofing",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: [
      "white cement",
      "putty",
      "dr fixit",
      "waterproofing",
      "crack filler",
    ],
  },

  // ==========================================
  // 7. CLEANING MATERIALS
  // ==========================================
  {
    id: "acids-floor-cleaners",
    name: "Toilet Acids & Floor Cleaners",
    categoryId: "cleaning-materials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Dilute/Concentrated Acid, Harpic, Phenyl, Tile Cleaners (500ml-5L).",
    longDescription:
      "Heavy-duty stain removal and daily hygiene. We stock dilute and concentrated toilet cleaning acids, Harpic, Phenyl, and specialized tile cleaning liquids. Available in 500ml retail bottles to 5 Liter contractor cans.",
    specifications: {
      size: "500ml to 5 Liters",
      types: "Acid, Harpic, Phenyl, Tile Cleaner",
      strength: "Dilute / Concentrated",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["acid", "harpic", "phenyl", "floor cleaner", "tile cleaner"],
  },
  {
    id: "drain-cleaners-springs",
    name: "Drain Springs, Drainex & Handpumps",
    categoryId: "cleaning-materials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Drainex powder, Fevikwik cleaner, Drain springs (3m-10m), Basin pumps.",
    longDescription:
      "Complete unblocking solutions. Chemical drain cleaners (Fevikwik liquid / Drainex powder in 50g-1L sizes). Physical tools include flexible drain cleaner springs (3m, 5m, 10m lengths) and handpumps/plungers to suck garbage from basins and toilets.",
    specifications: {
      chemicals: "50g to 1L",
      springLength: "3m, 5m, 10m",
      pumps: "Small basin to Large toilet",
    },
    isActive: true,
    isFeatured: true,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["drainex", "drain spring", "plunger", "handpump", "blockage"],
  },
  {
    id: "wipers-brooms-brushes",
    name: "Wipers, Brooms & Wire Brushes",
    categoryId: "cleaning-materials",
    image: "/products/placeholder.svg",
    shortDescription:
      'Floor wipers (12"-24"), Hard brooms, Toilet & Wire brushes.',
    longDescription:
      "Post-construction and household sweeping. Heavy hard brooms, rubber/sponge floor wipers (12 inch to 24 inch wide), toilet brushes, cobweb brushes, and steel wire brushes for removing rust and cement stains.",
    specifications: {
      wiperSize: "12 inch to 24 inch",
      brushTypes: "Wire, Toilet, Cobweb",
      broomType: "Hard",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["wiper", "broom", "wire brush", "toilet brush"],
  },
  {
    id: "cleaning-consumables",
    name: "Sponges, Cloths & Fresheners",
    categoryId: "cleaning-materials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Microfiber cloths, sponges, Naphthalene balls, Air fresheners.",
    longDescription:
      "Finishing touches for a clean home. High-absorption microfiber cloths, durable cleaning sponges, Naphthalene balls, and bathroom air fresheners in standard household packets.",
    specifications: {
      cloths: "Microfiber",
      consumables: "Naphthalene, Freshener",
      size: "Standard Retail Packs",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["microfiber", "sponge", "naphthalene", "freshener"],
  },

  // ==========================================
  // 8. SITE ESSENTIALS & PACKAGING
  // ==========================================
  {
    id: "safety-gear-helmets",
    name: "Safety Gear: Gloves, Masks, Goggles",
    categoryId: "site-essentials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Cotton/Rubber gloves, Dust masks, Safety goggles, Hard hats.",
    longDescription:
      "Protect your labor force. Universal-fit cotton working gloves, waterproof rubber gloves, disposable dust masks, hard hats, and clear safety goggles to protect eyes during cutting/grinding.",
    specifications: {
      size: "Universal Fits",
      types: "Gloves, Masks, Goggles, Helmets",
      material: "Cotton, Rubber, Plastic",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["safety", "gloves", "mask", "goggles", "helmet"],
  },
  {
    id: "packaging-tapes",
    name: "Packaging & Masking Tapes",
    categoryId: "site-essentials",
    image: "/products/placeholder.svg",
    shortDescription:
      'Brown packing tape, Masking tape, Insulation tape. Sizes: 0.5"-3".',
    longDescription:
      "Secure masking and packing. Paper masking tape for painting, heavy-duty brown packing tape, and electrical insulation tape. Widths ranging from 0.5 inch up to 3 inches.",
    specifications: {
      width: "0.5 inch to 3 inch",
      types: "Brown, Masking, Insulation",
      application: "Packing, Painting, Electrical",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["tape", "masking tape", "packing tape", "brown tape"],
  },
  {
    id: "ropes-sutli-binding",
    name: "Ropes, Sutli & Binding Wire",
    categoryId: "site-essentials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Nylon ropes (2mm-12mm), Jute Sutli (100g-1kg), Binding wire, Line thread.",
    longDescription:
      "Heavy-duty tying and masonry alignment. Nylon packing ropes (2mm to 12mm thickness), jute twine (sutli) in 100g to 1kg balls, binding wire, and fine line thread for masonry.",
    specifications: {
      ropeThickness: "2mm to 12mm",
      sutliWeight: "100g to 1kg",
      types: "Nylon, Jute, Steel Wire",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["rope", "sutli", "binding wire", "thread"],
  },
  {
    id: "rockel-transfer-pumps",
    name: "Rockel Transfer Pumps",
    categoryId: "site-essentials",
    image: "/products/placeholder.svg",
    shortDescription:
      "Manual hand pumps for liquids, chemicals, and kerosene barrels.",
    longDescription:
      "Safe liquid transfer on site. Standard manual Rockel pumps designed with a tube length that fits standard industrial and chemical cans/barrels.",
    specifications: {
      type: "Manual Siphon / Hand Pump",
      application: "Liquids, Kerosene, Chemicals",
      fit: "Standard Barrels",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["pump", "rockel pump", "hand pump", "transfer pump"],
  },

  // ==========================================
  // 9. BASIC ELECTRICALS
  // ==========================================
  {
    id: "electrical-fittings",
    name: "Electrical Fittings & Extensions",
    categoryId: "basic-electricals",
    image: "/products/placeholder.svg",
    shortDescription:
      "Bulb holders, 3-pin plugs, Ceiling rose, Extension boards.",
    longDescription:
      "Emergency site electricals. Pendant and angle bulb holders, ceiling rose fittings, robust 3-pin plugs, multi-plug adapters, and temporary extension boards/spike guards (Standard 6A/16A).",
    specifications: {
      rating: "6 Amp / 16 Amp",
      types: "Holders, Plugs, Adapters, Extensions",
      fit: "Standard Indian Plugs",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["holder", "plug", "extension board", "electrical"],
  },
  {
    id: "electrical-bulbs-wires",
    name: "LED Bulbs & Wire Bundles",
    categoryId: "basic-electricals",
    image: "/products/placeholder.svg",
    shortDescription:
      "LED Bulbs (5W-40W) & Flexible wire bundles (10m-90m coils).",
    longDescription:
      "Keep the site illuminated. Standard B22 LED bulbs ranging from small 5W up to high-intensity 40W. Flexible wire bundles (10m to 90m coils) for temporary lighting setups.",
    specifications: {
      bulbWattage: "5W to 40W",
      wireLength: "10m to 90m coils",
      application: "Temporary Site Lighting",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["bulb", "led", "wire", "cable"],
  },

  // ==========================================
  // 10. SITE STATIONERY
  // ==========================================
  {
    id: "stationery-markers-pencils",
    name: "Markers, Pencils & Chalk Boxes",
    categoryId: "site-stationery",
    image: "/products/placeholder.svg",
    shortDescription:
      "Thick permanent markers, Carpenter pencils, Chalk boxes for line snapping.",
    longDescription:
      "Precise marking tools for carpentry and plumbing. Thick permanent markers (black/blue), flat carpenter pencils that won't roll away, and chalk boxes for snapping straight masonry lines.",
    specifications: {
      types: "Permanent Marker, Carpenter Pencil, Chalk",
      colors: "Black / Blue / White",
      packaging: "Retail Packs",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["marker", "pencil", "chalk", "stationery"],
  },
  {
    id: "stationery-paper-cutters",
    name: "Heavy Duty Paper Cutters",
    categoryId: "site-stationery",
    image: "/products/placeholder.svg",
    shortDescription:
      "Heavy-duty paper/box cutters with spare snap-off blades.",
    longDescription:
      "Tough cutting tools for opening cement bags, slicing tape, or cutting thin plastics. Heavy-duty paper cutters featuring locking mechanisms and packs of spare snap-off blades.",
    specifications: {
      type: "Snap-off Blade Cutter",
      accessory: "Spare Blade Packs",
      application: "Site Utility",
    },
    isActive: true,
    isFeatured: false,
    stockStatus: "in-stock",
    minOrderQuantity: 1,
    searchTags: ["cutter", "paper cutter", "blade", "utility knife"],
  },
];
// Helper functions for data operations
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(
    (product) => product.categoryId === categoryId && product.isActive,
  );
};

export const getActiveProducts = (): Product[] => {
  return products.filter((product) => product.isActive);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isActive && product.isFeatured);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return getActiveProducts();

  return products.filter((product) => {
    if (!product.isActive) return false;

    const searchableText = [
      product.name,
      product.shortDescription,
      product.longDescription,
      ...Object.values(product.specifications),
      ...(product.searchTags || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(lowerQuery);
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

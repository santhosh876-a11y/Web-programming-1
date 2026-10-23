// Predefined gaming PC configurations for quick selection

export const PRESET_BUILDS = [
  {
    id: 'preset-budget',
    title: 'Budget Esports Gaming PC',
    tagline: 'Smooth 1080p Esports Performance (Valorant, CS2, GTA V)',
    badge: 'Budget Friendly',
    badgeClass: 'bg-info text-dark',
    targetResolution: '1080p (60-120+ FPS)',
    description: 'Perfect for students and casual gamers who want reliable, high frame rate gameplay on esports titles without breaking the bank.',
    components: {
      cpu: 'cpu-1',          // Ryzen 5 5600 (₹11,499)
      gpu: 'gpu-2',          // RX 6600 8GB (₹19,999)
      motherboard: 'mb-1',   // MSI B550M (₹9,499)
      ram: 'ram-1',          // Corsair 16GB DDR4 (₹3,499)
      storage: 'ssd-1',      // Crucial 500GB NVMe (₹3,199)
      psu: 'psu-1',          // Deepcool 550W (₹3,499)
      case: 'case-1',        // Ant Esports Mini (₹2,999)
      cooler: 'cooler-1'     // Stock Cooler (₹699)
    },
    estimatedPrice: 51893
  },
  {
    id: 'preset-1080p',
    title: '1080p Ultra Gaming PC',
    tagline: 'Maximum Settings at 1080p with Ray Tracing & DLSS 3',
    badge: 'Most Popular',
    badgeClass: 'bg-primary text-white',
    targetResolution: '1080p Ultra (100+ FPS)',
    description: 'Our most balanced configuration. Powered by the Intel 13th Gen i5 and RTX 4060 for AAA gaming, ray tracing, and video editing.',
    components: {
      cpu: 'cpu-2',          // i5-13400F (₹17,999)
      gpu: 'gpu-3',          // RTX 4060 8GB (₹28,999)
      motherboard: 'mb-2',   // ASUS B760M D4 (₹13,999)
      ram: 'ram-1',          // 16GB DDR4 (₹3,499)
      storage: 'ssd-2',      // WD Blue 1TB (₹5,899)
      psu: 'psu-2',          // Cooler Master 650W (₹5,199)
      case: 'case-2',        // MSI Forge 120R (₹4,399)
      cooler: 'cooler-2'     // Deepcool AG400 (₹1,899)
    },
    estimatedPrice: 81893
  },
  {
    id: 'preset-midrange',
    title: 'Mid-Range 1440p Powerhouse',
    tagline: 'High FPS 1440p QHD Gaming with Next-Gen AM5 & DDR5',
    badge: 'Best Value 1440p',
    badgeClass: 'bg-success text-white',
    targetResolution: '1440p QHD (120+ FPS)',
    description: 'Future-proof AM5 platform equipped with RTX 4070 Super and 32GB DDR5. Crushes modern demanding titles with ultra textures.',
    components: {
      cpu: 'cpu-3',          // Ryzen 5 7600X (₹19,899)
      gpu: 'gpu-4',          // RTX 4070 Super (₹58,999)
      motherboard: 'mb-3',   // Gigabyte B650 ATX (₹17,499)
      ram: 'ram-4',          // Corsair 32GB DDR5 6000MHz (₹10,499)
      storage: 'ssd-2',      // WD Blue 1TB (₹5,899)
      psu: 'psu-3',          // Corsair 750W Gold (₹8,999)
      case: 'case-3',        // Lian Li Lancool 216 (₹8,499)
      cooler: 'cooler-3'     // Deepcool LE520 240mm (₹5,499)
    },
    estimatedPrice: 135792
  },
  {
    id: 'preset-highend',
    title: 'High-Performance 4K Enthusiast PC',
    tagline: 'Ultimate 4K Ultra Rig for Serious Gamers & Streamers',
    badge: 'Ultimate Power',
    badgeClass: 'bg-danger text-white',
    targetResolution: '4K Ultra (90+ FPS)',
    description: 'Zero compromises. Features the top-tier Intel i7-14700K paired with RTX 4080 Super 16GB, 2TB Samsung 990 Pro SSD, and 360mm liquid cooler.',
    components: {
      cpu: 'cpu-4',          // i7-14700K (₹36,499)
      gpu: 'gpu-5',          // RTX 4080 Super (₹99,999)
      motherboard: 'mb-4',   // MSI Z790 DDR5 (₹24,999)
      ram: 'ram-4',          // 32GB DDR5 (₹10,499)
      storage: 'ssd-4',      // Samsung 2TB 990 Pro (₹16,999)
      psu: 'psu-4',          // Corsair RM850x (₹11,999)
      case: 'case-4',        // NZXT H9 Flow (₹13,999)
      cooler: 'cooler-4'     // Corsair H150i 360mm (₹15,499)
    },
    estimatedPrice: 230492
  }
];

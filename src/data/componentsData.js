// Realistic hardware component dataset for Gaming PC Builder
// All prices are sample/estimated market prices in Indian Rupees (₹)

export const CATEGORIES = [
  { id: 'cpu', name: 'Processor (CPU)', icon: 'bi-cpu', description: 'The brain of your gaming rig' },
  { id: 'gpu', name: 'Graphics Card (GPU)', icon: 'bi-gpu-card', description: 'Powers gaming frame rates & graphics' },
  { id: 'motherboard', name: 'Motherboard', icon: 'bi-motherboard', description: 'Connects all your components together' },
  { id: 'ram', name: 'Memory (RAM)', icon: 'bi-memory', description: 'High-speed memory for smooth multitasking' },
  { id: 'storage', name: 'Storage (SSD / NVMe)', icon: 'bi-device-hdd', description: 'Ultra-fast game loading and storage' },
  { id: 'psu', name: 'Power Supply (PSU)', icon: 'bi-lightning-charge', description: 'Clean, reliable wattage for all parts' },
  { id: 'case', name: 'Cabinet / PC Case', icon: 'bi-box', description: 'Airflow, aesthetics, and component housing' },
  { id: 'cooler', name: 'CPU Cooler', icon: 'bi-fan', description: 'Keeps temperatures low under heavy gaming' }
];

export const COMPONENTS_DATA = {
  cpu: [
    {
      id: 'cpu-1',
      name: 'AMD Ryzen 5 5600',
      brand: 'AMD',
      category: 'cpu',
      price: 11499,
      socket: 'AM4',
      ramType: 'DDR4',
      tdp: 65,
      specs: '6 Cores, 12 Threads, Up to 4.4 GHz, 35MB Cache, Wraith Stealth Cooler',
      popular: true,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cpu-2',
      name: 'Intel Core i5-13400F',
      brand: 'Intel',
      category: 'cpu',
      price: 17999,
      socket: 'LGA1700',
      ramType: 'DDR4/DDR5',
      tdp: 65,
      specs: '10 Cores (6P + 4E), 16 Threads, Up to 4.6 GHz, 20MB Cache',
      popular: true,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cpu-3',
      name: 'AMD Ryzen 5 7600X',
      brand: 'AMD',
      category: 'cpu',
      price: 19899,
      socket: 'AM5',
      ramType: 'DDR5',
      tdp: 105,
      specs: '6 Cores, 12 Threads, Up to 5.3 GHz, 38MB Cache, PCIe 5.0 Ready',
      popular: false,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cpu-4',
      name: 'Intel Core i7-14700K',
      brand: 'Intel',
      category: 'cpu',
      price: 36499,
      socket: 'LGA1700',
      ramType: 'DDR4/DDR5',
      tdp: 125,
      specs: '20 Cores (8P + 12E), 28 Threads, Up to 5.6 GHz, 33MB Intel Smart Cache',
      popular: true,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cpu-5',
      name: 'AMD Ryzen 7 7800X3D',
      brand: 'AMD',
      category: 'cpu',
      price: 38999,
      socket: 'AM5',
      ramType: 'DDR5',
      tdp: 120,
      specs: '8 Cores, 16 Threads, 3D V-Cache (104MB Cache), King of Gaming',
      popular: true,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80'
    }
  ],

  gpu: [
    {
      id: 'gpu-1',
      name: 'NVIDIA GeForce GTX 1650 4GB',
      brand: 'Zotac',
      category: 'gpu',
      price: 11999,
      vram: '4GB GDDR6',
      tdp: 75,
      recPsu: 400,
      specs: '4GB GDDR6, 128-bit, 896 CUDA Cores, Low Power',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'gpu-2',
      name: 'AMD Radeon RX 6600 8GB',
      brand: 'Sapphire',
      category: 'gpu',
      price: 19999,
      vram: '8GB GDDR6',
      tdp: 132,
      recPsu: 500,
      specs: '8GB GDDR6, 128-bit, 1792 Stream Processors, Best 1080p Value',
      popular: true,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'gpu-3',
      name: 'NVIDIA GeForce RTX 4060 8GB',
      brand: 'MSI',
      category: 'gpu',
      price: 28999,
      vram: '8GB GDDR6',
      tdp: 115,
      recPsu: 550,
      specs: '8GB GDDR6, DLSS 3.5 Frame Gen, Ray Tracing, 3072 CUDA Cores',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'gpu-4',
      name: 'NVIDIA GeForce RTX 4070 Super 12GB',
      brand: 'Gigabyte',
      category: 'gpu',
      price: 58999,
      vram: '12GB GDDR6X',
      tdp: 220,
      recPsu: 650,
      specs: '12GB GDDR6X, 192-bit, 7168 CUDA Cores, 1440p Ultra Beast',
      popular: true,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'gpu-5',
      name: 'NVIDIA GeForce RTX 4080 Super 16GB',
      brand: 'ASUS ROG',
      category: 'gpu',
      price: 99999,
      vram: '16GB GDDR6X',
      tdp: 320,
      recPsu: 750,
      specs: '16GB GDDR6X, 256-bit, 10240 CUDA Cores, 4K Maximum Settings',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    }
  ],

  motherboard: [
    {
      id: 'mb-1',
      name: 'MSI B550M PRO-VDH WiFi',
      brand: 'MSI',
      category: 'motherboard',
      price: 9499,
      socket: 'AM4',
      ramType: 'DDR4',
      formFactor: 'Micro-ATX',
      specs: 'AMD AM4 Socket, Micro-ATX, 4x DDR4 DIMM, PCIe 4.0, Built-in WiFi & BT',
      popular: true,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'mb-2',
      name: 'ASUS Prime B760M-A WiFi D4',
      brand: 'ASUS',
      category: 'motherboard',
      price: 13999,
      socket: 'LGA1700',
      ramType: 'DDR4',
      formFactor: 'Micro-ATX',
      specs: 'Intel LGA1700, Micro-ATX, 4x DDR4 slots up to 5333MHz, Dual M.2 PCIe 4.0',
      popular: true,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'mb-3',
      name: 'Gigabyte B650 Gaming X AX',
      brand: 'Gigabyte',
      category: 'motherboard',
      price: 17499,
      socket: 'AM5',
      ramType: 'DDR5',
      formFactor: 'ATX',
      specs: 'AMD AM5, Full ATX, 4x DDR5 up to 6400MHz, Triple M.2, WiFi 6E, 2.5GbE LAN',
      popular: true,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'mb-4',
      name: 'MSI PRO Z790-A MAX WiFi',
      brand: 'MSI',
      category: 'motherboard',
      price: 24999,
      socket: 'LGA1700',
      ramType: 'DDR5',
      formFactor: 'ATX',
      specs: 'Intel LGA1700, Full ATX, 4x DDR5 slots, PCIe 5.0, 16+1+1 Duet Power VRM',
      popular: false,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    }
  ],

  ram: [
    {
      id: 'ram-1',
      name: 'Corsair Vengeance LPX 16GB (2x8GB) 3200MHz',
      brand: 'Corsair',
      category: 'ram',
      price: 3499,
      ramType: 'DDR4',
      capacity: '16GB (2x8GB)',
      speed: '3200MHz',
      specs: 'DDR4, CL16, Low-profile aluminum heat spreader, XMP 2.0',
      popular: true,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ram-2',
      name: 'G.Skill Ripjaws V 32GB (2x16GB) 3600MHz',
      brand: 'G.Skill',
      category: 'ram',
      price: 6499,
      ramType: 'DDR4',
      capacity: '32GB (2x16GB)',
      speed: '3600MHz',
      specs: 'DDR4, CL18, High performance gaming dual-channel kit',
      popular: false,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ram-3',
      name: 'Kingston Fury Beast RGB 16GB (2x8GB) 5600MHz',
      brand: 'Kingston',
      category: 'ram',
      price: 5299,
      ramType: 'DDR5',
      capacity: '16GB (2x8GB)',
      speed: '5600MHz',
      specs: 'DDR5, CL36, Dynamic RGB lighting, AMD EXPO & Intel XMP 3.0',
      popular: true,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ram-4',
      name: 'Corsair Vengeance RGB 32GB (2x16GB) 6000MHz',
      brand: 'Corsair',
      category: 'ram',
      price: 10499,
      ramType: 'DDR5',
      capacity: '32GB (2x16GB)',
      speed: '6000MHz',
      specs: 'DDR5, CL30 (Sweet spot for AMD AM5 & Intel), Ten-zone RGB',
      popular: true,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80'
    }
  ],

  storage: [
    {
      id: 'ssd-1',
      name: 'Crucial P3 500GB PCIe 3.0 M.2 NVMe',
      brand: 'Crucial',
      category: 'storage',
      price: 3199,
      capacity: '500GB',
      specs: 'M.2 NVMe, Up to 3500 MB/s Read, 1900 MB/s Write',
      popular: false,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ssd-2',
      name: 'Western Digital Blue SN580 1TB NVMe Gen4',
      brand: 'Western Digital',
      category: 'storage',
      price: 5899,
      capacity: '1TB',
      specs: 'PCIe Gen 4.0 x4 M.2, Up to 4150 MB/s Read/Write, 5-Year Warranty',
      popular: true,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ssd-3',
      name: 'Samsung 990 PRO 1TB PCIe 4.0 NVMe',
      brand: 'Samsung',
      category: 'storage',
      price: 9999,
      capacity: '1TB',
      specs: 'Top tier Gen4, Up to 7450 MB/s Read, 6900 MB/s Write, Heatsink ready',
      popular: true,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'ssd-4',
      name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe',
      brand: 'Samsung',
      category: 'storage',
      price: 16999,
      capacity: '2TB',
      specs: '2TB Gen 4x4, Blazing 7450 MB/s speeds, Maximum gaming load speed',
      popular: false,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80'
    }
  ],

  psu: [
    {
      id: 'psu-1',
      name: 'Deepcool PK550D 550W 80 Plus Bronze',
      brand: 'DeepCool',
      category: 'psu',
      price: 3499,
      wattage: 550,
      efficiency: '80+ Bronze',
      modularity: 'Non-Modular',
      specs: '550 Watts, 80 Plus Bronze Certified, Flat Black Cables, 120mm Silent Fan',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'psu-2',
      name: 'Cooler Master MWE 650 V2 Bronze',
      brand: 'Cooler Master',
      category: 'psu',
      price: 5199,
      wattage: 650,
      efficiency: '80+ Bronze',
      modularity: 'Non-Modular',
      specs: '650 Watts, DC-to-DC Circuitry, Flat Black Cables, 5-Year Warranty',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'psu-3',
      name: 'Corsair RM750e 750W 80 Plus Gold Modular',
      brand: 'Corsair',
      category: 'psu',
      price: 8999,
      wattage: 750,
      efficiency: '80+ Gold',
      modularity: 'Fully Modular',
      specs: '750 Watts, ATX 3.0 & PCIe 5.0 Ready, Fully Modular, Zero RPM Fan Mode',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'psu-4',
      name: 'Corsair RM850x 850W 80 Plus Gold Fully Modular',
      brand: 'Corsair',
      category: 'psu',
      price: 11999,
      wattage: 850,
      efficiency: '80+ Gold',
      modularity: 'Fully Modular',
      specs: '850 Watts, 100% Japanese Capacitors, Magnetic Levitation Fan, 10-Yr Warranty',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80'
    }
  ],

  case: [
    {
      id: 'case-1',
      name: 'Ant Esports ICE-100 Air Mini',
      brand: 'Ant Esports',
      category: 'case',
      price: 2999,
      supportedFormFactors: ['Micro-ATX', 'Mini-ITX'],
      specs: 'Micro-ATX Mini Tower, 3x ARGB Fans included, Tempered Glass Side Panel',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'case-2',
      name: 'MSI MAG Forge 120R Airflow',
      brand: 'MSI',
      category: 'case',
      price: 4399,
      supportedFormFactors: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      specs: 'Mid-Tower ATX, 4x 120mm ARGB Fans, Mesh Front Panel, Liquid Cooling Support',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'case-3',
      name: 'Lian Li Lancool 216 RGB',
      brand: 'Lian Li',
      category: 'case',
      price: 8499,
      supportedFormFactors: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      specs: 'High Airflow Mid-Tower, 2x 160mm Front Fans, Modular Bracket, Cable Management',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'case-4',
      name: 'NZXT H9 Flow Dual-Chamber',
      brand: 'NZXT',
      category: 'case',
      price: 13999,
      supportedFormFactors: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      specs: 'Panoramic Dual-Chamber ATX, Seamless Glass Design, 4x Fans, Clean Build Showcase',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    }
  ],

  cooler: [
    {
      id: 'cooler-1',
      name: 'AMD Wraith Stealth Stock Cooler',
      brand: 'AMD',
      category: 'cooler',
      price: 699,
      type: 'Stock Air Cooler',
      supportedSockets: ['AM4'],
      tdpRating: 65,
      specs: 'Basic stock aluminum heatsink, low noise, sufficient for 65W CPUs',
      popular: false,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cooler-2',
      name: 'Deepcool AG400 ARGB Single Tower',
      brand: 'DeepCool',
      category: 'cooler',
      price: 1899,
      type: 'Air Cooler',
      supportedSockets: ['LGA1700', 'AM4', 'AM5'],
      tdpRating: 220,
      specs: '4 Direct Contact Heatpipes, 120mm ARGB PWM Fan, Universal Mounting',
      popular: true,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cooler-3',
      name: 'Deepcool LE520 240mm AIO Liquid Cooler',
      brand: 'DeepCool',
      category: 'cooler',
      price: 5499,
      type: '240mm Liquid Cooler',
      supportedSockets: ['LGA1700', 'AM4', 'AM5'],
      tdpRating: 280,
      specs: '240mm Radiator, Anti-leak Tech, 2x 120mm ARGB Fans, Micro-channel Copper Base',
      popular: true,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cooler-4',
      name: 'Corsair iCUE H150i Elite Capellix XT 360mm',
      brand: 'Corsair',
      category: 'cooler',
      price: 15499,
      type: '360mm Liquid Cooler',
      supportedSockets: ['LGA1700', 'AM4', 'AM5'],
      tdpRating: 350,
      specs: '360mm Radiator, 33 Ultra-Bright Capellix LEDs, 3x AF120 RGB ELITE Fans',
      popular: false,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80'
    }
  ]
};

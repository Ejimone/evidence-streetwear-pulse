
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  sizes: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Streetwear Hoodie",
    description: "Premium quality hoodie with bold graphic print. Made from soft, durable cotton blend for ultimate comfort.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=2026&auto=format&fit=crop"
    ],
    categories: ["hoodies", "tops", "featured"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    newArrival: true
  },
  {
    id: 2,
    name: "Graffiti Logo T-Shirt",
    description: "Signature graffiti logo t-shirt with premium cotton construction and relaxed fit.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop"
    ],
    categories: ["t-shirts", "tops"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true
  },
  {
    id: 3,
    name: "Tactical Cargo Pants",
    description: "Functional cargo pants with multiple pockets and adjustable fit. Urban style meets utility.",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594750852563-5ed8e0fe14a9?q=80&w=1974&auto=format&fit=crop"
    ],
    categories: ["pants", "bottoms", "featured"],
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: 4,
    name: "Urban Statement Cap",
    description: "Embroidered statement cap with adjustable strap for the perfect fit.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2070&auto=format&fit=crop"
    ],
    categories: ["accessories", "hats"],
    sizes: ["One Size"],
    bestSeller: true
  },
  {
    id: 5,
    name: "Evidence Bomber Jacket",
    description: "Signature bomber jacket with custom embroidery. Water-resistant shell and premium lining.",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
    ],
    categories: ["jackets", "outerwear", "featured"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    bestSeller: true
  },
  {
    id: 6,
    name: "Bold Logo Sweatpants",
    description: "Comfortable sweatpants with bold side logo print. Perfect for streetwear styling or lounging.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580906853203-f82f3b3a0102?q=80&w=2070&auto=format&fit=crop"
    ],
    categories: ["pants", "bottoms", "loungewear"],
    sizes: ["S", "M", "L", "XL"],
    newArrival: true
  },
  {
    id: 7,
    name: "Statement Crossbody Bag",
    description: "Versatile crossbody bag with custom hardware and multiple compartments.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1598532213005-067bc5c952c6?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590739225287-bd2d465d3283?q=80&w=1974&auto=format&fit=crop"
    ],
    categories: ["accessories", "bags"],
    sizes: ["One Size"],
    newArrival: true
  },
  {
    id: 8,
    name: "Streetwear Canvas Sneakers",
    description: "Exclusive canvas sneakers with premium construction and custom sole design.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop"
    ],
    categories: ["shoes", "footwear", "featured"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    bestSeller: true
  }
];

export const collections = [
  {
    id: 1,
    name: "Urban Essentials",
    description: "Everyday streetwear staples with an edge",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Bold Statement",
    description: "Make a statement with our boldest designs",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Street Luxury",
    description: "Where street style meets premium quality",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
  }
];

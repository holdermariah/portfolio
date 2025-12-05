import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "brand-identity-system",
    title: "Brand Identity System",
    year: 2024,
    thumbnail:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
    category: "Branding",
    description: "Complete visual identity for a modern tech startup",
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        content:
          "This comprehensive brand identity project encompasses logo design, color palette, typography, and brand guidelines for a growing technology company.",
      },
      {
        id: "logo",
        title: "Logo Design",
        content:
          "The logo combines modern minimalism with bold geometric shapes, reflecting the company's innovative spirit and technical expertise.",
        image:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
      },
      {
        id: "colors",
        title: "Color System",
        content:
          "A carefully curated palette balancing professional neutrals with vibrant accent colors to create visual hierarchy and brand recognition.",
      },
    ],
    tools: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    id: "editorial-magazine",
    title: "Editorial Magazine Design",
    year: 2024,
    thumbnail:
      "https://images.unsplash.com/photo-1586339367119-b30063a0b7ae?w=800&auto=format&fit=crop",
    category: "Editorial",
    description: "Quarterly publication design for art and culture magazine",
    sections: [
      {
        id: "concept",
        title: "Design Concept",
        content:
          "A contemporary take on traditional editorial design, combining bold typography with generous white space for a clean, modern aesthetic.",
      },
      {
        id: "layout",
        title: "Layout System",
        content:
          "Flexible grid system allowing for diverse content types while maintaining visual consistency throughout the publication.",
        image:
          "https://images.unsplash.com/photo-1586339367119-b30063a0b7ae?w=800&auto=format&fit=crop",
      },
    ],
    tools: ["InDesign", "Photoshop"],
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI/UX",
    year: 2023,
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    category: "Digital",
    description: "User interface design for fitness tracking application",
    sections: [
      {
        id: "research",
        title: "User Research",
        content:
          "Extensive user interviews and competitor analysis informed the design direction, focusing on simplicity and motivational elements.",
      },
      {
        id: "interface",
        title: "Interface Design",
        content:
          "Clean, intuitive interface with emphasis on data visualization and progress tracking to keep users engaged and motivated.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      },
    ],
    tools: ["Figma", "Principle"],
  },
  {
    id: "packaging-series",
    title: "Product Packaging Series",
    year: 2023,
    thumbnail:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop",
    category: "Packaging",
    description: "Eco-friendly packaging design for organic skincare line",
    sections: [
      {
        id: "sustainable",
        title: "Sustainable Design",
        content:
          "Environmentally conscious design using recycled materials and minimal ink coverage while maintaining premium aesthetic.",
      },
      {
        id: "branding",
        title: "Brand Expression",
        content:
          "Cohesive visual language across product line using natural colors, organic shapes, and tactile finishes.",
        image:
          "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop",
      },
    ],
    tools: ["Illustrator", "Photoshop", "Dimension"],
  },
  {
    id: "poster-campaign",
    title: "Concert Poster Campaign",
    year: 2023,
    thumbnail:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    category: "Print",
    description: "Visual identity and poster series for music festival",
    sections: [
      {
        id: "visual-language",
        title: "Visual Language",
        content:
          "Bold, experimental typographic approach combined with vibrant gradients and dynamic compositions to capture the energy of live music.",
      },
      {
        id: "series",
        title: "Campaign Series",
        content:
          "Cohesive multi-poster system with adaptable template for different artists while maintaining overall festival identity.",
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
      },
    ],
    tools: ["Illustrator", "Photoshop"],
  },
];

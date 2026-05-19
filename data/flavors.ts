export type Flavor = {
  accent: string;
  burst: string[];
  description: string;
  filter: string;
  flavorLabel: string;
  glow: string;
  id: "mango-rush" | "cocoa-noir" | "berry-pulse";
  labelColors: {
    primary: string;
    secondary: string;
  };
  name: string;
  notes: string;
  ring: string;
};

export const flavors: Flavor[] = [
  {
    id: "mango-rush",
    name: "Mango Rush",
    flavorLabel: "Mango",
    description: "Sun-ripe mango with a polished chilled finish.",
    notes: "Mango pulp / citrus edge / cold glow",
    accent: "linear-gradient(90deg, #ffbf47, #ff8a1f, #d71945)",
    burst: ["#ffbf47", "#ff8a1f", "#d71945", "#ffe083"],
    glow: "rgba(255, 138, 31, 0.32)",
    ring: "rgba(255, 191, 71, 0.24)",
    labelColors: {
      primary: "#ffbf47",
      secondary: "#d71945",
    },
    filter: "none",
  },
  {
    id: "cocoa-noir",
    name: "Cocoa Noir",
    flavorLabel: "Chocolate",
    description: "Smooth cocoa depth with a velvet cold-brew finish.",
    notes: "Cocoa shell / caramel lift / satin depth",
    accent: "linear-gradient(90deg, #C8914A, #7A3F22, #2B1711)",
    burst: ["#C8914A", "#7A3F22", "#2B1711", "#F3C16B"],
    glow: "rgba(200, 145, 74, 0.3)",
    ring: "rgba(200, 145, 74, 0.22)",
    labelColors: {
      primary: "#C8914A",
      secondary: "#2B1711",
    },
    filter: "sepia(0.62) saturate(0.72) hue-rotate(-12deg) brightness(0.86)",
  },
  {
    id: "berry-pulse",
    name: "Berry Pulse",
    flavorLabel: "Berry",
    description: "Bright berry lift with a crisp sparkling edge.",
    notes: "Strawberry spark / berry skin / violet chill",
    accent: "linear-gradient(90deg, #FF5C7A, #D71968, #5B2EFF)",
    burst: ["#FF5C7A", "#D71968", "#5B2EFF", "#A45CFF"],
    glow: "rgba(215, 25, 104, 0.32)",
    ring: "rgba(255, 92, 122, 0.22)",
    labelColors: {
      primary: "#FF5C7A",
      secondary: "#5B2EFF",
    },
    filter: "hue-rotate(312deg) saturate(1.22) brightness(0.98)",
  },
];

export const defaultFlavor = flavors[0];

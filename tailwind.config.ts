import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Neutral
        White: "#fbfbfb",
        Black: "#131313",
        "Hover-White": "#e9e9e9",
        "Hover-Black": "#171717",

        // Gray
        "Gray-10": "#F4F4F4",
        "Gray-20": "#E0E0E0",
        "Gray-30": "#C6C6C6",
        "Gray-40": "#A8A8A8",
        "Gray-50": "#8D8D8D",
        "Gray-60": "#6F6F6F",
        "Gray-70": "#525252",
        "Gray-80": "#393939",
        "Gray-90": "#262626",
        "Gray-100": "#161616",
        "Hover-Gray-10": "#E8E8E8",
        "Hover-Gray-20": "#D1D1D1",
        "Hover-Gray-30": "#B5B5B5",
        "Hover-Gray-40": "#999999",
        "Hover-Gray-50": "#7A7A7A",
        "Hover-Gray-60": "#5E5E5E",
        "Hover-Gray-70": "#636363",
        "Hover-Gray-80": "#474747",
        "Hover-Gray-90": "#333333",
        "Hover-Gray-100": "#292929",

        // Red
        "Red-10": "#FFF1F1",
        "Red-20": "#FFD7D9",
        "Red-30": "#FFB3B8",
        "Red-40": "#FF8389",
        "Red-50": "#FA4D56",
        "Red-60": "#DA1E28",
        "Red-70": "#A2191F",
        "Red-80": "#750E13",
        "Red-90": "#520408",
        "Red-100": "#2D0709",
        "Hover-Red-10": "#FFE0E0",
        "Hover-Red-20": "#FFC2C5",
        "Hover-Red-30": "#FF99A0",
        "Hover-Red-40": "#FF6168",
        "Hover-Red-50": "#EE0713",
        "Hover-Red-60": "#B81922",
        "Hover-Red-70": "#C21E25",
        "Hover-Red-80": "#921118",
        "Hover-Red-90": "#66050A",
        "Hover-Red-100": "#3C0508",

        // Orange
        "Orange-10": "#FFF2E8",
        "Orange-20": "#FFD9BE",
        "Orange-30": "#FFB784",
        "Orange-40": "#FF832B",
        "Orange-50": "#EB6200",
        "Orange-60": "#BA4E00",
        "Orange-70": "#8A3800",
        "Orange-80": "#5E2900",
        "Orange-90": "#3E1A00",
        "Orange-100": "#231000",
        "Hover-Orange-10": "#FFE2CC",
        "Hover-Orange-20": "#FFC69E",
        "Hover-Orange-30": "#FF9D57",
        "Hover-Orange-40": "#FA6800",
        "Hover-Orange-50": "#CC5500",
        "Hover-Orange-60": "#9E4200",
        "Hover-Orange-70": "#A84400",
        "Hover-Orange-80": "#753300",
        "Hover-Orange-90": "#522200",
        "Hover-Orange-100": "#421E00",

        // Yellow
        "Yellow-10": "#FCF4D6",
        "Yellow-20": "#FDDC69",
        "Yellow-30": "#F1C21B",
        "Yellow-40": "#D2A106",
        "Yellow-50": "#B28600",
        "Yellow-60": "#8E6A00",
        "Yellow-70": "#684E00",
        "Yellow-80": "#483700",
        "Yellow-90": "#302400",
        "Yellow-100": "#1C1500",
        "Hover-Yellow-10": "#F8E6A0",
        "Hover-Yellow-20": "#FCCD27",
        "Hover-Yellow-30": "#DDB00E",
        "Hover-Yellow-40": "#BC9005",
        "Hover-Yellow-50": "#9E7700",
        "Hover-Yellow-60": "#755800",
        "Hover-Yellow-70": "#806000",
        "Hover-Yellow-80": "#5C4600",
        "Hover-Yellow-90": "#3D2E00",
        "Hover-Yellow-100": "#271E01",

        // Green
        "Green-10": "#DEFBE6",
        "Green-20": "#A7F0BA",
        "Green-30": "#6FDC8C",
        "Green-40": "#42BE65",
        "Green-50": "#24A148",
        "Green-60": "#198038",
        "Green-70": "#0E6027",
        "Green-80": "#044317",
        "Green-90": "#022D0D",
        "Green-100": "#071908",
        "Hover-Green-10": "#B6F6C8",
        "Hover-Green-20": "#74E792",
        "Hover-Green-30": "#36CE5E",
        "Hover-Green-40": "#3BAB5A",
        "Hover-Green-50": "#208E3F",
        "Hover-Green-60": "#166F31",
        "Hover-Green-70": "#11742F",
        "Hover-Green-80": "#05521C",
        "Hover-Green-90": "#033B11",
        "Hover-Green-100": "#08250A",

        // Blue
        "Blue-10": "#EDF5FF",
        "Blue-20": "#D0E2FF",
        "Blue-30": "#A6C8FF",
        "Blue-40": "#78A9FF",
        "Blue-50": "#4589FF",
        "Blue-60": "#0F62FE",
        "Blue-70": "#0043CE",
        "Blue-80": "#002D9C",
        "Blue-90": "#001D6C",
        "Blue-100": "#001141",
        "Hover-Blue-10": "#DBEBFF",
        "Hover-Blue-20": "#B8D3FF",
        "Hover-Blue-30": "#8AB6FF",
        "Hover-Blue-40": "#5C97FF",
        "Hover-Blue-50": "#1F70FF",
        "Hover-Blue-60": "#0050E6",
        "Hover-Blue-70": "#0053FF",
        "Hover-Blue-80": "#0039C7",
        "Hover-Blue-90": "#00258A",
        "Hover-Blue-100": "#001F75",

        // Cyan
        "Cyan-10": "#E5F6FF",
        "Cyan-20": "#BAE6FF",
        "Cyan-30": "#82CFFF",
        "Cyan-40": "#33B1FF",
        "Cyan-50": "#1192E8",
        "Cyan-60": "#0072C3",
        "Cyan-70": "#00539A",
        "Cyan-80": "#003A6D",
        "Cyan-90": "#012749",
        "Cyan-100": "#061727",
        "Hover-Cyan-10": "#CCEEFF",
        "Hover-Cyan-20": "#99DAFF",
        "Hover-Cyan-30": "#57BEFF",
        "Hover-Cyan-40": "#059FFF",
        "Hover-Cyan-50": "#0F7EC8",
        "Hover-Cyan-60": "#005FA3",
        "Hover-Cyan-70": "#0066BD",
        "Hover-Cyan-80": "#00498A",
        "Hover-Cyan-90": "#013360",
        "Hover-Cyan-100": "#061727",

        // Magenta
        "Magenta-10": "#FFF0F7",
        "Magenta-20": "#FFD6E8",
        "Magenta-30": "#FFAFD2",
        "Magenta-40": "#FF7EB6",
        "Magenta-50": "#EE5396",
        "Magenta-60": "#D02670",
        "Magenta-70": "#9F1853",
        "Magenta-80": "#740937",
        "Magenta-90": "#510224",
        "Magenta-100": "#2A0A18",
        "Hover-Magenta-10": "#FFE0EF",
        "Hover-Magenta-20": "#FFBDDA",
        "Hover-Magenta-30": "#FF94C3",
        "Hover-Magenta-40": "#FF57A0",
        "Hover-Magenta-50": "#E3176F",
        "Hover-Magenta-60": "#B0215F",
        "Hover-Magenta-70": "#BF1D63",
        "Hover-Magenta-80": "#8E0B43",
        "Hover-Magenta-90": "#68032E",
        "Hover-Magenta-100": "#2A0A18",

        // Purple
        "Purple-10": "#F6F2FF",
        "Purple-20": "#E8DAFF",
        "Purple-30": "#D4BBFF",
        "Purple-40": "#BE95FF",
        "Purple-50": "#A56EFF",
        "Purple-60": "#8A3FFC",
        "Purple-70": "#6929C4",
        "Purple-80": "#491D8B",
        "Purple-90": "#31135E",
        "Purple-100": "#1C0F30",
        "Hover-Purple-10": "#EDE5FF",
        "Hover-Purple-20": "#DCC7FF",
        "Hover-Purple-30": "#C5A3FF",
        "Hover-Purple-40": "#AE7AFF",
        "Hover-Purple-50": "#9352FF",
        "Hover-Purple-60": "#7822FB",
        "Hover-Purple-70": "#7C3DD6",
        "Hover-Purple-80": "#5B24AD",
        "Hover-Purple-90": "#40197B",
        "Hover-Purple-100": "#1C0F30",

        // Teal
        "Teal-10": "#D9FBFB",
        "Teal-20": "#9EF0F0",
        "Teal-30": "#3DDBD9",
        "Teal-40": "#08BDBA",
        "Teal-50": "#009D9A",
        "Teal-60": "#007D79",
        "Teal-70": "#005D5D",
        "Teal-80": "#004144",
        "Teal-90": "#022B30",
        "Teal-100": "#081A1C",
        "Hover-Teal-10": "#ACF6F6",
        "Hover-Teal-20": "#57E5E5",
        "Hover-Teal-30": "#25CAC8",
        "Hover-Teal-40": "#07ABA9",
        "Hover-Teal-50": "#008A87",
        "Hover-Teal-60": "#006B68",
        "Hover-Teal-70": "#007070",
        "Hover-Teal-80": "#005357",
        "Hover-Teal-90": "#033940",
        "Hover-Teal-100": "#0F3034",
      },
    },
  },
  plugins: [],
};
export default config;

"use client";
import { extendTheme } from "@chakra-ui/react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const lpTheme = extendTheme({
  colors: {
    primary: "#017EF4",
    text: "#141924",
    gray: {
      200: "#BDC8D3",
      300: "#8b8b8b",
      400: "#AEAEAE",
      500: "#313131",
      600: "#242424",
      700: "#7B7E84",
    },
    dark: {
      100: "#181818",
    },
  },
  fonts: {
    inter: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    body: manrope.style.fontFamily,
  },
});

export default lpTheme;

import { Noto_Sans_JP, Raleway, Roboto } from "next/font/google";

export const notoSans = Noto_Sans_JP({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const raleway = Raleway({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const roboto = Roboto({
  weight: ["500", "700"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

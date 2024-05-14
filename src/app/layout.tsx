import type { Metadata } from "next";
import { notoSans, roboto, raleway } from "@/app/ui/fonts";
import Loading from "@/app/ui/loading";
// import "@/app/ui/globals.css";
import "../../public/css/style.css";
import clsx from "clsx";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | FEEL U-CAN：ユーキャンの今を感じる採用オウンドメディア",
    default: "FEEL U-CAN：ユーキャンの今を感じる採用オウンドメディア",
  },
  description:
    "大きすぎない組織だから挑める。そんなユーキャンの若手の挑戦のリアル、ぜひ見てみてください。",
  metadataBase: new URL("https://nextjs-ucan-clone.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${roboto.variable} ${raleway.variable}`}
      >
        <div id="wrapper">
          <Header />
          <main className="page-main">{children}</main>
          <Footer />
        </div>
        {/* <Loading /> */}
      </body>
    </html>
  );
}

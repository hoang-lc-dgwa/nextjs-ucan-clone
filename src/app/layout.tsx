import type { Metadata } from "next";
import { notoSans, roboto, raleway } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import "/public/css/style.css";
import Loading from "@/components/Loading";

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
        <Providers>
          <div id="wrapper">
            <Header />
            <main className="page-main">{children}</main>
            <Footer />
          </div>
          {/* <Loading /> */}
        </Providers>
      </body>
    </html>
  );
}

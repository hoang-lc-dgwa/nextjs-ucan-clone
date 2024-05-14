import Image from "next/image";
import React from "react";
import SubHeader from "@/app/ui/sub-header";
import BusinessInfo from "@/app/ui/business-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BUSINESS",
};

export default function Page() {
  return (
    <>
      <SubHeader h1Text="BUSINESS" pText="事業内容" />

      <div className="sub-desc">
        <div className="inner">
          <div className="sub-desc__inner">
            <h2 className="sub-desc__headline">
              ユーキャンには <br className="sp" />
              3つの顔がある。
            </h2>
            <h3 className="sub-desc__title is-show">
              教育企業の顔、通信販売企業の顔、そして、
              <br />
              <span className="u-hl">広告マーケティング企業</span>の顔。
            </h3>
            <div className="sub-desc__copy">
              <p>
                生涯学習としてのユーキャン、通信販売としてのユーキャンは多くの人がご存知かと思いますが、「広告マーケティング企業としてのユーキャン」を知っている人は少ないのではないでしょうか。一般的に、自社商品・サービスのプロモーションは広告代理店や販売会社に委ねる企業が多い中で、ユーキャンでは、ウェブ広告・DM（ダイレクトメール）・新聞広告・折込チラシ・雑誌広告等の様々な広告のほとんどを自前で制作。商品・サービスの魅力を自分たちの手でターゲットに届けているのです。ここでは、ユーキャンを「広告マーケティング」「教育」「通信販売」という大きく3つの軸に分けてご紹介します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contents-main">
        <div className="business-info">
          <div className="inner">
            <BusinessInfo />
          </div>
        </div>
      </div>
    </>
  );
}

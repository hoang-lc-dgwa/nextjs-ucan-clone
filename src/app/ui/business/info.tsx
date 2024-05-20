import React, { FC } from "react";
import Image from "next/image";

interface Business {
  title: string;
  subTitle: string;
  imgSrc: string;
  imgAlt?: string;
  imgSrcSp: string;
  description: string;
  links?: { linkText: string; linkAddress: string }[];
}

const business: Business[] = [
  {
    title: '広告マーケティング<br class="sp">企業として',
    subTitle:
      '創業以来70年ずっと、<br>テストマーケティングを<br class="sp">つづけてきました。',
    imgSrc: "/images/business/business_img01.jpg",
    imgAlt: "",
    imgSrcSp: "/images/business/business_img01_sp.jpg",
    description:
      "ユーキャンの広告制作のこだわりはとてもシンプル。「まずテストしてみよう」。過去にもっとも成果が高かったAという広告に対して、様々なデータを分析し、コピーやデザインを刷新したBという広告を制作。どちらが反応率が高いのか。結果を計測し、ノウハウを蓄積していきます。ときには従来の結果に対して300%を超える成果が出ることもある。思うような成果が出なくても「ここがダメだったのか」という学びは残る。創業以来70年を超えて培ってきた膨大な顧客データとマーケティングデータは、どんな広告会社にもないユーキャン独自の強みとなっています。",
  },
  {
    title: "教育企業として",
    subTitle:
      '通信教育のパイオニアとして、<br>累計受講者数<br class="sp">220万人超の講座も。',
    imgSrc: "/images/business/business_img02.jpg",
    imgAlt: "image Business 2",
    imgSrcSp: "/images/business/business_img02_sp.jpg",
    description:
      "資格・実用・趣味という3つのカテゴリで多岐に渡る約150講座を展開。行政書士や宅地建物取引士、医療事務といった資格系講座から、色えんぴつ画、ウクレレ、ガーデニング、囲碁などシニアに人気の高い趣味系講座まで。老若男女問わず、幅広い世代の方に学ぶ楽しさ、成長の喜びを提供しています。また、ウェブ学習支援ツール、受講後のフォロー拡充、展覧会の開催など、通信教育に留まらないサービスも展開。通信教育のパイオニアとして、学びの未来を開発しています。",
    links: [
      {
        linkText: "生涯学習のユーキャン",
        linkAddress: "https://www.u-can.co.jp/",
      },
    ],
  },
  {
    title: "通信販売企業として",
    subTitle:
      '総販売数120万超の<br class="sp">商品を生む、<br>ヒットメーカーでもある。',
    imgSrc: "/images/business/business_img03.jpg",
    imgAlt: "image Business 3",
    imgSrcSp: "/images/business/business_img03_sp.jpg",
    description:
      "DVD・ブルーレイ全集といった映像商品の他、様々なジャンルの音楽CD全集、書店では手に入らない大型書籍など、知的・文化的コンテンツをパートナー企業と共同開発。ゼロから商品開発することもあれば、既存商品をユーキャンのターゲット顧客に合わせてカスタマイズすることも。2013年には、「今よりもっと心地いい」をテーマに、ファッション、家具、生活雑貨を扱う『ココチモ』事業を立ち上げ。教育企業のイメージが強かったユーキャンの別の一面は、多くのお客様からご好評いただいています。",
    links: [
      {
        linkText: "通販ショップ",
        linkAddress: "https://www.u-canshop.jp/",
      },
      {
        linkText: "ココチモ",
        linkAddress: "https://www.cococimo.jp/shop/default.aspx",
      },
      {
        linkText: "着心地のいい服",
        linkAddress: "https://www.iikigokochi.jp/shop/default.aspx",
      },
    ],
  },
];

const BusinessInfo = () => {
  return (
    <div className="business-info__list">
      {business.map((item, index) => (
        <div className="business-info__item" key={index}>
          <div className="business-info__item__inner">
            <h2
              className="business-info__headline"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <div className="business-info__row">
              <div className="business-info__img pc">
                <Image
                  src={item.imgSrc}
                  width={666}
                  height={474}
                  alt={item.imgAlt ?? ""}
                />
              </div>
              <div className="business-info__description">
                <div className="business-info__description__inner">
                  <h3 dangerouslySetInnerHTML={{ __html: item.subTitle }} />
                  <div className="business-info__img sp">
                    <Image
                      src={item.imgSrcSp}
                      width={312}
                      height={188}
                      alt={item.imgAlt ?? ""}
                    />
                  </div>
                  <p>{item.description}</p>
                  {item.links && (
                    <ul className="business-info__links">
                      {item.links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.linkAddress}
                            target="_blank"
                            rel="noopener"
                          >
                            <span>{link.linkText}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessInfo;

import Image from "next/image";
import React from "react";
import SubHeader from "@/app/ui/sub-header";

export default function Page() {
  return (
    <>
      <SubHeader h1Text="BUSINESS" pText="事業内容" />

      <div className="sub-desc">
        <div className="inner">
          <div className="sub-desc__inner">
            <h2 className="sub-desc__headline">
              ユーキャンには
              <br className="sp" />
              3つの顔がある。
            </h2>
            <h3 className="sub-desc__title is-show">
              教育企業の顔、通販企業の顔、そして、
              <br />
              <span className="u-hl">広告マーケティング企業</span>の顔。
            </h3>
            <div className="sub-desc__copy">
              <p>
                生涯学習としてのユーキャン、通信販売としてのユーキャンは多くの人もご存知かと思いますが、「広告マーケティング企業としてのユーキャン」を知っている人は少ないのではないでしょうか。一般的に、自社商品・サービスのプロモーションは広告代理店や販売会社に委ねる企業が多い中で、ユーキャンでは、ウェブ広告・DM
                ・新聞広告・折込チラシ・雑誌広告・等の様々な広告のほとんどを自前で制作。商品・サービスの魅力を自分たちの手でターゲットに届けているのです。ここでは、ユーキャンの事業内容を「広告マーケティング」「教育」「通信販売」という大きく3つの軸に分けてご紹介します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contents-main">
        <div className="business-info">
          <div className="inner">
            <div className="business-info__list">
              <div className="business-info__item">
                <div className="business-info__item__inner">
                  <h2 className="business-info__headline">
                    広告マーケティング
                    <br className="sp" />
                    企業として
                  </h2>
                  <div className="business-info__row">
                    <div className="business-info__img pc">
                      <Image
                        src="/images/business/business_img01.jpg"
                        width={666}
                        height={474}
                        alt=""
                      />
                    </div>
                    <div className="business-info__description">
                      <div className="business-info__description__inner">
                        <h3>
                          創業以来70年ずっと、
                          <br />
                          テストマーケティングを
                          <br className="sp" />
                          つづけてきました。
                        </h3>
                        <div className="business-info__img sp">
                          <Image
                            src="/images/business/business_img01_sp.jpg"
                            width={312}
                            height={188}
                            alt=""
                          />
                        </div>
                        <p>
                          ユーキャンの広告制作のこだわりはとてもシンプル。「まずテストしてみよう」。過去にもっとも成果が高かったAという広告に対して、様々なデータを分析し、コピーやデザインを刷新したBという広告を制作。どちらが反応率が高いのか。結果を計測し、ノウハウを蓄積していきます。ときには従来の結果に対して300%を超える成果が出ることもある。思うような成果が出なくても「ここがダメだったのか」という学びは残る。創業以来70年を超えて培ってきた膨大な顧客データとマーケティングデータは、どんな広告会社にもないユーキャン独自の強みとなっています。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="business-info__item">
                <div className="business-info__item__inner">
                  <h2 className="business-info__headline">教育企業として</h2>
                  <div className="business-info__row">
                    <div className="business-info__img pc">
                      <Image
                        src="/images/business/business_img02.jpg"
                        width={666}
                        height={474}
                        alt=""
                      />
                    </div>
                    <div className="business-info__description">
                      <div className="business-info__description__inner">
                        <h3>
                          通信講座のパイオニアとして、
                          <br />
                          累計受講者数
                          <br className="sp" />
                          220万人超の講座も。
                        </h3>
                        <div className="business-info__img sp">
                          <Image
                            src="/images/business/business_img02_sp.jpg"
                            width={312}
                            height={188}
                            alt=""
                          />
                        </div>
                        <p>
                          資格・実用・趣味という3つのカテゴリで多岐に渡る約150講座を展開。行政書士や宅地建物取引士、医療事務といった資格系講座から、色えんぴつ画、ウクレレ、ガーデニング、囲碁などシニアに人気の高い趣味系講座まで。老若男女問わず、幅広い世代の方に学ぶ楽しさ、成長の喜びを提供しています。また、スクーリングやウェブ学習支援ツール、受講後のフォロー拡充、展覧会の開催など、通信教育に留まらないサービスも展開。通信講座のパイオニアとして、学びの未来を開発しています。
                        </p>
                        <ul className="business-info__links">
                          <li>
                            <a href="https://www.u-can.co.jp/" target="_blank">
                              <span>生涯学習のユーキャン</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="business-info__item">
                <div className="business-info__item__inner">
                  <h2 className="business-info__headline">
                    通信販売企業として
                  </h2>
                  <div className="business-info__row">
                    <div className="business-info__img pc">
                      <Image
                        src="/images/business/business_img03.jpg"
                        width={666}
                        height={474}
                        alt=""
                      />
                    </div>
                    <div className="business-info__description">
                      <div className="business-info__description__inner">
                        <h3>
                          総販売数120万超の
                          <br className="sp" />
                          商品を生む、
                          <br />
                          ヒットメーカーでもある。
                        </h3>
                        <div className="business-info__img sp">
                          <Image
                            src="/images/business/business_img03_sp.jpg"
                            width={312}
                            height={188}
                            alt=""
                          />
                        </div>
                        <p>
                          DVD・ブルーレイ全集といった映像商品の他、様々なジャンルの音楽CD全集、書店では手に入らない大型書籍など、知的・文化的コンテンツをパートナー企業と共同開発。ゼロから商品開発することもあれば、既存商品をユーキャンのターゲット顧客に合わせてカスタマイズすることも。2013年には、「今よりもっと心地いい」をテーマに、ファッション、家具、生活雑貨を扱う『ココチモ』事業を立ち上げ。教育企業のイメージが強かったユーキャンの新しい一面は、多くのお客様からご好評いただいています。
                        </p>
                        <ul className="business-info__links">
                          <li>
                            <a href="https://www.u-canshop.jp/" target="_blank">
                              <span>通販ショップ</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.cococimo.jp/shop/default.aspx"
                              target="_blank"
                            >
                              <span>ココチモ</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.iikigokochi.jp/shop/default.aspx"
                              target="_blank"
                            >
                              <span>着心地のいい服</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

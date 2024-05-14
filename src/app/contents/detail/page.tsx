import Sidebar from "@/app/ui/sidebar";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTETS DETAIL",
};

export default function Page() {
  return (
    <div className="contents-main">
      <div className="inner">
        <div className="contents__wrap">
          <div className="contents-body">
            <ul className="contents-column__tags">
              <li>
                <a href="#">教育事業</a>
              </li>
              <li>
                <a href="#">マーケティング</a>
              </li>
              <li>
                <a href="#">DM</a>
              </li>
              <li>
                <a href="#">OJT</a>
              </li>
            </ul>
            <article className="contents-detail">
              <h1>
                好評につき再び密着！若手社員の1日のスケジュールを追いかけてみた。
              </h1>
              <aside className="contents-editor">
                <h5 className="contents-editor__title">
                  <span>編集部メモ</span>
                </h5>
                <p>
                  前回、働くイメージが湧く！と好評だった若手社員の1日のスケジュール公開企画。今回も若手社員のある1日に密着しました。仕事の流れとともに、やりがいやこだわり、将来の目標も聞いてみました。リアルなユーキャンライフをとくとご覧あれ！
                </p>
              </aside>
              <figure>
                <Image
                  src="/images/contents/post01_img01.jpg"
                  width={724}
                  height={483}
                  alt=""
                />
              </figure>
              <blockquote>
                <cite>プロフィール</cite>
                <p>
                  <strong>行（Yuki）</strong>
                  <br />
                  2022年新卒入社。教育事業部顧客戦略部所属。インターンで広告をつくる面白さを体験し、ユーキャンに興味を持つ。その際、どんな意見も前向きにとらえてくれる社風に惹かれて入社を決意した。
                </p>
                {/* for https://feel.u-can.jp/article90/ */}
                {/* <p><strong>酒井（Sakai）</strong><br />2020年入社。教育事業部webマーケティング部所属。</p>
                                    <p><strong>田邉（Tanabe）</strong><br />2021年入社。通信販売事業部webマーケティング部所属。</p>
                                    <p><strong>山岸（Yamagishi）</strong><br />2022年入社。通信販売事業部文化教養事業データマーケティング部所属。</p> */}
              </blockquote>
              <h2>
                常に自分から率先してやるという意識を忘れない若手社員のとある1日。
              </h2>
              <h6>―現在のお仕事について教えてください。</h6>
              <p>
                <strong>行：</strong>
                <a href="#">大きく2つの仕事があります</a>
                。1つは資料請求をしてくださったお客様へ送るDMの制作。もう1つは、他社のさまざまな通販サイトの荷物と同送するチラシの制作です。
              </p>
              <h6>―それぞれ、どのようなお仕事になるのでしょうか？</h6>
              <p>
                <strong>行：</strong>
                DMの方は、ターゲット像を思い描いて、どんなコピーやデザインが効果的なのか考えながらDMをつくっていく仕事です。通販同送の仕事はどんな荷物にチラシを入れるのか、チラシにどの講座を掲載するのか、戦略的に探っていきます。チラシの作成から配布媒体の選定、反響の集計まで一貫して担当するので、成果がダイレクトに見えてやりがいを感じやすいですね。
              </p>
              <h6>―若手とは思えない責任ある仕事を任されていますね！</h6>
              <p>
                <strong>行：</strong>
                そうですね。でも、今はまだ仕事を完全に一人だけでこなすのは難しいので、先輩と一緒に仕事をしています。ただ、先輩の後ろにくっついて仕事をするのではなく「これどうですか？」と自主的に先輩に提案したり、自分から率先して動くことを心がけています。新人にもしっかりと仕事を任せてくれる環境があるのが、ユーキャンの好きなところです。
              </p>
              <h6>
                ―学びの多い日々ですね。それでは、行さんの1日の流れについて教えてください。
              </h6>
              <p>
                <strong>行：</strong>
                はい。代表的な1日のスケジュールをご紹介します。
              </p>
              <blockquote>
                <cite>9:30</cite>
                <p>
                  フレックス制で、自分のライフスタイルに合わせた時間に出社。
                </p>
              </blockquote>
              <figure>
                <Image
                  src="/images/contents/post01_img02.jpg"
                  width={724}
                  height={483}
                  alt=""
                />
                <figcaption>
                  写真のキャプションが入る場合はこちらに入ります。
                </figcaption>
              </figure>
              <p>
                <strong>行：</strong>
                私の場合は最近9時半～10時くらいに出社しています。夕方に予定があって早く帰る日は朝早く出社することもあります。
              </p>
              <p>
                ・メールチェック印刷会社さんからの校正チェックのメールや、広告代理店さんからの新しい広告媒体の提案メールなどに目を通して返信していきます。また、私は全部で150近くあるユーキャンの講座のうち10講座の担当になっているので、社内の別の部署から自分の担当講座に関するお問い合わせのメールがくることもあります。
              </p>
              <blockquote>
                <cite>10:30</cite>
                <p>成績の分析は次に繋がる重要な仕事。</p>
              </blockquote>
              <p>
                ・成績の更新、分析毎日、通販同送の成績表を更新します。何件の資料請求があって、そのうち何件オーダーがあったのかチェックして通販サイト別に記録。資料請求数やオーダー数を通販サイト別に見ていき、成績をチェック。基本的には通販サイトがシニア向けの場合はシニア向けの講座を、看護師さん向けの場合は看護・介護系の講座のチラシを入れるといったセオリーはありますが、分析結果を蓄積していき、きちんと結果を見ながら次回の媒体選定の検討要素にしていきます。
              </p>
              <p>
                ・教材切れのチェック注文が入った講座の教材が倉庫になくてすぐに送れないといった事態に陥らないように、他部署とも連携してダブルチェック。自分の担当講座の教材切れの報告がないかを確認し、あればすぐに対応できるようにしています。
              </p>
              <h6>—仕事をするうえで心がけていることはありますか？</h6>
              <p>
                <strong>行：</strong>
                私の講座の教材切れに先輩が気付いてくださったことがあって、自分の管轄以外のところでも色々なことに気付けるようになりたいと思いました。先輩のような視野の広い人になれるよう、意識しています。
              </p>
              <figure>
                <Image
                  src="/images/contents/post01_img03.jpg"
                  width={724}
                  height={483}
                  alt=""
                />
              </figure>
              <blockquote>
                <cite>12:00</cite>
                <p>ランチタイムは仲の良い社員で集まって気分転換。</p>
              </blockquote>
              <p>
                ランチはその日の気分で、散歩がてら外食したり、社内の休憩室で食べたり。仲のいい社員で集まって大好きな韓国アイドルの話などで盛り上がります！
              </p>
              <blockquote>
                <cite>13:00</cite>
                <p>分析結果を持ち寄り、今後の展開を決定。</p>
              </blockquote>
              <p>
                午後は打ち合わせが入ることが多いです。この日は、部内の通販同送の担当3名で1時間程度の打ち合わせ。午前中に作成した通販サイト別の成績表を提示し、独自の分析結果に基づいた今後の通販同送の展開について話しました。そして、この媒体ではこのくらいの規模感で展開するといった、来年の通販同送の見込みを出していきます。予算編成については、まだ経験不足なので先輩から助言をいただきながら試算します。
              </p>
              <blockquote>
                <cite>15:00</cite>
                <p>上司との1対1の打ち合わせ</p>
              </blockquote>
              <p>
                上司との打ち合わせでは主に、今後の通販同送の規模感や媒体、新規制作のDMの方向性などの話をしています。この日はDMの打ち合わせです。事前に教育係の先輩に見ていただいたものを上司に共有。上司との打ち合わせは1対1が多いですが、緊張の瞬間というより、いろいろ教えていただく時間というイメージですね。褒めていただくこともありますよ（笑）
              </p>
              <figure>
                <Image
                  src="/images/contents/post01_img04.jpg"
                  width={724}
                  height={483}
                  alt=""
                />
              </figure>
              <blockquote>
                <cite>16:00</cite>
                <p>先輩に相談し、試行錯誤しながらラフを作成。</p>
              </blockquote>
              <p>
                会議での意見を踏まえながら、DMのラフを作成します。すでに結果が出ている似た講座のひな型を参考にすることもあれば、開発担当の方が作った概要を見て研究したり、直接質問しにいったりして独自の切り口を見つけることもあります。
              </p>
              <h6>
                ―打ち合わせや制作作業を通して気を付けていることはありますか？
              </h6>
              <p>
                <strong>行：</strong>
                一番意識しているのはとにかく途中でも先輩、上司に相談することです。仕事が完了する前に方向性を確認したり、分からないことがあれば途中で聞くようにしています。大きな仕事の場合は、ここまでできたら報告するので確認してくださいと先輩に事前に伝えたり工夫します。また、ノープランで相談すると先輩の時間を多く奪ってしまうので、自分の考えをいくつか用意して相談をするようにしています。
              </p>
              <blockquote>
                <cite>18:30</cite>
                <p>
                  帰宅時間は自分で決める。だから、仕事もプライベートも充実する。
                </p>
              </blockquote>
              <p>
                打ち合わせをこなし、DMのラフを描いていたら1日があっという間に過ぎていきます。フレックス制なので、帰りの時間も朝の出社時間に合わせて変動します。早く出社して早く帰れば、平日でも好きなアーティストのコンサートにいけるのはうれしいですね。フレックスを存分に活用して仕事もプライベートも充実した日々を送っています。
              </p>
              <figure>
                <Image
                  src="/images/contents/post01_img05.jpg"
                  width={724}
                  height={483}
                  alt=""
                />
              </figure>
              <h2>いつかは、まったく新しい媒体を０ベースで提案してみたい。</h2>
              <h6>
                ―先輩、上司との良好な関係性を感じる1日でしたね。行さんにとって、仕事の一番のやりがいは何ですか？
              </h6>
              <p>
                <strong>行：</strong>
                自分が作ったラフがDMなどの形になって、お客様のもとに届いているんだと思うとやりがいを感じます。今頃、私のつくったものがお客様の家のポストに入ってるんだろうなとか、通販サイトの荷物に入っているんだろうなとか、つい想像してしまいますね。
              </p>
              <h6>
                ――ありがとうございます。最後に、行さんの今後の目標を教えてください。
              </h6>
              <p>
                <strong>行：</strong>
                いずれはDMや通販同送とは別の新しい媒体の提案をしてみたいと思っています。DMも通販同送も、先人が開拓してきた媒体です。それでも、十分にやりがいを感じていますが、自分が0から開拓した媒体であれば、よりやりがいを感じやすいのではないかと思うのです。そのためにも、まずは他部署の方や外部の協力会社の方とのコミュニケーションを増やし、もっともっと視野を広げていきたいですね。
              </p>
              <ul className="contents-column__tags">
                <li>
                  <a href="#">教育事業</a>
                </li>
                <li>
                  <a href="#">マーケティング</a>
                </li>
                <li>
                  <a href="#">DM</a>
                </li>
                <li>
                  <a href="#">OJT</a>
                </li>
              </ul>
            </article>
            <div className="contents-related">
              <div className="contents-related__inner">
                <h3 className="contents-related__title">関連記事</h3>
                <div className="contents-related__list">
                  <div className="contents-related__item">
                    <a href="#" className="contents-related__item__inner">
                      <dl>
                        <dt>
                          <Image
                            src="/images/contents/related_img01.jpg"
                            width={103}
                            height={68}
                            alt=""
                            className="img-fit"
                          />
                        </dt>
                        <dd>
                          活動方針は自由！個性豊かなユーキャンの部活を紹介します。
                        </dd>
                      </dl>
                    </a>
                  </div>
                  <div className="contents-related__item">
                    <a href="#" className="contents-related__item__inner">
                      <dl>
                        <dt>
                          <Image
                            src="/images/contents/related_img02.jpg"
                            width={103}
                            height={68}
                            alt=""
                            className="img-fit"
                          />
                        </dt>
                        <dd>
                          またまた発表！これが私の手がけたベストヒット広告トップ5
                        </dd>
                      </dl>
                    </a>
                  </div>
                  <div className="contents-related__item">
                    <a href="#" className="contents-related__item__inner">
                      <dl>
                        <dt>
                          <Image
                            src="/images/contents/related_img03.jpg"
                            width={103}
                            height={68}
                            alt=""
                            className="img-fit"
                          />
                        </dt>
                        <dd>
                          学び出版部ってどんなとこ？ベテラン編集社員がお答えします。
                        </dd>
                      </dl>
                    </a>
                  </div>
                  <div className="contents-related__item">
                    <a href="#" className="contents-related__item__inner">
                      <dl>
                        <dt>
                          <Image
                            src="/images/contents/related_img04.jpg"
                            width={103}
                            height={68}
                            alt=""
                            className="img-fit"
                          />
                        </dt>
                        <dd>
                          ユーキャンは、膨大なマーケティングデータをどう活用しているのか？その裏側を公開します！
                        </dd>
                      </dl>
                    </a>
                  </div>
                  <div className="contents-related__item">
                    <a href="#" className="contents-related__item__inner">
                      <dl>
                        <dt>
                          <Image
                            src="/images/contents/related_img05.jpg"
                            width={103}
                            height={68}
                            alt=""
                            className="img-fit"
                          />
                        </dt>
                        <dd>
                          2年目社員がセレクト！大学生にオススメしたいユーキャンの通信講座。
                        </dd>
                      </dl>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

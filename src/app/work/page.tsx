import React from "react";
import SubHeader from "@/app/ui/sub-header";

export default function Page() {
  return (
    <>
      <SubHeader h1Text="WORK" pText="仕事内容" />

      <div className="sub-desc">
        <div className="inner">
          <div className="sub-desc__inner">
            <h3 className="sub-desc__title">チャレンジの大きさはもちろん、</h3>
            <h2 className="sub-desc__headline is-show">
              <span className="u-hl">キャリアの多様さ</span>も自慢です。
            </h2>
            <div className="sub-desc__copy">
              <p>
                ユーキャンには大きく分けて「営業企画」「開発」「指導」「管理」の4領域の仕事があります。
                入社後はまず事業の軸を学ぶべく、各種広告制作を担当する「営業企画」に配属されますが、ジョブ・ローテーション制度やキャリア・チャレンジ制度を利用して、自分が希望するキャリアを築いていくことができます。
              </p>
            </div>
            <ul className="work-list">
              <li>
                <a href="#work-anc01" className="item">
                  <div className="item-inner">
                    <div className="num">01</div>
                    <p className="copy">広告戦略を担う</p>
                    <p className="lead">営業企画</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#work-anc02" className="item">
                  <div className="item-inner">
                    <div className="num">02</div>
                    <p className="copy">
                      新講座や
                      <br />
                      新商品を生み出す
                    </p>
                    <p className="lead">開発</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#work-anc03" className="item">
                  <div className="item-inner">
                    <div className="num">03</div>
                    <p className="copy">
                      受講生の
                      <br />
                      学ぶ意欲を支える
                    </p>
                    <p className="lead">指導</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#work-anc04" className="item">
                  <div className="item-inner">
                    <div className="num">04</div>
                    <p className="copy">
                      企業活動を
                      <br />
                      後方で支援する
                    </p>
                    <p className="lead">管理</p>
                  </div>
                </a>
              </li>
            </ul>
            <div className="sub-desc__copy">
              <p>
                これら4領域の中にもそれぞれ様々な仕事が存在し、キャリア・チャレンジ制度を利用してのジョブチェンジも可能。あなたの「好き」や「得意」を活かせるフィールドがきっとあるはずです。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contents-main">
        <div className="work-info">
          <div className="inner">
            <div id="work-anc01" className="work-info__unit">
              <div className="work-info__unit__inner">
                <h2 className="work-info__headline">
                  <span className="num">01</span>
                  <span className="txt">営業企画</span>
                </h2>
                <div className="work-info__body">
                  <div className="work-info__inner">
                    <h3 className="work-info__title">
                      扱う商品も広告チャネルも多種多様。
                      <br />
                      きっと、一生飽きることは
                      <br className="sp" />
                      ありません。
                    </h3>
                    <p className="work-info__copy">
                      現在、教育事業のメインターゲットはF1層（20歳～34歳の女性）。一方で、通信販売事業のメインターゲットはM3層（50代以上の男性）。扱う講座や商品によってターゲットの属性も志向も変わってきます。また、新聞、折込チラシ、DM、ウェブ広告等、広告チャネルが変われば広告の目的から表現手法も変える必要がある。新卒総合職はまず、この営業企画部門に配属され、お客様のニーズや事業の軸である“ダイレクトマーケティング”の仕組みを学びます。
                    </p>
                    <div className="work-info-flow">
                      <h4 className="work-info-flow__title">営業企画の仕事</h4>
                      <div className="work-info-flow__list">
                        <dl>
                          <dt>
                            <span>1</span>
                          </dt>
                          <dd>
                            <h5>企画立案</h5>
                            <p>
                              既存原稿分析／ターゲット（顧客）分析／コンセプト立案
                            </p>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>2</span>
                          </dt>
                          <dd>
                            <h5>
                              コピー作成・
                              <br className="sp" />
                              デザイン検討
                            </h5>
                            <p>コピーライティング／デザインラフ作成</p>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>3</span>
                          </dt>
                          <dd>
                            <h5>デザイン依頼</h5>
                            <p>デザイナーへの発注／原稿のブラッシュアップ</p>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>4</span>
                          </dt>
                          <dd>
                            <h5>
                              媒体掲載・
                              <br className="sp" />
                              ダイレクトメール発送
                            </h5>
                            <p>広告代理店・印刷会社への入稿／校正</p>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>5</span>
                          </dt>
                          <dd>
                            <h5>計測</h5>
                            <p>自社統計システムで反応率を計測</p>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>6</span>
                          </dt>
                          <dd>
                            <h5>分析・共有</h5>
                            <p>
                              反響分析／得られたノウハウを社内システムに蓄積・共有
                            </p>
                          </dd>
                        </dl>
                      </div>
                      <div className="work-info-flow__fot">
                        また次の企画立案へ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="work-anc02" className="work-info__unit">
              <div className="work-info__unit__inner">
                <h2 className="work-info__headline">
                  <span className="num">02</span>
                  <span className="txt">開発</span>
                </h2>
                <div className="work-info__body">
                  <div className="work-info__inner">
                    <h3 className="work-info__title">
                      その道の専門家と協力しながら、
                      <br />
                      価値ある講座・商品を開発します。
                    </h3>
                    <h4 className="work-info__lead">市場分析</h4>
                    <p className="work-info__copy">
                      新しい企画は情報収集から始まります。常に世の中の動きやトレンドにアンテナを張り「いま求められているものは何か」を分析。基本的に、自らが企画会議で提案した講座・商品の開発を担当します。
                    </p>
                    <h4 className="work-info__lead">講座・商品開発</h4>
                    <p className="work-info__copy">
                      講座開発においては、必要なテキストや備品など、様々なツールを制作。スタッフの選定、教材著者との交渉や連携、テキストの編集、写真撮影やイラストなどのディレクションを一貫して行います。通販商品の開発では、商品の仕入れやカスタマイズを担当。様々な企業と協力しながらユーキャンのターゲットニーズにマッチした、オリジナル商品をつくっていきます。
                    </p>
                    <h4 className="work-info__lead">営業企画部門との連携</h4>
                    <p className="work-info__copy">
                      「この講座・商品はどのターゲットに売れそうか？」「追加でどんな機能・サービスが必要か」、広告を担当する営業企画部門の意見もヒアリングしながら開発を進めます。講座が完成したらマスメディア、DM、ウェブそれぞれの広告担当を集めオリエンテーションを実施。開発担当自ら、講座・商品の魅力を広告担当に伝えます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="work-anc03" className="work-info__unit">
              <div className="work-info__unit__inner">
                <h2 className="work-info__headline">
                  <span className="num">03</span>
                  <span className="txt">指導</span>
                </h2>
                <div className="work-info__body">
                  <div className="work-info__inner">
                    <h3 className="work-info__title">
                      受講生と講師をつなぎ、
                      <br />
                      一人ひとりの意欲向上と
                      <br className="sp" />
                      学びの継続を支援します。
                    </h3>
                    <h4 className="work-info__lead">課題管理</h4>
                    <p className="work-info__copy">
                      資格対策講座の解答添削をはじめ、書道・絵画・編み物など様々な趣味講座の提出課題も管理。丁寧な添削指導やアフターフォローによって、受講生のモチベーションを高めます。
                    </p>
                    <h4 className="work-info__lead">教材改善</h4>
                    <p className="work-info__copy">
                      法律の変更を踏まえた資格講座教材の改訂、受講生からの質問や要望の指導への反映を行い、教材・指導のサービスの質を高めています。
                    </p>
                    <h4 className="work-info__lead">スクーリングの開催</h4>
                    <p className="work-info__copy">
                      資格対策講座のスクーリングをはじめとした学習支援の付加サービスも展開。また講座ごとに、受講生に向けた定期刊行物の発行なども行っています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="work-anc04" className="work-info__unit">
              <div className="work-info__unit__inner">
                <h2 className="work-info__headline">
                  <span className="num">04</span>
                  <span className="txt">管理</span>
                </h2>
                <div className="work-info__body">
                  <div className="work-info__inner">
                    <h3 className="work-info__title">
                      あらゆる業務をサポートし、
                      <br />
                      ユーキャンの
                      <br className="sp" />
                      企業活動全体を支えます。
                    </h3>
                    <h4 className="work-info__lead">お客様対応・情報管理</h4>
                    <p className="work-info__copy">
                      お客様からのお問い合わせ対応、お客様情報の入力や処理、各種分析資料の作成などを担当。お客様のデータはユーキャンの大切な財産。商品・サービス・広告の改善へとつなげていきます。
                    </p>
                    <h4 className="work-info__lead">仕入れ・梱包・発送</h4>
                    <p className="work-info__copy">
                      印刷物の手配や商品仕入、発注を行います。また教材・商品の梱包やDMの封入を行い、発送するための別法人も設けています。
                    </p>
                    <h4 className="work-info__lead">総務・経理・人事</h4>
                    <p className="work-info__copy">
                      管理部門では、「総務」「経理」「広報」「人事」といった企業活動の根幹を支える業務を、各部門が専門で担っています。
                    </p>
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

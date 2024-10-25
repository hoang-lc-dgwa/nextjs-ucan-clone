import React from "react";
import WorkFlowList from "./flow";

interface Info {
  number: string;
  h2Text: string;
  h3Text: string;
  contentText?: { h4Text?: string; pText?: string }[];
  flow?: React.ReactNode;
}

const info: Info[] = [
  {
    number: "01",
    h2Text: "営業企画",
    h3Text:
      "扱う商品も広告チャネルも多種多様。<br>きっと、一生飽きることはありません。",
    contentText: [
      {
        pText:
          "現在、教育事業のメインターゲットはF1層（20歳～34歳の女性）。一方で、通信販売事業のメインターゲットはM3層（50代以上の男性）。扱う講座や商品によってターゲットの属性も志向も変わってきます。また、新聞、折込チラシ、DM、ウェブ広告等、広告チャネルが変われば広告の目的から表現手法も変える必要がある。新卒総合職はまず、この営業企画部門に配属され、お客様のニーズや事業の軸である“ダイレクトマーケティング”の仕組みを学びます。",
      },
    ],
    flow: true,
  },
  {
    number: "02",
    h2Text: "開発",
    h3Text:
      "その道の専門家と協力しながら、<br>価値ある講座・商品を開発します。",
    contentText: [
      {
        h4Text: "市場分析",
        pText:
          "新しい企画は情報収集から始まります。常に世の中の動きやトレンドにアンテナを張り「いま求められているものは何か」を分析。基本的に、自らが企画会議で提案した講座・商品の開発を担当します。",
      },
      {
        h4Text: "講座・商品開発",
        pText:
          "講座開発においては、必要なテキストや備品など、様々なツールを制作。スタッフの選定、教材著者との交渉や連携、テキストの編集、写真撮影やイラストなどのディレクションを一貫して行います。通販商品の開発では、商品の仕入れやカスタマイズを担当。様々な企業と協力しながらユーキャンのターゲットニーズにマッチした、オリジナル商品をつくっていきます。",
      },
      {
        h4Text: "営業企画部門との連携",
        pText:
          "「この講座・商品はどのターゲットに売れそうか？」「追加でどんな機能・サービスが必要か」、広告を担当する営業企画部門の意見もヒアリングしながら開発を進めます。講座が完成したらマスメディア、DM、ウェブそれぞれの広告担当を集めオリエンテーションを実施。開発担当自ら、講座・商品の魅力を広告担当に伝えます。",
      },
    ],
  },
  {
    number: "03",
    h2Text: "指導",
    h3Text:
      "受講生と講師をつなぎ、<br>一人ひとりの意欲向上と学びの継続を支援します。",
    contentText: [
      {
        h4Text: "課題管理",
        pText:
          "資格対策講座の解答添削をはじめ、書道・絵画・編み物など様々な趣味講座の提出課題も管理。丁寧な添削指導やアフターフォローによって、受講生のモチベーションを高めます。",
      },
      {
        h4Text: "教材改善",
        pText:
          "法律の変更を踏まえた資格講座教材の改訂、受講生からの質問や要望の指導への反映を行い、教材・指導のサービスの質を高めています。",
      },
      {
        h4Text: "スクーリングの開催",
        pText:
          "資格対策講座のスクーリングをはじめとした学習支援の付加サービスも展開。また講座ごとに、受講生に向けた定期刊行物の発行なども行っています。",
      },
    ],
  },
  {
    number: "04",
    h2Text: "管理",
    h3Text:
      "あらゆる業務をサポートし、<br>ユーキャンの 企業活動全体を支えます。",
    contentText: [
      {
        h4Text: "お客様対応・情報管理",
        pText:
          "お客様からのお問い合わせ対応、お客様情報の入力や処理、各種分析資料の作成などを担当。お客様のデータはユーキャンの大切な財産。商品・サービス・広告の改善へとつなげていきます。",
      },
      {
        h4Text: "仕入れ・梱包・発送",
        pText:
          "印刷物の手配や商品仕入、発注を行います。また教材・商品の梱包やDMの封入を行い、発送するための別法人も設けています。",
      },
      {
        h4Text: "総務・経理・人事",
        pText:
          "管理部門では、「総務」「経理」「広報」「人事」といった企業活動の根幹を支える業務を、各部門が専門で担っています。",
      },
    ],
  },
];

const insertBr = (text: string) => {
  return text.split(/<br\/?>/gi).map((part, index, array) => (
    <React.Fragment key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function WorkInfoList() {
  return (
    <>
      {info.map((item, index) => (
        <div
          key={index}
          id={`work-anc${item.number}`}
          className="work-info__unit"
        >
          <div className="work-info__unit__inner">
            <h2 className="work-info__headline">
              <span className="num">{item.number}</span>
              <span className="txt">{item.h2Text}</span>
            </h2>
            <div className="work-info__body">
              <div className="work-info__inner">
                <h3 className="work-info__title">{insertBr(item.h3Text)}</h3>
                {item.contentText &&
                  item.contentText.map((content, idx) => (
                    <div key={idx}>
                      {content.h4Text && (
                        <h4 className="work-info__lead">{content.h4Text}</h4>
                      )}
                      {content.pText && (
                        <p className="work-info__copy">{content.pText}</p>
                      )}
                    </div>
                  ))}
                {item.flow && <WorkFlowList />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

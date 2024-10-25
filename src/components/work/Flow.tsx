import React from "react";

interface Flow {
  title: string;
  list: {
    number: string;
    subTitle: string;
    text: string;
  }[];
  fot: string;
}

const flow: Flow = {
  title: "営業企画の仕事",
  list: [
    {
      number: "1",
      subTitle: "企画立案",
      text: "既存原稿分析／ターゲット（顧客）分析／コンセプト立案",
    },
    {
      number: "2",
      subTitle: 'コピー作成・<br class="sp">デザイン検討',
      text: "コピーライティング／デザインラフ作成",
    },
    {
      number: "3",
      subTitle: "デザイン依頼",
      text: "デザイナーへの発注／原稿のブラッシュアップ",
    },
    {
      number: "4",
      subTitle: '媒体掲載・<br class="sp">ダイレクトメール発送',
      text: "広告代理店・印刷会社への入稿／校正",
    },
    {
      number: "5",
      subTitle: "計測",
      text: "自社統計システムで反応率を計測",
    },
    {
      number: "6",
      subTitle: "分析・共有",
      text: "反響分析／得られたノウハウを社内システムに蓄積・共有",
    },
  ],
  fot: "また次の企画立案へ",
};

const insertBr = (text: string) => {
  return text.split(/<br\s*class="sp"\s*\/?>/gi).map((part, index, array) => (
    <React.Fragment key={index}>
      {part}
      {index < array.length - 1 && <br className="sp" />}
    </React.Fragment>
  ));
};

export default function () {
  return (
    <div className="work-info-flow">
      <h4 className="work-info-flow__title">{flow.title}</h4>
      <div className="work-info-flow__list">
        {flow.list.map((item) => (
          <dl key={item.number}>
            <dt>
              <span>{item.number}</span>
            </dt>
            <dd>
              <h5>{insertBr(item.subTitle)}</h5>
              <p>{item.text}</p>
            </dd>
          </dl>
        ))}
      </div>
      <div className="work-info-flow__fot">{flow.fot}</div>
    </div>
  );
}

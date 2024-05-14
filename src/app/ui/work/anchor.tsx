import React, { FC } from "react";

interface Work {
  number: string;
  copy: string;
  lead: string;
}

const works: Work[] = [
  {
    number: "01",
    copy: "広告戦略を担う",
    lead: "営業企画",
  },
  {
    number: "02",
    copy: "新講座や\n新商品を生み出す",
    lead: "開発",
  },
  {
    number: "03",
    copy: "受講生の\n学ぶ意欲を支える",
    lead: "指導",
  },
  {
    number: "04",
    copy: "企業活動を\n後方で支援する",
    lead: "管理",
  },
];

const WorkList: FC = () => {
  return (
    <ul className="work-list">
      {works.map((work, index) => (
        <li key={index}>
          <a href={`#work-anc${work.number}`} className="item">
            <div className="item-inner">
              <div className="num">{work.number}</div>
              <p className="copy">
                {work.copy.split("\n").map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </p>
              <p className="lead">{work.lead}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default WorkList;

"use client";

import { useEffect, useRef } from "react";
import InputSearch from "@/components/InputSearch";

interface Tags {
  [category: string]: string[];
}

const keywords: string[] = [
  "マーケティング",
  "EdTech",
  "新規事業",
  "福利厚生",
  "OJT制度",
  "研修",
  "働き方",
];

const tags: Tags = {
  挑戦のリアル: [
    "マーケティング",
    "教育事業部",
    "管理部門",
    "通信販売事業部",
    "ココチモ事業部",
    "開発",
    "学び出版部",
    "講座指導部",
    "人事",
    "EdTech（エドテック）",
    "DM",
    "カタログ",
    "アパレル",
    "クリエイティブ",
    "お客様サービスセンター",
    "生活雑貨",
    "ウェブ",
    "通信教育",
    "生活雑貨",
    "ユーキャングループ",
    "インタビュー",
  ],
  働く環境: [
    "オフィス紹介",
    "働くパパ",
    "働くママ",
    "働き方",
    "時短勤務",
    "制度",
    "文化",
    "日常",
    "趣味",
    "部活紹介",
  ],
  キャリア: ["OJT", "キャリア", "ジョブチェンジ", "新人研修"],
  採用情報: [
    "求める人物像",
    "内定者",
    "入社式",
    "説明会",
    "就活おすすめ情報",
    "1day仕事体験",
  ],
  特集記事: [
    "トップメッセージ",
    "座談会",
    "お知らせ",
    "趣味",
    "部活紹介",
    "対談",
    "歴史",
    "社長",
    "若手",
    "同期",
  ],
};

export default function Sidebar() {
  const sidebarRef = useRef<HTMLElement | null>(null);

  const toggleAccordion = (
    content: HTMLElement,
    btn: HTMLElement,
    btnTxt: HTMLElement
  ) => {
    const isOpen = content.classList.contains("is-open");
    if (!isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.classList.add("is-open");
      btn.classList.add("is-open");
      btnTxt.textContent = "- 閉じる";
    } else {
      content.style.maxHeight = "39rem";
      content.classList.remove("is-open");
      btn.classList.remove("is-open");
      btnTxt.textContent = "+ もっと見る";
    }
  };

  useEffect(() => {
    const sidebar = document.querySelector(".contents-sidebar") as HTMLElement;
    sidebarRef.current = sidebar;

    const btn = sidebar.querySelector(".keyword-more") as HTMLElement;
    const btnTxt = sidebar.querySelector(".keyword-more__txt") as HTMLElement;
    const content = sidebar.querySelector(
      ".contents-sidebar__inner"
    ) as HTMLElement;

    const handleClick = () => toggleAccordion(content, btn, btnTxt);

    btn?.addEventListener("click", handleClick);

    return () => {
      btn?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="contents-sidebar">
      <h2 className="contents-sidebar__headline">
        <span className="txt-ja">キーワードから探す</span>
        <span className="txt-en">KEYWORDS</span>
      </h2>
      <div className="contents-sidebar__inner">
        <div className="contents-search pc">
          <div className="contents-search__inner">
            <InputSearch />
          </div>
          <div className="search-keywords">
            <h3 className="search-keywords__ttl">よく検索されるワード</h3>
            <ul className="search-keywords__list">
              {keywords.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contents-tags">
          {Object.entries(tags).map(([tagCategory, tagList], i) => (
            <div key={i} className="contents-tags__item">
              <h3 className="contents-tags__headline">{tagCategory}</h3>
              <ul className="contents-tags__list">
                {tagList.map((tag, tagIndex) => (
                  <li key={tagIndex}>
                    <a href="#">{tag}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="keyword-more sp">
        <span className="keyword-more__txt">+ もっと見る</span>
      </div>
    </div>
  );
}

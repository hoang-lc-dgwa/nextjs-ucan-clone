import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="contents-sidebar">
      <h2 className="contents-sidebar__headline">
        <span className="txt-ja">キーワードから探す</span>
        <span className="txt-en">KEYWORDS</span>
      </h2>
      <div className="contents-sidebar__inner">
        <div className="contents-search pc">
          <div className="contents-search__inner">
            <form className="search-form" action="#">
              <div className="search-form__inner">
                <input
                  type="text"
                  className="input-text"
                  placeholder="キーワードから探す"
                />
                <button type="submit" className="btn-submit">
                  <Image
                    src="/images/ico_search.svg"
                    width={19}
                    height={20}
                    alt="SEARCH"
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="search-keywords">
            <h3 className="search-keywords__ttl">よく検索されるワード</h3>
            <ul className="search-keywords__list">
              <li>
                <a href="#">マーケティング</a>
              </li>
              <li>
                <a href="#">EdTech</a>
              </li>
              <li>
                <a href="#">新規事業</a>
              </li>
              <li>
                <a href="#">福利厚生</a>
              </li>
              <li>
                <a href="#">OJT制度</a>
              </li>
              <li>
                <a href="#">研修</a>
              </li>
              <li>
                <a href="#">働き方</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contents-tags">
          <div className="contents-tags__item">
            <h3 className="contents-tags__headline">挑戦のリアル</h3>
            <ul className="contents-tags__list">
              <li>
                <a href="#">マーケティング</a>
              </li>
              <li>
                <a href="#">教育事業部</a>
              </li>
              <li>
                <a href="#">管理部門</a>
              </li>
              <li>
                <a href="#">通信販売事業部</a>
              </li>
              <li>
                <a href="#">ココチモ事業部</a>
              </li>
              <li>
                <a href="#">開発</a>
              </li>
              <li>
                <a href="#">学び出版部</a>
              </li>
              <li>
                <a href="#">講座指導部</a>
              </li>
              <li>
                <a href="#">人事</a>
              </li>
              <li>
                <a href="#">EdTech（エドテック）</a>
              </li>
              <li>
                <a href="#">DM</a>
              </li>
              <li>
                <a href="#">カタログ</a>
              </li>
              <li>
                <a href="#">アパレル</a>
              </li>
              <li>
                <a href="#">クリエイティブ</a>
              </li>
              <li>
                <a href="#">お客様サービスセンター </a>
              </li>
              <li>
                <a href="#">生活雑貨</a>
              </li>
              <li>
                <a href="#">ウェブ</a>
              </li>
              <li>
                <a href="#">通信教育</a>
              </li>
              <li>
                <a href="#">生活雑貨</a>
              </li>
              <li>
                <a href="#">ユーキャングループ</a>
              </li>
              <li>
                <a href="#">インタビュー</a>
              </li>
            </ul>
          </div>
          <div className="contents-tags__item">
            <h3 className="contents-tags__headline">働く環境</h3>
            <ul className="contents-tags__list">
              <li>
                <a href="#">オフィス紹介</a>
              </li>
              <li>
                <a href="#">働くパパ</a>
              </li>
              <li>
                <a href="#">働くママ</a>
              </li>
              <li>
                <a href="#">働き方 </a>
              </li>
              <li>
                <a href="#">時短勤務</a>
              </li>
              <li>
                <a href="#">制度</a>
              </li>
              <li>
                <a href="#">文化</a>
              </li>
              <li>
                <a href="#">日常</a>
              </li>
              <li>
                <a href="#">趣味</a>
              </li>
              <li>
                <a href="#">部活紹介</a>
              </li>
            </ul>
          </div>
          <div className="contents-tags__item">
            <h3 className="contents-tags__headline">キャリア</h3>
            <ul className="contents-tags__list">
              <li>
                <a href="#">OJT</a>
              </li>
              <li>
                <a href="#">キャリア</a>
              </li>
              <li>
                <a href="#">ジョブチェンジ</a>
              </li>
              <li>
                <a href="#">新人研修</a>
              </li>
            </ul>
          </div>
          <div className="contents-tags__item">
            <h3 className="contents-tags__headline">採用情報</h3>
            <ul className="contents-tags__list">
              <li>
                <a href="#">求める人物像</a>
              </li>
              <li>
                <a href="#">内定者</a>
              </li>
              <li>
                <a href="#">入社式</a>
              </li>
              <li>
                <a href="#">説明会</a>
              </li>
              <li>
                <a href="#">就活おすすめ情報</a>
              </li>
              <li>
                <a href="#">1day仕事体験</a>
              </li>
            </ul>
          </div>
          <div className="contents-tags__item">
            <h3 className="contents-tags__headline">特集記事</h3>
            <ul className="contents-tags__list">
              <li>
                <a href="#">トップメッセージ</a>
              </li>
              <li>
                <a href="#">座談会</a>
              </li>
              <li>
                <a href="#">お知らせ</a>
              </li>
              <li>
                <a href="#">趣味</a>
              </li>
              <li>
                <a href="#">部活紹介</a>
              </li>
              <li>
                <a href="#">対談</a>
              </li>
              <li>
                <a href="#">歴史</a>
              </li>
              <li>
                <a href="#">社長</a>
              </li>
              <li>
                <a href="#">若手 </a>
              </li>
              <li>
                <a href="#">同期</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="keyword-more sp">
        <span className="keyword-more__txt">+ もっと見る</span>
      </div>
    </div>
  );
};

export default Sidebar;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/images/logo_header.svg"
                width={270}
                height={38}
                alt="FEEL U-CAN"
              />
            </Link>
          </div>
          <div className="header-hbg sp">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header-wrap">
            <div className="header-wrap__inner">
              <div className="header-logo-sp sp">
                <Link href="/">FEEL U-CAN</Link>
              </div>
              <div className="header-search">
                <div className="header-search__inner">
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
                  <div className="search-keywords sp">
                    <h3 className="search-keywords__ttl">
                      よく検索されるワード
                    </h3>
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
              </div>
              <div className="header-nav">
                <nav className="header-nav__menu">
                  <ul>
                    <li>
                      <Link href="/business/">
                        <span className="txt-en">BUSINESS</span>
                        <span className="txt-ja">事業内容</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/work/">
                        <span className="txt-en">WORK</span>
                        <span className="txt-ja">仕事内容</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contents/">
                        <span className="txt-en">CONTENTS</span>
                        <span className="txt-ja">記事一覧</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/recruit/">
                        <span className="txt-en">RECRUIT</span>
                        <span className="txt-ja">募集要項</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-nav__btn">
                  <a
                    href="https://job.mynavi.jp/25/pc/search/corp72921/outline.html"
                    target="_blank"
                    className="c-btn"
                  >
                    <span>ENTRY</span>
                  </a>
                </div>
              </div>
              <div className="header-links sp">
                <ul>
                  <li>
                    <a
                      href="https://www.u-can.co.jp/recruit/intern/"
                      target="_blank"
                    >
                      インターンシップ特設サイト
                    </a>
                  </li>
                  <li>
                    <a href="https://www.u-can.co.jp/recruit/" target="_blank">
                      採用サイトTOP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

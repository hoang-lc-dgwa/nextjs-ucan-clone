"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Buttons";
import InputSearch from "@/components/InputSearch";
import NavLinks from "@/components/NavLinks";

export default function Header() {
  useEffect(() => {
    const headerHbg = document.querySelector(".header-hbg");
    const header = document.querySelector(".header");
    const logoLink = document.querySelector(".header-logo-sp a");
    const menuLinks = document.querySelectorAll(".header-nav__menu a");

    const toggleMenu = () => {
      header?.classList.toggle("is-open");
      headerHbg?.classList.toggle("is-active");
    };

    const closeMenu = () => {
      header?.classList.remove("is-open");
      headerHbg?.classList.remove("is-active");
    };

    headerHbg?.addEventListener("click", toggleMenu);
    logoLink?.addEventListener("click", closeMenu);
    menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      headerHbg?.removeEventListener("click", toggleMenu);
      logoLink?.removeEventListener("click", closeMenu);
      menuLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

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
                  <InputSearch />
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
                <NavLinks />

                <div className="header-nav__btn">
                  <Button />
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
}

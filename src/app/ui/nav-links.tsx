import Link from "next/link";
import React from "react";

const links = [
  {
    textEn: "BUSINESS",
    textJa: "事業内容",
    href: "/business",
  },
  {
    textEn: "WORK",
    textJa: "仕事内容",
    href: "/work",
  },
  {
    textEn: "CONTENTS",
    textJa: "記事一覧",
    href: "/contents",
  },
  {
    textEn: "RECRUIT",
    textJa: "募集要項",
    href: "/recruit",
  },
];

const NavLinks = () => {
  return (
    <>
      <nav className="header-nav__menu">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>
                  <span className="txt-en">{link.textEn}</span>
                  <span className="txt-ja">{link.textJa}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;

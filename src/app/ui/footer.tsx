import Image from "next/image";
import React from "react";
import Entry from "@/app/ui/entry";

const Footer = () => {
  return (
    <>
      <Entry />

      <footer className="footer">
        <div className="inner">
          <div className="footer-logo">
            <a href="https://www.u-can.co.jp/" target="_blank">
              <Image
                src="/images/logo_footer.svg"
                width={83}
                height={83}
                alt="U-CAN"
              />
            </a>
          </div>
          <p className="footer-desciption">株式会社ユーキャン</p>
          <nav className="footer-links">
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
          </nav>
        </div>
      </footer>
      <p className="pagetop">
        <img src="/images/ico_pagetop.svg" alt="TOP" />
      </p>
    </>
  );
};

export default Footer;

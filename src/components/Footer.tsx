import Entry from "@/components/Entry";
import PageTop from "@/components/PageTop";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Footer() {
  return (
    <>
      <Entry />

      <footer className="footer">
        <div className="inner">
          <div className="footer-logo">
            <a href="https://www.u-can.co.jp/" target="_blank">
              <img src="/images/logo_footer.svg" alt="U-CAN" />
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

      <ThemeSwitch />

      <PageTop />
    </>
  );
}

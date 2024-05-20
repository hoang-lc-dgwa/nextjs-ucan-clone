import React from "react";
import Sidebar from "@/app/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SubHeader2 } from "@/app/ui/sub-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTENTS",
};

export default function Page() {
  return (
    <>
      <SubHeader2 h1Text="CONTENTS" pText="記事一覧" />

      <div className="contents-main">
        <div className="inner">
          <div className="contents__wrap">
            <div className="contents-body">
              <div className="contents-list">
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column01_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">DM</a>
                    </li>
                    <li>
                      <a href="#">OJT</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column02_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        キャリアコース選択制度によって自分らしく働けるようになったって本当？人事部の部長に詳細を聞いてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">キャリア制度</a>
                    </li>
                    <li>
                      <a href="#">キャリアチャレンジ</a>
                    </li>
                    <li>
                      <a href="#">働き方</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column03_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        特ダネスクープ！知られざるユーキャンのCMの制作秘話がついに明らかに！
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">テレビCM</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column01_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">DM</a>
                    </li>
                    <li>
                      <a href="#">OJT</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column02_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        キャリアコース選択制度によって自分らしく働けるようになったって本当？人事部の部長に詳細を聞いてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">キャリア制度</a>
                    </li>
                    <li>
                      <a href="#">キャリアチャレンジ</a>
                    </li>
                    <li>
                      <a href="#">働き方</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column03_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        特ダネスクープ！知られざるユーキャンのCMの制作秘話がついに明らかに！
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">テレビCM</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column01_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">DM</a>
                    </li>
                    <li>
                      <a href="#">OJT</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column02_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        キャリアコース選択制度によって自分らしく働けるようになったって本当？人事部の部長に詳細を聞いてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">キャリア制度</a>
                    </li>
                    <li>
                      <a href="#">キャリアチャレンジ</a>
                    </li>
                    <li>
                      <a href="#">働き方</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column03_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        特ダネスクープ！知られざるユーキャンのCMの制作秘話がついに明らかに！
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">テレビCM</a>
                    </li>
                  </ul>
                </div>
                <div className="contents-column">
                  <Link
                    href="/contents/detail/"
                    className="contents-column__inner"
                  >
                    <div className="contents-column__img">
                      <Image
                        src="/images/contents/column01_img.jpg"
                        width={350}
                        height={234}
                        alt=""
                        className="img-fit"
                      />
                    </div>
                    <div className="contents-column__desc">
                      <p className="contents-column__copy">
                        好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                      </p>
                    </div>
                  </Link>
                  <ul className="contents-column__tags">
                    <li>
                      <a href="#">教育事業</a>
                    </li>
                    <li>
                      <a href="#">マーケティング</a>
                    </li>
                    <li>
                      <a href="#">DM</a>
                    </li>
                    <li>
                      <a href="#">OJT</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pagination">
                <span className="current">1</span>
                <a className="inactive" href="#">
                  2
                </a>
                <a className="inactive" href="#">
                  3
                </a>
                <span className="dots">...</span>
                <a className="inactive" href="#">
                  4
                </a>
                <a className="inactive" href="#">
                  5
                </a>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

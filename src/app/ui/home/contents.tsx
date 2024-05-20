"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Sidebar from "@/app/ui/sidebar";
import { v4 as uuidv4 } from "uuid";

function initializeTabs() {
  const tabs = document.querySelectorAll(".contents-tabs__nav li");
  const contents = document.querySelectorAll(".contents-tabs__content");

  if (tabs && contents) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const activeTab = tab.getAttribute("data-tabs");

        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");

        contents.forEach((content) => {
          content.classList.remove("is-active");
          if (content.id === activeTab) {
            content.classList.add("is-active");
          }
        });
      });
    });
  }
}

const Contents = () => {
  const ids = Array.from({ length: 6 }, () => uuidv4());

  useEffect(() => {
    initializeTabs();
  }, []);

  return (
    <div className="t-contents">
      <div className="inner">
        <div className="contents__wrap">
          <div className="contents-body">
            <div className="contents-tabs">
              <ul className="contents-tabs__nav">
                <li data-tabs="popular-articles" className="is-active">
                  人気記事
                </li>
                <li data-tabs="new-articles">新着記事</li>
              </ul>
              <div
                id="popular-articles"
                className="contents-tabs__content is-active"
              >
                <div className="contents-list">
                  <div className="contents-column">
                    <Link
                      href={`/contents/detail/${ids}`}
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
                      href="/contents/detail/002"
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
                      href="/contents/detail/003"
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
                      href="/contents/detail/004"
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
                      href="/contents/detail/005"
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
                      href="/contents/detail/006"
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
                </div>
                <div className="contents-btn-more">
                  <Link href="/contents/" className="c-btn">
                    <span>一覧を見る</span>
                  </Link>
                </div>
              </div>
              <div id="new-articles" className="contents-tabs__content">
                <div className="contents-list">
                  <div className="contents-column">
                    <Link
                      href="/contents/detail/001"
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
                      href="/contents/detail/004"
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
                      href="/contents/detail/005"
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
                      href="/contents/detail/003"
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
                      href="/contents/detail/006"
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
                      href="/contents/detail/001"
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
                      href="/contents/detail/002"
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
                </div>
                <div className="contents-btn-more">
                  <Link href="/contents/" className="c-btn">
                    <span>一覧を見る</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Contents;

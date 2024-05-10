import Image from "next/image";
import { roboto, raleway } from "@/app/ui/fonts";
import Link from "next/link";
import Sidebar from "@/app/ui/sidebar";

export default function Home() {
  return (
    <>
      {/* <p className={roboto.className}>Roboto</p> */}
      {/* <p className={raleway.className}>Raleway</p> */}

      <div className="t-kv js-fade">
        <div className="t-kv__inner">
          <div className="t-kv__bg">
            <img src="/images/top/kv_bg01.jpg" alt="" className="pc img-fit" />
            <img
              src="/images/top/kv_bg01_sp.jpg"
              alt=""
              className="sp img-fit"
            />
          </div>
          <div className="t-kv__body">
            <div className="t-kv-description">
              <div className="t-kv-description__inner">
                <h1 className="t-kv-description__headline">
                  <span>
                    <img src="/images/top/headline_txt.svg" alt="FEEL U-CAN." />
                  </span>
                </h1>
                <p className="t-kv-description__copy">
                  <span>大きすぎない組織だから挑める、</span>
                  <span>U-CANの挑戦のリアル。</span>
                </p>
              </div>
            </div>
            <div className="t-pickup u-el-delay">
              <div className="t-pickup__inner">
                <h2 className="t-pickup__headline">Pick up</h2>
                <div className="t-pickup__slider swiper">
                  <div className="t-pickup__list swiper-wrapper">
                    <div className="t-pickup__item swiper-slide">
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img01.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          ココチモの服でファッションショーをしてみたら、どの商品も素敵すぎた件。
                        </h3>
                      </a>
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img02.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          中途入社社員の目から見た、新卒にこそ知ってほしいユーキャンの魅力とは？
                        </h3>
                      </a>
                    </div>
                    <div className="t-pickup__item swiper-slide">
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img03.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                        </h3>
                      </a>
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img01.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          ココチモの服でファッションショーをしてみたら、どの商品も素敵すぎた件。
                        </h3>
                      </a>
                    </div>
                    <div className="t-pickup__item swiper-slide">
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img02.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          中途入社社員の目から見た、新卒にこそ知ってほしいユーキャンの魅力とは？
                        </h3>
                      </a>
                      <a href="#" className="t-pickup__item__inner">
                        <div className="t-pickup__img">
                          <img
                            src="/images/top/pickup_img03.jpg"
                            alt=""
                            className="img-fit"
                          />
                        </div>
                        <h3 className="t-pickup__desc">
                          好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="t-kv__arrow u-el-delay">
          <img src="/images/ico_scroll.svg" alt="SCROLL" className="pc" />
          <img src="/images/ico_scroll_gray.svg" alt="SCROLL" className="sp" />
        </div>
      </div>

      <div className="t-about">
        <div className="t-about__bg">
          <div className="inner">
            <div className="t-about__inner">
              <h2 className="t-about__ttl">
                <span className="txt u-hl">「大きな会社に入りたい」</span>
                <span className="txt u-hl">「大きな仕事に挑みたい」</span>
                <span className="txt">あなたがやりたいのはどっち？</span>
              </h2>
              <div className="t-about__copy">
                <p>
                  数万人規模の大企業で、
                  <br className="sp" />
                  １年目が希望する仕事に挑める確率は
                  <br className="sp" />
                  どれだけあるでしょう。
                  <br />
                  責任ある仕事を任せてもらえず、
                  <br className="sp" />
                  歯がゆい想いをしている人もいるかもしれません。
                  <br />
                  <br />
                  一方ユーキャンは社員数500名強の中堅中小企業。
                  <br />
                  <span className="u-hl u-px pr0">
                    長い順番待ちはあり得ない。
                  </span>
                  <br />
                  1年目から広告制作に責任者として携わる。
                  <br />
                  自らのアイデアで億単位の売上を左右する。
                  <br />
                  そんなユーキャンの若手の挑戦のリアル、
                  <br className="sp" />
                  ぜひ見てみてください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column01_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column02_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column03_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column01_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column02_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column03_img.jpg"
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
                    </div>
                  </div>
                  <div className="contents-btn-more js-effect">
                    <a href="/contents/" className="c-btn">
                      <span>一覧を見る</span>
                    </a>
                  </div>
                </div>
                <div id="new-articles" className="contents-tabs__content">
                  <div className="contents-list">
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column02_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column03_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column01_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column02_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column03_img.jpg"
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
                    </div>
                    <div className="contents-column">
                      <Link
                        href="/contents/detail/"
                        className="contents-column__inner"
                      >
                        <div className="contents-column__img">
                          <img
                            src="/images/contents/column01_img.jpg"
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
                    </div>
                  </div>
                  <div className="contents-btn-more js-effect">
                    <a href="/contents/" className="c-btn">
                      <span>一覧を見る</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

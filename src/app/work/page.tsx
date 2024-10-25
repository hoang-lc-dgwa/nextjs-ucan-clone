import { Metadata } from "next";
import SubHeader from "@/components/SubHeader";
import WorkList from "@/components/work/Anchor";
import WorkInfoList from "@/components/work/Info";

export const metadata: Metadata = {
  title: "WORK",
};

export default function Page() {
  return (
    <>
      <SubHeader h1Text="WORK" pText="仕事内容" />

      <div className="sub-desc">
        <div className="inner">
          <div className="sub-desc__inner">
            <h3 className="sub-desc__title">チャレンジの大きさはもちろん、</h3>
            <h2 className="sub-desc__headline is-show">
              <span className="u-hl">キャリアの多様さ</span>も自慢です。
            </h2>
            <div className="sub-desc__copy">
              <p>
                ユーキャンには大きく分けて「営業企画」「開発」「指導」「管理」の4領域の仕事があります。
                入社後はまず事業の軸を学ぶべく、各種広告制作を担当する「営業企画」に配属されますが、ジョブ・ローテーション制度やキャリア・チャレンジ制度を利用して、自分が希望するキャリアを築いていくことができます。
              </p>
            </div>

            <WorkList />

            <div className="sub-desc__copy">
              <p>
                これら4領域の中にもそれぞれ様々な仕事が存在し、キャリア・チャレンジ制度を利用してのジョブチェンジも可能。あなたの「好き」や「得意」を活かせるフィールドがきっとあるはずです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contents-main">
        <div className="work-info">
          <div className="inner">
            <WorkInfoList />
          </div>
        </div>
      </div>
    </>
  );
}

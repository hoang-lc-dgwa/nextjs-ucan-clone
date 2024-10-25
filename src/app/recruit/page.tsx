import { Metadata } from "next";
import RecruitInfo from "@/components/recruit/Info";
import SubHeader from "@/components/SubHeader";

export const metadata: Metadata = {
  title: "RECRUIT",
};

export default function Page() {
  return (
    <>
      <SubHeader h1Text="RECRUIT" pText="募集要項" />

      <div className="contents-main">
        <div className="inner">
          <RecruitInfo />
        </div>
      </div>
    </>
  );
}

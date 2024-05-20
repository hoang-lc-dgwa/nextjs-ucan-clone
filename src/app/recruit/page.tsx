import React from "react";
import SubHeader from "@/app/ui/sub-header";
import RecruitInfo from "@/app/ui/recruit/info";
import { Metadata } from "next";

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

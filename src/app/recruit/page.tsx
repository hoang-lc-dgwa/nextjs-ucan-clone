import React from "react";
import RecruitInfo from "@/app/ui/recruit-info";
import { SubHeader } from "@/app/ui/SubHeader";

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

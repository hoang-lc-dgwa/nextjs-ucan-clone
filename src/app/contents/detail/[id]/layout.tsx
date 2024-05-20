import Sidebar from "@/app/ui/sidebar";
import { SubHeader2 } from "@/app/ui/sub-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader2 h1Text="CONTENTS" pText="記事一覧" />
      <div className="contents-main">
        <div className="inner">
          <div className="contents__wrap">
            <div className="contents-body">{children}</div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

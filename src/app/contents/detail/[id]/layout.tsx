import Sidebar from "@/components/Sidebar";
import { SubHeader2 } from "@/components/SubHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader2 h1Text="教育事業" pText="の記事一覧" fontJa={true} />

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

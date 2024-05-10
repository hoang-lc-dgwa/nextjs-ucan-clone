import React from "react";
import recruitData from "@/app/lib/data-recruit.json";

interface Position {
  title: string;
  content: string;
}

interface RecruitData {
  positions: Position[];
}

const RecruitInfo: React.FC = () => {
  return (
    <div className="recruit-info">
      <div className="recruit-info__inner">
        {recruitData.positions.map((position, index) => (
          <dl key={index}>
            <dt dangerouslySetInnerHTML={{ __html: position.title }} />
            <dd dangerouslySetInnerHTML={{ __html: position.content }} />
          </dl>
        ))}
      </div>
    </div>
  );
};

export default RecruitInfo;

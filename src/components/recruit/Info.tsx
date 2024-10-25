interface Position {
  title: string;
  content: string;
}

const positions: Position[] = [
  {
    title: "応募職種",
    content: "総合職",
  },
  {
    title: "応募資格",
    content: "大学、大学院を2024年に卒業見込みの方",
  },
  {
    title: "初任給",
    content: "240,000円（2023年4月実績/大卒・大学院卒）",
  },
  {
    title: "昇給",
    content: "年1回(4月)",
  },
  {
    title: "賞与",
    content: "年2回(5月、11月)",
  },
  {
    title: "勤務地",
    content:
      '<p>東京</p><p>本部ビル：東京都新宿区高田馬場<span class="u-dib">4-2-38</span>（最寄り駅：高田馬場）</p><p>代々木ビル：東京都渋谷区代々木<span class="u-dib">1-11-1</span>（最寄り駅：代々木、南新宿）</p><p>目白事業所：東京都新宿区下落合<span class="u-dib">3-2-5</span>（最寄り駅：目白）</p>',
  },
  {
    title: "勤務時間",
    content:
      '<p>9:00～17:30</p><p>フレックス制度／コアタイムなし</p><p>実働7時間30分<span class="u-dib">（休憩60分 12：00～13：00）</span></p>',
  },
  {
    title: "休日・休暇",
    content:
      '<p>完全週休2日制(土・日)、祝日、年末年始休暇、夏季休暇、有給休暇、慶弔休暇、<br class="pc">特別休暇、リフレッシュ休暇</br>',
  },
  {
    title: "<p>待遇</p><p>福利厚生</p><p>社内制度</p>",
    content:
      "<p>健康保険(出版健保)、厚生年金保険、雇用保険、労災保険</p><p>制度/確定給付企業年金制度、慶弔見舞金制度</p><p>施設/社有保養施設(軽井沢・伊豆高原・箱根)</p>",
  },
];

export default function RecruitInfo() {
  return (
    <div className="recruit-info">
      <div className="recruit-info__inner">
        {positions.map((position, index) => (
          <dl key={index}>
            <dt dangerouslySetInnerHTML={{ __html: position.title }} />
            <dd dangerouslySetInnerHTML={{ __html: position.content }} />
          </dl>
        ))}
      </div>
    </div>
  );
}

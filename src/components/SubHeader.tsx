import clsx from "clsx";

interface SubHeaderProps {
  h1Text: string;
  pText: string;
  fontJa?: boolean;
}

export default function SubHeader({ h1Text, pText }: SubHeaderProps) {
  return (
    <div className="sub-header">
      <div className="inner">
        <div className="sub-header__inner">
          <h1 className="sub-header__headline">
            <span className="js-anm-mask_">{h1Text}</span>
          </h1>
          <p className="sub-header__lead">
            <span className="js-anm-mask_">{pText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function SubHeader2({ h1Text, pText, fontJa = false }: SubHeaderProps) {
  return (
    <div className="contents-header">
      <div className="inner">
        <div className="contents-header__inner">
          <h1
            className={clsx("contents-header__headline", {
              "u-font-ja": fontJa,
            })}
          >
            <span className="js-anm-mask_">{h1Text}</span>
          </h1>
          <p className="contents-header__lead">
            <span className="js-anm-mask_">{pText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

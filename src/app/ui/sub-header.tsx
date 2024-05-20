import clsx from "clsx";
import React, { FC } from "react";

interface SubHeaderProps {
  h1Text: string;
  pText: string;
  fontJa?: boolean;
}

const SubHeader: FC<SubHeaderProps> = ({ h1Text, pText }) => {
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
};

export default SubHeader;

export const SubHeader2: FC<SubHeaderProps> = ({
  h1Text,
  pText,
  fontJa = false,
}) => {
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
};

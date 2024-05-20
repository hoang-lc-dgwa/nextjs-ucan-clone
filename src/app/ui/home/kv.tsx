"use client";

import Image from "next/image";
import React from "react";
import PickupSlider from "./pickup-slider";

const KV = () => {
  return (
    <div className="t-kv js-fade is-show">
      <div className="t-kv__inner">
        <div className="t-kv__bg">
          <Image
            src="/images/top/kv_bg01.jpg"
            alt=""
            width={1011}
            height={537}
            className="pc img-fit"
          />
          <Image
            src="/images/top/kv_bg01_sp.jpg"
            alt=""
            width={375}
            height={675}
            className="sp img-fit"
          />
        </div>
        <div className="t-kv__body">
          <div className="t-kv-description">
            <div className="t-kv-description__inner">
              <h1 className="t-kv-description__headline">
                <span>
                  <img src="/images/top/headline_txt.svg" alt="FEEL U-CAN." />
                </span>
              </h1>
              <p className="t-kv-description__copy">
                <span>大きすぎない組織だから挑める、</span>
                <span>U-CANの挑戦のリアル。</span>
              </p>
            </div>
          </div>
          <PickupSlider />
        </div>
      </div>
      <div className="t-kv__arrow u-el-delay">
        <Image
          src="/images/ico_scroll.svg"
          alt="SCROLL"
          className="pc"
          width={70}
          height={113}
        />
        <Image
          src="/images/ico_scroll_gray.svg"
          alt="SCROLL"
          className="sp"
          width={48}
          height={78}
        />
      </div>
    </div>
  );
};

export default KV;

"use client";

import Image from "next/image";
import bgKvPC from "@/images/top/kv_bg01.jpg";
import bgKvSP from "@/images/top/kv_bg01_sp.jpg";
import PickupSlider from "./PickupSlider";

export default function Kv() {
  return (
    <div className="t-kv js-fade is-show">
      <div className="t-kv__inner">
        <div className="t-kv__bg">
          <Image src={bgKvPC} alt="" className="pc img-fit" />
          <Image src={bgKvSP} alt="" className="sp img-fit" />
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
        <img src="/images/ico_scroll.svg" alt="SCROLL" className="pc" />
        <img src="/images/ico_scroll_gray.svg" alt="SCROLL" className="sp" />
      </div>
    </div>
  );
}

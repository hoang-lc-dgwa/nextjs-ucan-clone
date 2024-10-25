import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import thumbnailPickup1 from "@/images/top/pickup_img01.jpg";
import thumbnailPickup2 from "@/images/top/pickup_img02.jpg";
import thumbnailPickup3 from "@/images/top/pickup_img03.jpg";

export default function PickupSlider() {
  return (
    <div className="t-pickup u-el-delay">
      <div className="t-pickup__inner">
        <h2 className="t-pickup__headline">Pick up</h2>
        <Swiper
          className="t-pickup__slider"
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide className="t-pickup__item">
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image src={thumbnailPickup1} alt="" className="img-fit" />
              </div>
              <h3 className="t-pickup__desc">
                ココチモの服でファッションショーをしてみたら、どの商品も素敵すぎた件。
              </h3>
            </Link>
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image src={thumbnailPickup2} alt="" className="img-fit" />
              </div>
              <h3 className="t-pickup__desc">
                中途入社社員の目から見た、新卒にこそ知ってほしいユーキャンの魅力とは？
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="t-pickup__item">
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image src={thumbnailPickup3} alt="" className="img-fit" />
              </div>
              <h3 className="t-pickup__desc">
                好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
              </h3>
            </Link>
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image src={thumbnailPickup1} alt="" className="img-fit" />
              </div>
              <h3 className="t-pickup__desc">
                ココチモの服でファッションショーをしてみたら、どの商品も素敵すぎた件。
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="t-pickup__item">
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image src={thumbnailPickup2} alt="" className="img-fit" />
              </div>
              <h3 className="t-pickup__desc">
                中途入社社員の目から見た、新卒にこそ知ってほしいユーキャンの魅力とは？
              </h3>
            </Link>
            <Link href="#" className="t-pickup__item__inner">
              <div className="t-pickup__img">
                <Image
                  src={thumbnailPickup3}
                  alt=""
                  width={336}
                  height={226}
                  className="img-fit"
                />
              </div>
              <h3 className="t-pickup__desc">
                好評につき再び密着！若手社員の一日にスケジュールを追いかけてみた。
              </h3>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

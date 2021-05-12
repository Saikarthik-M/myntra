import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Bannerimg1 from "../images/banner2/banner1.png";
import Bannerimg2 from "../images/banner2/banner2.png";
import Bannerimg3 from "../images/banner2/banner3.png";
import Bannerimg4 from "../images/banner2/banner4.png";
import Bannerimg5 from "../images/banner2/banner5.png";
import Bannerimg6 from "../images/banner2/banner6.png";
import Bannerimg7 from "../images/banner2/banner7.png";
import Bannerimg8 from "../images/banner2/banner8.png";
import Bannerimg9 from "../images/banner2/banner9.png";
import BannerCard from "../cards/bannercard";
function Banner2() {
  return (
    <OwlCarousel className="owl-theme" items={1} autoplay={true}>
      <div class="item">
        <BannerCard
          color="#ECC88D"
          src={Bannerimg1}
          heading="Nail The WFH Look"
          description="Women casual wear at 40-70% off"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#C1F2F8"
          src={Bannerimg3}
          heading="Keep It Cool"
          description="Kids flip-flops & sandals starting at ₹199"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#CAC36F"
          src={Bannerimg6}
          heading="Everyday Ease!"
          description="Men's flip-flops at ₹199"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#BB895A"
          src={Bannerimg5}
          heading="A Summer Statement"
          description="starts at ₹299"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#C9A974"
          src={Bannerimg7}
          heading="Easy Classics"
          description="Sarees under ₹799"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#E6A18B"
          src={Bannerimg8}
          heading="Summer Ready Picks"
          description="Save upto 80-70%"
        />
      </div>
      <div class="item">
        <BannerCard
          color="#B8CCEC"
          src={Bannerimg9}
          heading="A Tee Story"
          description="Mens T-shirts at 50-70% off"
        />
      </div>
    </OwlCarousel>
  );
}

export default Banner2;

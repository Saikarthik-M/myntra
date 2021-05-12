import React from "react";
import ExploreTopBrandsCard from "../cards/exploretopbrandscard.js";
import Fitness from "../images/exploretopbrands/main/fitness.png";
import Levisexp from "../images/exploretopbrands/main/levisexplore.png";
import Road from "../images/exploretopbrands/main/road.png";
import Jack from "../images/exploretopbrands/main/jack.png";
import Hrk from "../images/exploretopbrands/main/hrx.png";
import Only from "../images/exploretopbrands/main/only.png";
import Anouk from "../images/exploretopbrands/main/anouk.png";
import Mac from "../images/exploretopbrands/main/mac.png";
import Wexpl from "../images/exploretopbrands/main/wexpl.png";
import Hm from "../images/exploretopbrands/main/hm.png";
import Nikelogo from "../images/exploretopbrands/logo/nikelogo.png";
import Levislogo from "../images/exploretopbrands/logo/levislogo.png";
import Roadlogo from "../images/exploretopbrands/logo/roadlogo.png";
import Jacklogo from "../images/exploretopbrands/logo/jacklogo.png";
import Hrklogo from "../images/exploretopbrands/logo/hrxlogo.png";
import Onlylogo from "../images/exploretopbrands/logo/onlylogo.png";
import Anouklogo from "../images/exploretopbrands/logo/anouklogo.png";
import Maclogo from "../images/exploretopbrands/logo/maclogo.png";
import Wlogo from "../images/exploretopbrands/logo/wlogo.png";
import Hmlogo from "../images/exploretopbrands/logo/hmlogo.png";
function ExploreTopBrands() {
  return (
    <div class="container-fluid mx-1">
      <h3 class="dealsheadingfont">EXPLORE TRENDING OF THE DAY</h3>
      <div class="row mt-5">
        <ExploreTopBrandsCard
          src1={Fitness}
          src2={Nikelogo}
          width="85px"
          offer="Fitness Collection"
          url="https://www.myntra.com/nike"
        />
        <ExploreTopBrandsCard
          src1={Levisexp}
          src2={Levislogo}
          width="65px"
          offer="Flat 50% Off"
          url="https://www.myntra.com/levis?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0"
        />
        <ExploreTopBrandsCard
          src1={Road}
          src2={Roadlogo}
          width="90px"
          offer="40-70% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3ARoadster&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
        />
        <ExploreTopBrandsCard
          src1={Jack}
          src2={Jacklogo}
          width="140px"
          offer="Up To 60% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AJack%20%26%20Jones"
        />
        <ExploreTopBrandsCard
          src1={Hrk}
          src2={Hrklogo}
          width="80px"
          offer="30-70% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AHRX%20by%20Hrithik%20Roshan&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
        />
        <ExploreTopBrandsCard
          src1={Only}
          src2={Onlylogo}
          width="90px"
          offer="Up To 60% Off"
          url="https://www.myntra.com/womens-western-wear?f=Brand%3AONLY"
        />
        <ExploreTopBrandsCard
          src1={Anouk}
          src2={Anouklogo}
          width="70px"
          offer="40-60% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AAnouk&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
        />
        <ExploreTopBrandsCard
          src1={Mac}
          src2={Maclogo}
          width="120px"
          offer="Starting At ₹1050"
          url="https://www.myntra.com/mac"
        />
        <ExploreTopBrandsCard
          src1={Wexpl}
          src2={Wlogo}
          width="50px"
          offer="Up To 40% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AW"
        />
        <ExploreTopBrandsCard
          src1={Hm}
          src2={Hmlogo}
          width="50px"
          offer="Starting at ₹399"
          url="https://www.myntra.com/h&m"
        />
      </div>
    </div>
  );
}
export default ExploreTopBrands;

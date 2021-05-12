import React from "react";
import MainCard from "../cards/maincard.js";
import Nikestyles from "../images/trendingsportswear/Nikestyles.png";
import Proline from "../images/trendingsportswear/Proline.png";
import ASICS from "../images/trendingsportswear/ASICS.png";
import Activewear from "../images/trendingsportswear/Activewear.png";
import Footwear from "../images/trendingsportswear/Footwear.png";
import Skechers from "../images/trendingsportswear/Skechers.png";
import Armour from "../images/trendingsportswear/Armour.png";
import Joggers from "../images/trendingsportswear/Joggers.png";
import Apparel from "../images/trendingsportswear/Apparel.png";
import Running from "../images/trendingsportswear/Running.png";
function TrendingSportsWear() {
  return (
    <div class="container-fluid mx-1">
      <h3 class="dealsheadingfont">TRENDING IN SPORTS WEAR</h3>
      <div class="row mt-5">
        <MainCard
          url=""
          src={Nikestyles}
          heading="Online Exclusive Nike Styles"
          description="For an unflexible goal & a flexible workout"
        />
        <MainCard
          url=""
          src={Proline}
          heading="Activewear By Proline"
          description="Step into something stretchier"
        />
        <MainCard
          url=""
          src={ASICS}
          heading="ASICS gel Running Shoes"
          description="Get you A-game on!"
        />
        <MainCard
          url=""
          src={Activewear}
          heading="Best of Activewear"
          description="Transform the way you train"
        />
        <MainCard
          url=""
          src={Footwear}
          heading="Footwear By Nike"
          description="Join the revolution"
        />
        <MainCard
          url=""
          src={Skechers}
          heading="Skechers Go Walk Range"
          description="Sunset walks encouraged"
        />
        <MainCard
          url=""
          src={Armour}
          heading="Under Armour Styles"
          description="When practical pairs with preety!"
        />
        <MainCard
          url=""
          src={Joggers}
          heading="Joggers By Under Armour"
          description="When practical pairs with preety!"
        />
        <MainCard
          url=""
          src={Apparel}
          heading="Athleisure Apparel"
          description="For all your #fitspiration posts"
        />
        <MainCard
          url=""
          src={Running}
          heading="Running Shoes"
          description="Sprint,in style!"
        />
      </div>
    </div>
  );
}
export default TrendingSportsWear;

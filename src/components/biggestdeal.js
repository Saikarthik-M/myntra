import React from "react";
import BiggestDealCard from "../cards/biggestdealcard";
import Uslogo from "../images/biggestdeals/logo/uslogo.png";
import Wlogo from "../images/biggestdeals/logo/wlogo.png";
import Levislogo from "../images/biggestdeals/logo/levislogo.png";
import Veromlogo from "../images/biggestdeals/logo/veromlogo.png";
import Tommylogo from "../images/biggestdeals/logo/tommylogo.png";
import Foreverlogo from "../images/biggestdeals/logo/foreverlogo.png";
import Gaplogo from "../images/biggestdeals/logo/gaplogo.png";
import Nikelogo from "../images/biggestdeals/logo/nikelogo.png";
import Ucblogo from "../images/biggestdeals/logo/ucblogo.png";
import Pumalogo from "../images/biggestdeals/logo/pumalogo.png";
import Us from "../images/biggestdeals/main/us.png";
import W from "../images/biggestdeals/main/w.png";
import Levis from "../images/biggestdeals/main/levis.png";
import Verom from "../images/biggestdeals/main/verom.png";
import Tommy from "../images/biggestdeals/main/tommy.png";
import Forever from "../images/biggestdeals/main/forever.png";
import Gap from "../images/biggestdeals/main/gap.png";
import Nike from "../images/biggestdeals/main/nike.png";
import Ucb from "../images/biggestdeals/main/ucb.png";
import Puma from "../images/biggestdeals/main/puma.png";
function BiggestDeal() {
  return (
    <div class="container-fluid mx-1 mt-5">
      <h3 class="dealsheadingfont">BIGGEST DEALS ON TOP BRANDS </h3>
      <div class="row mt-5">
        <BiggestDealCard
          src1={Us}
          src2={Uslogo}
          width="140px"
          offer="Up To 50% Off"
          url="https://www.myntra.com/uspa"
        />
        <BiggestDealCard
          src1={W}
          src2={Wlogo}
          width="55px"
          offer="30-60% Off"
          color="rgba(217, 215, 215,0.2)"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AW%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Levis}
          src2={Levislogo}
          width="100px"
          offer="Min. 30% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3ADenizen%20From%20Levis%2CLevis%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Verom}
          src2={Veromlogo}
          width="140px"
          offer="Min. 50% Off"
          color="rgba(217, 215, 215,0.2)"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AVero%20Moda%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Tommy}
          src2={Tommylogo}
          width="190px"
          offer="30-50% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3ATommy%20Hilfiger%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Forever}
          src2={Foreverlogo}
          width="105px"
          offer="Up To 60% Off"
          color="rgba(217, 215, 215,0.2)"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AFOREVER%2021%3A%3AGender%3Amen%20women%2Cwomen"
        />
        <BiggestDealCard
          src1={Gap}
          src2={Gaplogo}
          width="70px"
          offer="30-50% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AGAP&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Nike}
          src2={Nikelogo}
          width="120px"
          offer="Up To 50% Off"
          color="rgba(217, 215, 215,0.2)"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3ANike"
        />
        <BiggestDealCard
          src1={Ucb}
          src2={Ucblogo}
          width="100px"
          offer="40-70% Off"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3AUnited%20Colors%20of%20Benetton%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
        />
        <BiggestDealCard
          src1={Puma}
          src2={Pumalogo}
          width="80px"
          offer="30-70% Off"
          color="rgba(217, 215, 215,0.2)"
          url="https://www.myntra.com/myntra-fashion-store?f=Brand%3APuma%2Cone8%20x%20PUMA%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
        />
      </div>
    </div>
  );
}

export default BiggestDeal;

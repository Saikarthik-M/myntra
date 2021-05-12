import React from "react";
import DealsOfTheDayCard from "../cards/dealsofthedaycard";
import DealsOfTheDayCard2 from "../cards/dealsofthedaycard2";
import Dine from "../images/dealsoftheday/main/dine.png";
import Sleep from "../images/dealsoftheday/main/sleep.png";
import Take from "../images/dealsoftheday/main/take.png";
import Chem from "../images/dealsoftheday/main/chem.png";
import Denver from "../images/dealsoftheday/main/denver.png";
import Chemlogo from "../images/dealsoftheday/logo1/chemlogo.png";
import Denverlogo from "../images/dealsoftheday/logo1/denverlogo.png";
import Moda from "../images/dealsoftheday/logo2/moda.png";
import Wild from "../images/dealsoftheday/logo2/wild.png";
function DealsOfTheDay() {
  return (
    <div class="container-fluid mx-1 mt-5">
      <h3 class="dealsheadingfont">DEALS OF THE DAY</h3>
      <div class="row mt-5">
        <DealsOfTheDayCard
          url="https://www.myntra.com/home-furnishing-kitchen-table-menu?plaEnabled=false&rf=Price%3A206.0_999.0_206.0%20TO%20999.0"
          src={Dine}
          alt1="bolt"
          alt2="Dine In Style"
          description1="Under ₹999"
          description2="Kitchen essentials"
        />
        <DealsOfTheDayCard
          url="https://www.myntra.com/kids?f=Categories%3ANight%20suits%2CSleepsuit&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
          src={Sleep}
          alt1="bolt"
          alt2="Sleep Staples"
          description1="Min. 30% Off"
          description2="On kids night wear"
        />
        <DealsOfTheDayCard
          url="https://www.myntra.com/mcfsportzbrands?f=Categories%3AFlip%20Flops%2CSandals%2CSports%20Sandals&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
          src={Take}
          alt1="favorite"
          alt2=" Take it Easy"
          description1="Min. 30% Off"
          description2="On open footwear"
        />
        <DealsOfTheDayCard2
          url="https://www.myntra.com/mcfsportzbrands?f=Categories%3AFlip%20Flops%2CSandals%2CSports%20Sandals&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
          src={Denver}
          src2={Wild}
          src1={Denverlogo}
          width1="70px"
          width2="70px"
          margin="-20px"
          description1="Min. 50% Off"
          description2="On tops & tees"
        />
        <DealsOfTheDayCard2
          url="https://www.myntra.com/mcfsportzbrands?f=Categories%3AFlip%20Flops%2CSandals%2CSports%20Sandals&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
          src={Chem}
          src2={Moda}
          src1={Chemlogo}
          width1="90px"
          width2="90px"
          margin="0px"
          description1="Up To 45% Off"
          description2="On fragrances"
        />
      </div>
    </div>
  );
}

export default DealsOfTheDay;

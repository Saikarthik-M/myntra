import React from "react";
import MainCard from "../cards/maincard.js";
import Neutral from "../images/trendingfootwear/Neutral.png";
import Sneakers from "../images/trendingfootwear/Sneakers.png";
import PrintedSneakers from "../images/trendingfootwear/PrintedSneakers.png";
import Outback from "../images/trendingfootwear/Outback.png";
import Flipflops from "../images/trendingfootwear/Flipfops.png";
import Sneakerswomen from "../images/trendingfootwear/Sneakerswomen.png";
import Classics from "../images/trendingfootwear/classics.png";
import Colorblocked from "../images/trendingfootwear/Colorblocked.png";
import FootwearRocia from "../images/trendingfootwear/FootwearRocia.png";
import Comfort from "../images/trendingfootwear/Comfort.png";
function TrendingFootWear() {
  return (
    <div className="container-fluid mx-1">
      <h3 className="dealsheadingfont">TRENDING IN FOOT WEAR</h3>
      <div className="row mt-5">
        <MainCard
          url="https://www.myntra.com/mcfallstyles?f=Color%3ABeige_e8e6cf%2CBlack_36454f%2CGrey%20Melange_9fa8ab%2CGrey_808080%2CNavy%20Blue_3c4477%2COff%20White_f2f2f2%2CSilver_b3b3b3"
          src={Neutral}
          heading="Neutral Shades"
          description="Ticks all the boxes & pairs with everything!"
        />
        <MainCard
          url="https://www.myntra.com/footwear?f=Brand%3ACarlton%20London%20sports"
          src={Sneakers}
          heading="Sneakers For Dancers"
          description="These were made for all your moves"
        />
        <MainCard
          url="https://www.myntra.com/printed-sneakers?f=Gender%3Amen%2Cmen%20women"
          src={PrintedSneakers}
          heading="Printed Sneakers"
          description="Give your staples a snazzy makeover!"
        />
        <MainCard
          url="https://www.myntra.com/outdoor-shoes-for-men"
          src={Outback}
          heading="Outback Outdoor Shoes"
          description="Bring the adventure back home"
        />
        <MainCard
          url="https://www.myntra.com/men-flip-flops?f=Categories%3AFlip%20Flops"
          src={Flipflops}
          heading="Flip-Flops & Sliders"
          description="Slide right in to comfort and ease!"
        />
        <MainCard
          url="https://www.myntra.com/printed-sneakers?f=Gender%3Amen%20women%2Cwomen"
          src={Sneakerswomen}
          heading="Printed Sneakers"
          description="There's no sneaking past these!"
        />
        <MainCard
          url="https://www.myntra.com/flats?f=Gender%3Amen%20women%2Cwomen%3A%3AOccasion%3ACasual%3A%3APattern%3ASolid%3A%3AType%3AOpen%20Toe%20Flats"
          src={Classics}
          heading="Everyday Classics"
          description="Bae-sic styles for elevated everydays"
        />
        <MainCard
          url="https://www.myntra.com/women-casual-shoes?f=Brand%3ADressBerry%2CKook%20N%20Keech%2CMast%20%26%20Harbour%2CRoadster%3A%3APattern%3AColourblocked%2CPrinted%2CStriped%3A%3AType%3AFlatforms%2CSneakers"
          src={Colorblocked}
          heading="Colorblocked Sneakers"
          description="Block out the monotones with these"
        />
        <MainCard
          url="https://www.myntra.com/women-footwear?f=Brand%3ARocia"
          src={FootwearRocia}
          heading="Footwear By Rocia"
          description="A little causual, a little glam"
        />
        <MainCard
          url="https://www.myntra.com/women-footwear?f=Categories%3AHeels%3A%3AHeel%20Type%3AComfort%2CFlatform"
          src={Comfort}
          heading="Comfort Footwear"
          description="Easy to wear & pull off"
        />
      </div>
    </div>
  );
}
export default TrendingFootWear;

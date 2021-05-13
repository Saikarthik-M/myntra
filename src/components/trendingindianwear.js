import React from "react";
import MainCard from "../cards/maincard.js";
import Allwhite from "../images/trendingindianwear/Allwhite.png";
import Ethnic from "../images/trendingindianwear/Ethnic.png";
import Printed from "../images/trendingindianwear/Printed.png";
import Everyday from "../images/trendingindianwear/Everyday.png";
import Handpicked from "../images/trendingindianwear/Handpicked.png";
import Paradise from "../images/trendingindianwear/Paradise.png";
import Regal from "../images/trendingindianwear/Regal.png";
import Fusion from "../images/trendingindianwear/Fusion.png";
import Kurtasbiba from "../images/trendingindianwear/Kurtasbiba.png";
import Summer from "../images/trendingindianwear/SummerReady.png";
function TrendingIndianWear() {
  return (
    <div className="container-fluid mx-1">
      <h3 className="dealsheadingfont">TRENDING IN INDIAN WEAR</h3>
      <div className="row mt-5">
        <MainCard
          url="https://www.myntra.com/mens-occasion-wear?f=Categories%3ADhotis%2CKurta%20Sets%2CKurtas%2CNehru%20Jackets%2CSherwani%3A%3AColor%3AWhite_f2f2f2"
          src={Allwhite}
          heading="All White Indian Wear"
          description="For an always cool outlook"
        />
        <MainCard
          url="https://www.myntra.com/mens-occasion-wear?f=Categories%3AKurtas%3A%3AOccasion%3ADaily"
          src={Ethnic}
          heading="Ethnic Casuals"
          description="Indian surely know the route to comfort"
        />
        <MainCard
          url="https://www.myntra.com/men-ethnic-wear?f=Categories%3AKurta%20Sets%3A%3APrint%20or%20Pattern%20Type%3AChevron%2CEthnic%20Motifs%2CFloral%2CPaisley%2CQuirky%2CStriped%2CTribal"
          src={Printed}
          heading="Printed Kurta Sets"
          description="Festive wear that your family will love"
        />
        <MainCard
          url="https://www.myntra.com/men-kurtas?f=Categories%3AKurtas%3A%3ALength%3AAbove%20Knee%3A%3AOccasion%3ADaily"
          src={Everyday}
          heading="Everyday Kurtas"
          description="When style meets comfort"
        />
        <MainCard
          url="https://www.myntra.com/hangup?f=Categories%3AKurta%20Sets%2CKurtas"
          src={Handpicked}
          heading="Handpicked Trendy"
          description="Update the language of comfort with these "
        />
        <MainCard
          url="https://www.myntra.com/women-kurtas-kurtis-suits?f=Categories%3AKurtas%3A%3APattern%3APrinted"
          src={Paradise}
          heading="Print Paradise"
          description="For that extra serving of drama"
        />
        <MainCard
          url="https://www.myntra.com/women-kurtas-kurtis-suits?f=Categories%3AKurta%20Sets%2CKurtas%3A%3AColor%3AMustard_cc9c33%2CMustard_eadc32"
          src={Regal}
          heading="Regal Mustard"
          description="The colour of classy"
        />
        <MainCard
          url="https://www.myntra.com/ethnic-wear-dresses-menu?f=Brand%3AW"
          src={Fusion}
          heading="Fusion Dresses From W"
          description="For a look straight out of a Bollywood movie"
        />
        <MainCard
          url="https://www.myntra.com/biba?f=Categories%3AKurta%20Sets%3A%3AGender%3Amen%20women%2Cwomen"
          src={Kurtasbiba}
          heading="Kurta Sets By BIBA"
          description="We've found you the perfect match"
        />
        <MainCard
          url="https://www.myntra.com/ethnic-wear-dresses-menu?f=Categories%3ADresses%3A%3AOccasion%3AEthnic"
          src={Summer}
          heading="Summer-Ready Ethnic"
          description="Breezy dresses fit for virtual calls"
        />
      </div>
    </div>
  );
}
export default TrendingIndianWear;

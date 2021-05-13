import React from "react";
import MainCard from "../cards/maincard.js";
import Wireless from "../images/trendingaccessories/Wireless.png";
import Sporty from "../images/trendingaccessories/Sporty.png";
import Whitewatch from "../images/trendingaccessories/Whitewatch.png";
import Fastrack from "../images/trendingaccessories/Fastrack.png";
import Minimalist from "../images/trendingaccessories/Minimalist.png";
import Imittire from "../images/trendingaccessories/Imittire.png";
import Mangal from "../images/trendingaccessories/Mangal.png";
import Handcrafted from "../images/trendingaccessories/Handcrafted.png";
import Rosegold from "../images/trendingaccessories/Rosegold.png";

function TrendingAccessories() {
  return (
    <div className="container-fluid mx-1">
      <h3 className="dealsheadingfont">TRENDING IN ACCESSORIES</h3>
      <div className="row mt-5">
        <MainCard
          url="https://www.myntra.com/gadgets?f=Categories%3AHeadphones%3A%3AConnectivity%3ATrue%20Wireless"
          src={Wireless}
          heading="Wireless Headphones"
          description="Tangled wires? Not in our vocabulary"
        />
        <MainCard
          url="https://www.myntra.com/sporty-watches_873384"
          src={Sporty}
          heading="Sporty Watches"
          description="Ahead of its time in style & performance"
        />
        <MainCard
          url="https://www.myntra.com/watches?f=Color%3AWhite_f2f2f2"
          src={Whitewatch}
          heading="White Watches"
          description="A classic in every sense of the word"
        />
        <MainCard
          url="https://www.myntra.com/fastrack"
          src={Fastrack}
          heading="Best of Fastrack"
          description="A new world where sports meets sass"
        />
        <MainCard
          url="https://www.myntra.com/min-watches"
          src={Minimalist}
          heading="Minimalist Watches"
          description="Understated is the new style statement"
        />
        <MainCard
          url="https://www.myntra.com/women-jewellery?f=Brand%3AImittire"
          src={Imittire}
          heading="Best of Imittire"
          description="Grand jewellery that's sure to turn heads"
        />
        <MainCard
          url="https://www.myntra.com/women-jewellery?f=Categories%3AMangalsutra"
          src={Mangal}
          heading="Mangalsutra Collection"
          description="A stylish symbol of a lifelong bond"
        />
        <MainCard
          url="https://www.myntra.com/handcraftedjew20_887946"
          src={Handcrafted}
          heading="Handcrafted Jewellery"
          description="A personal touch to every special piece"
        />
        <MainCard
          url="https://www.myntra.com/rose-gt-watchs"
          src={Rosegold}
          heading="Rose Gold Watches"
          description="A classic that's always in style"
        />
        <MainCard
          url="https://www.myntra.com/watches?f=Color%3AWhite_f2f2f2"
          src={Whitewatch}
          heading="White Watches"
          description="A classic in every sense of the word"
        />
      </div>
    </div>
  );
}
export default TrendingAccessories;

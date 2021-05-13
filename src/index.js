import React from "react";
import ReactDOM from "react-dom";
import DealsOfTheDay from "./components/dealsoftheday";
import "../src/css/style.css";
import BiggestDeal from "./components/biggestdeal";
import ExploreTopBrands from "./components/exploretopbrands";
import TrendingAccessories from "./components/trendingaccessories";
import TrendingFootwear from "./components/trendingfootwear";
import TrendingIndianWear from "./components/trendingindianwear";
import TrendingSportsWear from "./components/trendingsportswear";
import TrendingWesternWear from "./components/trendingwesternwear";
import Navbar from "./components/navbar";
import Banner1 from "./components/banner1";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";
import Footer from "./components/footer";
function Myntra() {
  return (
    <div>
      <Navbar />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <DealsOfTheDay />
      <BiggestDeal />
      <ExploreTopBrands />
      <TrendingWesternWear />
      <TrendingIndianWear />
      <TrendingSportsWear />
      <TrendingFootwear />
      <TrendingAccessories />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Myntra />, document.getElementById("root"));

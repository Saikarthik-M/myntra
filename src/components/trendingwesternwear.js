import React from "react";
import MainCard from "../cards/maincard.js";
import Vibrant from "../images/trendingwesternwear/Vibrant.png";
import Superhero from "../images/trendingwesternwear/Superhero.png";
import Street from "../images/trendingwesternwear/Street.png";
import Versatile from "../images/trendingwesternwear/Versatile.png";
import Moss from "../images/trendingwesternwear/Moss.png";
import Mod from "../images/trendingwesternwear/Mod.png";
import RedTops from "../images/trendingwesternwear/Redtops.png";
import Smart from "../images/trendingwesternwear/Smartdaily.png";
import Ecofriend from "../images/trendingwesternwear/Eco-frnd.png";

function TrendingWesternWear() {
  return (
    <div className="container-fluid mx-1 mt-5">
      <h3 className="dealsheadingfont">TRENDING IN WESTERN WEAR</h3>
      <div className="row mt-5">
        <MainCard
          url="https://www.myntra.com/men-topwear?f=Categories%3AShirts%2CTshirts%3A%3APattern%3AColourblocked"
          src={Vibrant}
          heading="Vibrant Colourblocked"
          description="The opposite ends of the colour palette meet"
        />
        <MainCard
          url="https://www.myntra.com/men-apparel?f=Brand%3AAMERICAN%20EAGLE%20OUTFITTERS%2CAeropostale%2CBeing%20Human%2CBreakbounce%2CCalvin%20Klein%2CCalvin%20Klein%20Jeans%2CCampus%20Sutra%2CClub%20York%2CConditions%20Apply%2CDenizen%20From%20Levis%2CDucati%2CEcko%20Unltd%2CEd%20Hardy%2CFOREVER%2021%2CFlying%20Machine%2CFree%20Authority%2CFriskers%2CGAS%2CGRIFFEL%2CHIGHLANDER%2CHubberholme%2CHuetrap%2CIntegriti%2CJack%20%26%20Jones%2CJohn%20Pride%2CJustanned%2CKiller%2CLOCOMOTIVE%2CLee%2CLee%20Cooper%2CLevis%2CLouis%20Philippe%20Jeans%2CManiac%2CMarvel%20Avengers%2CMarvel%20Comics%2CMarvel%20Spiderman%2CMufti%2CNumero%20Uno%2CONLY%20%26%20SONS%2COkane%2CPeople%2CPepe%20Jeans%2CRUF%20%26%20TUF%2CRed%20Tape%2CSKULT%20by%20Shahid%20Kapoor%2CSPYKAR%2CSTAR%20WARS%2CScotch%20%26%20Soda%2CSuperdry%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CWildcraft%2CWrangler%3A%3ACategories%3ASweaters%2CTshirts%3A%3APrint%20or%20Pattern%20Type%3ASuperhero&sort=price_desc"
          src={Superhero}
          heading="Superhero Tees"
          description="Show off your fandom in these"
        />
        <MainCard
          url="https://www.myntra.com/men-jeans?f=Brand%3AModa%20Rapido%3A%3AFit%3ASkinny%20Fit&sort=new"
          src={Street}
          heading="Street Style Skinny Jeans"
          description="The right balance between edgy & effortless"
        />
        <MainCard
          url="https://www.myntra.com/men-topwear?f=Categories%3AShirts%2CTshirts%3A%3AOccasion%3ACasual%3A%3APattern%3AStriped"
          src={Versatile}
          heading="Versatile Striped"
          description="Just your stripe of wardrobe stable"
        />
        <MainCard
          url="https://www.myntra.com/men-apparel?f=Brand%3AAMERICAN%20EAGLE%20OUTFITTERS%2CAeropostale%2CBeing%20Human%2CBreakbounce%2CCalvin%20Klein%2CCalvin%20Klein%20Jeans%2CCampus%20Sutra%2CClub%20York%2CConditions%20Apply%2CDenizen%20From%20Levis%2CDucati%2CEcko%20Unltd%2CEd%20Hardy%2CFOREVER%2021%2CFlying%20Machine%2CFree%20Authority%2CFriskers%2CGAS%2CGRIFFEL%2CHIGHLANDER%2CHubberholme%2CHuetrap%2CIntegriti%2CJack%20%26%20Jones%2CJohn%20Pride%2CJustanned%2CKiller%2CLOCOMOTIVE%2CLee%2CLee%20Cooper%2CLevis%2CLouis%20Philippe%20Jeans%2CManiac%2CMarvel%20Avengers%2CMarvel%20Comics%2CMarvel%20Spiderman%2CMufti%2CNumero%20Uno%2CONLY%20%26%20SONS%2COkane%2CPeople%2CPepe%20Jeans%2CRUF%20%26%20TUF%2CRed%20Tape%2CSKULT%20by%20Shahid%20Kapoor%2CSPYKAR%2CSTAR%20WARS%2CScotch%20%26%20Soda%2CSuperdry%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CWildcraft%2CWrangler%3A%3ACategories%3ASweaters%2CTshirts%3A%3APrint%20or%20Pattern%20Type%3ASuperhero&sort=price_desc"
          src={Superhero}
          heading="Superhero Tees"
          description="Show off your fandom in these"
        />
        <MainCard
          url="https://www.myntra.com/roadtser-aug-aw20-mossmel"
          src={Moss}
          heading="Moss & Melange"
          description="The colours of this season"
        />
        <MainCard
          url="https://www.myntra.com/women-shirts-tops-tees?f=Categories%3ATops%2CTshirts%3A%3AMain%20Trend%3AColourblocked"
          src={Mod}
          heading="Mod blocking"
          description="Your sofa-to-fridge look"
        />
        <MainCard
          url="https://www.myntra.com/women-shirts-tops-tees?f=Categories%3ATops%2CTshirts%3A%3AColor%3ARed_d34b56"
          src={RedTops}
          heading="Red Tops & Tees"
          description="The unofficial symbol of all things bold"
        />
        <MainCard
          url="https://www.myntra.com/women-shirts-tops-tees?f=Brand%3ADOROTHY%20PERKINS%2CESPRIT%2CForever%20New%2CMANGO%2CH%20%26%20M%3A%3ACategories%3ATshirts"
          src={Smart}
          heading="Smart Daily Wear Tees"
          description="Something new for every day"
        />
        <MainCard
          url="https://www.myntra.com/rd-womens-eors-ecoverodeal"
          src={Ecofriend}
          heading="Eco-Friendly Styles"
          description="When ethics meet aesthetics"
        />
      </div>
    </div>
  );
}
export default TrendingWesternWear;

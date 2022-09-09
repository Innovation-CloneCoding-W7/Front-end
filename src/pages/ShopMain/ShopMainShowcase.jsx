import {ShopMainShowcaseContainer} from "./styles";
import ShowcaseItem from "./ShowcaseItem";

const ShopMainShowcase = () => {
    return <ShopMainShowcaseContainer>
        <ShowcaseItem image={"ModelS.png"} title={"Model S 액세서리"}/>
        <ShowcaseItem image={"Model3.png"} title={"Model 3 액세서리"} isTitleDark={true}/>
        <ShowcaseItem image={"ModelX.png"} title={"Model X 액세서리"}/>
        <ShowcaseItem image={"ModelY.png"} title={"Model Y 액세서리"} isTitleDark={true}/>
        <ShowcaseItem image={"Charging.png"} title={"충전"}/>
    </ShopMainShowcaseContainer>
}

export default ShopMainShowcase;
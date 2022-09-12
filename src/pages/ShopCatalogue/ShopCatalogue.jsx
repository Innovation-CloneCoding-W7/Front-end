import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopCatalogueHeader from "./ShopCatalogueHeader";
import ShopCatalogueBody from "./ShopCatalogueBody";

const ShopCatalogue = () => {
    const {category} = useParams();
    return <ShopLayout>
        <ShopCatalogueContainer>
            <ShopCatalogueHeader title={"충전"} footnote={"집에서 충전하기"}/>
        </ShopCatalogueContainer>
        <ShopCatalogueBody>

        </ShopCatalogueBody>
    </ShopLayout>
}

export default ShopCatalogue;
import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopCatalogueHeader from "./ShopCatalogueHeader";
import ShopCatalogueBody from "./ShopCatalogueBody";
import categoryMapper from "../../utils/categoryMapper";
import ShopFooter from "../../components/ShopFooter/ShopFooter";

const ShopCatalogue = () => {
    const {category} = useParams();
    const title = categoryMapper[category];
    return <ShopLayout>
        <ShopCatalogueContainer>
            <ShopCatalogueHeader title={title}/>
        </ShopCatalogueContainer>
        <ShopCatalogueBody>

        </ShopCatalogueBody>
        <ShopFooter/>
    </ShopLayout>
}

export default ShopCatalogue;
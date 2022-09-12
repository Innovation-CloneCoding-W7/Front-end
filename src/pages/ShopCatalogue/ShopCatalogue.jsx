import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";

const ShopCatalogue = () => {
    const {category} = useParams();
    return <ShopLayout>
        <ShopCatalogueContainer>
        </ShopCatalogueContainer>
    </ShopLayout>
}

export default ShopCatalogue;
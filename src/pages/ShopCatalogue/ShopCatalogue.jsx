import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopNavigationBar from "../../components/ShopNavigationBar/ShopNavigationBar";
import ShopLayout from "../../components/ShopLayout/ShopLayout";

const ShopCatalogue = () => {
    const {category} = useParams();
    return <ShopLayout>
        <ShopCatalogueContainer>
            <ShopNavigationBar/>
        </ShopCatalogueContainer>
    </ShopLayout>
}

export default ShopCatalogue;
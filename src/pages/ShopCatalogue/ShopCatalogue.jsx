import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopCatalogueHeader from "./ShopCatalogueHeader";
import ShopCatalogueBody from "./ShopCatalogueBody";

const ShopCatalogue = () => {
    const {category} = useParams();
    let title;
    let footnote;
    switch (category) {
        case "charging":
            title = "충전";
            footnote = "집에서 충전하기";
            break;
        case "vehicle-accessories":
            title = "차량 액세서리";
            break;
        case "apparel":
            title = "의류";
            break;
        case "lifestyle":
            title = "라이프스타일";
            break;
        case "service-installables":
            title = "서비스 설치";
            break;
        default:
            title = "기타";
            break;
    }
    return <ShopLayout>
        <ShopCatalogueContainer>
            <ShopCatalogueHeader title={title} footnote={footnote}/>
        </ShopCatalogueContainer>
        <ShopCatalogueBody>

        </ShopCatalogueBody>
    </ShopLayout>
}

export default ShopCatalogue;
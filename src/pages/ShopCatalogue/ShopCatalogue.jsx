import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopCatalogueHeader from "./ShopCatalogueHeader";
import ShopCatalogueBody from "./ShopCatalogueBody";
import categoryMapper from "../../utils/categoryMapper";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../redux/modules/productSlice";

const ShopCatalogue = () => {
    const {isLoading, products, error} = useSelector((state) => state.productSliceReducer);
    const {category} = useParams();
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getProductsThunk(category));
    }, [dispatcher])
    const title = categoryMapper[category];
    return <ShopLayout>
        <ShopCatalogueContainer>
            <ShopCatalogueHeader title={title}/>
            <ShopCatalogueBody/>
            <ShopFooter/>
        </ShopCatalogueContainer>
    </ShopLayout>
}

export default ShopCatalogue;
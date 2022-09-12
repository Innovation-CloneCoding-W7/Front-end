import {ShopCatalogueBodyContainer} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";

const ShopCatalogueBody = () => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    return <ShopCatalogueBodyContainer>

    </ShopCatalogueBodyContainer>
}

export default ShopCatalogueBody;
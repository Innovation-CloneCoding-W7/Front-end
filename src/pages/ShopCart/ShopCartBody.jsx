import {ShopCartBodyContainer} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";

const ShopCartBody = () => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    return <ShopCartBodyContainer>

    </ShopCartBodyContainer>
}

export default ShopCartBody;
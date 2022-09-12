import {ShopCartBodyContainer} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";
import ShopCartBodyEmpty from "./ShopCartBodyEmpty";

const ShopCartBody = () => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    return <ShopCartBodyContainer>
        <ShopCartBodyEmpty/>
    </ShopCartBodyContainer>
}

export default ShopCartBody;
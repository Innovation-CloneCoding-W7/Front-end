import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopMain from "../pages/ShopMain/ShopMain";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/shop" element={<ShopMain/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>);
}

export default Router;
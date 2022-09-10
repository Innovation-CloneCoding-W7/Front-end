import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopMain from "../pages/ShopMain/ShopMain";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../pages/Main/Main";
import LogIn from "../pages/Login/Login";
import SignUp from "../pages/SignUp/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/shop" element={<ShopMain />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

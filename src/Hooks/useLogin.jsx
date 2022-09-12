import { setCookie } from "../Cookie";
import instance from "../shared/Requests";

const UseLogin = (data) => {
  instance
    .post("api/login", data)
    .then((res) => {
      setCookie("auth_token", res.headers.authorization);
      setCookie("refresh_token", res.headers.refreshtoken);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default UseLogin;

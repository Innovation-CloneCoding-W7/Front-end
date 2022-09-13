import {setCookie} from "../Cookie";
import instance from "../shared/Requests";

const useSignup = (data) => {
    instance
        .post("api/signup", data)
        .then((res) => {
            setCookie("auth_token", res.headers.authorization);
            setCookie("refresh_token", res.headers.refreshtoken);
        })
        .catch((err) => {
            console.log(err);
        });
};

export default useSignup;

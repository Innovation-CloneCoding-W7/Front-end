import instance from "../shared/Requests";

const UseSignup = (data) => {
  instance
    .post("api/member/signup", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default UseSignup;

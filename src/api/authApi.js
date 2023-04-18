import axios from "axios";
import { BASE_URL } from "../components/config/globalKey";
import Swal from "sweetalert2";

//BASE_URL + "/user/login"
//BASE_URL + "/user/register"
const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const doLogin = async (phoneNumber, password, deviceToken) => {
  const response  = await authApi
    .post("/user/login", {
      phoneNumber: phoneNumber,
      password: password,
      deviceToken: deviceToken,
    })
    
    return response.data;
};

export const doRegister = async (username, phoneNumber, password, email) => {
  await authApi
    .post("/user/register", {
      userName: username,
      phoneNumber: phoneNumber,
      password: password,
      email: email,
    })
    .then((res) => {
      Swal.fire(res.data.message);
    })
    .catch((error) => {
      Swal.fire(error.message);
    });
};

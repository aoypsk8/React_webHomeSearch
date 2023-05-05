// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { login } from "../../slice/userSlice";
import { doLogin, doRegister } from "./authApi";

export const loginUser =
  (phoneNumber, password, drivertoken) => async (dispatch) => {
    try {
      const user = await doLogin(phoneNumber, password, drivertoken);
      console.log(user);
      Swal.fire("Login !", user.message, "success");
      localStorage.setItem("token", user.data.token);
      dispatch(login(user));
      return true;
    } catch (error) {
      Swal.fire(error.message);
      return false;
    }
  };

export const registerUser =
  (username, phoneNumber, password, email) => async (dispatch) => {
    try {
      await doRegister(username, phoneNumber, password, email);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

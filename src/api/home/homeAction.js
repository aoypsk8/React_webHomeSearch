import { addHome } from "../../slice/homeSlice";
import { doGetAllHome } from "../home/home_api";

export const getAllHome = () => async (dispatch) => {
  try {
    const allhome = await doGetAllHome();
    console.log(allhome);
    dispatch(addHome(allhome));
    return true
  } catch (error) {
    console.log(error);
    return false
  }
};

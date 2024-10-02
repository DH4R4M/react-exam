import { LOADING, PASSWORDERROR, SUCCESS } from "./actiontype";
import Swal from "sweetalert2";

export const fetchapi = (obj) => (dispatch) => {
  dispatch({ type: LOADING });
  fetch(`https://mock-server-app-ixch.onrender.com/user?email=${obj.email}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.length > 0 && res[0].password === obj.password) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });

        dispatch({ type: SUCCESS, payload: res[0] });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });

        Toast.fire({
          icon: "error",
          title: "Password does not match",
        });

        dispatch({ type: PASSWORDERROR });
      }
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred, please try again.",
      });
      dispatch({ type: PASSWORDERROR });
    });
};

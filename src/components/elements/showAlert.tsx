import { Flip, toast, ToastOptions } from "react-toastify";

interface alert {
  type: "error" | "success" | "info";
  message: string | "";
  error?: unknown
}

const alertData: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Flip,
};

const showAlert = ({ type, message, error }: alert) => {
  console.log(error)
  if (type === "error") {
    toast.error(message, alertData);
  } else if (type == "success") {
    toast.success(message, alertData);
  } else {
    toast.info(message, alertData);
  }
};

export default showAlert;

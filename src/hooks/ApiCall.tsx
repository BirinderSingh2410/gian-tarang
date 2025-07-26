import showAlert from "@/components/elements/showAlert";
import axios, { AxiosResponse } from "axios";

interface ApiI {
  url: string;
  method: "post" | "get";
  body?: unknown;
}
const ApiCall = ({ url = "", method = "get", body }: ApiI) => {
  const callApi = async () => {
    try {
      let data: AxiosResponse;
      if (method == "get") {
        data = await axios.get(url);
      } else {
        data = await axios.post(url, body);
      }
      return data.data;
    } catch (error) {
      showAlert({ message: "Api failure", type: "error", error });
    }
  };
  return callApi();
};

export default ApiCall;

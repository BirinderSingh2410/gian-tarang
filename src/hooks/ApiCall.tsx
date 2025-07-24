import axios from "axios";

interface ApiI {
  url: string;
  method: "post" | "get";
  body?: unknown;
}
const ApiCall = ({ url = "", method = "get", body }: ApiI) => {
  if (method == "get") {
    return axios.get(url);
  } else {
    return axios.post("url", body);
  }
};

export default ApiCall;

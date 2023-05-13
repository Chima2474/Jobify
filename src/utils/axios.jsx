import axios from "axios";

const GeneralFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});
export default GeneralFetch;

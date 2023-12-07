import axios from "axios";
import { basicUrl } from "./constants/constant"

const instance = axios.create({
    baseURL: basicUrl,
});

export default instance
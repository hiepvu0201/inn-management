import axios from "axios";
import axiosClient from "./axiosClient";
const authApi = {
  get(params) {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${params}.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ`;
    return axiosClient.get(url);
  }
};
export default authApi;

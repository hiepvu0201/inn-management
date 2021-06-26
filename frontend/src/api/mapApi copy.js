import axios from "axios";
import axiosClient from "./axiosClient";
const authApi = {
  get() {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/127%20Nguyễn%20Thiện%20Thuật%20Hồ%20Chí%20Minh%201.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ";
    return axiosClient.get(url);
  },
  get_1() {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/225%20Kỳ%20Đồng%20Phường%2003%20Quận%2003%20Hồ%20Chí%20Minh%20Viet%20Nam.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ";
    return axiosClient.get(url);
  },
  get_2(){
        const url =
          "https://api.mapbox.com/geocoding/v5/mapbox.places/28%20Nguyễn%20Thông%20Quận%2003%20Hồ%20Chí%20Minh%20Viet%20Nam.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ";
        return axiosClient.get(url);
  },
  get_3(){
       const url =
       "https://api.mapbox.com/geocoding/v5/mapbox.places/28%20Thao%20Dien%20Quan%2002%20Hồ%20Chí%20Minh%20Viet%20Nam.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ"
       return axiosClient.get(url);
  },
  get_4(){
      const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/72%20Le%20Thanh%20Ton%20Quan%2001%20Hồ%20Chí%20Minh%20Viet%20Nam.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ"
      return axiosClient.get(url);
  },
  get_5(){
     const url =
       "https://api.mapbox.com/geocoding/v5/mapbox.places/307%20Nguyen%20Duy%20Trinh%20Phuong%20Binh%20Trung%20Tay%20Quan%2002%20Hồ%20Chí%20Minh%20Viet%20Nam.json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ";
     return axiosClient.get(url);
  }
};
export default authApi;

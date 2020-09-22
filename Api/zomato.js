import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "01f956d814b9aaf104d657f89934e976",
    "content-type": "application/json",
  },
});

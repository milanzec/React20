import axios from "axios";
const KEY = "AIzaSyC5pBOirMq8EqnrQizwobm9QlbGXSPdoc4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
    type: "video"
  }
});

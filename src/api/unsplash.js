import axios from "axios";

//default parameters:

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 78215cfae8283e79a2c5f45027e11d0bb9bb3701f3b28675be97fe685c0d9949"
  }
});

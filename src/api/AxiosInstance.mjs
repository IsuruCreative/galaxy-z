import axios from "axios";

//api key 1: aBpe1H32XvzZ0dRZiLvD178Da5NIG7b2OcgMxUOe
//api key 2: klchjUopcARhHOAvb2w3jFmqxxwQrtWKszvO33ZT

const AxiosInstance = () => {
  const instance = axios.create({
    baseURL: "https://api.nasa.gov",
    params: {
      api_key: 'klchjUopcARhHOAvb2w3jFmqxxwQrtWKszvO33ZT'
    }
  });

  return instance;
};

export default AxiosInstance;

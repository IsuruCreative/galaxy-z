import AxiosInstance from "./AxiosInstance.mjs";

const fethcDailyPicture = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`planetary/apod`);
  return result.data;
};

const fetchMarsRoverPics = async ({ queryKey }) => {
  const data = queryKey[1];
  const page = queryKey[2];
  console.log(data);

  let query = "mars-photos/api/v1/rovers/curiosity/photos?";
  if (data.earth_date) {
    query += `earth_date=${data.earth_date}&page=${page}`;
  }

  console.log(data);

  if (data.camera) {
    query += `&camera=${data.camera}`;
  }

  console.log(query);

  const result = await AxiosInstance().get(query);
  return result.data;
};

const fetchDonkiNotifications = async ({ queryKey }) => {
  const data = queryKey[1];

  const query = `DONKI/notifications?startDate=${data?.startDate}&endDate=${data?.endDate}&type=${data?.type}`;
  console.log(query);

  const result = await AxiosInstance().get(query);
  console.log(result.data);
  return result.data;
};

const fetchMarsWeatherData = async ({ queryKey }) => {
  const result = await AxiosInstance().get(
    `insight_weather/?feedtype=json&ver=1.0`
  );
  return result.data;
};

const fetchEPIC = async ({ queryKey }) => {
  const result = await AxiosInstance().get(
    `natural/date/2019-05-30?api_key=DEMO_KEY`
  );
  return result.data;
};

export {
  fethcDailyPicture,
  fetchMarsRoverPics,
  fetchDonkiNotifications,
  fetchMarsWeatherData,
  fetchEPIC,
};

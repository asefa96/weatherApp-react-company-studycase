interface IUrlGenerator {
  url: string;
  key: string;
  params: Object;
}

export const generateWeatherUrl = ({ url, key, params }: IUrlGenerator) => {
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return url + "?key=" + key + "&" + paramString;
};

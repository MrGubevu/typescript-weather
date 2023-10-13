import { makeApiCall } from "../../utils";
import { API_KEY } from "./constants";
import { APIResponse, WeatherCoords } from "./types";
import { eastLondonLocation } from "../useLocation/constants";


const getTodaysWeatherByLocation = async ({
    latitude,
    longitude,
}: WeatherCoords): Promise<APIResponse> => 
await makeApiCall({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
});

export { getTodaysWeatherByLocation }
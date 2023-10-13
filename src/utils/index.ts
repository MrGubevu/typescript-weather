import { TodaysWeather } from "../hooks/useWeather/types";
import { RequestParams } from "./types";

const HandleApiError = (error: unknown) => ({
    ok: false,
    result: undefined,
    error,
});

const handleApiSuccess = (result: unknown) => ({
    ok: true,
    result,
    error: undefined,
})

const formatTodaysWeather: TodaysWeather = {
    name: response.data.name,
    main: {
      temp: Math.round(response.data.main.temp),
      temp_max: Math.round(response.data.main.temp_max),
      temp_min: Math.round(response.data.main.temp_min),
    },
    wind: Math.round(response.data.wind.speed * 1.60934), // Convert mph to km/h
    rain: Math.round((response.data.rain ? response.data.rain['1h'] : 0) * 25.4), // Convert inches to mm
  };


const makeApiCall = async ({ url, method }: RequestParams) => {
    try {
        const response = await fetch(url, {
            method,
        });
        if (!response.ok) {
            const error = await response.text();
            const message = JSON.parse(error)?.message;
            return HandleApiError(
                message || 'Unkown error occured. Please try again later.'
            );
        }

        const result = await response.json();

        return handleApiSuccess(result);
    } catch (error) {
        return HandleApiError(error)
    }
};

export {
    handleApiSuccess,
    HandleApiError,
    makeApiCall,
    
}
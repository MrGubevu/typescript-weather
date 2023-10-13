interface MainWeatherData {
    name: string;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number
        wind: number;
        rain: number;
    }
    
};

interface WeatherCoords {
    latitude: number;
    longitude: number;
    
}

interface APIResponse {
    ok: boolean;
    result: unknown;
    error: unknown;
}

interface TodaysWeather {
    type: string;
    currentTempreture: number;
    day: string
    description: string;
    maximumTempreture: number;
    minimumTemperature: number; 
    
}


export type {
    MainWeatherData,
    WeatherCoords,
    APIResponse,
    TodaysWeather
}
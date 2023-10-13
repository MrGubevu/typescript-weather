import { useState } from "react";
import { getTodaysWeatherByLocation } from "./api";
import {    
    MainWeatherData,
    WeatherCoords,
    APIResponse,
    TodaysWeather} from './types';

    function useWeather() {
        const [eastLondonWeatherTemp, setEastLondonWeatherTemp] = useState<TodaysWeather>(null)
    }

export interface ApiData {
    time: string;
    values: Values;
}

export interface Values {
    cloudBase: number;
    cloudCeiling: number;
    cloudCover: number;
    dewPoint: number;
    freezingRainIntensity: number;
    humidity: number;
    precipitationProbability: number;
    pressureSurfaceLevel: number;
    rainIntensity: number;
    sleetIntensity: number;
    snowIntensity: number;
    temperature: number;
    temperatureApparent: number;
    uvHealthConcern: number;
    uvIndex: number;
    visibility: number;
    weatherCode: number;
    windDirection: number;
    windGust: number;
    windSpeed: number;
  }

export interface Location {
    lat: number;
    lon: number;
    name: string;
    type: string;
}

export interface ApiResponse {
    data: ApiData;
    location: Location;
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../projectData/api-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private _http: HttpClient) { }

  private readonly apiKey = 'BNCebUsHDcBsvKOw0hdyP79dXFFBNDGW';
  private readonly defaultLocation = 'Chennai';
  private apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${this.defaultLocation}&apikey=${this.apiKey}`;
  getDefaultWeather(): Observable<ApiResponse>{
    return this._http.get<ApiResponse>(this.apiUrl);
  }

  getWeatherDataByCity(city: string): Observable<ApiResponse> {
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${this.apiKey}`;
    return this._http.get<ApiResponse>(url);
  }
}

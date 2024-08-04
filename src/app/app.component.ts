import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './_services/weatherapi.service';
import { ApiResponse } from './projectData/api-data';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'weatherApp';
  weatherData!: ApiResponse;
  weatherForm!: FormGroup;
  city = '';
  messages!: Message[];
  spinner:boolean = false;
  constructor(private weatherApi: WeatherapiService, private fb: FormBuilder){}


  ngOnInit(): void {
    this.weatherForm = new FormGroup({
      'inputCity': new FormControl(null),
    })
    this.fetchWeatherData('Chennai');
  }

  fetchWeatherData(city: string) {
    this.weatherApi.getWeatherDataByCity(city).subscribe(
      (data) => {
        this.weatherData = data;
        this.messages = []; 
        this.spinner = false;
      },
      (error) => {
        console.error('Error fetching weather data', error);
        this.messages = [{ severity: 'error', detail: 'Error fetching weather data' }];
        this.spinner = true;
        setTimeout(() => {
          this.messages = []; 
          this.spinner = false;
        }, 3000); 
      }
    );
  }
  
  searchByCity(){
    this.spinner = true;
    const city = this.weatherForm.value.inputCity;
    this.weatherForm.patchValue({ inputCity: '' });
    if (city) {
      this.fetchWeatherData(city);
    }
    
  }
  
}

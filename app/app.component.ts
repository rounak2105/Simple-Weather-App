import { Component } from "@angular/core";
import { PostsService } from "./post-service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  results = false;
  current = "Centigrade";
  retData;
  curTemp;
  maxTemp;
  minTemp;
  lat;
  lon;
  feels;
  curCity;
  constructor(private PostsServiceList: PostsService) {}

  cityName(city) {
    this.curCity = city;
    this.PostsServiceList.getCity(city).subscribe((response: any) => {
      this.retData = JSON.parse(response._body);
      console.log(this.retData.main);
      this.curTemp = this.retData.main.temp;
      this.maxTemp = this.retData.main.temp_min;
      this.minTemp = this.retData.main.temp_max;
      this.feels = this.retData.main.feels_like;
      this.results = true;
    });
  }

  doKelvin(city) {
    this.PostsServiceList.getCityC(city).subscribe((response: any) => {
      this.retData = JSON.parse(response._body);
      console.log(this.retData.main);
      this.curTemp = this.retData.main.temp;
      this.maxTemp = this.retData.main.temp_min;
      this.minTemp = this.retData.main.temp_max;
      this.feels = this.retData.main.feels_like;
      this.results = true;
    });
  }

  changeUnits() {
    if (this.current == "Centigrade") {
      this.current = "Kelvin";
      this.doKelvin(this.curCity);
    } else {
      this.current = "Centigrade";
      this.cityName(this.curCity);
    }
  }
}

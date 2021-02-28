import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class PostsService {
  readonly ROOT_URL;

  constructor(private http: Http) {
    this.ROOT_URL =
      "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=afbd378d5e56caead92b4ff8b9d74372";
  }

  get() {
    return this.http.get(this.ROOT_URL);
  }

  getCity(city) {
    return this.http.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=afbd378d5e56caead92b4ff8b9d74372"
    );
  }

  getCityC(city) {
    return this.http.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&appid=afbd378d5e56caead92b4ff8b9d74372&units=metric"
    );
  }
}

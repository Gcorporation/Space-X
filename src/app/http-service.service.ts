import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  spaceUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }

  public getAll(launchYear,launchSuccess,landSuccess) {
      return this.httpClient.get("https://api.spacexdata.com/v3/launches?limit=100&launch_year=" + launchYear + "&launch_success=" + launchSuccess + "&land_success=" + landSuccess);
  }

  public getSpaceShuttleRecords():Observable<any>{
    return this.httpClient.get(this.spaceUrl).pipe(timeout(40000))
    .pipe(map(res => res));;
  } 
}

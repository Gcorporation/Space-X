import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataFromAPi = [];
  years: Array<string> = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
  year: string = '';
  launchStatus: Array<string> = ["True","False"];
  launch: string = '';
  landingStatus: Array<string> = ["True","False"];
  landing: string = '';
  selectedYearIndex: number = null;
  selectedLaunchIndex: number = null;
  selectedLandStatusIndex: number = null;

  constructor(private httpService: HttpServiceService,private spinner: NgxSpinnerService) {
    this.spinner.show();
   }

  // code to fetch all the records while opening the app for the first time

  ngOnInit(): void {
    this.httpService.get().subscribe((result: any[])=>{
      console.log("result from API -->",result);
      this.dataFromAPi = result;
      this.spinner.hide();
    }) 
  }

  // code to filter the records based on year selected 

  filterYear(year,i) {
    console.log(year);
    console.log(i);
    this.year = year;
    if(this.selectedYearIndex === i) {
      this.selectedYearIndex = null;
      this.year = '';
    } else {
      this.selectedYearIndex = i;
    }
    console.log("this.year -->",this.year);
    console.log("this.launch -->",this.launch);
    console.log("this.landing -->",this.landing);

    this.spinner.show();
    this.httpService.getAll(this.year,this.launch,this.landing).subscribe((result: any[])=>{
      console.log("result from API -->",result);
      this.dataFromAPi = result;
      this.spinner.hide();
    })
  }

  // code to filter records based on launch status

  filterlaunchStatus(launch,i) {
    console.log(launch);
    console.log(i);
    this.launch = launch.toLowerCase();
    if(this.selectedLaunchIndex === i) {
      this.selectedLaunchIndex = null;
      this.launch = '';
    } else {
      this.selectedLaunchIndex = i;
    }
    console.log("this.year -->",this.year);
    console.log("this.launch -->",this.launch);
    console.log("this.landing -->",this.landing);

    this.spinner.show();
    this.httpService.getAll(this.year,this.launch,this.landing).subscribe((result: any[])=>{
      console.log("result from API -->",result);
      this.dataFromAPi = result;
      this.spinner.hide();
    })
  }

  // code to filter records based on landing status
  
  filterlandingStatus(landing,i) {
    console.log(landing);
    console.log(i);
    if(landing === 'True') {
    this.landing = landing.toLowerCase()
    } else {
      this.landing = landing;
    };
    if(this.selectedLandStatusIndex == i) {
      this.selectedLandStatusIndex = null;
      this.landing = '';
    } else {
      this.selectedLandStatusIndex = i;
    }
    console.log("this.year -->",this.year);
    console.log("this.launch -->",this.launch);
    console.log("this.landing -->",this.landing);
    this.spinner.show();
    this.httpService.getAll(this.year,this.launch,this.landing).subscribe((result: any[])=>{
      console.log("result from API -->",result);
      this.dataFromAPi = result;
      this.spinner.hide();
    })
  }

}

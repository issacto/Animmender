import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  li:any;
  lis=[]; 
  names = [];
  searchResult: Array<any> = [];
  searchInput: String = '';

  constructor(private http : HttpClient) { 
    
  }

  fetchSeries(event: any) {
    if (event.target.value === '') {
      return this.searchResult = [];
    }
    this.searchResult = this.names.filter((series) => {
      return series.toLowerCase().startsWith(event.target.value.toLowerCase());
      
    }).slice(0,30)
  }

  ngOnInit(): void {
    let data ='./assets/data/data.json'
    this.http.get(data)
    .subscribe(Response => {
      console.log("HIHIH")
      /*if(Response){  
        hideloader();
      }*/
      Object.keys(Response).map(res=>{
        this.names.push(Response[res].name)
        
      }); 
    });
    /*
    function hideloader(){
      document.getElementById('loading').style.display = 'none';
    }*/
  }
  

}

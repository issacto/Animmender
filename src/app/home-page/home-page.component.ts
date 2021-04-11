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

  constructor(private http : HttpClient) { 
    
  }

  ngOnInit(): void {
    let names = [];
    let data ='./assets/data/data.json'
    this.http.get(data)
    .subscribe(Response => {
      console.log("HIHIH")
      // If response comes hideloader() function is called
      // to hide that loader 
      if(Response){  
        hideloader();
      }
      Object.keys(Response).map(res=>{
        names.push(Response[res].name)
      }); 
    });
    
    function hideloader(){
      document.getElementById('loading').style.display = 'none';
    }
  }
  

}

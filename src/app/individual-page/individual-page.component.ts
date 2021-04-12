import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrls: ['./individual-page.component.css']
})
export class IndividualPageComponent implements OnInit {
  name ="NA"
  allInfo : any
  nameInfo : any
  rankings: any

  constructor(private route: ActivatedRoute,private http : HttpClient) {
    this.nameInfo = "1234"
    
   }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id')
    
    console.log("HEHEHE",this.name)
    let data ='./assets/data/data.json'
    this.http.get(data).toPromise().then(Response => {
      console.log("HIHIH");
      this.allInfo = Response
      this.rankings = this.allInfo.slice(0,100)
      //console.log("here",this.allInfo.slice(0,100))
      //this.ranking = this.allInfo.slice()
      //console.log(this.allInfo);
      let jsonReturned = getAllInformationNeeded(this.allInfo,this.name);
      this.nameInfo = jsonReturned
    });

    function hideloader(){
      document.getElementById('loading').style.display = 'none';
    }

    function getAllInformationNeeded(info,name){
      for(var i of info ){
        //console.log(i.name);
        //console.log(name);
        //console.log(JSON.parse(i));
        if(i.name == name){
            console.log(i)
            console.log(typeof i.name) 
            return i
        }
      }
      return {}
    }
  }

}

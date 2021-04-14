import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.css']
})
export class TypePageComponent implements OnInit {
  allInfo : any;
  requiredInfo: any;
  genres : any;
  constructor(private route: ActivatedRoute,private router: Router,private http : HttpClient) { }

  ngOnInit(): void {
    this.genres = this.route.snapshot.paramMap.get('id')
    this.route.params.subscribe(val => {
      this.genres = this.route.snapshot.paramMap.get('id')
      console.log("HEHEHE",this.genres)
      let data ='./assets/data/data.json'
      this.http.get(data).toPromise().then(Response => {
        console.log("HIHIH");
        this.allInfo = Response
        this.requiredInfo = getAllInformationNeeded(this.allInfo,this.genres).slice(0,200);
      });
    })

    function getAllInformationNeeded(animes,genres){
      var returnArray =[]
      for(var anime of animes ){
        //console.log(i.name);
        //console.log(name);
        console.log("this.type.genre");
        console.log(genres);
        if(anime.genre.includes(genres) ){
            returnArray.push(anime)
        }
      }
      return returnArray;
    }
    
  }
  navigate(name){
    this.router.navigate(['/individualpage', name])
  }
}

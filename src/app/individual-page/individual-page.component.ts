import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  recommendations:any
  isReady= true

  constructor(private route: ActivatedRoute,private router: Router,private http : HttpClient) {

    this.isReady= true
  }
   

  ngOnInit(): void {
    
    this.route.params.subscribe(val => {
        console.log("Hi mother")
       
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
          this.recommendations = getRecommendations(this.nameInfo,this.allInfo);
          console.log("isready",this.isReady)
          this.isReady=false
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
        function getRecommendations(selectedAnime,animes){
          var returnArray =[]
          for(var anime of animes ){
            var similarValues= getSimilarValues(selectedAnime.genre,anime.genre)
            if(similarValues>0){
              if(anime.name!=selectedAnime.name ){
                returnArray.push([anime,similarValues])
              }
            }
            returnArray.sort(function(a,b){return a[1] - b[1]});
            returnArray.reverse();
    
          }
          return returnArray.slice(0,100)
        }
        function getSimilarValues(selectedAnimeGenres,animeGenres){
          var i = 0;
          for(var genre of selectedAnimeGenres){
            if(animeGenres.includes(genre)){
              i+=1;
            }
            else{
              i-=0.5
            }
          }
          return i 
        }
       
    })
    
   }
   setIsNoReady(){
     this.isReady=true
     console.log("not ready",this.isReady)
   }
   navigate(name){
    this.router.navigate(['/individualpage',name]).then(()=>window.location.reload());

   }
  

}
